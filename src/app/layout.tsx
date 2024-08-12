import type { Metadata } from "next";
import { Container } from "@radix-ui/themes";
import { bebasNeue } from "@/app/utils/fonts";
import { Toaster } from "react-hot-toast";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import QueryClientProvider from "@/app/providers/QueryClientProvider";
import ThemeProvider from "@/app/providers/ThemeProvider";

import '@radix-ui/themes/styles.css';
import "./globals.css";

type RootLayoutProps = Readonly<{ children: React.ReactNode; }>;

export const metadata: Metadata = {
  title: "Marcel's Portfolio",
  description: "Chukwuma Marcel: Full-Stack Developer. Welcome to my world!",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        <Toaster position="bottom-center" />

        <QueryClientProvider>
          <ThemeProvider>
            <Container size='4' maxWidth='80%'>
              <NavBar />

              <main>
                {children}
              </main>

              <Footer />
            </Container>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
