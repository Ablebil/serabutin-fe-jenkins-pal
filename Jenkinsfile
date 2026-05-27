pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'ablebil/serabutin-fe-jenkins-pal'
        IMAGE_TAG = "prod-${env.BUILD_NUMBER}"
    }

    triggers {
        githubPush()
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    docker run --rm \
                        -v "$PWD":/app \
                        -w /app \
                        node:24-alpine \
                        npm ci
                '''
            }
        }

        stage('Lint') {
            steps {
                sh '''
                    docker run --rm \
                        -v "$PWD":/app \
                        -w /app \
                        node:24-alpine \
                        npm run lint
                '''
            }
        }

        stage('Build Frontend') {
            steps {
                sh '''
                    docker run --rm \
                        -v "$PWD":/app \
                        -w /app \
                        node:24-alpine \
                        npm run build
                '''
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                            -u "$DOCKER_USERNAME" \
                            --password-stdin
                    '''
                }
            }
        }

        stage('Build Image') {
            steps {
                sh '''
                    docker build \
                        -t $DOCKER_IMAGE:$IMAGE_TAG \
                        -t $DOCKER_IMAGE:latest \
                        .
                '''
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                    docker push $DOCKER_IMAGE:$IMAGE_TAG
                    docker push $DOCKER_IMAGE:latest
                '''
            }
        }

        stage('Copy Compose Files') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'prod-ssh',
                        keyFileVariable: 'SSH_KEY',
                        usernameVariable: 'SSH_USER'
                    ),
                    string(credentialsId: 'PROD_SSH_HOST', variable: 'SSH_HOST'),
                    string(credentialsId: 'PROD_SSH_PORT', variable: 'SSH_PORT')
                ]) {
                    sh '''
                        ssh -i $SSH_KEY -p $SSH_PORT \
                            -o StrictHostKeyChecking=no \
                            $SSH_USER@$SSH_HOST \
                            "mkdir -p ~/serabutin-fe"

                        scp -i $SSH_KEY -P $SSH_PORT \
                            -o StrictHostKeyChecking=no \
                            docker-compose.prod.yaml \
                            $SSH_USER@$SSH_HOST:~/serabutin-fe/
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'prod-ssh',
                        keyFileVariable: 'SSH_KEY',
                        usernameVariable: 'SSH_USER'
                    ),
                    string(credentialsId: 'PROD_SSH_HOST', variable: 'SSH_HOST'),
                    string(credentialsId: 'PROD_SSH_PORT', variable: 'SSH_PORT')
                ]) {
                    sh '''
                        ssh -i $SSH_KEY -p $SSH_PORT \
                            -o StrictHostKeyChecking=no \
                            $SSH_USER@$SSH_HOST << EOF

                            set -e

                            cd ~/serabutin-fe

                            export DOCKER_IMAGE=$DOCKER_IMAGE
                            export DOCKER_TAG=$IMAGE_TAG

                            docker compose -f docker-compose.prod.yaml pull

                            docker compose -f docker-compose.prod.yaml up -d --remove-orphans

                            docker image prune -f

EOF
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
