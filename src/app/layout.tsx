import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/reduxProvider";

const inter = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Garousian test todo project",
  description: "mini todo list - code challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
