"use client";

import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    const [muiTheme, setMuiTheme] = useState(createTheme({ palette: { mode: "dark" } }));
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        setMuiTheme(
            createTheme({
                palette: {
                    mode: theme === "light" ? "light" : "dark",
                    primary: { main: "hsl(var(--primary))" },
                    secondary: { main: "hsl(var(--secondary))" },
                    background: { default: theme === "dark" ? "#1A202C" : "#F7FAFC" },
                    text: {
                        primary: "hsl(var(--foreground))",
                        secondary: "hsl(var(--muted-foreground))",
                    },
                },
            })
        );
    }, [theme, mounted]);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <MUIThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
}
