import { ReactNode } from "react";

interface IProps {
  isVisible: boolean;
  children: ReactNode;
}

const IsVisible = ({ children, isVisible }: IProps) => {
  if (isVisible) {
    return children;
  }
  return null;
};

export default IsVisible;
