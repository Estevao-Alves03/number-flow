import { FiShield } from "react-icons/fi";
import { Button } from "../components/ui/button";

export function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="relative w-[760px] h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-blue-900/30 flex">

        {/* LADO ESQUERDO */}
        <div className="w-1/2 relative bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
          <div className="absolute inset-0 clip-left" />
          <div className="relative z-10 p-10 h-full flex flex-col justify-center gap-4">
            <FiShield className="text-5xl text-blue-200" />
            <h1 className="text-4xl font-extrabold text-white">
              Bem-vindo
            </h1>
            <p className="text-zinc-300 text-base font-medium leading-relaxed">
              Acesse o GymFlow e gerencie implantações, clientes e feedbacks
              de forma centralizada.
            </p>
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-slate-950">
          <h2 className="text-3xl font-bold text-white mb-6">
            Login
          </h2>

          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm text-zinc-400 font-medium">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-md px-3 py-2 bg-slate-900 border border-blue-900/40 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-zinc-400 font-medium">
                Senha
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md px-3 py-2 bg-slate-900 border border-blue-900/40 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            <Button className="w-full !mt-10 bg-gradient-to-r from-blue-700 to-indigo-700 font-bold text-lg shadow-lg hover:opacity-90">
              Entrar
            </Button>
          </form>
        </div>
      </div>

      {/* CLIP DIAGONAL */}
      <style>{`
        .clip-left {
          background: linear-gradient(
            to bottom right,
            rgba(0,0,0,0.25),
            rgba(0,0,0,0.65)
          );
          clip-path: polygon(0 0, 100% 0, 78% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}
