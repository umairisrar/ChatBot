import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { light } from "@clerk/themes";
import Header from "../Components/Header";
import Topnav from "@/Components/topNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clerk App",
  description: "Example Clerk App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          {/* <main className="container mx-auto"> */}
          <div className="flex items-center justify-center min-h-screen w-[100%] flex-col">
            <div className="w-[100%]">{children}</div>
          </div>
          {/* </main> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
