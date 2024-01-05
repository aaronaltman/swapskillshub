import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import BackgroundContainer from "@/components/ui/my_ui/background-container";
import PrimaryHeader from "./(marketing)/_components/primary-header";
import Footer from "@/components/ui/my_ui/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Swap Hub",
  description: "Meet and Swap Skills with other people in your Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-slate-800 max-w-6xl mx-auto`}>
          <BackgroundContainer>
            <PrimaryHeader />
            {children}
            <div className="flex justify-center items-center">
              <Image
                src="/hero.png"
                alt="hero"
                width={600}
                height={600}
                priority={true}
                className="shadow-xl rounded-lg mx-auto w-full"
              />
            </div>
            <Footer />
          </BackgroundContainer>
        </body>
      </html>
    </ClerkProvider>
  );
}
