import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginAdminPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>Bem-vindo!</CardTitle>
          <CardDescription>
            Insira suas credenciais para acessar a plataforma.
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="login">Email</Label>
            <Input id="login" type="email" autoComplete="off" />
          </CardContent>
          <CardContent className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" autoComplete="off"/>
          </CardContent>
          <CardContent className="flex w-full justify-end">
            <Button type="submit" >Entrar</Button>
          </CardContent>
        </form>
      </Card>
    </main>
  );
}
