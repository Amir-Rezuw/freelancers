import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toast";
import { MessagesText } from "../../../Constants/Enums/Messages";
import { Statuses } from "../../../Constants/Enums/Shared";
import { ChangeStatus } from "../../../Constants/SelectOptions";
import useErrorType from "../../Shared/Hooks/useErrorType";
import Select from "../../Shared/UI/Select";
import useChangeUserStatus from "../Hooks/useChangeUserStatus";

interface IProps {
  userId: string;
  modalToggler: (value?: boolean) => void;
  userStatus: Statuses;
}

const StatusModalContent: FC<IProps> = ({
  userId,
  modalToggler,
  userStatus,
}) => {
  const { register, handleSubmit, setError, formState } = useForm<{
    status: Statuses;
  }>();
  const { mutateAsync, isPending } = useChangeUserStatus();
  const submitForm = (data: { status: Statuses }) => {
    if (data.status === userStatus.toString()) {
      setError("status", {
        message: "کاربر در حال حاضر در وضعیت انتخاب شده قرار دارد.",
      });
      return;
    }
    mutateAsync(
      { id: userId, status: data.status },
      {
        onError: (error) => {
          toast.error(useErrorType(error));
        },
        onSuccess: () => {
          toast.success(MessagesText.StatusChangeSuccess);
          modalToggler(false);
        },
      }
    );
  };
  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={handleSubmit(submitForm)}>
      <Select
        defaultValue={userStatus}
        error={formState.errors.status?.message}
        label="تغییر وضعیت"
        register={register}
        name="status"
        validation={{
          required: {
            message: MessagesText.RequiredFieldError,
            value: true,
          },
        }}>
        {ChangeStatus.map((item) => {
          return (
            <Select.Option
              key={item.value}
              value={item.value}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select>
      <button
        disabled={isPending}
        className={`btn btn-primary ${isPending && "opacity-50"}`}
        type="submit">
        اعمال
      </button>
    </form>
  );
};

export default StatusModalContent;
