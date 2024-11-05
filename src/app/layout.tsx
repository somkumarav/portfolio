import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somkumar V A",
  description:
    "This is portfolio of the best web developer from kerala, AKA Somkumar V A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased container`}>{children}</body>
    </html>
  );
}
