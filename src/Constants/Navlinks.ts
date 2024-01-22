import { FC } from "react";
import { HiCollection, HiHome, HiUser, HiViewGrid } from "react-icons/hi";

type Sidebars = {
  title: string;
  Icon: FC;
  link: string;
};
export const OwnerPanelSideBar: Sidebars[] = [
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
export const FreelancerPanelSidebar: Sidebars[] = [
  {
    Icon: HiHome,
    link: "dashboard",
    title: "خانه",
  },
  {
    Icon: HiViewGrid,
    link: "projects",
    title: "پروژه ها",
  },
  {
    Icon: HiCollection,
    link: "proposals",
    title: "درخواست ها",
  },
];
export const AdminPanelSidebar: Sidebars[] = [
  {
    Icon: HiHome,
    link: "dashboard",
    title: "خانه",
  },
  {
    Icon: HiUser,
    link: "users",
    title: "کاربران",
  },
  {
    Icon: HiViewGrid,
    link: "projects",
    title: "پروژه ها",
  },
  {
    Icon: HiCollection,
    link: "proposals",
    title: "درخواست ها",
  },
];
