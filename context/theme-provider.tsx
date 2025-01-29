"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Theme({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
