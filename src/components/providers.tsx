"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // ou um loading spinner
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}
