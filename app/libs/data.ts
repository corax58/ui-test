import {
  avatar_3,
  card_1,
  card_2,
  card_3,
  gun_1,
  gun_2,
  knife_1,
} from "@/public/images";
import { Gun, stat } from "./types";

export const guns: Gun[] = [
  {
    id: 1,
    name: "Desert Eagle",
    star: true,
    image: gun_1,
    condition: "FactoryNew",
    score: 490,
    accentColor: "purple",
  },
  {
    id: 2,
    name: "Glock | 18W",
    star: true,
    image: gun_2,
    condition: "Well-Worn",
    score: 1.19,
    accentColor: "aqua",
  },
  {
    id: 3,
    name: "Glock | 18W",
    star: true,
    image: gun_2,
    condition: "Well-Worn",
    score: 1.19,
    accentColor: "aqua",
  },
  {
    id: 4,
    name: "Desert Eagle",
    star: true,
    image: gun_1,
    condition: "FactoryNew",
    score: 490,
    accentColor: "purple",
  },
];

const multiplierClassNames =
  " w-full h-full flex items-center justify-center text-slate-300 rounded-xl border-2 text-sm ";

export const multipliers: { value: string; className: string }[] = [
  {
    value: "1.45x",
    className: multiplierClassNames + "border-purple-600",
  },
  {
    value: "3.42x",
    className: multiplierClassNames + "border-orange-600",
  },
  {
    value: "5.22x",
    className: multiplierClassNames + "border-sky-600",
  },
  {
    value: "1.20x",
    className: multiplierClassNames + "border-purple-600",
  },
];

export const stats: stat[] = [
  {
    name: "sQich",
    characterImage: avatar_3,
    firstPrice: 13.93,
    firstWeaponImage: knife_1,
    secondWeaponImage: gun_2,
    secondPrice: 1.13,
    involved: false,
    increase: 15.34,
  },
];

export const graphData = [
  {
    name: " 1.00x",
    value: 0,
  },
  {
    name: "2.00x",
    value: 0.3,
  },
  {
    name: "3.00x",
    value: 0.8,
  },
  {
    name: "4.00x",
    value: 2,
  },
];

export const EventCards = [
  {
    text: "Dont miss the latest news and giveaways in our VK group.",
    color: "#4E7CFF",
    image: card_1,
  },
  {
    text: "To make the real Xs, you need to replenish the balance.",
    color: "#7033FF",
    image: card_2,
  },
  {
    text: "Put the nickname 'cs goru' & get 10% to replenish.",
    color: "#F65164",
    image: card_3,
  },
];
