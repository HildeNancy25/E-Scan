"use client";

import { ThemeProvider } from "@/app/(component)/theme-provider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased bg-white dark:bg-gray-900 text-black dark:text-white h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
