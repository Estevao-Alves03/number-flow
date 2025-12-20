import { Button } from "../components/ui/button";
import { LiaStarSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { FiChevronsDown, FiChevronsUp, FiRefreshCcw } from "react-icons/fi";

export function CrmFeedback() {
  return (
    <div className="px-44 pb-16">
      <Tabs defaultValue="pending" className="w-full">
        {/* Tabs (largura controlada) */}
        <TabsList className="grid !w-[630px] grid-cols-3 !h-12 rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 p-1">
          <TabsTrigger
            value="pending"
            className="h-full rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white"
          >
            Pendentes (0)
          </TabsTrigger>

          <TabsTrigger
            value="progress"
            className="h-full rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white"
          >
            Em progresso (0)
          </TabsTrigger>

          <TabsTrigger
            value="completed"
            className="h-full rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white"
          >
            Concluídas (0)
          </TabsTrigger>
        </TabsList>

        {/* Conteúdo em largura total */}
        <TabsContent value="pending" className="mt-6 w-full">
          {/* academia que deve mandar mensagem no dia*/}
          <div className="w-full mb-4 rounded-xl bg-white p-6 border-4 border-violet-600/90 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
            {/* nome da academia e botao de interaçao */}
            <div className="text-white flex items-center justify-between px-4 pb-2">
              <h1 className="text-3xl font-bold flex gap-3">
                Acad Acuas Fit
                <span className="rounded-xl bg-blue-900/70 px-2.5 text-lg flex items-center">
                  3º dia
                </span>
              </h1>
              <Button className="bg-violet-700 hover:bg-violet-800/50 text-xl px-6 py-5">
                Coletar feedback
              </Button>
            </div>
            {/* Informaçoes sobre o crm */}
            <div className="text-white px-4 grid grid-rows-3 gap-1">
              <section className="flex items-center gap-2">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <SlCalender />
                  Proximo contato:
                </h2>
                <span className="text-zinc-300 mt-1">22/12/2025</span>
              </section>
              <section className="flex items-center gap-2">
                <h2 className="font-semibold text-lg">Implantador:</h2>
                <span className="text-zinc-300 mt-1">Rayck</span>
              </section>
              <section className="flex items-center gap-2">
                <h2 className="font-semibold text-lg">Concluído em:</h2>
                <span className="text-zinc-300 mt-1">19/12/2025</span>
              </section>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="mt-6 w-full text-white">
          {/* academia que deve entrar em contato mais a frente */}
          <div className="w-full rounded-xl bg-white p-6 border-2 border-violet-600 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
            {/* nome da academia e botao de interaçao */}
            <div className="text-white flex items-center justify-between px-4 pb-2">
              <h1 className="text-3xl font-bold flex gap-3">
                Acad Acuas Fit
                <span className="rounded-xl bg-blue-900/70 px-2.5 text-lg flex items-center">
                  7º dia
                </span>
              </h1>
              <Button className="bg-zinc-700 hover:bg-zinc-700   text-xl px-6 py-5">
                Coletar feedback
              </Button>
            </div>
            {/* Informaçoes sobre o crm */}
            <div className="text-white px-4 grid grid-rows-3 gap-1">
              <section className="flex items-center gap-2">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <SlCalender />
                  Proximo contato:
                </h2>
                <span className="text-zinc-300 mt-1">26/12/2025</span>
              </section>
              <section className="flex items-center gap-2">
                <h2 className="font-semibold text-lg">Implantador:</h2>
                <span className="text-zinc-300 mt-1">Rayck</span>
              </section>
              <section className="flex items-center gap-2">
                <h2 className="font-semibold text-lg">Concluído em:</h2>
                <span className="text-zinc-300 mt-1">19/12/2025</span>
              </section>
            </div>
            <hr className="mt-5 border-slate-800" />
            <h2 className="mt-3 font-semibold text-lg px-4">
              Contatos Realizados:
            </h2>
            <section className="flex flex-cols-4 items-center gap-3 w-[430px] mt-3 px-4">
              <span className="px-3 py-1 bg-violet-900 text-violet-100 rounded-xl">
                3 dias
              </span>
              <span className="px-3 py-1 bg-zinc-700 text-white rounded-xl">
                7 dias
              </span>
              <span className="px-3 py-1 bg-zinc-700 text-white rounded-xl">
                15 dias
              </span>
              <span className="px-3 py-1 bg-zinc-700 text-white rounded-xl">
                30 dias
              </span>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6 w-full text-white">
          {/* card fechado */}
          <div className="w-full mb-5 rounded-xl border border-violet-700 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md">
            <div className="flex items-center justify-between hover:bg-slate-800/20 ">
              {/* Lado esquerdo */}
              <div className="space-y-2 mt-3 p-2 ">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-semibold text-white">
                    Acad Acuas Fit
                  </h2>

                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-lg font-medium text-green-400">
                    Concluída
                  </span>
                </div>

                <div className="flex items-center gap-4 text-lg text-zinc-300">
                  <span>(34) 24423-4342</span>
                  <span>•</span>
                  <span>Iniciado: 16/12/2025</span>
                  <span>•</span>
                  <span>Concluído em: 24/12/2025</span>
                  <span>•</span>
                  <span>8 anotações</span>
                </div>
              </div>

              {/* Ícone */}
              <FiChevronsDown className="w-8 h-8 text-zinc-400" />
            </div>
            <hr className="border-slate-700/45 mt-7 mb-2" />
          </div>
          {/* card aberto */}
          <div className="w-full rounded-xl border border-violet-700 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md">
            <div className="flex items-center justify-between hover:bg-slate-800/20">
              {/* Lado esquerdo */}
              <div className="space-y-2 mt-3 p-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-semibold text-white">
                    Acad Acuas Fit
                  </h2>

                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-lg font-medium text-green-400">
                    Concluída
                  </span>
                </div>

                <div className="flex items-center gap-4 text-lg text-zinc-300">
                  <span>(34) 24423-4342</span>
                  <span>•</span>
                  <span>Iniciado: 16/12/2025</span>
                  <span>•</span>
                  <span>Concluído em: 24/12/2025</span>
                  <span>•</span>
                  <span>8 anotações</span>
                </div>
              </div>

              {/* Ícone */}
              <FiChevronsUp className="w-8 h-8 text-zinc-400" />
            </div>
            <hr className="border-slate-700/45 mt-7 mb-5" />
            <div className="max-h-[450px] overflow-y-auto pb-6">
              <div className="text-white text-2xl flex items-center gap-2 px-5 pt-4">
                <FiRefreshCcw className="text-green-600" />
                <h1>Histórico de Anotações</h1>
              </div>
              <div className="border border-violet-700/90 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
                <div className="px-8 pt-6 pb-4 flex justify-between">
                  <span className="text-xl font-bold px-2 py-1 bg-purple-700/55 text-white rounded-lg ">
                    3 dia
                  </span>
                  <span className="text-xl text-zinc-200 font-semibold font-sans">
                    17/12/2025 - 14:45
                  </span>
                </div>
                <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <section className="px-8 mb-4 text-base font-medium flex flex-wrap gap-3">
                  {/* Pontos positivos */}
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Respostas rápidas 24h
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Redução no tempo de atendimento
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Atendimento padronizado e eficiente
                  </span>

                  {/* Pontos negativos */}
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Pode falhar em perguntas muito específicas
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Depende de um bom treinamento inicial
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Não substitui 100% o humano
                  </span>

                  {/* Sugestões */}
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Melhorar compreensão de contexto
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Adicionar personalização por cliente
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Integrar com CRM e agenda
                  </span>
                </section>
              </div>

              <div className="border border-violet-700/90  bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
                <div className="px-8 pt-6 pb-4 flex justify-between">
                  <span className="text-xl font-bold px-2 py-1 bg-purple-700/55 text-white rounded-lg ">
                    7 dia
                  </span>
                  <span className="text-xl text-zinc-200 font-semibold font-sans">
                    19/12/2025 - 15:12
                  </span>
                </div>
                <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <section className="px-8 mb-4 text-base font-medium flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Atendimento simultâneo a vários clientes
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Redução de custos operacionais
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Respostas consistentes e sem erros humanos
                  </span>

                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Pode gerar respostas genéricas
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Necessita revisão periódica
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Limitações em linguagem informal
                  </span>

                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Treinar com conversas reais
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Ajustar tom conforme público
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Criar respostas mais naturais
                  </span>
                </section>
              </div>

              <div className="border border-violet-700/90 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
                <div className="px-8 pt-6 pb-4 flex justify-between">
                  <span className="text-xl font-bold px-2 py-1 bg-purple-700/55 text-white rounded-lg ">
                    15 dia
                  </span>
                  <span className="text-xl text-zinc-200 font-semibold font-sans">
                    20/12/2025 - 10:24
                  </span>
                </div>
                <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <section className="px-8 mb-4 text-base font-medium flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Escalável conforme crescimento da empresa
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Diminui filas no atendimento
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Disponível em horários fora do comercial
                  </span>

                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Respostas dependem da base de dados
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Pode não captar emoções do cliente
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Curva inicial de adaptação
                  </span>

                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Melhorar análise de sentimento
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Criar alertas para atendimento humano
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Expandir suporte multilíngue
                  </span>
                </section>
              </div>

              <div className="border border-violet-700/90 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
                <div className="px-8 pt-6 pb-4 flex justify-between">
                  <span className="text-xl font-bold px-2 py-1 bg-purple-700/55 text-white rounded-lg ">
                    30 dia
                  </span>
                  <span className="text-xl text-zinc-200 font-semibold font-sans">
                    21/12/2025 - 14:12
                  </span>
                </div>
                <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <section className="px-8 mb-4 text-base font-medium flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Padroniza a comunicação da marca
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Diminui erros no repasse de informações
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Facilita o acompanhamento de leads
                  </span>

                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Requer ajustes frequentes de contexto
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Pode frustrar clientes mais exigentes
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Limitações em negociações complexas
                  </span>

                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Criar fluxos personalizados por setor
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Integrar relatórios de desempenho
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Aprimorar entendimento de intenção
                  </span>
                </section>
                <div className="px-8 pt-6 pb-4 flex justify-between">
                  <span className="text-xl font-bold px-2 py-1 bg-purple-700/55 text-white rounded-lg ">
                    Considerações finais
                  </span>
                 
                </div>
                <section className="px-8 py-4 grid grid-cols-3 gap-4">
                  {/* produto */}
                  <div>
                    <h1 className="text-2xl font-medium">
                      Satisfação com o produto:
                    </h1>
                    <section className="flex items-center gap-2 text-4xl mt-2 mb-2">
                      <LiaStarSolid className="text-yellow-500" />
                      <LiaStarSolid className="text-yellow-500" />
                      <LiaStarSolid className="text-yellow-500" />
                      <LiaStarSolid className="text-yellow-500" />
                      <LiaStarSolid className="" />
                    </section>
                  </div>
                  {/*implantaçao */}
                  <div>
                    <h1 className="text-2xl font-medium">
                      Satisfação com a implantação:
                    </h1>
                    <section className="flex items-center gap-2 text-4xl mt-2 mb-2">
                      <LiaStarSolid className="text-yellow-500" />
                      <LiaStarSolid className="text-yellow-500" />
                      <LiaStarSolid className="text-yellow-500" />
                      <LiaStarSolid className="text-yellow-500" />
                      <LiaStarSolid className="text-yellow-500" />
                    </section>
                  </div>
                  {/*recomendação */}
                  <div>
                    <h1 className="text-2xl font-medium">
                      O cliente recomendaria o produto?
                    </h1>
                    <h1 className="text-2xl text-green-500 font-medium mt-2">
                      Sim, recomendaria!
                    </h1>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
