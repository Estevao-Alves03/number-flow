import { IoFlashSharp } from "react-icons/io5";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Input } from "../../../components/ui/input";

export default function AddGym() {
  return (
    <div className="px-44 pb-10">
      <Card className="border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 border rounded-xl">
        <CardHeader className="flex justify-center">
          <CardTitle className="text-white flex items-center gap-2">
            <IoFlashSharp className="text-yellow-500 text-3xl" />
            <span className="text-2xl">
              Cadastro Rápido: Gymbot e Music Fit
            </span>
          </CardTitle>
        </CardHeader>

        <hr className="mb-4 border-blue-700/30" />
        <CardContent className="grid grid-cols-5 gap-3 mt-9">
          {/* Categoria */}
          <section>
            <h1 className="text-zinc-400 text-lg mb-2">Tipo</h1>
            <Select defaultValue="gymbot">
              <SelectTrigger className="w-[280px] bg-slate-900/50 border border-blue-700/40 text-zinc-100 font-bold">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white text-zinc-950">
                <SelectGroup>
                  <SelectItem
                    value="gymbot"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold"
                  >
                    Gymbot (R$ 40,00)
                  </SelectItem>
                  <SelectItem
                    value="musicfit"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold"
                  >
                    Music Fit (R$ 15,00)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </section>
          {/* Academia */}
          <section className="">
            <h1 className="text-zinc-400 text-lg mb-2">Nome da Academia</h1>
            <Input
              placeholder="Digite o nome aqui"
              className="bg-slate-900/50 border border-blue-700/40 text-zinc-100 font-bold"
            />
          </section>
          {/* CNPJ */}
          <section className="">
            <h1 className="text-zinc-400 text-lg mb-2">CNPJ</h1>
            <Input
              placeholder="00.000.000/0000-00"
              className="bg-slate-900/50 border border-blue-700/40 text-zinc-100 font-bold"
            />
          </section>
          {/* Nota */}
          <section className="">
            <h1 className="text-zinc-400 text-lg mb-2">Nota (Opcional)</h1>
            <Input
              placeholder="1-10"
              className="bg-slate-900/50 border border-blue-700/40 text-zinc-100 font-bold"
            />
          </section>
          {/* Botao */}
          <section className="flex items-end justify-end">
            <Button className="w-[280px] bg-amber-700 hover:bg-amber-800 text-white font-medium">
              Concluir
            </Button>
          </section>
        </CardContent>
        {/* notificaçao */}
        <div className="mx-6 mb-6 mt-2 border border-amber-700/40 bg-amber-900/20 rounded-xl px-6 py-4">
          <h1 className="text-amber-300 font-medium">
            Cadastro simplificado: Apenas nome e CNPJ são necessários. A nota
            pode ser adicionada depois!
          </h1>
        </div>
      </Card>
    </div>
  );
}
