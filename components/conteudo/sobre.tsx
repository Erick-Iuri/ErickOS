"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Sobre() {
  /* Carrocel Habilidades */
  const [habilidadeAberta, setHabilidadeAberta] = useState("figma");
  
  /* Troca foto */
  return (
    /* Conteúdo Sobre */
    <div className="h-full overflow-y-auto">
      {/* Corpo 🔥*/}
      <div className="flex flex-col h-260">
        {/* sobre texto */}
        <div className="flex justify-center gap-7">
          {/* coluna H1 1/2 */}
          <div className="flex justify-start flex-col text-[#A8B5AE] pt-10">
            <p className="text-xl font-medium text-white">
              👋 Bem-vindo ao ErickOS
            </p>
            <p className="pt-7 w-2xl text-lg font-medium text-white">
              Sou desenvolvedor Front-End em formação, apaixonado por criar
              experiências digitais intuitivas e funcionais.
            </p>
            <p className="pt-7 w-2xl font-light">
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
                          rounded-2xl bg-[#E63946] text-md"
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
                          rounded-2xl bg-white text-md"
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
          <div className="flex justify-center">
            <Image
              alt="monitor"
              src="/icones/banner café.png"
              width={"600"}
              height={"600"}
              className="w-70 h-auto cursor-pointer p-5"
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
                    ? "transition-all duration-400 transform translate-x-0 px-13 py-2 bg-[#E63946] rounded-t-sm cursor-pointer"
                    : "px-13 py-2 cursor-pointer"
                }
              >
                <button className="cursor-pointer">Figma</button>
              </div>

              <div
                onClick={() => setHabilidadeAberta("tailwind")}
                className={
                  habilidadeAberta == "tailwind"
                    ? "transition-all duration-400 transform translate-x-0 px-13 py-2 bg-[#2D7FF9] rounded-t-sm cursor-pointer"
                    : "px-13 py-2 cursor-pointer"
                }
              >
                <button className="cursor-pointer">TailWind</button>
              </div>

              <div
                onClick={() => setHabilidadeAberta("js")}
                className={
                  habilidadeAberta == "js"
                    ? "transition-all duration-400 transform translate-x-0 px-13 py-2 bg-[#FFDF00] rounded-t-sm text-[#1e1e1e] cursor-pointer"
                    : "px-13 py-2 cursor-pointer"
                }
              >
                <button className="cursor-pointer">JavaScript</button>
              </div>
            </div>

            {/* Figma */}
            <div
              className={
                habilidadeAberta == "figma"
                  ? "transition-all duration-400 transform translate-x-0 block w-245 h-auto border-5 border-[#E63946]"
                  : "hidden"
              }
            >
              <div className="flex justify-start flex-col text-[#A8B5AE] p-10">
                <div className="flex items-center justify-start gap-3 text-white">
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
                </div>

                <p className="pt-7 w-4xl text-sm font-light">
                  • Wireframes de baixa e alta fidelidade{" "}
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Prototipação interativa{" "}
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Design Systems e bibliotecas de componentes{" "}
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Fluxos de usuário
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Documentação de interfaces
                </p>
                <p className="pt-7 w-4xl text-sm font-light">
                  Gosto de utilizar o Figma não apenas para desenhar telas, mas
                  para estruturar experiências completas e facilitar a
                  comunicação entre produto, design e tecnologia.
                </p>
              </div>
            </div>

            {/* TailWind */}
            <div
              className={
                habilidadeAberta == "tailwind"
                  ? "transition-all duration-400 transform translate-x-0 block w-245 h-auto border-5 border-[#2D7FF9]"
                  : "hidden"
              }
            >
              <div className="flex justify-start flex-col text-[#A8B5AE] p-10">
                <div className="flex items-center justify-start gap-3 text-white">
                  <Image
                    alt="tailwind"
                    src="/icones/tailwind.png"
                    width={"50"}
                    height={"50"}
                    className="w-10 h-auto cursor-pointer"
                  />
                  <p className="text-xl font-medium">
                    Minhas habilidades com Tailwind CSS
                  </p>
                </div>

                <p className="pt-7 w-4xl text-sm font-light">
                  • Criação de interfaces responsivas
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Estruturação de layouts modernos
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Customização de temas e paletas
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Organização e manutenção de estilos
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Integração com projetos Front-End
                </p>
                <p className="pt-7 w-4xl text-sm font-light">
                  Este portfólio foi construído 100% com Tailwind CSS, desde a
                  estrutura das janelas até os detalhes visuais da interface,
                  demonstrando na prática minha forma de trabalhar com a
                  ferramenta.
                </p>
              </div>
            </div>

            {/* Js */}
            <div
              className={
                habilidadeAberta == "js"
                  ? "transition-all duration-400 transform translate-x-0 block w-245 h-auto border-5 text-[#202020] border-[#FFDF00]"
                  : "hidden"
              }
            >
              <div className="flex justify-start flex-col text-[#A8B5AE] p-10">
                <div className="flex items-center justify-start gap-3 text-white">
                  <Image
                    alt="js"
                    src="/icones/javascript.png"
                    width={"50"}
                    height={"50"}
                    className="w-10 h-auto cursor-pointer"
                  />
                  <p className="text-xl font-medium">
                    Minhas habilidades com JavaScript
                  </p>
                </div>

                <p className="pt-7 w-4xl text-sm font-light">
                  • Manipulação do DOM
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Eventos e interações de interface
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Lógica de programação
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Estruturas condicionais e loops
                </p>
                <p className="pt-2 w-4xl text-sm font-light">
                  • Criação de funcionalidades interativas
                </p>
                <p className="pt-7 w-4xl text-sm font-light">
                  Utilizo JavaScript para transformar interfaces estáticas em
                  experiências dinâmicas. Neste portfólio, a navegação, as
                  janelas, as interações e diversos comportamentos da interface
                  são controlados por JavaScript, demonstrando na prática minha
                  evolução e aplicação da linguagem em projetos reais.
                </p>
              </div>
            </div>

            {/* Nota de explicação */}
            <div className="flex justify-start flex-col text-white pt-10">
              <p className="text-xl font-medium">
                Esta é apenas uma pequena introdução.
              </p>
              <p className="pt-7 w-4xl text-sm font-light">
                Para conhecer melhor minha trajetória, projetos e habilidades,
                explore as pastas e janelas deste portfólio. Cada seção revela
                uma parte diferente do meu trabalho e da minha experiência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
