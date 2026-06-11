"use client";
/* Trecos */
import Image from "next/image";
import React, { useState, useEffect } from "react";
/* Icones area de trabalho */
import Areatrabalho from "@/components/areatrabalho"

export default function Home() {

  return (
    <div className="flex justify-start w-screen h-screen">
      <Areatrabalho />
    </div>
  );
}
