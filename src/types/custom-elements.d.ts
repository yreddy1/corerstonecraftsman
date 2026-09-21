import type { HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": HTMLAttributes<HTMLElement> & { id: string };
    }
  }
}
