import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { ReactNode } from "react";

type TProps = { children: ReactNode };

export default function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
