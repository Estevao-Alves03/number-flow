import { MdOutlineMail } from "react-icons/md";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";

export function AddUser() {
  return (
    <div className="px-44">
      <Card className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-blue-700/20 divide-y divide-slate-700">
        {/* titulo e subtitulo */}
        <CardHeader className="">
          <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-white">
            <MdOutlineMail className="text-2xl text-blue-500" />
            Cadastrar Novo Usuário
          </CardTitle>
          <CardDescription className="text-lg">
            O usuário receberá um convite por email para acessar o sistema
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="grid grid-cols-4 gap-4">
            {/* nome */}
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input placeholder="João Silva" />
            </div>
            {/* email */}
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input placeholder="seu@emailcorporativo.com" />
            </div>
            {/* regra de acesso */}
            <div className="space-y-2">
              <Label htmlFor="role">Tipo de Acesso</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="administrator" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="administrator">Administrador</SelectItem>
                  <SelectItem value="implantation">Implantação</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* botao de envio */}
            <div className="flex items-end">
              <Button className="w-full">Enviar convite</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
