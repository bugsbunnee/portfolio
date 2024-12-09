import type { Metadata } from "next";
import { bebasNeue } from "@/app/utils/fonts";
import { Toaster } from "react-hot-toast";

import GoogleAnalyticsScript from "./components/GoogleAnalyticsScripts";
import ThemeProvider from "@/app/providers/ThemeProvider";
import QueryClientProvider from "@/app/providers/QueryClientProvider";

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
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
        <GoogleAnalyticsScript />
      </head>
      <body className={bebasNeue.className}>
        <Toaster position="bottom-center" />

        <QueryClientProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
