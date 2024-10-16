import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export type Gun = {
  id: number;
  name: string;
  star: boolean;
  image: StaticImageData;
  condition: string;
  score: number;
  accentColor: string;
};

export type stat = {
  name: string;
  characterImage: StaticImageData;
  firstWeaponImage: StaticImageData;
  firstPrice: number;
  secondWeaponImage?: StaticImageData;
  secondPrice?: number;
  increase?: number;
  involved: boolean;
};

export type message = {
  name: string;
  profilePicture: StaticImageData;
  message: string;
  icon?: ReactElement;
  time: string;
  number: number;
};
