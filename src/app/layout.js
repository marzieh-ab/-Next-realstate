// import NextAuthProvider from "@/providers/NextAuthProvider";
// import Layout from "@/layout/Layout";
// import { yekan } from "@/utils/fonts";
import { yekan } from "@/utils/fonts";
import "./globals.css";
import Layout from "src/component/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "املاک | پروژه بوتواستارت",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
        <Layout> {children}</Layout>
        </NextAuthProvider>
   
      </body>
    </html>
  );
}
