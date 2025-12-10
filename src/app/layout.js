import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
// import Providers from "./Providers";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});


export const metadata = {
  title: "Plan and Book Trip",
  description: "Start your journey with plan and book trip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"><head>
        {/* OR */}
        <link rel="icon" href="/logo/logo.png" sizes="180x180" type="image/png" />
      </head>
      <body className={`${roboto.variable} antialiased pt-[60px] lg:pt-[120px]`}>
        <Header/>
        <HeaderTwo/>
        {children}
      </body>
    </html>
  );
}
