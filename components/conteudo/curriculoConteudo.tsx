"use client";
import Image from "next/image";
import Link from "next/link";

export default function CurriculoConteudo() {
  return (
    <section className="flex justify-center flex-col items-center gap-10 p-8">
      {/* Foto e Introdução */}
      <div className="flex items-center justify-center gap-8">
        <div>
          <Image
            alt="icone_confirme_red"
            src="/icones/tecnologias icones/Foto Perfil.png"
            width={"500"}
            height={"500"}
            className="w-30 h-auto cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-4 w-150">
          <h2 className="text-white text-xl">Erick Aniello</h2>
          <p className="text-white text-md">
            Desenvolvedor Front-End | React • JavaScript • Tailwind CSS
          </p>
          <p className="text-[#A7A7A7] font-light text-sm">
            Sou UX Designer com experiência em projetos digitais e atualmente
            estou em transição para o desenvolvimento Front-end. Meu foco é
            criar interfaces intuitivas, acessíveis e bem estruturadas, unindo
            design e código para entregar experiências de qualidade.
          </p>
        </div>
      </div>

      {/* Tecnologias */}
      <div className="flex flex-col gap-7">
        <p className="text-white text-xl">Tecnologias</p>

        <div className="grid grid-cols-3 gap-4">
          {/* React */}
          <div className="flex items-center gap-4 bg-[#0D1014] px-8 py-4 border border-[#252525] rounded-md">
            <div>
              {" "}
              <Image
                alt="icone_confirme_red"
                src="/icones/tecnologias icones/React logo.svg"
                width={"100"}
                height={"100"}
                className="w-12 h-auto cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-xl">React</p>
              <p className="text-[#1772D7] text-md font-light">Principal</p>
            </div>
          </div>
          {/* Ts */}
          <div className="flex items-center gap-4 bg-[#0D1014] px-8 py-4 border border-[#252525] rounded-md">
            <div>
              {" "}
              <Image
                alt="icone_confirme_red"
                src="/icones/tecnologias icones/TypeScript logo.svg"
                width={"100"}
                height={"100"}
                className="w-12 h-auto cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-xl">TypeScript</p>
              <p className="text-[#1772D7] text-md font-light">Principal</p>
            </div>
          </div>
          {/* Next js */}
          <div className="flex items-center gap-4 bg-[#0D1014] px-8 py-4 border border-[#252525] rounded-md">
            <div>
              {" "}
              <Image
                alt="icone_confirme_red"
                src="/icones/tecnologias icones/Next logo.svg"
                width={"100"}
                height={"100"}
                className="w-12 h-auto cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-xl">Next.js</p>
              <p className="text-[#A7A7A7] text-md font-light">Intermediário</p>
            </div>
          </div>
          {/* JavaScript */}
          <div className="flex items-center gap-4 bg-[#0D1014] px-8 py-4 border border-[#252525] rounded-md">
            <div>
              {" "}
              <Image
                alt="icone_confirme_red"
                src="/icones/tecnologias icones/JavaScript logo.svg"
                width={"100"}
                height={"100"}
                className="w-12 h-auto cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-xl">JavaScript</p>
              <p className="text-[#A7A7A7] text-md font-light">Intermediário</p>
            </div>
          </div>
          {/* HTML5 */}
          <div className="flex items-center gap-4 bg-[#0D1014] px-8 py-4 border border-[#252525] rounded-md">
            <div>
              {" "}
              <Image
                alt="icone_confirme_red"
                src="/icones/tecnologias icones/HTML logo.svg"
                width={"100"}
                height={"100"}
                className="w-12 h-auto cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-xl">HTML5</p>
              <p className="text-[#A7A7A7] text-md font-light">Avançado</p>
            </div>
          </div>
          {/* CSS */}
          <div className="flex items-center gap-4 bg-[#0D1014] px-8 py-4 border border-[#252525] rounded-md">
            <div>
              {" "}
              <Image
                alt="icone_confirme_red"
                src="/icones/tecnologias icones/CSS logo.svg"
                width={"100"}
                height={"100"}
                className="w-12 h-auto cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-xl">CSS</p>
              <p className="text-[#A7A7A7] text-md font-light">Avançado</p>
            </div>
          </div>
          {/* Figma */}
          <div className="flex items-center gap-4 bg-[#0D1014] px-8 py-4 border border-[#252525] rounded-md">
            <div>
              {" "}
              <Image
                alt="icone_confirme_red"
                src="/icones/tecnologias icones/FIGMA logo.svg"
                width={"100"}
                height={"100"}
                className="w-12 h-auto cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-xl">Figma</p>
              <p className="text-[#A7A7A7] text-md font-light">Intermediário</p>
            </div>
          </div>
          {/* Git */}
          <div className="flex items-center gap-4 bg-[#0D1014] px-8 py-4 border border-[#252525] rounded-md">
            <div>
              {" "}
              <Image
                alt="icone_confirme_red"
                src="/icones/tecnologias icones/Git logo.svg"
                width={"100"}
                height={"100"}
                className="w-12 h-auto cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-xl">Git</p>
              <p className="text-[#A7A7A7] text-md font-light">Intermediário</p>
            </div>
          </div>
          {/* Tailwind */}
          <div className="flex items-center gap-4 bg-[#0D1014] px-8 py-4 border border-[#252525] rounded-md">
            <div>
              {" "}
              <Image
                alt="icone_confirme_red"
                src="/icones/tecnologias icones/Tailwind logo.svg"
                width={"100"}
                height={"100"}
                className="w-12 h-auto cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-xl">TailWind</p>
              <p className="text-[#1772D7] text-md font-light">Principal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projetos & Experiências */}
      <div className="flex flex-col gap-7">
        <p className="text-white text-xl">Projetos & Experiências</p>

        <div className="grid grid-cols-2 gap-3">
          {/* ErickOS */}
          <div
            className="hover:bg-[#0F1317] active:bg-[#252d34]
          flex flex-col items-center w-90 gap-4 bg-[#0D1014] px-5 py-6 border border-[#252525] rounded-md"
          >
            <div className="flex justify-between w-full">
              <div className="flex gap-3">
                <Image
                  alt="Monitor_azul"
                  src="/icones/MONITOR AZUL.svg"
                  width={"100"}
                  height={"100"}
                  className="w-7 h-auto cursor-pointer"
                />

                <p className="text-white">ErickOS</p>
              </div>

              <div className="flex justify-center items-center">
                <Image
                  alt="Open_new_tab"
                  src="/icones/Open new tab.svg"
                  width={"100"}
                  height={"100"}
                  className="w-5 h-auto cursor-pointer"
                />
              </div>
            </div>

            <div className="flex justify-center w-full">
              <p className="text-[#A7A7A7]">
                Sistema inspirado em um desktop, desenvolvido para servir como
                meu portfólio interativo. O projeto reúne conceitos de React,
                TypeScript, gerenciamento de estado, componentes reutilizáveis e
                design de interface em uma experiência única.
              </p>
            </div>

            <div className="flex justify-start w-full">
              <p className="hover:text-[#4c92e3] text-[#1772D7] cursor-pointer">
                Abrir projeto
              </p>
            </div>
          </div>
          {/* Costa Imobiliária */}
          <div
            className="hover:bg-[#0F1317] active:bg-[#252d34] 
          flex flex-col items-center justify-between w-90 gap-4 bg-[#0D1014] px-5 py-6 border border-[#252525] rounded-md"
          >
            <div className="flex justify-between w-full">
              <div className="flex gap-3 items-center">
                <Image
                  alt="casa_verde"
                  src="/icones/Casa verde.svg"
                  width={"100"}
                  height={"100"}
                  className="w-7 h-auto cursor-pointer"
                />

                <p className="text-white">Costa Imobiliária</p>
              </div>

              <div className="flex justify-center items-center">
                <Image
                  alt="Open_new_tab"
                  src="/icones/Open new tab.svg"
                  width={"100"}
                  height={"100"}
                  className="w-5 h-auto cursor-pointer"
                />
              </div>
            </div>

            <div className="flex justify-center w-full">
              <p className="text-[#A7A7A7]">
                Aplicativo desenvolvido para auxiliar corretores na seleção de
                imóveis e no agendamento de visitas, tornando esse processo mais
                organizado e eficiente.
              </p>
            </div>

            <div className="flex justify-start w-full">
              <p className="hover:text-[#4c92e3] text-[#1772D7] cursor-pointer">
                Abrir projeto
              </p>
            </div>
          </div>
          {/* GuguCars */}
          <div
            className="hover:bg-[#0F1317] active:bg-[#252d34] 
          flex flex-col items-center justify-between w-90 gap-4 bg-[#0D1014] px-5 py-6 border border-[#252525] rounded-md"
          >
            <div className="flex justify-between w-full">
              <div className="flex gap-3 items-center">
                <Image
                  alt="carro_laranja"
                  src="/icones/Carros laranja.svg"
                  width={"100"}
                  height={"100"}
                  className="w-7 h-auto cursor-pointer"
                />

                <p className="text-white">GuguCars</p>
              </div>

              <div className="flex justify-center items-center">
                <Image
                  alt="Open_new_tab"
                  src="/icones/Open new tab.svg"
                  width={"100"}
                  height={"100"}
                  className="w-5 h-auto cursor-pointer"
                />
              </div>
            </div>

            <div className="flex justify-center w-full">
              <p className="text-[#A7A7A7]">
                Projeto voltado para o gerenciamento de estoque de peças
                automotivas, focando na organização das informações e na
                melhoria da experiência do usuário durante o controle de
                estoque.
              </p>
            </div>

            <div className="flex justify-start w-full">
              <p className="hover:text-[#4c92e3] text-[#1772D7] cursor-pointer">
                Abrir projeto
              </p>
            </div>
          </div>
          {/* iCondo */}
          <div
            className="hover:bg-[#0F1317] active:bg-[#252d34] 
          flex flex-col items-center justify-between w-90 gap-4 bg-[#0D1014] px-5 py-6 border border-[#252525] rounded-md"
          >
            <div className="flex justify-between w-full">
              <div className="flex gap-3 items-center">
                <Image
                  alt="predio_laranja"
                  src="/icones/Predio Laranja.svg"
                  width={"100"}
                  height={"100"}
                  className="w-7 h-auto cursor-pointer"
                />

                <p className="text-white">iCondo</p>
              </div>

              <div className="flex justify-center items-center">
                <Image
                  alt="Open_new_tab"
                  src="/icones/Open new tab.svg"
                  width={"100"}
                  height={"100"}
                  className="w-5 h-auto cursor-pointer"
                />
              </div>
            </div>

            <div className="flex justify-center w-full">
              <p className="text-[#A7A7A7]">
                Aplicativo para gestão de condomínios, permitindo que moradores
                acompanhem cobranças, recebam encomendas, liberem visitantes e
                realizem outras tarefas do dia a dia de forma simples.
              </p>
            </div>

            <div className="flex justify-start w-full">
              <p className="hover:text-[#4c92e3] text-[#1772D7] cursor-pointer">
                Abrir projeto
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filosofia Trabalho */}
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col gap-4 w-182">
          <h2 className="text-white text-xl">Filosofia de Trabalho</h2>
          <p className="text-[#A7A7A7] font-light text-sm">
            Acredito que boas experiências digitais nascem da união entre
            design, tecnologia e atenção aos detalhes. Procuro desenvolver
            soluções simples, intuitivas e bem estruturadas, sempre valorizando
            aprendizado contínuo, colaboração e código de qualidade. Para mim,
            evoluir como desenvolvedor significa manter a curiosidade, buscar
            entender o porquê das soluções e construir produtos que realmente
            gerem valor para as pessoas.
          </p>
        </div>
      </div>

      {/* Contatos */}
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col gap-8 w-182">
          <h2 className="text-white text-xl">Contatos</h2>

          <div className="flex justify-start gap-2">
            <div className="flex justify-center items-center gap-4">
              <div>
                <Image
                  alt="icone_confirme_red"
                  src="/icones/linkedinglogo.png"
                  width={"500"}
                  height={"500"}
                  className="w-10 h-auto cursor-pointer"
                />
              </div>
              <div>
                <p className="text-white">Linkeding</p>
                <Link
                  className="text-sm text-[#1772D7]"
                  href={"https://www.linkedin.com/in/erick-aniello-49953b163/"}
                >
                  https://www.linkedin.com/in/erick-aniello-49953b163/
                </Link>
              </div>
            </div>


            <div className="flex justify-center items-center gap-4">
              <div>
                <Image
                  alt="icone_github"
                  src="/icones/github-svgrepo-com 2.png"
                  width={"500"}
                  height={"500"}
                  className="w-10 h-auto cursor-pointer"
                />
              </div>
              <div>
                <p className="text-white">Github</p>
                <Link
                  className="text-sm text-[#1772D7]"
                  href={"https://github.com/Erick-Iuri"}
                >
                  https://github.com/Erick-Iuri
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
