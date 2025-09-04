import type { Metadata, Viewport } from "next";
import { Gabarito, Hubot_Sans } from "next/font/google";
import "../globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import AdminHeader from "@/components/shared/admin/AdminHeader";
import RootProvider, { User } from "@/components/shared/providers/RootProvider";
import Alert from "@/components/shared/Alert";
import { ApiInstance } from "@/utils/api-instance";

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
  title: "Cyntonisca| Where Technology Meets Legal Excellence",
  description: `Cyntonisca fuels innovation. We're your strategic partner for software development, delivering cutting-edge solutions that drive business growth.`,
  metadataBase: new URL("https://www.cyntonisca.com"),

  keywords:
    "software development,devops,web agency,devops,web agency,fullstack development,cloud computing,AI,ML,Artificial Intelligence",

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
  }
};

export const viewport: Viewport = {
  width: "device-width",
  maximumScale: 1,
  initialScale: 1
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user: User | null = null;

  try {
    const res = await ApiInstance.get("/api/admin/me");
    user = res.data.user;
  } catch (error) {
    user = null;
  }

  return (
    <html lang="en">
      <body
        className={`${gabarito.variable} ${hubot.variable} font-hubot antialiased`}
      >
        <RootProvider user={user}>
          <Alert />
          <NextTopLoader
            color="#73eaff"
            shadow="0 0 10px #73eaff,0 0 5px #73eaff"
          />
          <AdminHeader />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
