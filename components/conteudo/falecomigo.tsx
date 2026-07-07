"use client";
import Image from "next/image";
import { useState } from "react";

export default function Falecomigo() {
  /* Copia eu e-mail */
  const [copiado, setCopiado] = useState(false);
  const meuEmail = "iurierick@gmail.com";

  async function copiaEmail() {
    try {
      // Copia o e-mail
      await navigator.clipboard.writeText(meuEmail);

      // Ativa aviso
      setCopiado(true);

      // Faz o botão voltar ao normal
      setTimeout(() => setCopiado(false), 2000);
    } catch (erro) {
      console.error("Erro ao copiar e-mail", erro);
    }
  }

  return (
    <section className="flex justify-center h-full gap-3 text-white">
      {/* Lista lateral */}
      <div className="bg-[#080B0F] border-2 border-[#252525]/40 rounded-md w-80 flex flex-col px-4">
        <div className="flex items-center gap-3 py-5">
          <Image
            alt="icone_pessoa_red"
            src="/icones/pessoa vermelho.svg"
            width={"10"}
            height={"10"}
            className="w-5 h-auto cursor-pointer"
          />
          <p>Contatos</p>
        </div>
        {/* E-mail */}
        <div
          className="cursor-pointer hover:bg-blue-500/10 active:bg-blue-500/30
        flex justify-between items-center h-15 bg-[#080E15] border border-[#1772D7] rounded-sm px-4"
        >
          <div className="flex gap-3">
            <Image
              alt="E_mail_azul"
              src="/icones/email azul.svg"
              width={"10"}
              height={"10"}
              className="w-6 h-auto cursor-pointer"
            />
            <div>
              <p className="text-sm font-light">E-mail</p>
              <p className="text-sm font-light text-[#A7A7A7]">
                Resposta em até 24h
              </p>
            </div>
          </div>
          <div>
            <Image
              alt="E_mail_azul"
              src="/icones/arrow branco.svg"
              width={"10"}
              height={"10"}
              className="w-2 h-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* container */}
      <div className="flex justify-between flex-col p-6 bg-[#080B0F] border-2 border-[#252525]/40 rounded-md w-130">
        <div>
          {/* E-mail icone e texto 1/3 */}
          <div className="flex gap-4 mb-5">
            <div className="flex justify-center items-center bg-[#080E15] border border-[#1772D7] p-5 rounded-sm">
              <Image
                alt="E_mail_azul"
                src="/icones/email azul.svg"
                width={"10"}
                height={"10"}
                className="w-8 h-auto cursor-pointer"
              />
            </div>
            <div className="flex justify-center flex-col">
              <p className="text-xl">E-mail</p>
              <p className="text-sm text-[#A7A7A7] font-light">
                O melhor canal para propostas e oportunidades.
              </p>
            </div>
          </div>
          {/* Linha */}
          <div className="w-full h-0.5 bg-[#252525]"></div>
          {/* Copia E-mail 2/3 */}
          <div className="flex justify-between py-8">
            <div className="flex justify-center flex-col">
              <p className="text-sm">Meu melhor E-mail:</p>
              <p className="text-sm text-[#1772D7] font-light">
                iurierick@gmail.com
              </p>
            </div>
            <div>
              <button
                className="cursor-pointer rounded-sm active:bg-[#1772D7] hover:bg-[#0D131A] hover:border-[#1772D7]
                flex justify-center gap-2 bg-[#0D1014] border border-[#252525] p-2 w-30 text-sm"
                onClick={copiaEmail}
              >
                {copiado ? (
                  <div className="flex gap-2">
                    <Image
                      alt="Confirma_verde"
                      src="/icones/projeto costa/Confirma verde.svg"
                      width={"10"}
                      height={"10"}
                      className="w-5 h-auto"
                    />
                    <p>Copiado</p>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Image
                      alt="copy_branco"
                      src="/icones/Copy branco.svg"
                      width={"10"}
                      height={"10"}
                      className="w-4 h-auto"
                    />
                    <p>Copiar</p>
                  </div>
                )}
              </button>
            </div>
          </div>
          {/* Linha */}
          <div className="w-full h-0.5 bg-[#252525] "></div>
          {/* Sobre 3/3 */}
          <div className="flex flex-col gap-2 py-5">
            <p className="text-md">Sobre:</p>
            <p className="text-sm font-light text-[#A7A7A7]">
              Fique à vontade para entrar em contato por este e-mail para
              oportunidades de trabalho, parcerias ou qualquer assunto
              profissional.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#0D131A] border border-[#1772D7] rounded-sm h-20">
          <div className="flex items-center p-4">
            <Image
              alt="Plane_azul"
              src="/icones/plane azul.svg"
              width={"100"}
              height={"100"}
              className="w-9 h-auto cursor-pointer"
            />
          </div>
          <div>
            <p className="text-sm">Resposta em até 24h</p>
            <p className="text-sm font-light text-[#A7A7A7]">
              Procuro responder todas as mensagens o mais rápido possível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
