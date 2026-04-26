import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router";

export default function LoginForm() {
  return (
    <Card className="w-full max-w-110 p-5 sm:p-9.25 flex flex-col ">
      <CardHeader className="text-center p-0!">
        <CardTitle className="flex flex-col gap-3">
          {/* title */}
          <header className="w-full">
            <h1 className="text-xl sm:text-[26px] tracking-[3.64px] font-inter font-bold text-foreground">
              Masuk
            </h1>
            <p className="font-normal">Masuk ke akun anda</p>
          </header>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0!">
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel
                icon={<Mail size={16} />}
                htmlFor="email"
              >
                Email
              </FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="contoh@email.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel
                icon={<LockKeyhole size={16} />}
                htmlFor="password"
              >
                Password
              </FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="Minimal 8 karakter"
                required
              />
            </Field>

            <FieldSeparator />

            <Field>
              <Button size={"lg"} type="submit">Masuk</Button>
              <FieldDescription className="text-center">
                Belum punya akun?{" "} <Link to="/register" className="text-primary font-semibold no-underline!">Registrasi</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
