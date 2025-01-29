"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "next-themes";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
};

interface NestedModalProps {
    open: boolean;
    onClose: () => void;
}

export default function NestedModal({ open, onClose }: NestedModalProps) {
    const { theme } = useTheme();

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="email-modal-title">
            <Box
                sx={{
                ...style,
                bgcolor: theme === "dark" ? "#1e1e1e" : "white",
                color: theme === "dark" ? "white" : "black",
                border: theme === "dark" ? "1px solid #333" : "1px solid #ddd",
                }}
            >
                <h2 id="email-modal-title" className="text-lg font-semibold">
                Entre em contato
                </h2>
                <p className="text-xl">
                    <br/>
                    📩 <strong>matositosta@gmail.com</strong>
                    <br/>
                    📲 <strong>+55 74 9 9144-9651</strong>
                </p>
            </Box>
        </Modal>
    );
}
