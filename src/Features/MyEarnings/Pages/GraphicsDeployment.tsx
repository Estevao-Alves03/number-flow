import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { TbMessageCircle, TbMusic } from "react-icons/tb";
import { RiRobot2Line } from "react-icons/ri";

export default function GraphicsDeployment() {
  return (
    <div className="px-44 pb-10">
      <div className="grid grid-cols-3 gap-8">
        {/* conversas ai */}
        <Card className="border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
          <CardHeader className="flex justify-center">
            <CardTitle className="text-white flex items-center gap-2">
              <TbMessageCircle className="text-green-500 text-3xl" />
              <span className="text-2xl">Conversas AI</span>
            </CardTitle>
          </CardHeader>

          <hr className="mb-4 border-blue-700/30" />

          <CardContent className="pt-6">
            <div className="grid grid-rows-3 gap-6">
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">Valor Base</h1>
                <span className="text-white text-2xl font-bold">R$ 50,00</span>
              </section>
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">
                  Total realizados
                </h1>
                <span className="text-white text-2xl font-bold">0</span>
              </section>
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">
                  Alta avaliação
                </h1>
                <span className="text-white text-2xl font-bold">0</span>
              </section>
            </div>
            <hr className="my-4 border-zinc-700/70 mt-9" />
            <div>
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">
                  Ganho total
                </h1>
                <span className="text-green-500 text-2xl font-bold">
                  R$ 00,00
                </span>
              </section>
            </div>
          </CardContent>
        </Card>

        {/* gymbot */}
        <Card className="border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
          <CardHeader className="flex justify-center">
            <CardTitle className="text-white flex items-center gap-2">
              <RiRobot2Line className="text-blue-600 text-3xl" />
              <span className="text-2xl">Gymbot</span>
            </CardTitle>
          </CardHeader>

          <hr className="mb-4 border-blue-700/30" />

          <CardContent className="pt-6">
            <div className="grid grid-rows-3 gap-6">
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">Valor Base</h1>
                <span className="text-white text-2xl font-bold">R$ 40,00</span>
              </section>
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">
                  Total realizados
                </h1>
                <span className="text-white text-2xl font-bold">0</span>
              </section>
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">
                  Alta avaliação
                </h1>
                <span className="text-white text-2xl font-bold">0</span>
              </section>
            </div>
            <hr className="my-4 border-zinc-700/70 mt-9" />
            <div>
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">
                  Ganho total
                </h1>
                <span className="text-green-500 text-2xl font-bold">
                  R$ 00,00
                </span>
              </section>
            </div>
          </CardContent>
        </Card>

        {/* music fit */}
        <Card className="border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
          <CardHeader className="flex justify-center">
            <CardTitle className="text-white flex items-center gap-2">
              <TbMusic className="text-purple-600 text-3xl" />
              <span className="text-2xl">Music Fit</span>
            </CardTitle>
          </CardHeader>

          <hr className="mb-4 border-blue-700/30" />

          <CardContent className="pt-6">
            <div className="grid grid-rows-3 gap-6">
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">Valor Base</h1>
                <span className="text-white text-2xl font-bold">R$ 15,00</span>
              </section>
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">
                  Total realizados
                </h1>
                <span className="text-white text-2xl font-bold">0</span>
              </section>
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">
                  Alta avaliação
                </h1>
                <span className="text-white text-2xl font-bold">0</span>
              </section>
            </div>
            <hr className="my-4 border-zinc-700/70 mt-9"/>
            <div>
              <section className="flex justify-between">
                <h1 className="text-zinc-500 text-xl font-serif">
                  Ganho total
                </h1>
                <span className="text-green-500 text-2xl font-bold">
                  R$ 00,00
                </span>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
