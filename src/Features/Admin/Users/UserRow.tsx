import { FC, useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { Statuses } from "../../../Constants/Enums/Shared";
import { IUser } from "../../../Types/Server/User";
import { textService } from "../../../Utils/TextAndNumber";
import useToggleState from "../../Shared/Hooks/useToggleState";
import Modal from "../../Shared/UI/Modal";
import StatusModalContent from "./StatusModalContent";

interface IProps {
  user: IUser;
  index: number;
}
const _CLASS_NAMES =
  "p-4 text-right whitespace-nowrap text-sm text-primary-gray-600";
const UserRow: FC<IProps> = ({ index, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModalState = (preferredState?: boolean) => {
    useToggleState(setIsModalOpen, preferredState);
  };
  return (
    <>
      <td className={`${_CLASS_NAMES} ${index === 0 && "rounded-tr-2xl"}`}>
        {index + 1}
      </td>
      <td className={_CLASS_NAMES}>{user.name}</td>
      <td className={_CLASS_NAMES}>{user.email}</td>
      <td className={_CLASS_NAMES}>{user.phoneNumber}</td>
      <td className={_CLASS_NAMES}>
        {textService.capitalizeFirstLetter(user.role)}
      </td>

      <td className={_CLASS_NAMES}>
        <span className={`badge ${textService.getStatusBadge(user.status)}`}>
          {textService.getStatusText(user.status)}
        </span>
      </td>
      <td className={`${_CLASS_NAMES} ${index === 0 && "rounded-tl-2xl"}`}>
        <Modal
          isOpen={isModalOpen}
          modalToggler={toggleModalState}
          modalHeaderTitle="تغییر وضعیت کاربر">
          <StatusModalContent
            userId={user._id}
            modalToggler={toggleModalState}
            userStatus={user.status}
          />
        </Modal>
        <button
          disabled={user.status === Statuses.CLOSE}
          onClick={() => toggleModalState()}>
          <MdAssignmentAdd
            className={`w-5 h-5 text-primary-blue-600 ${
              user.status === Statuses.CLOSE && "text-primary-blue-600/30"
            }`}
          />
        </button>
      </td>
    </>
  );
};

export default UserRow;
