"use client";
import Image from "next/image";
import Link from "next/link";

export default function GuguCars() {
  return (
    <div className="flex justify-center flex-col h-auto">
      {/* Conteúdo */}
      <div className="flex flex-col items-center py-5 px-1 bg-[#0C0500] border border-[#FF6600] rounded-md h-auto w-full">
        {/* Container 01 */}
        <section className="flex justify-between p-5 gap-3 w-250">
          {/* texto & botões */}
          <div className="w-110 flex justify-center flex-col gap-10">
            <h1 className="text-2xl">GuguCars</h1>
            <h2 className="text-md">• Case de UX/UI Design</h2>
            <p className="text-md font-light text-[#A7A7A7] w-md">
              Projeto conceitual desenvolvido para otimizar o gerenciamento de
              estoque de peças automotivas. O objetivo foi criar uma plataforma
              simples, organizada e eficiente para facilitar o controle de
              produtos e agilizar o trabalho diário.
            </p>
            {/* Botão figma */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/design/VSxOeShY7FQTIKd5bogtA2/Erick-Aniello--Projetos---Sites-?node-id=1-2&t=OJEzbgSAvc4gcQUo-1"
            >
              <div
                className="hover:bg-[#0C0500] hover:border-[#FF6600] active:bg-[#FF6600] gap-2
              w-40 flex justify-center border border-[#A7A7A7]/50 px-4 py-2 rounded-sm cursor-pointer"
              >
                <Image
                  alt="open_new_tab"
                  src="/icones/Open new tab.svg"
                  width={"40"}
                  height={"40"}
                  className="w-5 h-auto cursor-pointer p-1"
                />
                <button className="cursor-pointer">Ver no figma</button>
              </div>
            </Link>{" "}
          </div>

          {/* Imagens */}
          <div className="flex justify-center">
            {/* Imagem 01 */}
            <div className="flex justify-center items-center">
              <Image
                alt="gugucars tela01"
                src="/icones/gugucars/tela 01 gugucars.png"
                width={"400"}
                height={"400"}
                className="w-lg h-auto cursor-pointer p-5"
              />
            </div>
          </div>
        </section>

        {/* Container 02 */}
        <section className="flex justify-center p-1 w-250">
          {/* Conteúdo */}
          <div className="w-full h-100 bg-[#110802] border border-[#FF6600] rounded-md ">
            {/* Texto 01 */}
            <div className="flex p-10">
              {/* imagem */}
              <div className="flex justify-center items-center w-40">
                <Image
                  alt="alvo branco"
                  src="/icones/Icondo imagens/alvo branco.svg"
                  width={"40"}
                  height={"40"}
                  className="w-20 h-auto cursor-pointer p-1"
                />
              </div>
              {/* Titulo & Texto */}
              <div className="flex flex-col gap-3 w-full">
                <p className="text-lg">Visão Geral do Projeto</p>
                <p className="text-sm font-light text-[#A7A7A7]">
                  O GuguCars nasceu para solucionar dificuldades comuns no
                  gerenciamento de estoque de autopeças. O sistema centraliza
                  informações sobre produtos, entradas, saídas e
                  disponibilidade, tornando o controle mais confiável e
                  reduzindo erros operacionais.
                </p>
              </div>
            </div>
            {/* Texto 02 */}
            <div className="flex justify-center gap-20">
              {/* Icones 01 */}
              <div className="flex flex-col items-start gap-3 w-60">
                <div className="flex items-center gap-2">
                  <Image
                    alt="bomba branca"
                    src="/icones/gugucars/bomba branca.svg"
                    width={"40"}
                    height={"40"}
                    className="w-9 h-auto cursor-pointer p-1"
                  />
                  <p>Problema</p>
                </div>
                <p className="text-sm font-light text-[#A7A7A7]">
                  Empresas do setor automotivo frequentemente enfrentam
                  dificuldades para organizar o estoque de peças, acompanhar
                  movimentações e localizar produtos rapidamente, impactando o
                  atendimento ao cliente.
                </p>
              </div>
              {/* Icones 02 */}
              <div className="flex flex-col items-start gap-2 w-60">
                <div className="flex items-center gap-2">
                  <Image
                    alt="Lampada branca"
                    src="/icones/gugucars/lampada branca.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer p-1"
                  />
                  <p>Objetivo</p>
                </div>
                <p className="text-sm font-light text-[#A7A7A7]">
                  Desenvolver uma interface intuitiva para centralizar o
                  gerenciamento de estoque, facilitando consultas, atualizações
                  e o controle das movimentações de produtos.
                </p>
              </div>
              {/* Icones 03 */}
              <div className="flex flex-col items-start gap-2 w-60">
                <div className="flex items-center gap-2">
                  <Image
                    alt="group branco"
                    src="/icones/gugucars/group branco.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer p-1"
                  />
                  <p>Resultado Esperado</p>
                </div>
                <p className="text-sm font-light text-[#A7A7A7]">
                  Um sistema mais organizado, reduzindo perdas de tempo,
                  facilitando a localização das peças e tornando a gestão de
                  estoque mais eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Container 03 */}
        <section className="flex justify-center p-1 w-250">
          {/* Conteúdo */}
          <div className="w-full h-auto bg-[#110802] border border-[#FF6600] rounded-md p-10">
            {/* Texto 01 */}
            <div className="text-lg">
              <p>Fluxos e Telas</p>
            </div>
            {/* Imagens */}
            <div className="flex justify-center">
              <Image
                alt="gugucars fluxo 1"
                src="/icones/gugucars/gugucars fluxo 01.png"
                width={"400"}
                height={"400"}
                className="w-60 h-auto cursor-pointer p-5"
              />
              <Image
                alt="gugucars fluxo 2"
                src="/icones/gugucars/gugucars fluxo 02.png"
                width={"400"}
                height={"400"}
                className="w-60 h-auto cursor-pointer p-5"
              />
              <Image
                alt="gugucars fluxo 3"
                src="/icones/gugucars/gugucars fluxo 03.png"
                width={"400"}
                height={"400"}
                className="w-60 h-auto cursor-pointer p-5"
              />
              <Image
                alt="gugucars fluxo 4"
                src="/icones/gugucars/Samsung Galaxy S20 5G.png"
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
            <div className="flex justify-center p-7 bg-[#110802] border border-[#FF6600] rounded-md">
              {/* Icones 01 */}
              <div className="flex flex-col items-start w-65 gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Alvo branco"
                    src="/icones/Icondo imagens/alvo branco.svg"
                    width={"40"}
                    height={"40"}
                    className="w-8 h-auto cursor-pointer"
                  />
                  <p className="text-xl">Desafio</p>
                </div>
                <p className="text-md font-light text-[#A7A7A7]">
                  Organizar uma grande quantidade de informações de estoque de
                  forma clara, permitindo que o usuário encontre rapidamente
                  qualquer peça sem tornar a interface complexa.
                </p>
              </div>
            </div>
            <div className="flex justify-center p-7 bg-[#110802] border border-[#FF6600] rounded-md">
              {/* Icones 02 */}
              <div className="flex flex-col items-start w-65 gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Confirma branco"
                    src="/icones/gugucars/confirme branco.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer"
                  />
                  <p className="text-xl">Solução</p>
                </div>
                <p className="text-md font-light text-[#A7A7A7]">
                  Foi projetado um painel organizado, com foco em pesquisa
                  rápida, categorização das peças e visualização intuitiva das
                  informações mais importantes para a rotina da empresa.
                </p>
              </div>
            </div>
            <div className="flex justify-center p-7 bg-[#110802] border border-[#FF6600] rounded-md">
              {/* Icones 01 */}
              <div className="flex flex-col items-start w-65 gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Person branco"
                    src="/icones/gugucars/person branco.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer"
                  />
                  <p className="text-xl">Meu Papel</p>
                </div>
                <p className="text-md font-light text-[#A7A7A7]">
                  Atuei em todas as etapas do processo de UX/UI Design, desde o
                  entendimento do problema até a criação da arquitetura da
                  informação, fluxos de navegação, wireframes, protótipos e
                  interface visual desenvolvida no Figma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Container 05 */}
        <section className="flex justify-center p-1 w-250">
          {/* Conteúdo */}
          <div className="flex justify-center items-center w-full h-auto bg-[#110802] border border-[#FF6600] rounded-md p-10 gap-7">
            <div className="w-150">
              <p className="text-sm">
                Uma boa experiência também acontece nos bastidores. Organizar
                informações de forma simples permite que o usuário trabalhe com
                mais agilidade e confiança.
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
