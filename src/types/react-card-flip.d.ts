// types/react-card-flip.d.ts
declare module "react-card-flip" {
  import * as React from "react";

  export interface ReactCardFlipProps {
    isFlipped: boolean;
    flipDirection?: "horizontal" | "vertical";
    infinite?: boolean;
    containerClassName?: string;
    children?: React.ReactNode; // expects two children (front/back)
  }

  export default class ReactCardFlip extends React.Component<ReactCardFlipProps> {}
}
