"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Sobre() {
  /* Carrocel Habilidades */
  const [habilidadeAberta, setHabilidadeAberta] = useState("figma");

  /* Troca foto */
  return (
    /* Conteúdo Sobre */
    <div className="flex-1 h-full overflow-y-auto px-4">
      {/* Corpo 🔥*/}
      <div className="flex flex-col h-auto bg-[#080B0F] border-2 border-[#252525]/40 rounded-md">
        {/* sobre texto */}
        <div className="flex justify-center gap-40">
          {/* coluna H1 1/2 */}
          <div className="flex justify-start flex-col text-[#A8B5AE] pt-10">
            <p className="text-2xl font-medium text-white">
              Bem-vindo ao ErickOS 👋
            </p>
            <p className="pt-7 w-xl text-md font-medium text-white">
              Sou desenvolvedor Front-End em formação, apaixonado por criar
              experiências digitais intuitivas e funcionais.
            </p>
            <p className="pt-7 w-xl font-light text-sm">
              Fique à vontade para abrir arquivos, explorar pastas e conhecer um
              pouco mais sobre minha forma de pensar, projetar e construir
              produtos digitais.
            </p>
            {/* botões */}
            <div className="flex justify-start pt-10 gap-5 text-white">
              {/* Botão Github */}
              <Link
                href={"https://github.com/Erick-Iuri"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="flex items-center justify-center
                          transition-all duration-200 ease-in-out 
                          hover:-translate-y-0.5 hover:shadow-lg
                          cursor-pointer
                          gap-2 px-5 py-1.5 
                          w-40 h-10
                          rounded-sm bg-[#E63946] text-md"
                >
                  <Image
                    alt="monitor"
                    src="/icones/github-svgrepo-com 2.png"
                    width={"20"}
                    height={"20"}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <button className="cursor-pointer">Github</button>
                </div>
              </Link>
              {/* Botão linkeding */}
              <Link
                href={"https://www.linkedin.com/in/erick-aniello-49953b163/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="flex items-center justify-center
                          transition-all duration-200 ease-in-out 
                          hover:-translate-y-0.5 hover:shadow-lg
                          cursor-pointer
                          gap-2 px-5 py-1.5 
                          w-40 h-10
                          rounded-sm bg-white text-md"
                >
                  <Image
                    alt="monitor"
                    src="/icones/linkedinglogo.png"
                    width={"20"}
                    height={"20"}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <button className="cursor-pointer text-[#007AB9] font-bold">
                    Linkedin
                  </button>
                </div>
              </Link>
            </div>
          </div>
          {/* Coluna H1 2/2 */}
          <div className="flex justify-center items-center">
            <Image
              alt="monitor"
              src="/icones/iconeOS.svg"
              width={"400"}
              height={"400"}
              className="w-50 h-auto cursor-pointer p-5"
            />
          </div>
        </div>

        {/* Habilidades */}
        <div className="flex justify-center pt-5">
          <div className="flex flex-col p-4 text-white text-md">
            {/* Ações */}
            <div className="flex">
              <div
                onClick={() => setHabilidadeAberta("figma")}
                className={
                  habilidadeAberta == "figma"
                    ? "border-b-0 mr-2 transition-all duration-400 transform translate-x-0 px-10 py-3 bg-[#0D1014] border border-[#E63946] rounded-t-sm cursor-pointer"
                    : "border-b-0 mr-2 px-10 py-3 cursor-pointer border border-transparent bg-[#0D1014] rounded-t-sm"
                }
              >
                <div className="flex gap-2">
                  <Image
                    alt="monitor"
                    src="/icones/figma.svg"
                    width={"40"}
                    height={"40"}
                    className="w-6 h-auto cursor-pointer"
                  />
                  <button className="cursor-pointer">Figma</button>
                </div>
              </div>

              <div
                onClick={() => setHabilidadeAberta("tailwind")}
                className={
                  habilidadeAberta == "tailwind"
                    ? "border-b-0 mr-2 transition-all duration-400 transform translate-x-0 px-10 py-3 bg-[#0D1014] border border-[#2D7FF9] rounded-t-sm cursor-pointer"
                    : "border-b-0 mr-2 px-10 py-3 cursor-pointer border border-transparent bg-[#0D1014] rounded-t-sm"
                }
              >
                <div className="flex gap-2">
                  <Image
                    alt="tailwind"
                    src="/icones/tecnologias icones/Tailwind CSS.svg"
                    width={"70"}
                    height={"70"}
                    className="w-6 h-6 cursor-pointer"
                  />
                  <button className="cursor-pointer">Tailwind</button>
                </div>
              </div>

              <div
                onClick={() => setHabilidadeAberta("js")}
                className={
                  habilidadeAberta == "js"
                    ? "border-b-0 transition-all duration-400 transform translate-x-0 px-10 py-3 bg-[#0D1014] border border-[#FFDF00] rounded-t-sm cursor-pointer"
                    : "border-b-0 px-10 py-3 cursor-pointer border border-transparent bg-[#0D1014] rounded-t-sm"
                }
              >
                <div className="flex gap-2">
                  <Image
                    alt="tailwind"
                    src="/icones/tecnologias icones/JavaScript.svg"
                    width={"70"}
                    height={"70"}
                    className="w-6 h-6 cursor-pointer"
                  />
                  <button className="cursor-pointer">JavaScript</button>
                </div>
              </div>
            </div>

            {/* Figma */}
            <div
              className={
                habilidadeAberta == "figma"
                  ? "transition-all duration-400 transform translate-x-0 block w-235 h-auto border border-[#E63946] bg-[#0D1014] rounded-b-sm"
                  : "hidden"
              }
            >
              <div className="flex justify-start flex-col text-[#A8B5AE] p-10">
                <h1 className="flex items-center justify-start gap-7 text-white pb-3 ">
                  <Image
                    alt="figma"
                    src="/icones/figma.svg"
                    width={"30"}
                    height={"30"}
                    className="w-10 h-auto cursor-pointer"
                  />
                  <p className="text-xl font-medium">
                    Minhas habilidades com Figma
                  </p>
                </h1>
                <section className="flex gap-6 py-4 px-2">
                  {/* conteúdo 1/2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Wireframes de baixa e alta fidelidade</p>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Prototipação interativa</p>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Design Systems e bibliotecas de componentes</p>
                    </div>
                  </div>
                  {/* conteúdo 2/2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Wireframes de baixa e alta fidelidade</p>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Prototipação interativa</p>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Design Systems e bibliotecas de componentes</p>
                    </div>
                  </div>
                </section>
                <div className="flex flex-col gap-4 py-4">
                  <div className="w-full h-0.5 bg-[#A7A7A7]/50 rounded-2xl"></div>
                  <p>
                    Gosto de utilizar o Figma não apenas para desenhar telas,
                    mas para estruturar experiências completas e facilitar a
                    comunicação entre produto, design e tecnologia.
                  </p>
                </div>
              </div>
            </div>

            {/* TailWind */}
            <div
              className={
                habilidadeAberta == "tailwind"
                  ? "transition-all duration-400 transform translate-x-0 block w-235 h-auto border border-[#2D7FF9] bg-[#0D1014] rounded-b-sm"
                  : "hidden"
              }
            >
              <div className="flex justify-start flex-col text-[#A8B5AE] p-10">
                <h1 className="flex items-center justify-start gap-7 text-white pb-3 ">
                  <Image
                    alt="figma"
                    src="/icones/tecnologias icones/Tailwind CSS.svg"
                    width={"30"}
                    height={"30"}
                    className="w-10 h-auto cursor-pointer"
                  />
                  <p className="text-xl font-medium">
                    Minhas habilidades com Tailwind CSS
                  </p>
                </h1>
                <section className="flex gap-6 py-4 px-2">
                  {/* conteúdo 1/2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Criação de interfaces responsivas</p>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Estruturação de layouts modernos</p>
                    </div>
                  </div>
                  {/* conteúdo 2/2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Organização e manutenção de estilos</p>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Integração com projetos Front-End</p>
                    </div>
                  </div>
                </section>
                <div className="flex flex-col gap-4 py-4">
                  <div className="w-full h-0.5 bg-[#A7A7A7]/50 rounded-2xl"></div>
                  <p>
                    Este portfólio foi construído 100% com Tailwind CSS, desde a
                    estrutura das janelas até os detalhes visuais da interface,
                    demonstrando na prática minha forma de trabalhar com a
                    ferramenta.
                  </p>
                </div>
              </div>
            </div>

            {/* Js */}
            <div
              className={
                habilidadeAberta == "js"
                  ? "transition-all duration-400 transform translate-x-0 block w-235 h-auto border text-[#202020] border-[#FFDF00] bg-[#0D1014] rounded-b-sm"
                  : "hidden"
              }
            >
              <div className="flex justify-start flex-col text-[#A8B5AE] p-10">
                <h1 className="flex items-center justify-start gap-7 text-white pb-3 ">
                  <Image
                    alt="Js"
                    src="/icones/tecnologias icones/JavaScript.svg"
                    width={"30"}
                    height={"30"}
                    className="w-10 h-auto cursor-pointer"
                  />
                  <p className="text-xl font-medium">
                    Minhas habilidades com JavaScript
                  </p>
                </h1>
                <section className="flex gap-6 py-4 px-2">
                  {/* conteúdo 1/2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Manipulação do DOM</p>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Eventos e interações de interface</p>
                    </div>
                  </div>
                  {/* conteúdo 2/2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Lógica de programação</p>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        alt="icone_confirme_red"
                        src="/icones/tecnologias icones/confirmar vermelho.svg"
                        width={"10"}
                        height={"10"}
                        className="w-4 h-auto cursor-pointer"
                      />
                      <p>Criação de funcionalidades interativas</p>
                    </div>
                  </div>
                </section>
                <div className="flex flex-col gap-4 py-4">
                  <div className="w-full h-0.5 bg-[#A7A7A7]/50 rounded-2xl"></div>
                  <p>
                    Utilizo JavaScript para transformar interfaces estáticas em
                    experiências dinâmicas. Neste portfólio, a navegação, as
                    janelas, as interações e diversos comportamentos da
                    interface são controlados por JavaScript, demonstrando na
                    prática minha evolução e aplicação da linguagem em projetos
                    reais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="flex justify-center">
          <section className="flex w-262 text-white pt-1 px-13 pb-5 gap-2">
            <div className="p-5 w-1/4 h-auto bg-[#0D1014] border border-[#252525]/40 rounded-sm">
              <div className="flex items-center gap-3">
                <Image
                  alt="icone_confirme_red"
                  src="/icones/tecnologias icones/caneta azul.svg"
                  width={"10"}
                  height={"10"}
                  className="w-6 h-auto cursor-pointer"
                />
                <p className="text-sm">Manipulação do DOM</p>
              </div>
              <p className="text-sm font-light text-[#A7A7A7] pt-5">
                Crio experiências intuitivas e acessíveis, sempre pensando no
                usuário e nos objetivos do produto.
              </p>
            </div>
            <div className="p-5 w-1/4 h-auto bg-[#0D1014] border border-[#252525]/40 rounded-sm">
              <div className="flex items-center gap-3">
                <Image
                  alt="icone_confirme_red"
                  src="/icones/tecnologias icones/Codigo Vermelho.svg"
                  width={"10"}
                  height={"10"}
                  className="w-8 h-auto cursor-pointer"
                />
                <p className="text-sm">Front-End</p>
              </div>
              <p className="text-sm font-light text-[#A7A7A7] pt-5">
                Transformo ideias em interfaces modernas, responsivas e com
                código limpo e organizado.
              </p>
            </div>
            <div className="p-5 w-1/4 h-auto bg-[#0D1014] border border-[#252525]/40 rounded-sm">
              <div className="flex items-center gap-3">
                <Image
                  alt="icone_confirme_red"
                  src="/icones/tecnologias icones/Foguete Roxo.svg"
                  width={"10"}
                  height={"10"}
                  className="w-7 h-auto cursor-pointer"
                />
                <p className="text-sm">Evolução constante</p>
              </div>
              <p className="text-sm font-light text-[#A7A7A7] pt-5">
                Estou sempre aprendendo novas tecnologias, melhorando minhas
                habilidades e buscando novos desafios.
              </p>
            </div>
            <div className="p-5 w-1/4 h-auto bg-[#0D1014] border border-[#252525]/40 rounded-sm">
              <div className="flex items-center gap-3">
                <Image
                  alt="icone_confirme_red"
                  src="/icones/tecnologias icones/Group Verde.svg"
                  width={"50"}
                  height={"50"}
                  className="w-7 h-auto cursor-pointer"
                />
                <p className="text-sm">Colaboração</p>
              </div>
              <p className="text-sm font-light text-[#A7A7A7] pt-5">
                Acredito no poder do trabalho em equipe e da troca de
                conhecimento para criar soluções incríveis.
              </p>
            </div>
          </section>
        </div>
      </div>

      <footer className="flex justify-center items-center">
        <section className="flex flex-col w-full text-white pt-2 pb-5">
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
