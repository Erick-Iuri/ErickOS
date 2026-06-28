"use client";
import Image from "next/image";

export default function Icondo() {
  return (
    <div className="flex justify-between h-full">
      {/* Barra lateral */}
      <div className="bg-black w-70">
        <div className="h-10 p-5">
          <Image
            alt="carrocel"
            src="/icones/fold.svg"
            width={"34"}
            height={"34"}
            className="w-7 h-7 p-1 rounded-sm cursor-pointer active:bg-[#A8B5AE] hover:bg-[#1E1E1E] mb-2"
          />
          <div className="text-white p-2 text-sm hover:bg-[#1E1E1E] mb-2">
            Costa Imobiliária
          </div>
          <div className="text-[#A8B5AE] p-2 text-sm mb-2">
            Desafio
          </div>
          <div className="text-[#A8B5AE] p-2 text-sm mb-2">
            Solução
          </div>
          <div className="text-[#A8B5AE] p-2 text-sm mb-2">
            Meu papel
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col px-3 gap-4">
        {/* Image principal */}
        <div className="flex items-center flex-col">
          <Image
            alt="carrocel"
            src="/icones/Costa01.png"
            width={"1280"}
            height={"720"}
            className="w-full h-auto 2xl:w-300"
          />
        </div>
        {/* H1 texto introdução */}
        <div className="flex items-center flex-col text-white gap-4">
          <p className="text-lg">Costa Imobiliária</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Costa Imobiliária foi um projeto conceitual de aplicativo
            desenvolvido no Figma com foco em otimizar o processo de agendamento
            de visitas a imóveis. O projeto surgiu a partir da necessidade de
            corretores imobiliários encontrarem e selecionarem apartamentos
            disponíveis de forma mais rápida, facilitando o planejamento e a
            gestão das visitas com clientes.
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            A proposta do aplicativo era centralizar informações dos imóveis,
            permitindo que corretores pesquisassem apartamentos, visualizassem
            detalhes relevantes e realizassem o agendamento de visitas em um
            fluxo simples e intuitivo. O objetivo era reduzir etapas
            operacionais, melhorar a organização das agendas e proporcionar uma
            experiência mais eficiente tanto para os corretores quanto para os
            clientes.
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Durante o projeto, foram desenvolvidos fluxos de navegação,
            wireframes, protótipos de alta fidelidade e componentes de
            interface, com foco em usabilidade, clareza das informações e
            agilidade na execução das tarefas principais.
          </p>
        </div>
        {/* Image segundaria */}
        <div className="flex justify-center">
          <Image
            alt="carrocel"
            src="/icones/Costa03.png"
            width={"1280"}
            height={"720"}
            className="w-lg h-auto"
          />
        </div>
        {/* H2 texto explicando */}
        <div className="flex items-center flex-col text-white gap-4">
          {/* Desafios */}
          <p className="text-lg">Desafio:</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            O principal desafio identificado foi a dificuldade dos corretores em
            organizar e agendar visitas a imóveis de maneira rápida e
            centralizada. Em muitos casos, informações sobre apartamentos
            disponíveis, horários e detalhes dos imóveis estavam distribuídas em
            diferentes canais, tornando o processo mais lento e sujeito a erros.
          </p>
          {/* Solução */}
          <p className="text-lg">Solução:</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Para solucionar esse problema, foi projetado um aplicativo mobile
            focado na rotina dos corretores. A plataforma permite visualizar
            imóveis disponíveis, consultar informações importantes e realizar o
            agendamento de visitas em poucos passos. O fluxo foi desenhado para
            reduzir a quantidade de ações necessárias até a conclusão da tarefa
            principal, priorizando eficiência e praticidade.
          </p>
          {/* Meu Papel */}
          <p className="text-lg">Meu papel:</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Atuei como responsável pelo processo de UX/UI Design, desde a
            concepção da ideia até a prototipação final. As atividades incluíram
            mapeamento do problema, definição da arquitetura da informação,
            criação dos fluxos de navegação, design das interfaces e construção
            do protótipo navegável no Figma.
          </p>
        </div>
        {/* Footnote */}
        <div className="flex items-center flex-col text-white gap-4 p-3">
          <div className="flex gap-3 border-t border-b py-4">
            <div className="bg-[#E63946] w-1 h-full"></div>
            <div className="flex flex-col gap-5">
              <p className="w-lg text-sm">
                “Foi muito interessante transformar um desafio do dia a dia dos
                corretores em uma solução digital. Este projeto reforçou a
                importância de entender o problema antes de pensar na
                interface.”
              </p>
              <div className="flex items-center gap-5">
                <Image
                  alt="carrocel"
                  src="/icones/guts.png"
                  width={"128"}
                  height={"128"}
                  className="w-20 h-auto"
                />
                <div className="flex flex-col gap-2">
                  <p>Erick Aniello</p>
                  <p className="text-sm text-[#A8B5AE]">
                    Desenvolvedor Front-End | React • JavaScript • Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
