import { ImFilesEmpty } from "react-icons/im";
import { MessagesText } from "../../../Constants/Messages";

const Empty = () => {
  return (
    <div className="w-full h-full text-center flex flex-col justify-center items-center text-primary-gray-900 gap-y-10">
      <ImFilesEmpty className="w-11/12 h-64 text-primary-gray-900" />
      <h2>{MessagesText.EmptyList}</h2>
    </div>
  );
};

export default Empty;
