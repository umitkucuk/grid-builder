import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: any;
    breakpoint: any;
  }
}

export const light: DefaultTheme = {
  color: {
    black: "#000000",
    white: "#FFFFFF",

    primary50: "#eff6ff",
    primary100: "#dbeafe",
    primary200: "#bfdbfe",
    primary300: "#93c5fd",
    primary400: "#60a5fa",
    primary500: "#3b82f6",
    primary600: "#2563eb",
    primary700: "#1d4ed8",
    primary800: "#1e40af",
    primary900: "#1e3a8a",

    gray50: "#F9FAFB",
    gray100: "#F3F4F6",
    gray200: "#E5E7EB",
    gray300: "#D1D5DB",
    gray400: "#9CA3AF",
    gray500: "#6B7280",
    gray600: "#4B5563",
    gray700: "#374151",
    gray800: "#1F2937",
    gray900: "#111827",
  },
  breakpoint: {
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(min-width: 425px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    laptopL: `(min-width: 1440px)`,
    desktop: `(min-width: 2560px)`,
  },
};
