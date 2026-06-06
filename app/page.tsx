import Image from "next/image";

export default function Home() {
  return (
    /* Container Principal */
    <div
      className="flex justify-center items-center 
    w-screen h-screen"
    >
      {/* Janela Sobre Mim ☕ */}
      <div
        className="w-230 h-220 bg-[#202020]
      rounded-md border-[#E0E7FC]/20 border-[1]"
      >
        {/* Nav bar da janela 🚢 */}
        <div
        className="flex justify-between items-center
        w-full h-10 
        p-3 bg-black
        cursor-move">
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
          <div className="flex gap-1 cursor-pointer">
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
      </div>
    </div>
  );
}
