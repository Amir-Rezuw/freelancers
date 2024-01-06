import { Navigate } from "react-router-dom";

const Home = () => {
  return <Navigate to={"/auth"} />;
};

export default Home;
