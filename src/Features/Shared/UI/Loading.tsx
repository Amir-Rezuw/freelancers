import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";
interface IProps {
  height?: number;
  width?: number;
  radius?: number;
  color?: string;
}
const Loading: FC<IProps> = ({
  height = 30,
  width = 30,
  radius = 9,
  color = "rgb(var(--primary-gray-900))",
}) => {
  return (
    <>
      <ThreeDots
        height={height}
        width={width}
        radius={radius}
        color={color}
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
        }}
        visible
      />
    </>
  );
};

export default Loading;
