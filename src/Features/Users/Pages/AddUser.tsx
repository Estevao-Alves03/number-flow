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

export default function AddUser() {
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
          <div className="grid grid-cols-4 gap-4 text-zinc-100 ">
            <div className="space-y-2">
              <Label className="text-lg font-bold">Nome completo</Label>
              <Input
              placeholder="Digite o nome"
              className="h-[50px] bg-slate-950/10 border border-blue-700/40 text-zinc-100 rounded-lg !text-base font-bold placeholder:text-base"
            />
            </div>

            <div className="space-y-2">
              <Label className="text-lg font-bold">E-mail</Label>
               <Input
              placeholder="Digite o e-mail"
              className="h-[50px] bg-slate-950/10 border border-blue-700/40 text-zinc-100 rounded-lg !text-base font-bold placeholder:text-base"
            />
            </div>

            <div className="space-y-2">
              <Label className="text-lg font-bold">Tipo de acesso</Label>
              <Select>
                <SelectTrigger className="w-[280px] h-[50px] bg-slate-900/500 border border-blue-700/40 text-zinc-100 rounded-lg text-base font-bold">
                  <SelectValue placeholder="Escolha a permissão" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="admin"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Administrador 
                  </SelectItem>
                  <SelectItem
                    value="auditor"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Auditor
                  </SelectItem>
                  <SelectItem
                    value="implantation"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Implantação
                  </SelectItem>
                  <SelectItem
                    value="feedback"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Feedback
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full h-[50px] font-bold text-base bg-gradient-to-r from-blue-800 via-purple-600/50 to-purple-950">
                <FaUserGroup className="mr-2" />
                Cadastrar Usuário
              </Button>
            </div>
          </div>
        </CardContent>

        {/* PERMISSÕES */}
        <CardContent className="mx-6 mb-6 rounded-2xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 py-6">
          <div className="flex items-center gap-3 mb-4">
            <FiShield className="text-blue-600 text-2xl" />
            <span className="text-xl text-white font-bold">
              Permissões por Tipo de Acesso
            </span>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div>
              <h1 className="text-purple-600 font-bold text-lg">
                Administrador
              </h1>
              <p className="text-zinc-400">
                Controle total do sistema e gestão de usuários
              </p>
            </div>

            <div>
              <h1 className="text-teal-600 font-bold text-lg">Auditor</h1>
              <p className="text-zinc-400">
                Visualização completa e exportação de dados
              </p>
            </div>

            <div>
              <h1 className="text-blue-600 font-bold text-lg">Implantação</h1>
              <p className="text-zinc-400">
                Acesso ao dashboard e processos de implantação
              </p>
            </div>

            <div>
              <h1 className="text-green-600 font-bold text-lg">Feedback CS</h1>
              <p className="text-zinc-400">
                Acesso ao dashboard e gestão de feedbacks
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
