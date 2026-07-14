"use client";
import Image from "next/image";
import Link from "next/link";

export default function Icondo() {
  return (
    <div className="flex justify-center flex-col h-auto">
      {/* Conteúdo */}
      <div className="flex flex-col items-center py-5 px-1 bg-[#050B0B] border border-white/10 rounded-md h-auto w-full">
        {/* Container 01 */}
        <section className="flex justify-between p-5 gap-1 w-250">
          {/* texto & botões */}
          <div className="w-110 flex flex-col gap-10">
            <h1 className="text-2xl">iCondo</h1>
            <h2 className="text-md">• Case de UX/UI Design</h2>
            <p className="text-md font-light text-[#A7A7A7] w-md">
              Projeto conceitual de um aplicativo para gestão de condomínios,
              criado para aproximar moradores, síndicos e administração em uma
              única plataforma. O objetivo foi simplificar tarefas do dia a dia
              e tornar a comunicação mais eficiente.
            </p>
            {/* Botão figma */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/design/VSxOeShY7FQTIKd5bogtA2/Erick-Aniello--Projetos---Sites-?node-id=1-2&t=OJEzbgSAvc4gcQUo-1"
            >
              <div
                className="hover:bg-[#070F0F] hover:border-[#62C174] active:bg-[#62C174] gap-2
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
          <div className="flex justify-between gap-7">
            {/* Imagem 01 */}
            <div className="flex justify-center items-center">
              <Image
                alt="icondo01"
                src="/icones/Icondo imagens/icondo 01.png"
                width={"400"}
                height={"400"}
                className="w-50 h-auto cursor-pointer p-5"
              />
            </div>
            {/* Imagem 02 */}
            <div className="flex justify-center items-center">
              <Image
                alt="icondo02"
                src="/icones/Icondo imagens/icondo 02.png"
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
          <div className="w-full h-100 bg-[#070F0F] border border-[#62C174] rounded-md ">
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
                  O iCondo foi pensado para centralizar serviços importantes do
                  condomínio em um único aplicativo. Em vez de utilizar
                  diferentes canais para cada necessidade, o morador pode
                  resolver praticamente tudo em um só lugar.
                </p>
              </div>
            </div>
            {/* Texto 02 */}
            <div className="flex justify-center gap-20">
              {/* Icones 01 */}
              <div className="flex flex-col items-start gap-3 w-60">
                <div className="flex items-center gap-2">
                  <Image
                    alt="bomba verde"
                    src="/icones/Icondo imagens/bomba verde.svg"
                    width={"40"}
                    height={"40"}
                    className="w-9 h-auto cursor-pointer p-1"
                  />
                  <p>Problema</p>
                </div>
                <p className="text-sm font-light text-[#A7A7A7]">
                  Moradores precisam utilizar diferentes meios para resolver
                  tarefas simples, como reservar áreas comuns, acompanhar
                  boletos, autorizar visitantes e entrar em contato com a
                  administração.
                </p>
              </div>
              {/* Icones 02 */}
              <div className="flex flex-col items-start gap-2 w-60">
                <div className="flex items-center gap-2">
                  <Image
                    alt="Lampada verde"
                    src="/icones/Icondo imagens/luz verde.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer p-1"
                  />
                  <p>Objetivo</p>
                </div>
                <p className="text-sm font-light text-[#A7A7A7]">
                  Criar uma plataforma intuitiva capaz de reunir comunicação,
                  serviços e gestão condominial em uma única experiência.
                </p>
              </div>
              {/* Icones 03 */}
              <div className="flex flex-col items-start gap-2 w-60">
                <div className="flex items-center gap-2">
                  <Image
                    alt="group verde"
                    src="/icones/Icondo imagens/group verde.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer p-1"
                  />
                  <p>Resultado Esperado</p>
                </div>
                <p className="text-sm font-light text-[#A7A7A7]">
                  Uma experiência mais organizada para moradores e
                  administradores, reduzindo burocracias e facilitando o acesso
                  às informações do condomínio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Container 03 */}
        <section className="flex justify-center p-1 w-250">
          {/* Conteúdo */}
          <div className="w-full h-auto bg-[#070F0F] border border-[#62C174] rounded-md p-10">
            {/* Texto 01 */}
            <div className="text-lg">
              <p>Fluxos e Telas</p>
            </div>
            {/* Imagens */}
            <div className="flex justify-center">
              <Image
                alt="icondo01 fluxo"
                src="/icones/Icondo imagens/Icondo Fluxo 01.png"
                width={"400"}
                height={"400"}
                className="w-60 h-auto cursor-pointer p-5"
              />
              <Image
                alt="icondo02 fluxo"
                src="/icones/Icondo imagens/Icondo Fluxo 02.png"
                width={"400"}
                height={"400"}
                className="w-60 h-auto cursor-pointer p-5"
              />
              <Image
                alt="icondo03 fluxo"
                src="/icones/Icondo imagens/Icondo Fluxo 03.png"
                width={"400"}
                height={"400"}
                className="w-60 h-auto cursor-pointer p-5"
              />
              <Image
                alt="icondo04 fluxo"
                src="/icones/Icondo imagens/Icondo Fluxo 04.png"
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
            <div className="flex justify-center p-7 bg-[#070F0F] border border-[#62C174] rounded-md">
              {/* Icones 01 */}
              <div className="flex flex-col items-start w-65 gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Alvo verde"
                    src="/icones/Icondo imagens/alvo verde.svg"
                    width={"40"}
                    height={"40"}
                    className="w-8 h-auto cursor-pointer"
                  />
                  <p className="text-xl">Desafio</p>
                </div>
                <p className="text-md font-light text-[#A7A7A7]">
                  Projetar uma interface capaz de atender diferentes perfis de
                  usuários, oferecendo acesso rápido às principais
                  funcionalidades sem tornar a navegação complexa.
                </p>
              </div>
            </div>
            <div className="flex justify-center p-7 bg-[#070F0F] border border-[#62C174] rounded-md">
              {/* Icones 01 */}
              <div className="flex flex-col items-start w-65 gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Confirma verde"
                    src="/icones/Icondo imagens/luz verde.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer"
                  />
                  <p className="text-xl">Solução</p>
                </div>
                <p className="text-md font-light text-[#A7A7A7]">
                  Foi desenvolvido um fluxo simples e organizado, priorizando
                  ações frequentes como reserva de áreas comuns, emissão de
                  boletos, controle de visitantes e comunicação com o
                  condomínio.
                </p>
              </div>
            </div>
            <div className="flex justify-center p-7 bg-[#070F0F] border border-[#62C174] rounded-md">
              {/* Icones 01 */}
              <div className="flex flex-col items-start w-65 gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Person verde"
                    src="/icones/Icondo imagens/person verde.svg"
                    width={"40"}
                    height={"40"}
                    className="w-10 h-auto cursor-pointer"
                  />
                  <p className="text-xl">Meu Papel</p>
                </div>
                <p className="text-md font-light text-[#A7A7A7]">
                  Fui responsável pelo processo completo de UX/UI Design,
                  incluindo pesquisa de funcionalidades, arquitetura da
                  informação, definição dos fluxos, wireframes, prototipação e
                  construção da interface visual no Figma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Container 05 */}
        <section className="flex justify-center p-1 w-250">
          {/* Conteúdo */}
          <div className="flex justify-center w-full h-auto bg-[#070F0F] border border-[#62C174] rounded-md p-10 gap-7">
            <div className="w-150">
              <p className="text-sm">
                Projetar um aplicativo para condomínios mostrou como
                experiências simples podem transformar tarefas rotineiras em
                processos rápidos e intuitivos.
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
