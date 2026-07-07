"use client";
/* Trecos */
import Image from "next/image";
import React, { useState } from "react";
/* Janelas */
import Janela from "@/components/janelas/janela";
import JanelaProjetos from "./janelas/janelaProjeto";
import Curriculo from "./janelas/curriculo";
import Contato from "./janelas/contato";

export default function Areatrabalho() {
  /* Janela Sobre */
  const [fecharJanela, setFecharJanela] = useState(true);

  function fechaAjanela() {
    if (fecharJanela == true) {
      setFecharJanela(false);
    } else {
      setFecharJanela(true);
    }
  }

  /* Janela Projetos */
  const [fecharJanelaProjetos, setFecharJanelaProjeto] = useState(false);

  function fechaAjanelaDoProjeto() {
    if (!fecharJanelaProjetos) {
      setFecharJanelaProjeto(true);
    } else {
      setFecharJanelaProjeto(false);
    }
  }

  /* Janela Curriculo */
  const [fecharCurriculo, setFecharCurriculo] = useState(false);

  function fechaAjanelaCurriculo() {
    if (!fecharCurriculo) {
      setFecharCurriculo(true);
    } else {
      setFecharCurriculo(false);
    }
  }

  /* Janela Fale Comigo */
  const [fecharContato, setFecharContato] = useState(false);

  function fechaAjanelaContato() {
    if (!fecharContato) {
      setFecharContato(true);
    } else {
      setFecharContato(false);
    }
  }

  /* Hierarquia Janelas */
  const [janelaNoTopo, setJanelaNoTopo] = useState("");

  return (
    <div>
      {/* Icones */}
      <div className="flex justify-start">
        <div className="relative flex flex-col gap-8 h-full p-10">
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
            onClick={fechaAjanelaCurriculo}
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
            onClick={fechaAjanelaContato}
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

          <Janela
            zIndex={janelaNoTopo === "janelaA" ? 50 : 10}
            aoClicar={() => setJanelaNoTopo("janelaA")}
            isOpen={fecharJanela}
            onFechar={fechaAjanela}
          />

          <JanelaProjetos
            zIndex={janelaNoTopo === "janelaB" ? 50 : 10}
            aoClicar={() => setJanelaNoTopo("janelaB")}
            isOpen={fecharJanelaProjetos}
            onFechar={fechaAjanelaDoProjeto}
          />

          <Curriculo
            zIndex={janelaNoTopo === "janelaC" ? 50 : 10}
            aoClicar={() => setJanelaNoTopo("janelaC")}
            isOpen={fecharCurriculo}
            onFechar={fechaAjanelaCurriculo}
          />

          <Contato
            zIndex={janelaNoTopo === "janelaD" ? 50 : 10}
            aoClicar={() => setJanelaNoTopo("janelaD")}
            isOpen={fecharContato}
            onFechar={fechaAjanelaContato}
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
