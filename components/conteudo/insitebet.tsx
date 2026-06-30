"use client";
import Image from "next/image";

export default function InsiteBet() {
  return (
    <div className="flex justify-between h-full">
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
            Insite Bet
          </div>
          <div className="text-[#A8B5AE] p-2 text-sm mb-2">Desafio</div>
          <div className="text-[#A8B5AE] p-2 text-sm mb-2">Solução</div>
          <div className="text-[#A8B5AE] p-2 text-sm mb-2">Meu papel</div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col px-3 gap-4">
        {/* Image principal */}
        <div className="flex items-center flex-col">
          <Image
            alt="carrocel"
            src="/icones/InsightBet01.png"
            width={"1280"}
            height={"720"}
            className="w-full h-auto 2xl:w-300"
          />
        </div>
        {/* H1 texto introdução */}
        <div className="flex items-center flex-col text-white gap-4">
          <p className="text-lg">Insite Bet</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Insite Bet foi um projeto de redesign focado na modernização e
            aprimoramento da experiência de um aplicativo de apostas esportivas
            já existente. O objetivo do trabalho foi revisar a interface atual,
            identificar oportunidades de melhoria e criar uma experiência mais
            intuitiva, consistente e visualmente atraente para os usuários da
            plataforma.
          </p>
        </div>
        {/* Image segundaria */}
        <div className="flex justify-center">
          <Image
            alt="carrocel"
            src="/icones/InsightBet03.png"
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
            Por se tratar de um produto já em funcionamento, o principal desafio
            não era criar novas funcionalidades, mas melhorar a experiência dos
            usuários sem comprometer fluxos já estabelecidos. Foi necessário
            analisar a estrutura existente, identificar pontos de atrito e
            propor soluções que tornassem a navegação mais simples e agradável.
            Além disso, o projeto exigiu atenção especial à organização das
            informações e à hierarquia visual, já que aplicativos de apostas
            costumam apresentar grande volume de dados em uma única interface.
          </p>
          {/* Solução */}
          <p className="text-lg">Solução:</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            A solução consistiu na reformulação visual do aplicativo, com foco
            em clareza, usabilidade e consistência entre os diferentes
            componentes da interface. Foram revisados elementos de navegação,
            organização de conteúdo, componentes visuais e padrões de interação,
            buscando tornar a experiência mais intuitiva para usuários novos e
            recorrentes. O redesign também teve como objetivo fortalecer a
            identidade visual da plataforma e melhorar a apresentação das
            informações mais relevantes para a tomada de decisão dos usuários.
          </p>
          {/* Meu Papel */}
          <p className="text-lg">Meu papel:</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Atuei como UX/UI Designer no processo de redesign do produto,
            colaborando na análise da experiência existente, identificação de
            oportunidades de melhoria, criação de novas propostas de interface e
            desenvolvimento de protótipos no Figma. Meu foco foi contribuir para
            uma experiência mais organizada, eficiente e alinhada às
            expectativas dos usuários da plataforma.
          </p>
        </div>
        {/* Footnote */}
        <div className="flex items-center flex-col text-white gap-4 p-3">
          <div className="flex gap-3 border-t border-b py-4">
            <div className="bg-[#E63946] w-1 h-full"></div>
            <div className="flex flex-col gap-5">
              <p className="w-lg text-sm">
                “Participar do redesign da Insite Bet foi uma experiência
                importante para entender os desafios de evoluir um produto já
                estabelecido. O projeto reforçou a importância de equilibrar
                melhorias na experiência do usuário com a preservação de fluxos
                que já fazem parte da rotina dos usuários.”
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
