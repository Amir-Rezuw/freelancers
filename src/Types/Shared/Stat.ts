import { ReactNode } from "react";

const colors = {
  Blue: "bg-primary-blue-100 text-primary-blue-700",
  Success: "bg-green-100 text-green-700",
  Warning: "bg-yellow-100 text-yellow-700",
};

export interface IStat {
  Icon: ReactNode;
  count: string;
  title: string;
  color?: keyof typeof colors;
}
