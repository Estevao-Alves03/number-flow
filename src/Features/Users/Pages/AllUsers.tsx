import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { FaPen, FaUserGroup } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi";
import { RiWifiFill, RiWifiOffFill } from "react-icons/ri";

export default function AllUsers() {
  return (
    <div className="px-44 pb-24">
      {/* CARD USUÁRIOS */}
      <Card className="mt-8 rounded-2xl border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-white">
            <FaUserGroup />
            Usuários cadastrados (6)
          </CardTitle>
          <CardDescription className="text-lg">
            Gerencie os usuários e suas permissões
          </CardDescription>
        </CardHeader>

        <hr className="my-4 border-blue-700/30" />

        <CardContent>
          <div className="max-h-[450px] overflow-y-auto">
            <Card className="mr-6 mb-4 mt-8 rounded-2xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 py-6 px-6">
              <div className="flex justify-between items-center">
                {/* PERFIL */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 via-violet-600 flex items-center justify-center text-white font-bold">E</div>
                  <div>
                    <h1 className="flex items-center gap-2 text-xl font-bold text-white">
                      Estevão
                      <span className="text-xs bg-green-900 border border-green-400 text-green-300 rounded-full px-2">
                        ativo
                      </span>
                    </h1>
                    <p className="text-sm text-zinc-400">
                      oalvestech@gmail.com
                    </p>
                  </div>
                </div>

                {/* PERMISSÃO + AÇÕES */}
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="inline-block text-sm font-semibold bg-purple-950 border border-purple-500 text-purple-100 rounded-full px-3">
                      Administrador(a)
                    </span>
                    <p className="text-sm text-zinc-400 mt-1">
                      Controle total do sistema e gestão de usuários
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Editar"
                    >
                      <FaPen className="text-blue-400" />
                    </Button>

                    {/* ativo / inativo */}
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Ativar/Desativar"
                    >
                      <RiWifiFill className="text-green-400" />
                      {/* <RiWifiOffFill className="text-red-400" /> */}
                    </Button>

                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Apagar conta"
                    >
                      <HiOutlineTrash className="text-red-400" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="mr-6 mb-4 rounded-2xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 py-6 px-6">
              <div className="flex justify-between items-center">
                {/* PERFIL */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 via-violet-600 text-white font-bold flex items-center justify-center">J</div>
                  <div>
                    <h1 className="flex items-center gap-2 text-xl font-bold text-white">
                      Júlia
                      <span className="text-xs bg-green-900 border border-green-400 text-green-300 rounded-full px-2">
                        ativo
                      </span>
                    </h1>
                    <p className="text-sm text-zinc-400">julia@gmail.com</p>
                  </div>
                </div>

                {/* PERMISSÃO + AÇÕES */}
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="inline-block text-sm font-semibold bg-teal-950 border border-teal-500 text-teal-100 rounded-full px-3">
                      Auditor(a)
                    </span>
                    <p className="text-sm text-zinc-400 mt-1">
                      Visualização completa e exportação de dados
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Editar"
                    >
                      <FaPen className="text-blue-400" />
                    </Button>

                    {/* ativo / inativo */}
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Ativar/Desativar"
                    >
                      <RiWifiFill className="text-green-400" />
                      {/* <RiWifiOffFill className="text-red-400" /> */}
                    </Button>

                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Apagar conta"
                    >
                      <HiOutlineTrash className="text-red-400" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="mr-6 mb-4 mt-4 rounded-2xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 py-6 px-6">
              <div className="flex justify-between items-center">
                {/* PERFIL */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-600 flex items-center justify-center text-white font-bold">R</div>
                  <div>
                    <h1 className="flex items-center gap-2 text-xl font-bold text-white">
                      Rayck
                      <span className="text-xs bg-zinc-900 border border-zinc-400 text-zinc-300 rounded-full px-2">
                        inativo
                      </span>
                    </h1>
                    <p className="text-sm text-zinc-400">rayck@gmail.com</p>
                  </div>
                </div>

                {/* PERMISSÃO + AÇÕES */}
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="inline-block text-sm font-semibold bg-blue-950 border border-blue-500 text-blue-100 rounded-full px-3">
                      Implantação
                    </span>
                    <p className="text-sm text-zinc-400 mt-1">
                      Acesso ao dashboard e processos de implantação
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Editar"
                    >
                      <FaPen className="text-blue-400" />
                    </Button>

                    {/* ativo / inativo */}
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Ativar/Desativar"
                    >
                      <RiWifiFill className="text-green-400" />
                      {/* <RiWifiOffFill className="text-red-400" /> */}
                    </Button>

                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Apagar conta"
                    >
                      <HiOutlineTrash className="text-red-400" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="mr-6 mb-4 mt-4 rounded-2xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 py-6 px-6">
              <div className="flex justify-between items-center">
                {/* PERFIL */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-600 flex items-center justify-center text-white font-bold">E</div>
                  <div>
                    <h1 className="flex items-center gap-2 text-xl font-bold text-white">
                      Ellias
                      <span className="text-xs bg-zinc-900 border border-zinc-400 text-zinc-300 rounded-full px-2">
                        inativo
                      </span>
                    </h1>
                    <p className="text-sm text-zinc-400">ellias@gmail.com</p>
                  </div>
                </div>

                {/* PERMISSÃO + AÇÕES */}
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="inline-block text-sm font-semibold bg-blue-950 border border-blue-500 text-blue-100 rounded-full px-3">
                      Implantação
                    </span>
                    <p className="text-sm text-zinc-400 mt-1">
                      Acesso ao dashboard e processos de implantação
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Editar"
                    >
                      <FaPen className="text-blue-400" />
                    </Button>

                    {/* ativo / inativo */}
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Ativar/Desativar"
                    >
                      <RiWifiFill className="text-green-400" />
                      {/* <RiWifiOffFill className="text-red-400" /> */}
                    </Button>

                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Apagar conta"
                    >
                      <HiOutlineTrash className="text-red-400" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="mr-6 mb-4 mt-4 rounded-2xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 py-6 px-6">
              <div className="flex justify-between items-center">
                {/* PERFIL */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-600 flex items-center justify-center text-white font-bold">J</div>
                  <div>
                    <h1 className="flex items-center gap-2 text-xl font-bold text-white">
                      Joao
                      <span className="text-xs bg-zinc-900 border border-zinc-400 text-zinc-300 rounded-full px-2">
                        inativo
                      </span>
                    </h1>
                    <p className="text-sm text-zinc-400">joao@gmail.com</p>
                  </div>
                </div>

                {/* PERMISSÃO + AÇÕES */}
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="inline-block text-sm font-semibold bg-blue-950 border border-blue-500 text-blue-100 rounded-full px-3">
                      Implantação
                    </span>
                    <p className="text-sm text-zinc-400 mt-1">
                      Acesso ao dashboard e processos de implantação
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Editar"
                    >
                      <FaPen className="text-blue-400" />
                    </Button>

                    {/* ativo / inativo */}
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Ativar/Desativar"
                    >
                      <RiWifiFill className="text-green-400" />
                      {/* <RiWifiOffFill className="text-red-400" /> */}
                    </Button>

                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Apagar conta"
                    >
                      <HiOutlineTrash className="text-red-400" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="mr-6 mb-4 mt-4 rounded-2xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 py-6 px-6">
              <div className="flex justify-between items-center">
                {/* PERFIL */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 via-violet-600 flex items-center justify-center text-white font-bold">C</div>
                  <div>
                    <h1 className="flex items-center gap-2 text-xl font-bold text-white">
                      Cassia
                      <span className="text-xs bg-green-900 border border-green-400 text-green-300 rounded-full px-2">
                        ativo
                      </span>
                    </h1>
                    <p className="text-sm text-zinc-400">cassia@gmail.com</p>
                  </div>
                </div>

                {/* PERMISSÃO + AÇÕES */}
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="inline-block text-sm font-semibold bg-green-950 border border-green-500 text-green-100 rounded-full px-3">
                      Feedback - CS
                    </span>
                    <p className="text-sm text-zinc-400 mt-1">
                      Acesso ao dashboard e gestão de feedbacks
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Editar"
                    >
                      <FaPen className="text-blue-400" />
                    </Button>

                    {/* ativo / inativo */}
                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Ativar/Desativar"
                    >
                      <RiWifiFill className="text-green-400" />
                      {/* <RiWifiOffFill className="text-red-400" /> */}
                    </Button>

                    <Button
                      variant="outline"
                      className=" bg-slate-900/35 hover:bg-slate-800/70 border border-zinc-500/55 w-12 h-12"
                      title="Apagar conta"
                    >
                      <HiOutlineTrash className="text-red-400" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
