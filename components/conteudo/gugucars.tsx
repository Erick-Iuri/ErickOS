"use client";
import Image from "next/image";

export default function GuguCars() {
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
            Gugu Cars
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
            src="/icones/iCondo01.png"
            width={"1280"}
            height={"720"}
            className="w-full h-auto 2xl:w-300"
          />
        </div>
        {/* H1 texto introdução */}
        <div className="flex items-center flex-col text-white gap-4">
          <p className="text-lg">GuguCars</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            GuguCars foi um projeto conceitual desenvolvido para auxiliar
            oficinas e empresas do setor automotivo no gerenciamento de estoque
            de peças. O objetivo era criar uma solução que facilitasse o
            controle de entradas, saídas e disponibilidade de componentes,
            reduzindo a dependência de processos manuais e melhorando a
            organização do estoque.
          </p>
        </div>
        {/* Image segundaria */}
        <div className="flex justify-center">
          <Image
            alt="carrocel"
            src="/icones/iCondo05.png"
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
            O principal desafio era organizar informações de estoque de forma
            clara e acessível. Em muitos cenários, o controle de peças é
            realizado por meio de planilhas ou processos descentralizados,
            dificultando a localização de itens, o acompanhamento da
            disponibilidade e a tomada de decisões relacionadas à reposição de
            estoque.
          </p>
          {/* Solução */}
          <p className="text-lg">Solução:</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            A solução proposta foi um sistema com foco em simplicidade e
            eficiência, permitindo visualizar o inventário, consultar
            informações das peças e acompanhar movimentações de entrada e saída.
            O fluxo foi projetado para reduzir o tempo gasto em tarefas
            operacionais e facilitar o acesso às informações mais importantes
            para a rotina de trabalho.
          </p>
          {/* Meu Papel */}
          <p className="text-lg">Meu papel:</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Atuei como UX/UI Designer durante todo o projeto, sendo responsável
            pela definição dos fluxos de navegação, arquitetura da informação,
            criação de wireframes e desenvolvimento das interfaces no Figma. O
            foco do trabalho foi criar uma experiência intuitiva, organizada e
            alinhada às necessidades dos usuários responsáveis pelo controle de
            estoque.
          </p>
        </div>
        {/* Footnote */}
        <div className="flex items-center flex-col text-white gap-4 p-3">
          <div className="flex gap-3 border-t border-b py-4">
            <div className="bg-[#E63946] w-1 h-full"></div>
            <div className="flex flex-col gap-5">
              <p className="w-lg text-sm">
                “Este projeto foi uma oportunidade de explorar como o design
                pode simplificar processos operacionais do dia a dia. A
                experiência reforçou a importância de transformar informações
                complexas em interfaces claras, intuitivas e fáceis de
                utilizar.”
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
