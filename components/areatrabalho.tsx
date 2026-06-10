"use client";
/* Trecos */
import Image from "next/image";
/* Janelas */
import Janela from "@/components/janela";

export default function Areatrabalho() {
  return (
    <div className="w-7xl h-full bg-red-800
    grid grid-cols-1 gap-1 p-10">
      <Image
        alt="monitor"
        src="/icones/pc.svg"
        width={"30"}
        height={"30"}
        className="w-15 h-auto cursor-pointer"
      />
      <Janela />
    </div>
  );
}
