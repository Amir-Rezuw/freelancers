import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-primary-gray-0">
      <h1 className="text-xl font-bold text-primary-gray-700 mb-8">
        صفحه ای پیدا نشد
      </h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="flex items-center gap-x-2"
      >
        <HiArrowRight className="w-6 h-6 text-primary-blue-900" />
        <span className="text-primary-gray-700">بازگشت</span>
      </button>
    </div>
  );
};

export default NotFound;
