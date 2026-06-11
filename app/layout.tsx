import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
/* Importa o tailwind */
import "./global.css";

const erick0SrobotoSlab = Roboto_Slab({
  style: "normal",
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "ErickOS",
  description: "Erick Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${erick0SrobotoSlab.className}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
