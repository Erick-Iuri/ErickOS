"use client";
/* Trecos */
import Image from "next/image";
import React, { useState } from "react";
/* Janelas */
import Janela from "@/components/janelas/janela";
import JanelaProjetos from "./janelas/janelaProjeto";

export default function Areatrabalho() {
  /* fechar janela */
  const [fecharJanela, setFecharJanela] = useState(true);

  function fechaAjanela() {
    if (fecharJanela == true) {
      setFecharJanela(false);
    } else {
      setFecharJanela(true);
    }
  }

  /* fechar janela Projetos */
  const [fecharJanelaProjetos, setFecharJanelaProjeto] = useState(false);

  function fechaAjanelaDoProjeto() {
    if (!fecharJanelaProjetos) {
      setFecharJanelaProjeto(true);
    } else {
      setFecharJanelaProjeto(false);
    }
  }

  return (
    <div>
      {/* Icones */}
      <div className="flex justify-start">
        <div className="flex flex-col gap-8 h-full p-10">
          {/* Sobre mim */}
          <div
            onClick={fechaAjanela}
            className="flex justify-center items-center flex-col
          text-white p-1 rounded-sm
          hover:bg-white/30
            transition-colors
            duration-200
            cursor-pointer
          active:bg-[#101856]"
          >
            <Image
              alt="monitor"
              src="/icones/sobre mim icone.png"
              width={"100"}
              height={"100"}
              className="w-14 h-auto cursor-pointer pb-1"
            />
            Sobre Mim
          </div>

          {/* Meus Projetos */}
          <div
            onClick={fechaAjanelaDoProjeto}
            className="flex justify-center items-center flex-col
          text-white p-1 rounded-sm
          hover:bg-white/30
            transition-colors
            duration-200
            cursor-pointer
          active:bg-[#101856]"
          >
            <Image
              alt="monitor"
              src="/icones/meus projetos.png"
              width={"100"}
              height={"100"}
              className="w-12 h-auto cursor-pointer pb-1"
            />
            Meus Projetos
          </div>

          {/* Currículo. pdf */}
          <div
            className="flex justify-center items-center flex-col
      text-white p-1 rounded-sm
      hover:bg-white/30
        transition-colors
        duration-200
        cursor-pointer
        active:bg-[#101856]"
          >
            <Image
              alt="monitor"
              src="/icones/curriculo.png"
              width={"100"}
              height={"100"}
              className="w-9 h-auto cursor-pointer pb-1"
            />
            Currículo. pdf
          </div>

          {/* Fale comigo */}
          <div
            className="flex justify-center items-center flex-col
          text-white p-1 rounded-sm
          hover:bg-white/30
            transition-colors
            duration-200
            cursor-pointer
          active:bg-[#101856]"
          >
            <Image
              alt="monitor"
              src="/icones/fale comigo.png"
              width={"100"}
              height={"100"}
              className="w-11 h-auto cursor-pointer pb-1"
            />
            Fale comigo
          </div>

          <Janela isOpen={fecharJanela} onFechar={fechaAjanela} />
          <JanelaProjetos
            isOpen={fecharJanelaProjetos}
            onFechar={fechaAjanelaDoProjeto}
          />
        </div>
      </div>
      {/* Marca do OS */}
      <div className="relative">
        <Image
          alt="monitor"
          src="/icones/iconm.png"
          width={"100"}
          height={"100"}
          className="w-14 h-auto cursor-pointer shadow-lg
          fixed
          bottom-10
          right-10"
        />
      </div>
    </div>
  );
}
