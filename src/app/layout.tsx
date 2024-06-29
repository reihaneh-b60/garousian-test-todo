import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.scss";
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
    <html lang="fa" dir="rtl">
      <ReduxProvider>
        <body className={inter.className}>
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
