import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "white",
  primaryBright: "#2950aa",
  primaryDark: "#2950aa",
  secondary: "white",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "purple",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#ad40bf",
  tertiary: "#9603fc",
  text: "white",
  textDisabled: "#BDC2C4",
  textSubtle: "white",
  borderColor: "#E9EAEB",
  card: "#9603fc",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#5fafee",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
};