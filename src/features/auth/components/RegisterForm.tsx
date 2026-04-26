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
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { LockKeyhole, Mail, UserRound } from "lucide-react";
import { Link } from "react-router";

export default function RegisterForm() {
  return (
    <Card className="w-full h-full sm:h-fit max-w-110 p-5 pt-16 sm:p-9.25 flex flex-col ">
      <CardHeader className="text-center p-0!">
        <CardTitle className="flex flex-col gap-3">
          {/* title */}
          <header className="w-full">
            <h1 className="text-xl sm:text-[26px] tracking-[3.64px] font-inter font-bold text-foreground">
              Registrasi
            </h1>
            <p className="font-normal">Buat akun baru dan mulai sekarang</p>
          </header>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0!">
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel className="uppercase text-secondary-foreground">
                Pilih Peran
              </FieldLabel>
              <Tabs defaultValue="client">
                <TabsList className="w-full">
                  <TabsTrigger value="client">Klien</TabsTrigger>
                  <TabsTrigger value="worker">Pekerja</TabsTrigger>
                </TabsList>
              </Tabs>
            </Field>
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
                icon={<UserRound size={16} />}
                htmlFor="username"
              >
                Nama Pengguna
              </FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="Nama pengguna"
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
              <Button size={"lg"} type="submit">Daftar Sekarang</Button>
              <FieldDescription className="text-center">
                Sudah punya akun?{" "} <Link to="/login" className="text-primary font-semibold no-underline!">Masuk</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
