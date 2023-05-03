import Chat from "./components/Chat";
import Providers from "./components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BookChat",
  description: "Sua livraria de livros digitais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}
