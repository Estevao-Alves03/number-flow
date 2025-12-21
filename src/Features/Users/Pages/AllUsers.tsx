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
    <div className="px-44 pb-10">
      {/* CARD USUÁRIOS */}
      <Card className="mt-8 rounded-2xl border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-white">
            <FaUserGroup />
            Usuários cadastrados
          </CardTitle>
          <CardDescription className="text-lg">
            Gerencie os usuários e suas permissões
          </CardDescription>
        </CardHeader>

        <hr className="my-4 border-blue-700/30" />

        <CardContent>
          <Card className="mx-6 mb-4 mt-8 rounded-2xl bg-slate-900/35 border border-zinc-500/55 py-6 px-6">
            <div className="flex justify-between items-center">
              {/* PERFIL */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-600" />
                <div>
                  <h1 className="flex items-center gap-2 text-xl font-bold text-white">
                    Estevão
                    <span className="text-xs bg-green-900 border border-green-400 text-green-300 rounded-full px-2">
                      ativo
                    </span>
                  </h1>
                  <p className="text-sm text-zinc-400">oalvestech@gmail.com</p>
                </div>
              </div>

              {/* PERMISSÃO + AÇÕES */}
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <span className="inline-block text-sm font-semibold bg-purple-800 border border-purple-400 text-purple-300 rounded-full px-3">
                    Administrador
                  </span>
                  <p className="text-sm text-zinc-400 mt-1">
                    Acesso total ao sistema
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className=" bg-slate-900/35 border border-zinc-500/55 w-12 h-12">
                    <FaPen className="text-blue-400"/>
                  </Button>

                  {/* ativo / inativo */}
                  <Button variant="outline" className=" bg-slate-900/35 border border-zinc-500/55 w-12 h-12">
                    <RiWifiFill className="text-green-400" />
                    {/* <RiWifiOffFill className="text-red-400" /> */}
                  </Button>

                  <Button variant="outline" className=" bg-slate-900/35 border border-zinc-500/55 w-12 h-12">
                    <HiOutlineTrash className="text-red-400" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          <Card className="mx-6 mb-4 mt-4 rounded-2xl bg-slate-900/35 border border-zinc-500/55 py-6 px-6">
            <div className="flex justify-between items-center">
              {/* PERFIL */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-600" />
                <div>
                  <h1 className="flex items-center gap-2 text-xl font-bold text-white">
                    Rayck
                    <span className="text-xs bg-green-900 border border-green-400 text-green-300 rounded-full px-2">
                      ativo
                    </span>
                  </h1>
                  <p className="text-sm text-zinc-400">rayck@gmail.com</p>
                </div>
              </div>

              {/* PERMISSÃO + AÇÕES */}
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <span className="inline-block text-sm font-semibold bg-blue-800 border border-blue-400 text-blue-300 rounded-full px-3">
                    Implantação
                  </span>
                  <p className="text-sm text-zinc-400 mt-1">
                    Acesso a dashboard e Implantação
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className=" bg-slate-900/35 border border-zinc-500/55 w-12 h-12">
                    <FaPen className="text-blue-400"/>
                  </Button>

                  {/* ativo / inativo */}
                  <Button variant="outline" className=" bg-slate-900/35 border border-zinc-500/55 w-12 h-12">
                    <RiWifiFill className="text-green-400" />
                    {/* <RiWifiOffFill className="text-red-400" /> */}
                  </Button>

                  <Button variant="outline" className=" bg-slate-900/35 border border-zinc-500/55 w-12 h-12">
                    <HiOutlineTrash className="text-red-400" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          <Card className="mx-6 mb-4 mt-4 rounded-2xl bg-slate-900/35 border border-zinc-500/55 py-6 px-6">
            <div className="flex justify-between items-center">
              {/* PERFIL */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-600" />
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
                  <span className="inline-block text-sm font-semibold bg-green-800 border border-green-400 text-green-300 rounded-full px-3">
                    Feedback - CS
                  </span>
                  <p className="text-sm text-zinc-400 mt-1">
                    Acesso a dashboard e feedback
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className=" bg-slate-900/35 border border-zinc-500/55 w-12 h-12">
                    <FaPen className="text-blue-400"/>
                  </Button>

                  {/* ativo / inativo */}
                  <Button variant="outline" className=" bg-slate-900/35 border border-zinc-500/55 w-12 h-12">
                    <RiWifiFill className="text-green-400" />
                    {/* <RiWifiOffFill className="text-red-400" /> */}
                  </Button>

                  <Button variant="outline" className=" bg-slate-900/35 border border-zinc-500/55 w-12 h-12">
                    <HiOutlineTrash className="text-red-400" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
