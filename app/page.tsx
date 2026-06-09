"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
/* importa o código pra fazer as janelas funcionarem */
import Janela from "@/components/janela";

export default function Home() {

  return (
    <div
    className="flex justify-center items-center 
    w-screen h-screen relative">
      <Janela />
    </div>
  );
}
