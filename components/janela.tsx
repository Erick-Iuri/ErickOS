"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

/* Icones area de trabalho */
import Areatrabalho from "@/components/areatrabalho";

// Criamos uma interface para o TypeScript não reclamar da prop
interface JanelaProps {
  onFechar: () => void;
  isOpen: boolean; // Adicionamos o tipo do seu estado aqui
}

export default function Janela({ onFechar, isOpen }: JanelaProps) {
  // posição atual da janela
  const [positionJanelaX, setPositionJanelaX] = useState(0);
  const [positionJanelaY, setPositionJanelaY] = useState(0);

  // controla se está arrastando ou não
  const [verificadorClick, setVerificadorClick] = useState(false);

  // posição da janela no início do drag
  const [positionJanelaClickX, setPositionJanelaClickX] = useState(0);
  const [positionJanelaClickY, setPositionJanelaClickY] = useState(0);

  // posição do mouse no início do drag
  const [positionMouseX, setPositionMouseX] = useState(0);
  const [positionMouseY, setPositionMouseY] = useState(0);

  // começa o drag
  function clicouMouse(event: React.MouseEvent) {
    setVerificadorClick(true);

    setPositionJanelaClickX(positionJanelaX);
    setPositionJanelaClickY(positionJanelaY);

    setPositionMouseX(event.clientX);
    setPositionMouseY(event.clientY);
  }

  // move a janela
  function capturaMouse(event: React.MouseEvent) {
    if (!verificadorClick) return;

    const larguraJanela = 920;
    const alturaJanela = 880;

    const deltaX = event.clientX - positionMouseX;
    const deltaY = event.clientY - positionMouseY;

    const novoX = positionJanelaClickX + deltaX;
    const novoY = positionJanelaClickY + deltaY;

    const xTravado = Math.max(
      0,
      Math.min(novoX, window.innerWidth - larguraJanela),
    );
    const yTravado = Math.max(
      0,
      Math.min(novoY, window.innerHeight - alturaJanela),
    );

    setPositionJanelaX(xTravado);
    setPositionJanelaY(yTravado);
  }

  // termina o drag
  function soltouMouse() {
    setVerificadorClick(false);
  }

  /* Centraliza Janela */
  useEffect(() => {
    const larguraJanela = 920;
    const alturaJanela = 880;

    const centroX = (window.innerWidth - larguraJanela) / 2;
    const centroY = (window.innerHeight - alturaJanela) / 2;

    setPositionJanelaY(centroY);
    setPositionJanelaX(centroX);
  }, []);

  return (
    /* Container Principal */
    <div
      onMouseUp={soltouMouse}
      onMouseMove={capturaMouse}
      className={`transition-opacity duration-300 ${
        isOpen 
          ? "transition-opacity duration-300 ease-out will-change-opacity opacity-100"
          : "transition-opacity duration-300 ease-out will-change-opacity opacity-0 pointer-events-none"
      }`}
    >
      {/* Janela Sobre Mim ☕ */}
      <div
        /* seleciona a janela que vai mover */
        className="w-230 h-220 absolute

          bg-[#202020] rounded-md border-[#E0E7FC]/20 border-[1]"
        style={{
          left: positionJanelaX,
          top: positionJanelaY,
        }}
      >
        {/* Nav bar da janela 🚢 */}
        <div
          onMouseDown={clicouMouse}
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
            {/* Minimizar */}
            <Image
              alt="monitor"
              src="/icones/minimizar.svg"
              width={"30"}
              height={"30"}
              className="w-4 h-auto
              transition-all duration-200 ease-in-out
              hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-98"
            />

            {/* Maximizar */}
            <Image
              alt="monitor"
              src="/icones/maximize.svg"
              width={"30"}
              height={"30"}
              className="w-4 h-auto
              transition-all duration-200 ease-in-out
              hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-98"
            />

            {/* Botão CLOSE */}
            <Image
              onClick={onFechar}
              alt="monitor"
              src="/icones/close.svg"
              width={"30"}
              height={"30"}
              className="w-4 h-auto 
              transition-all duration-200 ease-in-out
              hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-98"
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
              transition-all duration-200 ease-in-out 
              hover:-translate-y-0.5 hover:shadow-lg
              cursor-pointer
              gap-2 px-5 py-1.5 
              rounded-sm bg-[#E15910] text-md"
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
          </div>
        </div>
      </div>
    </div>
  );
}
