import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Ahmet Zekeriya Devran - Personal Site",
  description: "Electrical and Electronics Engineering Student - Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-background text-foreground font-sans`}
      >
        <Providers>
          <MainLayout>
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
