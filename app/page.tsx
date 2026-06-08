"use client";
import Image from "next/image";
import { useRef, useEffect, SetStateAction } from "react";
import { useState } from "react";

export default function Home() {
  /* teste */
  const [arrastando, setArrastando] = useState(false);
  const [posicaoX, setPosicaoX] = useState(100);
  const [posicaoY, setPosicaoY] = useState(100);

  function iniciarArrasto() {
    setArrastando(true);
  }

  function pararArrasto() {
    setArrastando(false);
  }

  function moverJanela(event: { clientX: SetStateAction<number>; clientY: SetStateAction<number>; }) {
    if (!arrastando) return;

    setPosicaoX(event.clientX);
    setPosicaoY(event.clientY);
  };


  return (
    /* Container Principal */
    <div
    onMouseMove={moverJanela}
    onMouseUp={pararArrasto}
    className="flex justify-center items-center 
    w-screen h-screen"
    >
      {/* Janela Sobre Mim ☕ */}
      <div
      /* seleciona a janela que vai mover */
      onMouseDown={iniciarArrasto}
      className="w-230 h-220 absolute
      bg-[#202020] rounded-md border-[#E0E7FC]/20 border-[1]"
      style={{
          left: posicaoX,
          top: posicaoY,
        }}
      >
        {/* Nav bar da janela 🚢 */}
        <div
          className="flex justify-between items-center
        w-full h-10
        p-3 bg-black
        cursor-move"
        >
          {/* icone 1/3*/}
          <div>
            <Image
              alt="monitor"
              src="/icones/pc.svg"
              width={"30"}
              height={"30"}
              className="w-5 h-auto cursor-pointer"
            />
          </div>
          {/* nome da janela 2/3*/}
          <div className="flex gap-1 cursor-pointer text-white">
            <text>portfolio.home</text>
            <Image
              alt="monitor"
              src="/icones/seta-baixo.svg"
              width={"30"}
              height={"30"}
              className="w-3 h-auto"
            />
          </div>
          {/* icones de interação 3/3*/}
          <div className="flex justify-beetwen gap-3 cursor-pointer">
            <Image
              alt="monitor"
              src="/icones/minimizar.svg"
              width={"30"}
              height={"30"}
              className="w-4 h-auto"
            />
            <Image
              alt="monitor"
              src="/icones/maximize.svg"
              width={"30"}
              height={"30"}
              className="w-4 h-auto"
            />

            <Image
              alt="monitor"
              src="/icones/close.svg"
              width={"30"}
              height={"30"}
              className="w-4 h-auto"
            />
          </div>
        </div>

        {/* Barra de ferramentas 🧰 */}
        <div className="px-3 py-2 text-white">
          <div
            className="flex justify-between items-center
          w-full h-12
          rounded-sm
          p-3 bg-[#191919]"
          >
            {/* Ferramentas */}
            <div className="flex items-center cursor-not-allowed gap-3">
              {/* botões de voltar */}
              <Image
                alt="monitor"
                src="/icones/reloadBack.svg"
                width={"40"}
                height={"40"}
                className="w-4 h-auto"
              />
              <Image
                alt="monitor"
                src="/icones/reloadFoward.svg"
                width={"40"}
                height={"40"}
                className="w-4 h-auto"
              />
              {/* botões de zoom */}
              <div className="w-px h-9 rounded-md bg-[#E0E7FC]/20"></div>
              <div
                className="flex gap-2
              px-3 py-1.5 rounded-sm
              bg-[#202020] text-md border-[#E0E7FC]/20 border-[1]"
              >
                <text>Zoom</text>
                <Image
                  alt="monitor"
                  src="/icones/seta-baixo.svg"
                  width={"40"}
                  height={"40"}
                  className="w-3 h-auto"
                />
              </div>
              <div className="w-px h-9 rounded-md bg-[#E0E7FC]/20"></div>
              {/* icones de texto */}
              <div className="flex gap-3 items-center">
                <Image
                  alt="monitor"
                  src="/icones/Tt.png"
                  width={"40"}
                  height={"40"}
                  className="w-5 h-auto"
                />
                <Image
                  alt="monitor"
                  src="/icones/aFoward.png"
                  width={"40"}
                  height={"40"}
                  className="w-4 h-auto"
                />{" "}
                <Image
                  alt="monitor"
                  src="/icones/3d.png"
                  width={"40"}
                  height={"40"}
                  className="w-5 h-auto"
                />
              </div>
              <div className="w-px h-9 rounded-md bg-[#E0E7FC]/20"></div>
              {/* botão font */}
              <div
                className="flex gap-2
              px-3 py-1.5 rounded-sm
              bg-[#202020] text-md border-[#E0E7FC]/20 border-[1]"
              >
                <text>Font</text>
                <Image
                  alt="monitor"
                  src="/icones/seta-baixo.svg"
                  width={"40"}
                  height={"40"}
                  className="w-3 h-auto"
                />
              </div>
              <div className="w-px h-9 rounded-md bg-[#E0E7FC]/20"></div>
              {/* Opções de texto */}
              <Image
                alt="monitor"
                src="/icones/bookF.png"
                width={"40"}
                height={"40"}
                className="w-4 h-auto"
              />
              <Image
                alt="monitor"
                src="/icones/bookB.png"
                width={"40"}
                height={"40"}
                className="w-4 h-auto"
              />
              <div className="w-px h-9 rounded-md bg-[#E0E7FC]/20"></div>
            </div>
            {/* botão github */}
            <div
              className="flex items-center 
            gap-2 px-5 py-1.5 
            rounded-sm bg-[#E15910] text-md"
            >
              <Image
                alt="monitor"
                src="/icones/github-svgrepo-com 2.png"
                width={"20"}
                height={"20"}
                className="w-4 h-4"
              />
              <button>Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
