import { FC } from "react";
import { HiCollection, HiHome } from "react-icons/hi";

export const OwnerPanelSideBar: {
  title: string;
  Icon: FC;
  link: string;
}[] = [
  {
    Icon: HiHome,
    title: "خانه",
    link: "dashboard",
  },
  {
    Icon: HiCollection,
    title: "پروژه ها",
    link: "projects",
  },
];
