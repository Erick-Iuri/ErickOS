"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Sobre() {
  return (
    /* Conteúdo Sobre */
    <div className="h-full overflow-y-auto">
      {/* Corpo 🔥*/}
      <div className="flex flex-col h-300">
        {/* sobre texto */}
        <div className="flex justify-center gap-7">
          {/* coluna H1 1/2 */}
          <div className="flex justify-start flex-col text-white pt-10">
            <p className="text-2xl font-medium">👋 Bem-vindo ao ErickOS</p>
            <p className="pt-7 w-3xl text-xl font-medium">
              Sou desenvolvedor Front-End em formação, apaixonado por criar
              experiências digitais intuitivas e funcionais.
            </p>
            <p className="pt-7 w-xl font-light">
              Fique à vontade para abrir arquivos, explorar pastas e conhecer um
              pouco mais sobre minha forma de pensar, projetar e construir
              produtos digitais.
            </p>
            {/* botões */}
            <div className="flex justify-start pt-10 gap-3">
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
          <div className="flex justify-start flex-col p-4 w-277 text-white text-md">
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
            <div className="w-full h-100 border-5 border-[#E63946]" ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
