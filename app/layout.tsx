import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";



const IBMplex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '700'],  // Corrected the property name from 'weights' to 'weight'
  variable: '--font-ibm-plex'
});


export const metadata: Metadata = {
  title: "Gallery",
  description: "AI- powered Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('font-IBMplex antialiased',IBMplex.variable)}
      >
        {children}
      </body>
    </html>
  );
}
