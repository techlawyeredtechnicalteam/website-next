import type { Metadata, Viewport } from "next";
import { Gabarito, Hubot_Sans } from "next/font/google";
import "../globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import RootProvider from "@/components/shared/providers/RootProvider";
import Alert from "@/components/shared/Alert";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
  weight: "variable"
});

const hubot = Hubot_Sans({
  variable: "--font-hubot",
  subsets: ["latin"],
  weight: "variable"
});

export const metadata: Metadata = {
  title: "Cyntonisca | Where Technology Meets Legal Excellence",
  description: `Cyntonisca fuels innovation. We're your strategic partner for software development, delivering cutting-edge solutions that drive business growth.`,
  metadataBase: new URL("https://www.cyntonisca.com"),

  keywords:
    "lawyer website,law tech,software development,devops,web agency,devops,web agency,fullstack development,cloud computing,AI,ML,Artificial Intelligence",

  openGraph: {
    title: "Cyntonisca | Where Technology Meets Legal Excellence",
    description: `Cyntonisca fuels innovation. We're your strategic partner for software development, delivering cutting-edge solutions that drive business growth.`,
    type: "website",
    url: "https://www.cyntonisca.com",
    images: [
      {
        url: "https://www.cyntonisca.com/logo.png",
        width: 150,
        height: 150
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyntonisca | Where Technology Meets Legal Excellence",
    description: `Cyntonisca fuels innovation. We're your strategic partner for software development, delivering cutting-edge solutions that drive business growth.`,
    images: ["https://www.cyntonisca.com/logo.png"]
  },
  icons: "https://www.cyntonisca.com/favicon.ico"
};

export const viewport: Viewport = {
  width: "device-width",
  maximumScale: 1,
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.variable} ${hubot.variable} font-hubot antialiased`}
      >
        <RootProvider user={null}>
          <Alert />
          <NextTopLoader
            color="#5E4241"
            shadow="0 0 10px #5E4241,0 0 5px #5E4241"
          />
          <Header />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
