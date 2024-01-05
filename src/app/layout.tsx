import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import BackgroundContainer from "@/components/ui/my_ui/background-container";
import PrimaryHeader from "./(marketing)/_components/primary-header";
import Footer from "@/components/ui/my_ui/footer";

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
            <Footer />
          </BackgroundContainer>
        </body>
      </html>
    </ClerkProvider>
  );
}
