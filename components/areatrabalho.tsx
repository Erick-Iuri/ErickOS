"use client";
/* Trecos */
import Image from "next/image";
/* Janelas */
import Janela from "@/components/janela";

export default function Areatrabalho() {
  return (
    <div
      className="flex flex-col gap-8 h-full p-10">
      {/* Sobre mim */}
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
          src="/icones/sobre mim icone.png"
          width={"100"}
          height={"100"}
          className="w-14 h-auto cursor-pointer pb-1"
        />
        Sobre Mim
      </div>

      {/* Meus Projetos */}
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

      <Janela />
    </div>
  );
}
