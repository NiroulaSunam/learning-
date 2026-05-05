import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "./_components/Navigation/navbar";

export const metadata: Metadata = {
  title: " Nomad Rider ",
  description: "Find the best spots to ride and work",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
      < NavBar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
