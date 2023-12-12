import { Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import useEscPress from "../Hooks/useEscPress";

interface IProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  modalToggler: (preferredValue?: boolean) => void;
  modalHeaderTitle?: string;
}

const Modal = ({
  isOpen = false,
  children,
  className,
  modalToggler,
  modalHeaderTitle = "header",
}: IProps) => {
  const portalElement = document.querySelector("#modal") as HTMLElement;
  useEscPress({
    callBack: () => modalToggler(false),
  });
  if (!isOpen) return null;
  return (
    <Fragment>
      {createPortal(
        <div
          className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-primary-gray-800 bg-opacity-30 z-40"
          onClick={() => modalToggler()}
        ></div>,
        portalElement
      )}
      {createPortal(
        <div
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-primary-gray-0 p-4 shadow-lg transition-all duration-500 ease-out z-50 ${className}`}
        >
          <div className="flex justify-between items-center pb-2 mb-6 border-b border-b-primary-gray-300">
            <button onClick={() => modalToggler()}>
              <IoCloseOutline className="w-5 h-5 text-primary-gray-500" />
            </button>
            <p className="text-primary-gray-700 font-bold text-base">
              {modalHeaderTitle}
            </p>
          </div>
          {children}
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
