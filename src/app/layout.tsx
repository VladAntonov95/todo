import type { Metadata } from "next";
import Providers from "@/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo App",
  description: "This is simple todo app",
  icons: {
    icon: "/to-do-list.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-10">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
