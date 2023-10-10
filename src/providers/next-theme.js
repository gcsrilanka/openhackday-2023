// app/providers.jsx

"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export function NextThemeProvider({ children }) {
  return <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>;
}
