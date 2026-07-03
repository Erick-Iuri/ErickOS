"use client";
import Image from "next/image";

export default function Costa() {
  return (
    <div className="flex justify-center flex-col h-auto">
      {/* Conteúdo */}
      <div className="flex flex-col items-center py-5 px-1 bg-[#080B0F] border border-white/10 rounded-md h-auto w-full">
        {/* Container 01 */}
        <section className="flex justify-between p-1 gap-5 w-250">
          {/* texto & botões */}
          <div className="w-110 flex flex-col gap-8 ">
            <h1 className="text-2xl">Costa Imobiliária</h1>
            <h2 className="text-sm">• Case de UX/UI Design</h2>
            <p className="text-sm font-light text-[#A7A7A7] w-sm">
              Projeto conceitual de aplicativo mobile desenvolvido no Figma com
              foco em otimizar o processo de agendamento de visitas a imóveis,
              conectando corretores e clientes de forma rápida, eficiente e
              intuitiva.
            </p>
            {/* Botão figma */}
            <div className="w-40 flex justify-center border border-[#A7A7A7]/50 px-4 py-2 rounded-sm cursor-pointer">
              <button className="cursor-pointer">Ver no figma</button>
            </div>
            {/* Icones mostrador */}
            <div className="flex justify-start gap-2">
              {/* 01 */}
              <div
                className="flex items-center justify-center gap-2 flex-col w-30
              border border-[#A7A7A7]/10 bg-[#0D1014] rounded-sm cursor-pointer p-2"
              >
                <Image
                  alt="monitor"
                  src="/icones/projeto costa/agenda azul.svg"
                  width={"40"}
                  height={"40"}
                  className="w-10 h-auto cursor-pointer p-1"
                />
                <button className="cursor-pointer text-sm font-light">
                  Agendamento inteligente
                </button>
              </div>
              {/* 02 */}
              <div
                className="flex items-center justify-center gap-2 flex-col w-30
              border border-[#A7A7A7]/10 bg-[#0D1014] rounded-sm cursor-pointer p-2"
              >
                <Image
                  alt="monitor"
                  src="/icones/projeto costa/warning azul.svg"
                  width={"40"}
                  height={"40"}
                  className="w-10 h-auto cursor-pointer"
                />
                <button className="cursor-pointer text-sm font-light">
                  Informações detalhadas
                </button>
              </div>
              {/* 03 */}
              <div
                className="flex items-center justify-center gap-2 flex-col w-30
              border border-[#A7A7A7]/10 bg-[#0D1014] rounded-sm cursor-pointer p-2"
              >
                <Image
                  alt="monitor"
                  src="/icones/projeto costa/Touch azul.svg"
                  width={"40"}
                  height={"40"}
                  className="w-10 h-auto cursor-pointer"
                />
                <button className="cursor-pointer text-sm font-light">
                  Navegação Simples
                </button>
              </div>
              {/* 04 */}
              <div
                className="flex items-center justify-center gap-2 flex-col w-30
              border border-[#A7A7A7]/10 bg-[#0D1014] rounded-sm cursor-pointer p-2"
              >
                <Image
                  alt="monitor"
                  src="/icones/projeto costa/estrela azul.svg"
                  width={"40"}
                  height={"40"}
                  className="w-10 h-auto cursor-pointer"
                />
                <button className="cursor-pointer text-sm font-light">
                  Experiência Intuitiva
                </button>
              </div>
            </div>
          </div>

          {/* Imagens */}
          <div className="w-160 flex justify-center bg-[#0D1014] border border-white/10 rounded-md">
            {/* Imagem 01 */}
            <div className="flex justify-center items-center">
              <Image
                alt="monitor"
                src="/icones/projeto costa/Extra 1.png"
                width={"400"}
                height={"400"}
                className="w-50 h-auto cursor-pointer p-5"
              />
            </div>
            {/* Imagem 02 */}
            <div className="flex justify-center items-center">
              <Image
                alt="monitor"
                src="/icones/projeto costa/Extra 2.png"
                width={"400"}
                height={"400"}
                className="w-50 h-auto cursor-pointer p-5"
              />
            </div>
          </div>
        </section>

        {/* Container 02 */}
        <section className="flex justify-center p-1 w-250">
          {/* Conteúdo */}
          <div className="w-full h-100 bg-[#0D1014] border border-white/10 rounded-md ">
            {/* Texto 01 */}
            <div className="flex p-10">
              {/* imagem */}
              <div className="flex justify-center items-center w-40">
                <Image
                  alt="alvo azul"
                  src="/icones/projeto costa/Alvo Azul.svg"
                  width={"40"}
                  height={"40"}
                  className="w-20 h-auto cursor-pointer p-1"
                />
              </div>
              {/* Titulo & Texto */}
              <div className="flex flex-col gap-3 w-full">
                <p className="text-lg">Visão Geral do Projeto</p>
                <p className="text-sm font-light text-[#A7A7A7]">
                  O Costa Imobiliária nasceu para solucionar uma dificuldade
                  comum enfrentada por corretores: organizar imóveis
                  disponíveis, consultar informações importantes e agendar
                  visitas com rapidez. O projeto foi desenvolvido priorizando
                  clareza, eficiência e uma navegação intuitiva, reduzindo
                  etapas e tornando o processo mais organizado tanto para os
                  profissionais quanto para seus clientes.
                </p>
              </div>
            </div>
            {/* Texto 02 */}
            <div className="flex justify-center gap-20">
              {/* Icones 01 */}
              <div className="flex flex-col items-start w-60">
                <div className="flex items-center gap-2">
                  <Image
                    alt="monitor"
                    src="/icones/projeto costa/Bomba Vermelho.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer p-1"
                  />
                  <p>Problema</p>
                </div>
                <p className="text-sm font-light text-[#A7A7A7]">
                  Corretores precisavam consultar imóveis, horários e
                  informações em diferentes locais, tornando o processo lento e
                  sujeito a falhas durante o agendamento.
                </p>
              </div>
              {/* Icones 02 */}
              <div className="flex flex-col items-start w-60">
                <div className="flex items-center gap-2">
                  <Image
                    alt="Lampada roxa"
                    src="/icones/projeto costa/Lampada Roxo.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer p-1"
                  />
                  <p>Objetivo</p>
                </div>
                <p className="text-sm font-light text-[#A7A7A7]">
                  Centralizar todas as informações em um único aplicativo,
                  simplificando o fluxo de trabalho e tornando o atendimento
                  mais rápido e eficiente.
                </p>
              </div>
              {/* Icones 03 */}
              <div className="flex flex-col items-start w-60">
                <div className="flex items-center gap-2">
                  <Image
                    alt="group"
                    src="/icones/projeto costa/Group Verde.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer p-1"
                  />
                  <p>Resultado Esperado</p>
                </div>
                <p className="text-sm font-light text-[#A7A7A7]">
                  Uma experiência prática, organizada e intuitiva que reduz o
                  tempo necessário para encontrar imóveis e realizar
                  agendamentos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Container 03 */}
        <section className="flex justify-center p-1 w-250">
          {/* Conteúdo */}
          <div className="w-full h-auto bg-[#0D1014] border border-white/10 rounded-md p-10">
            {/* Texto 01 */}
            <div className="text-lg">
              <p>Fluxos e Telas</p>
            </div>
            {/* Imagens */}
            <div className="flex justify-center">
              <Image
                alt="monitor"
                src="/icones/projeto costa/fluxo 1.png"
                width={"400"}
                height={"400"}
                className="w-60 h-auto cursor-pointer p-5"
              />
              <Image
                alt="monitor"
                src="/icones/projeto costa/fluxo 2.png"
                width={"400"}
                height={"400"}
                className="w-60 h-auto cursor-pointer p-5"
              />
              <Image
                alt="monitor"
                src="/icones/projeto costa/fluxo 3.png"
                width={"400"}
                height={"400"}
                className="w-60 h-auto cursor-pointer p-5"
              />
              <Image
                alt="monitor"
                src="/icones/projeto costa/fluxo 4.png"
                width={"400"}
                height={"400"}
                className="w-60 h-auto cursor-pointer p-5"
              />
            </div>
          </div>
        </section>

        {/* Container 04 */}
        <section className="flex justify-center p-1 py-2 w-250">
          {/* Conteúdo */}
          <div className="flex justify-center gap-5 w-full">
            <div className="flex justify-center p-7 bg-[#0D1014] border border-white/10 rounded-md">
              {/* Icones 01 */}
              <div className="flex flex-col items-start w-65 gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Alvo vermelho"
                    src="/icones/projeto costa/Alvo vermelho.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer"
                  />
                  <p className="text-xl">Desafio</p>
                </div>
                <p className="text-md font-light text-[#A7A7A7]">
                  O principal desafio foi organizar um grande volume de
                  informações sem comprometer a simplicidade da interface. Era
                  necessário permitir que corretores encontrassem rapidamente
                  imóveis disponíveis, consultassem detalhes importantes e
                  realizassem agendamentos de maneira intuitiva.
                </p>
              </div>
            </div>
            <div className="flex justify-center p-7 bg-[#0D1014] border border-white/10 rounded-md">
              {/* Icones 01 */}
              <div className="flex flex-col items-start w-65 gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Confirma verde"
                    src="/icones/projeto costa/Confirma verde.svg"
                    width={"40"}
                    height={"40"}
                    className="w-12 h-auto cursor-pointer"
                  />
                  <p className="text-xl">Solução</p>
                </div>
                <p className="text-md font-light text-[#A7A7A7]">
                  A solução proposta foi um aplicativo mobile focado na rotina
                  dos corretores. O fluxo foi estruturado para que todas as
                  informações relevantes estivessem acessíveis em poucos passos,
                  reduzindo ações desnecessárias e tornando a experiência mais
                  fluida.
                </p>
              </div>
            </div>
            <div className="flex justify-center p-7 bg-[#0D1014] border border-white/10 rounded-md">
              {/* Icones 01 */}
              <div className="flex flex-col items-start w-65 gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Person Roxo"
                    src="/icones/projeto costa/Person Roxo.svg"
                    width={"40"}
                    height={"40"}
                    className="w-8 h-auto cursor-pointer"
                  />
                  <p className="text-xl">Meu Papel</p>
                </div>
                <p className="text-md font-light text-[#A7A7A7]">
                  Atuei como UX/UI Designer durante todas as etapas do projeto,
                  desde a pesquisa do problema até a prototipação em alta
                  fidelidade. Fui responsável pelo mapeamento da experiência do
                  usuário, arquitetura da informação, definição dos fluxos,
                  criação das interfaces e desenvolvimento do protótipo
                  navegável no Figma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Container 03 */}
        <section className="flex justify-center p-1 w-250">
          {/* Conteúdo */}
          <div className="flex justify-center w-full h-auto bg-[#0D1014] border border-white/10 rounded-md p-10 gap-7">
            <div className="w-150">
              <p className="text-sm">
                Projetar este aplicativo reforçou a importância de compreender
                profundamente o problema antes de desenhar qualquer interface. A
                melhor solução quase sempre nasce de uma boa compreensão da
                necessidade do usuário.
              </p>
            </div>

            <div className="flex justify-center items-center gap-4">
              <div>
                <Image
                  alt="foto perfil"
                  src="/icones/tecnologias icones/Foto Perfil.png"
                  width={"400"}
                  height={"400"}
                  className="w-30 h-auto cursor-pointer"
                />
              </div>
              <div>
                <p>Erick Aniello</p>
                <p className="text-sm font-light pt-4">
                  Desenvolvedor Front-End • React • TypeScript • JavaScript •
                  Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="flex justify-center items-center">
        <section className="flex flex-col w-full text-white pt-2">
          <div className="flex justify-between px-1 py-2">
            <div className="flex items-center gap-3">
              <Image
                alt="icone_confirme_red"
                src="/icones/tecnologias icones/Codigo Vermelho.svg"
                width={"50"}
                height={"50"}
                className="w-7 h-auto cursor-pointer"
              />
              <p className="text-sm font-light text-[#A7A7A7]">
                Transformando ideias em interfaces intuitivas e código de
                qualidade.
              </p>
            </div>
            <p className="flex items-center text-sm font-light text-[#A7A7A7]">
              ErickOS @2026
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}
