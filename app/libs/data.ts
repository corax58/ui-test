import { gun_1, gun_2 } from "@/public/images";
import { Gun } from "./types";

export const guns: Gun[] = [
  {
    name: "Desert Eagle",
    star: true,
    image: gun_1,
    condition: "FactoryNew",
    score: 490,
    accentColor: "purple",
  },
  {
    name: "Glock | 18W",
    star: true,
    image: gun_2,
    condition: "Well-Worn",
    score: 1.19,
    accentColor: "sky",
  },
];

export const multipliers: { value: string; color: string }[] = [
  {
    value: "1.45x",
    color: "purple",
  },
  {
    value: "3.42x",
    color: "orange",
  },
  {
    value: "5.22x",
    color: "purple",
  },
  {
    value: "1.20x",
    color: "purple",
  },
];
