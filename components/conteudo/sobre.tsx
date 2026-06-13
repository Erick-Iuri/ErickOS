"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Sobre() {
  return (
    /* Conteúdo Sobre */
    <div className="h-full overflow-y-auto">
      {/* Corpo 🔥*/}
      <div className="flex flex-col h-260">
        {/* sobre texto */}
        <div className="flex justify-center gap-7">
          {/* coluna H1 1/2 */}
          <div className="flex justify-start flex-col text-[#A8B5AE] pt-10">
            <p className="text-xl font-medium text-white">👋 Bem-vindo ao ErickOS</p>
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
              <div className="px-13 py-2 bg-[#E63946] rounded-t-sm">
                <button>Figma</button>
              </div>
              <div className="px-13 py-2">
                <button>TailWind</button>
              </div>
              <div className="px-13 py-2">
                <button>JavaScript</button>
              </div>
            </div>

            {/* Display */}
            <div className="w-245 h-auto border-5 border-[#E63946]">
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
