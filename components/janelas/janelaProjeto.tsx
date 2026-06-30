"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Para o TypeScript não reclamar da prop
interface JanelaProps {
  onFechar: () => void;
  isOpen: boolean;
}

/* Conteúdo  */
import Costa from "../conteudo/imobiliaria";
import Icondo from "../conteudo/icondo";
import GuguCars from "../conteudo/gugucars";
import InsiteBet from "../conteudo/insitebet";

export default function JanelaProjetos({ onFechar, isOpen }: JanelaProps) {
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
  /* Verificador  */
  const [conteudo, setConteudo] = useState(false);

  /* Troca Proop */
  const [abaAtiva, setAbaAtiva] = useState(<Costa />);

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
        overflow-hidden janela-scroll rounded-md
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
            <p className="pl-4">Projetos.design</p>
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

        {/* Barra de ferramentas 🧰 */}
        <div className="px-2 py-2 text-white">
          <div
            className="flex justify-between items-center
            w-full h-14
            p-3 bg-[#000000]"
          >
            {/* Ferramentas */}
            <div className="flex items-center gap-3">
              {/* botões de voltar */}
              <Image
                onClick={() => {
                  setConteudo(false);
                }}
                alt="monitor"
                src="/icones/reloadBack.svg"
                width={"40"}
                height={"40"}
                className="w-4 h-auto cursor-pointer"
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
                className="flex gap-2 cursor-not-allowed
                px-3 py-1.5 rounded-sm
                bg-[#1E1E1E] text-md border-[#E0E7FC]/20 border-[1]"
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
              <div className="w-px h-9 rounded-md bg-[#E0E7FC]/20"></div>
              {/* icones de texto */}
              <div className="flex gap-3 items-center cursor-not-allowed">
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
                className="flex gap-2 cursor-not-allowed
                px-3 py-1.5 rounded-sm
                bg-[#1E1E1E] text-md border-[#E0E7FC]/20 border-[1]"
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
              <div className="w-px h-9 rounded-md bg-[#E0E7FC]/20 cursor-not-allowed"></div>
              {/* Opções de texto */}
              <Image
                alt="monitor"
                src="/icones/bookF.png"
                width={"40"}
                height={"40"}
                className="w-4 h-auto cursor-not-allowed"
              />
              <Image
                alt="monitor"
                src="/icones/bookB.png"
                width={"40"}
                height={"40"}
                className="w-4 h-auto cursor-not-allowed"
              />
              <div className="w-px h-9 rounded-md bg-[#E0E7FC]/20"></div>
            </div>
            {/* botão github */}
            <Link
              href={"https://github.com/Erick-Iuri"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex items-center
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

        {/* Conteúdo */}
        <div className="px-2 py-2 text-white h-190 overflow-y-auto">
          {conteudo ? (
            abaAtiva
          ) : (
            <div className="flex items-center gap-5 w-full h-20 p-3">
              {/* Costa */}
              <div
                onClick={() => {
                  setAbaAtiva(Costa);
                  setConteudo(true);
                }}
                className="flex flex-col items-center gap-1
            rounded-sm
            p-3
          hover:bg-white/30
            transition-colors
            duration-200
            cursor-pointer
          active:bg-[#101856]"
              >
                <Image
                  alt="monitor"
                  src="/icones/folderIcon.png"
                  width={"40"}
                  height={"40"}
                  className="w-10 h-auto"
                />
                <p className="text-sm">Imobiliária.app</p>
              </div>
              {/* Icondo */}
              <div
                onClick={() => {
                  setAbaAtiva(Icondo);
                  setConteudo(true);
                }}
                className="flex flex-col items-center gap-1
            rounded-sm
            p-3
          hover:bg-white/30
            transition-colors
            duration-200
            cursor-pointer
          active:bg-[#101856]"
              >
                <Image
                  alt="monitor"
                  src="/icones/folderIcon.png"
                  width={"40"}
                  height={"40"}
                  className="w-10 h-auto"
                />
                <p className="text-sm">iCondo.app</p>
              </div>
              {/* gugucars */}
              <div
                onClick={() => {
                  setAbaAtiva(GuguCars);
                  setConteudo(true);
                }}
                className="flex flex-col items-center gap-1
            rounded-sm
            p-3
          hover:bg-white/30
            transition-colors
            duration-200
            cursor-pointer
          active:bg-[#101856]"
              >
                <Image
                  alt="monitor"
                  src="/icones/folderIcon.png"
                  width={"40"}
                  height={"40"}
                  className="w-10 h-auto"
                />
                <p className="text-sm">GuguCars.app</p>
              </div>
              {/* insiteBet */}
              <div
                onClick={() => {
                  setAbaAtiva(InsiteBet);
                  setConteudo(true);
                }}
                className="flex flex-col items-center gap-1
            rounded-sm
            p-3
          hover:bg-white/30
            transition-colors
            duration-200
            cursor-pointer
          active:bg-[#101856]"
              >
                <Image
                  alt="monitor"
                  src="/icones/folderIcon.png"
                  width={"40"}
                  height={"40"}
                  className="w-10 h-auto"
                />
                <p className="text-sm">insiteBet.app</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
