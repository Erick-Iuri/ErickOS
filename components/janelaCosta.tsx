"use client";
import Image from "next/image";
import React, { useState } from "react";

/* Conteúdo */
import Costa from "./conteudo/imobiliaria";

// Para o TypeScript não reclamar da prop
interface JanelaProps {
  onFechar: () => void;
  isOpen: boolean;
}

export default function JanelaCosta({ onFechar, isOpen }: JanelaProps) {
  // posição atual da janela
  const [positionJanelaX, setPositionJanelaX] = useState(
    (window.innerWidth - 1100) / 2,
  );
  const [positionJanelaY, setPositionJanelaY] = useState(
    (window.innerHeight - 880) / 2,
  );

  // controla se está arrastando ou não
  const [verificadorClick, setVerificadorClick] = useState(false);

  // posição da janela no início do drag
  const [positionJanelaClickX, setPositionJanelaClickX] = useState(0);
  const [positionJanelaClickY, setPositionJanelaClickY] = useState(0);

  // posição do mouse no início do drag
  const [positionMouseX, setPositionMouseX] = useState(0);
  const [positionMouseY, setPositionMouseY] = useState(0);

  // Tamanho da janela
  const [larguraJanela, setLarguraJanela] = useState(1100);
  const [alturaJanela, setAlturaJanela] = useState(880);

  // maximizar janela verificador
  const [maximizada, setMaximizada] = useState(false);

  // começa o drag
  function clicouMouse(event: React.MouseEvent) {
    if (!maximizada) {
      setVerificadorClick(true);

      setPositionJanelaClickX(positionJanelaX);
      setPositionJanelaClickY(positionJanelaY);

      setPositionMouseX(event.clientX);
      setPositionMouseY(event.clientY);
    }
  }

  // move a janela
  function capturaMouse(event: React.MouseEvent) {
    if (!verificadorClick) return;

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

  /* Janela Maximizar */
  function maximizarJanela() {
    if (maximizada == false) {
      setMaximizada(true);

      const larguraTela = window.innerWidth;
      const alturaTela = window.innerHeight;

      setPositionJanelaX(0);
      setPositionJanelaY(0);

      setAlturaJanela(alturaTela);
      setLarguraJanela(larguraTela);
    } else {
      setMaximizada(false);

      setAlturaJanela(alturaJanela);
      setLarguraJanela(larguraJanela);

      setPositionJanelaX(positionJanelaClickX);
      setPositionJanelaY(positionJanelaClickY);
    }
  }

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
      {/* Barra de interção ☕ */}
      <div
        /* Tamanho da janela */
        className="absolute shadow-2xl 
        overflow-hidden janela-scroll
        bg-[#1E1E1E]"
        style={{
          width: larguraJanela,
          height: alturaJanela,
          left: positionJanelaX,
          top: positionJanelaY,
        }}
      >
        {/* Nav bar da janela 🚢 */}
        <div
          onMouseDown={clicouMouse}
          className="flex justify-between items-center
          w-full h-13 bg-black select-none
          cursor-move"
        >
          {/* nome da janela 1/2*/}
          <div className="flex items-center justify-center gap-1 cursor-pointer text-white">
            <p className="pl-4">Imobiliária.app</p>
            <Image
              alt="monitor"
              src="/icones/seta-baixo.svg"
              width={"30"}
              height={"30"}
              className="w-3 h-auto"
            />
          </div>
          {/* icones de interação 2/2*/}
          <div className="flex justify-beetwen cursor-pointer">
            {/* Minimizar */}
            <div
              onClick={onFechar}
              className="flex w-13 h-13 items-center justify-center
              transition-all duration-200 ease-in-out
              hover:bg-white/15 hover:shadow-lg active:translate-y-0 active:scale-98"
            >
              <Image
                alt="monitor"
                src="/icones/icone1.svg"
                width={"35"}
                height={"35"}
                className="w-4.5 h-4.5"
              />
            </div>

            {/* Maximizar */}
            <div
              onClick={maximizarJanela}
              className="flex items-center justify-center w-13 h-13
              transition-all duration-200 ease-in-out
              hover:bg-white/15 hover:shadow-lg active:translate-y-0 active:scale-98"
            >
              <Image
                alt="maximizar"
                src="/icones/icone2.svg"
                width={"35"}
                height={"35"}
                className="w-3 h-3"
              />
            </div>

            {/* Botão CLOSE */}
            <div
              onClick={onFechar}
              className="flex w-13 h-13 items-center justify-center
              transition-all duration-200 ease-in-out
              hover:bg-[#E63946] hover:shadow-lg active:translate-y-0 active:scale-98"
            >
              <Image
                alt="monitor"
                src="/icones/icone3.svg"
                width={"35"}
                height={"35"}
                className="w-4.5 h-4.5"
              />
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <Costa />
      </div>
    </div>
  );
}
