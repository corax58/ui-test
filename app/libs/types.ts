import { StaticImageData } from "next/image";

export type Gun = {
  name: string;
  star: boolean;
  image: StaticImageData;
  condition: string;
  score: number;
  accentColor: string;
};
