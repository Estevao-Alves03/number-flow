import { FiShield } from "react-icons/fi";
import { IoLogInOutline } from "react-icons/io5";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 ">
      {/* Ícone */}
      <section className="rounded-xl p-5 bg-gradient-to-br from-blue-700 via-violet-700 to-violet-800 shadow-lg">
        <FiShield className="text-4xl text-white" />
      </section>

      {/* Título */}
      <section className="text-center space-y-1">
        <h1 className="text-4xl font-extrabold text-white">
          Gestão · GymFlow
        </h1>
        <p className="text-sm text-zinc-300">
          Faça login para acessar a plataforma
        </p>
      </section>

      {/* Card */}
      <Card className="w-[360px] bg-slate-900 border-zinc-700">
        <CardHeader className="space-y-2">
          <CardTitle className="flex items-center gap-2 text-white text-xl">
            <IoLogInOutline className="text-3xl text-blue-500" />
            Login
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Entre com suas credenciais de acesso
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-zinc-400">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-lg px-3 py-2 bg-slate-800 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-zinc-400">
                Senha
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg px-3 py-2 bg-slate-800 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

             <Button className="bg-gradient-to-br from-blue-700 via-violet-700 to-violet-800 shadow-lg w-full font-bold text-lg">
                Entrar
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <hr className="w-full border-zinc-700" />
          <p className="text-xs text-zinc-400 text-center">
            Não possui acesso? Entre em contato com o administrador
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
