import { Roboto_Mono } from "next/font/google";
import "./styles/main.scss";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  style: "normal",
});

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={roboto_mono.variable}>
      <body >{children}</body>
    </html>
  );
}
