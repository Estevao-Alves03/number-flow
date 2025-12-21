import { MdOutlineMail } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FiShield } from "react-icons/fi";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export function AddUser() {
  return (
    <div className="px-44">
      {/* CARD CADASTRO */}
      <Card className="rounded-2xl border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-white">
            <MdOutlineMail className="text-blue-500" />
            Cadastrar Novo Usuário
          </CardTitle>
          <CardDescription className="text-lg">
            O usuário receberá um convite por email para acessar o sistema
          </CardDescription>
        </CardHeader>

        <hr className="my-4 border-blue-700/30" />

        <CardContent className="pt-8">
          <div className="grid grid-cols-4 gap-4 text-zinc-100">
            <div className="space-y-2">
              <Label>Nome completo</Label>
              <Input
                placeholder="João Silva"
                className="border border-zinc-600"
              />
            </div>

            <div className="space-y-2">
              <Label>E-mail</Label>
              <Input
                placeholder="email@empresa.com"
                className="border border-zinc-600"
              />
            </div>

            <div className="space-y-2">
              <Label>Tipo de acesso</Label>
              <Select>
                <SelectTrigger className="w-[180px] border border-zinc-600">
                  <SelectValue placeholder="Administrador" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 text-zinc-200">
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="implantation">Implantação</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-gradient-to-r from-blue-800 via-purple-600/50 to-purple-950">
                <FaUserGroup className="mr-2" />
                Enviar convite
              </Button>
            </div>
          </div>
        </CardContent>

        {/* PERMISSÕES */}
        <CardContent className="mx-6 mb-6 rounded-2xl bg-slate-900/30 border border-zinc-500/55 py-6">
          <div className="flex items-center gap-3 mb-4">
            <FiShield className="text-blue-600 text-2xl" />
            <span className="text-xl text-white">
              Permissões por Tipo de Acesso
            </span>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <h1 className="text-purple-500 font-bold text-lg">
                Administrador
              </h1>
              <p className="text-zinc-400">Acesso total ao sistema</p>
            </div>

            <div>
              <h1 className="text-blue-500 font-bold text-lg">Implantação</h1>
              <p className="text-zinc-400">Dashboard + Implantação</p>
            </div>

            <div>
              <h1 className="text-green-500 font-bold text-lg">Feedback CS</h1>
              <p className="text-zinc-400">Dashboard + Feedback</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
