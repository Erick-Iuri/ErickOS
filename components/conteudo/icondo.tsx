"use client";
import Image from "next/image";

export default function Icondo() {
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
            ICondo
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
          <p className="text-lg">iCondo</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            iCondo foi um projeto conceitual de aplicativo desenvolvido para
            simplificar a rotina de moradores de condomínios. A proposta era
            reunir em uma única plataforma os principais serviços e informações
            utilizados no dia a dia, facilitando a comunicação entre moradores,
            portaria e administração.
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            O aplicativo permitia gerenciar pagamentos relacionados ao
            condomínio, acompanhar encomendas recebidas, cadastrar e autorizar
            visitantes, além de acessar informações importantes da rotina
            condominial. O objetivo era reduzir burocracias, agilizar processos
            e oferecer mais praticidade para moradores e funcionários.
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
            A rotina em condomínios envolve diversas tarefas que frequentemente
            dependem de comunicação manual, registros em papel ou múltiplos
            canais de contato. Isso pode gerar atrasos, informações
            desencontradas e uma experiência pouco eficiente para moradores e
            administradores.
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            O desafio do projeto foi organizar diferentes funcionalidades em uma
            experiência simples e intuitiva, permitindo que os usuários
            encontrassem rapidamente aquilo que precisavam sem aumentar a
            complexidade da interface.
          </p>
          {/* Solução */}
          <p className="text-lg">Solução:</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            A solução proposta foi uma plataforma centralizada para gestão da
            vida condominial. O aplicativo foi estruturado para que ações
            frequentes, como liberar visitantes, consultar encomendas,
            visualizar cobranças e acessar comunicados, pudessem ser realizadas
            de forma rápida e acessível.
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Durante o desenvolvimento das interfaces, foi dada atenção especial
            à arquitetura da informação, priorização de conteúdo e facilidade de
            navegação, garantindo que as funcionalidades mais importantes
            estivessem sempre ao alcance do usuário.
          </p>
          {/* Meu Papel */}
          <p className="text-lg">Meu papel:</p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Atuei como UX/UI Designer durante todo o projeto, sendo responsável
            pela pesquisa do contexto de uso, definição dos fluxos de navegação,
            arquitetura da informação, criação de wireframes, prototipação e
            desenvolvimento das interfaces no Figma.
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            O foco do trabalho foi construir uma experiência clara, organizada e
            intuitiva, capaz de atender diferentes perfis de usuários dentro do
            ambiente condominial.
          </p>
        </div>
        {/* Footnote */}
        <div className="flex items-center flex-col text-white gap-4 p-3">
          <div className="flex gap-3 border-t border-b py-4">
            <div className="bg-[#E63946] w-1 h-full"></div>
            <div className="flex flex-col gap-5">
              <p className="w-lg text-sm">
                “Entre os projetos que desenvolvi, o iCondo foi um dos que mais
                me permitiu explorar a construção de uma experiência completa.
                Trabalhar em um produto com múltiplas funcionalidades foi um
                exercício importante de organização da informação, usabilidade e
                pensamento centrado no usuário.”
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
