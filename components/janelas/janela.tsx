"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

/* Icones area de trabalho */
import Sobre from "../conteudo/sobre";

// Para o TypeScript não reclamar da prop
interface JanelaProps {
  onFechar: () => void;
  isOpen: boolean;
  zIndex: number;
  aoClicar: () => void;
}

export default function Janela({ onFechar, isOpen, zIndex, aoClicar }: JanelaProps) {
  // Tamanho da janela
  const [larguraJanela, setLarguraJanela] = useState(1100);
  const [alturaJanela, setAlturaJanela] = useState(880);

  const [positionJanelaX, setPositionJanelaX] = useState(0);
  const [positionJanelaY, setPositionJanelaY] = useState(0);

  useEffect(() => {
    const x = (window.innerWidth - larguraJanela) / 2;
    const y = (window.innerHeight - alturaJanela) / 2;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPositionJanelaX(x);
    setPositionJanelaY(y);
  }, []);

  // controla se está arrastando ou não
  const [verificadorClick, setVerificadorClick] = useState(false);

  // posição da janela no início do drag
  const [positionJanelaClickX, setPositionJanelaClickX] = useState(0);
  const [positionJanelaClickY, setPositionJanelaClickY] = useState(0);

  // posição do mouse no início do drag
  const [positionMouseX, setPositionMouseX] = useState(0);
  const [positionMouseY, setPositionMouseY] = useState(0);

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

      const larguraJanela = 1100;
      const alturaJanela = 880;

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
      className={`${
        isOpen
          ? ""
          : "transition-opacity duration-300 ease-out will-change-opacity opacity-0 pointer-events-none"
      }`}
    >
      {/* Barra de interção ☕ */}
      <div
        /* Tamanho da janela */
        onMouseDown={aoClicar}
        className="absolute flex flex-col shadow-2xl
        overflow-hidden janela-scroll
        rounded-md z-0
        bg-black border border-white/20"
        style={{
          zIndex: zIndex,
          width: larguraJanela,
          height: alturaJanela,
          left: positionJanelaX,
          top: positionJanelaY,
        }}
      >
        {/* Nav bar da janela 🚢 */}
        <div
          onMouseDown={clicouMouse}
          className="flex justify-between items-center select-none
          w-full h-13 bg-[#080B0F]
          cursor-move"
        >
          {/* nome da janela 1/2*/}
          <div className="flex items-center justify-center gap-1 cursor-pointer text-white">
            <p className="pl-4">Sobre.txt</p>
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
                onClick={onFechar}
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
                onClick={onFechar}
                alt="monitor"
                src="/icones/icone3.svg"
                width={"35"}
                height={"35"}
                className="w-4.5 h-4.5"
              />
            </div>
          </div>
        </div>

        {/* Barra de ferramentas 🧰 */}
        <div className="px-2 py-2 text-white">
          <div
            className="flex justify-between items-center
            w-full h-14
            p-3 bg-[#000000]"
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
              <div
                className="flex gap-2
                px-3 py-1.5 rounded-sm
                bg-[#0F1012] text-md border-[#1772D7] border-[1]"
              >
                <p>Zoom</p>
                <Image
                  alt="monitor"
                  src="/icones/seta-baixo.svg"
                  width={"40"}
                  height={"40"}
                  className="w-3 h-auto"
                />
              </div>
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
              {/* botão font */}
              <div
                className="flex gap-2
                px-3 py-1.5 rounded-sm
                bg-[#0F1012] text-md border-[#1772D7] border-[1]"
              >
                <p>Font</p>
                <Image
                  alt="monitor"
                  src="/icones/seta-baixo.svg"
                  width={"40"}
                  height={"40"}
                  className="w-3 h-auto"
                />
              </div>
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
            </div>
            {/* botão github */}
            <Link
              href={"https://github.com/Erick-Iuri"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex items-center rounded-sm
              transition-all duration-200 ease-in-out 
              hover:-translate-y-0.5 hover:shadow-lg
              cursor-pointer
              gap-2 px-8 py-1.5 
              bg-[#E63946] text-md"
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
          </div>
        </div>

        {/* conteúdo */}
        <Sobre />
      </div>
    </div>
  );
}
