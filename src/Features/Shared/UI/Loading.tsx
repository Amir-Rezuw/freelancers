import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <ThreeDots
        height={30}
        width={30}
        radius={9}
        color="rgb(var(--primary-gray-900))"
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
