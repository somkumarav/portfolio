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
      <body className={`antialiased max-w-screen-sm mx-auto px-4`}>
        {children}
      </body>
    </html>
  );
}
