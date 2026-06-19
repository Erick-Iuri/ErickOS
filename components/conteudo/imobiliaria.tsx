"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Costa() {
  return (
    <div className="flex justify-between h-full">
      {/* Barra lateral */}
      <div className="bg-black w-1/4 2xl:w-sm h-full">
        <div className="h-10 p-5">
          <Image
            alt="carrocel"
            src="/icones/fold.svg"
            width={"34"}
            height={"34"}
            className="w-7 h-7 p-1 rounded-sm cursor-pointer active:bg-[#A8B5AE] hover:bg-[#1E1E1E] mb-2"
          />
          <div className="text-white py-2 text-sm hover:bg-[#1E1E1E] mb-2">
            How Y Combinator used PostHog experiments to boost engagement by 40%
          </div>
          <div className="text-[#A8B5AE] py-1 text-sm mb-2">
            How Y Combinator used PostHog experiments to boost engagement by 40%
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col w-3/4 h-full px-3 gap-4 overflow-y-auto">
        {/* Image principal */}
        <div className="flex items-center flex-col">
          <Image
            alt="carrocel"
            src="/icones/Costa01.png"
            width={"1280"}
            height={"720"}
            className="w-full h-auto 2xl:w-300"
          />
        </div>
        {/* H1 texto introdução */}
        <div className="flex items-center flex-col text-white gap-4">
          <p className="text-lg w-md">
            How Y Combinator used PostHog experiments to boost engagement by 40%
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Y Combinator is the world’s top startup accelerator, helping to
            fund, train and nurture the next generation of innovative
            businesses. Since 2005, thousands of successful companies have
            emerged from Y Combinator, including Dropbox, Airbnb, PagerDuty,
            Reddit, Amplitude... and PostHog.
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Y Combinator is the world’s top startup accelerator, helping to
            fund, train and nurture the next generation of innovative
            businesses. Since 2005, thousands of successful companies have
            emerged from Y Combinator, including Dropbox, Airbnb, PagerDuty,
            Reddit, Amplitude... and PostHog.
          </p>
        </div>
        {/* Image segundaria */}
        <div className="flex justify-center">
          <Image
            alt="carrocel"
            src="/icones/Costa03.png"
            width={"1280"}
            height={"720"}
            className="w-lg h-auto"
          />
        </div>
        {/* H2 texto explicando */}
        <div className="flex items-center flex-col text-white gap-4">
          <p className="text-lg w-md">
            How Y Combinator used PostHog experiments to boost engagement by 40%
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Y Combinator is the world’s top startup accelerator, helping to
            fund, train and nurture the next generation of innovative
            businesses. Since 2005, thousands of successful companies have
            emerged from Y Combinator, including Dropbox, Airbnb, PagerDuty,
            Reddit, Amplitude... and PostHog.
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Y Combinator is the world’s top startup accelerator, helping to
            fund, train and nurture the next generation of innovative
            businesses. Since 2005, thousands of successful companies have
            emerged from Y Combinator, including Dropbox, Airbnb, PagerDuty,
            Reddit, Amplitude... and PostHog.
          </p>
        </div>
        {/* Componente de comentario */}
        <div className="flex items-center flex-col text-white gap-4 p-3">
          <div className="flex gap-3 border-t border-b py-4">
            <div className="bg-[#E63946] w-1 h-full"></div>
            <div className="flex flex-col gap-5">
              <p className="w-lg text-sm">
                “One thing I love about PostHog is that we have a shared Slack
                channel, for support and feedback. We can chat directly to the
                engineers building PostHog and they're always really
                responsive.”
              </p>
              <div className="flex items-center gap-5">
                <Image
                  alt="carrocel"
                  src="/icones/guts.png"
                  width={"128"}
                  height={"128"}
                  className="w-20 h-auto"
                />
                <div className="flex flex-col gap-2">
                  <p>Erick Aniello</p>
                  <p className="text-sm text-[#A8B5AE]">
                    Product & Engineering Lead, Y Combinator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* H2 texto explicando */}
        <div className="flex items-center flex-col text-white gap-4 mb-10">
          <p className="text-lg w-md">
            How Y Combinator used PostHog experiments to boost engagement by 40%
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Y Combinator is the world’s top startup accelerator, helping to
            fund, train and nurture the next generation of innovative
            businesses. Since 2005, thousands of successful companies have
            emerged from Y Combinator, including Dropbox, Airbnb, PagerDuty,
            Reddit, Amplitude... and PostHog.
          </p>
          <p className="text-sm text-[#A8B5AE] w-lg">
            Y Combinator is the world’s top startup accelerator, helping to
            fund, train and nurture the next generation of innovative
            businesses. Since 2005, thousands of successful companies have
            emerged from Y Combinator, including Dropbox, Airbnb, PagerDuty,
            Reddit, Amplitude... and PostHog.
          </p>
        </div>
      </div>
    </div>
  );
}
