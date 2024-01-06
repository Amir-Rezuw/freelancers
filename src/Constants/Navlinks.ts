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
export const FreelancerPanelSidebar: {
  title: string;
  Icon: FC;
  link: string;
}[] = [
  {
    Icon: HiHome,
    link: "dashboard",
    title: "خانه",
  },
  {
    Icon: HiCollection,
    link: "projects",
    title: "پروژه ها",
  },
  {
    Icon: HiCollection,
    link: "proposals",
    title: "درخواست ها",
  },
];
