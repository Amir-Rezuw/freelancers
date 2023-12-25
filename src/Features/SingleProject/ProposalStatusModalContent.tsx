import { useForm } from "react-hook-form";
import { Statuses } from "../../Constants/Enums/Shared";
import { MessagesText } from "../../Constants/Messages";
import { textService } from "../../Utils/TextAndNumber";
import Select from "../Shared/UI/Select";
interface IProps {
  id: string;
  closerFn: (value?: boolean) => void;
  status: Statuses;
}
const selectOptions = [
  {
    label: textService.getStatusText(Statuses.VERIFIED),
    value: Statuses.VERIFIED,
  },
  {
    label: textService.getStatusText(Statuses.PENDING),
    value: Statuses.PENDING,
  },
  {
    label: textService.getStatusText(Statuses.REJECTED),
    value: Statuses.REJECTED,
  },
];
const ProposalStatusModalContent = ({ status }: IProps) => {
  const { register, handleSubmit } = useForm<{ status: Statuses }>();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Select
          label="تغییر وضعیت"
          name="status"
          register={register}
          defaultValue={status}
          validation={{
            required: {
              message: MessagesText.RequiredFieldError,
              value: true,
            },
          }}
        >
          {selectOptions.map((item) => (
            <Select.Option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </Select.Option>
          ))}
        </Select>
        <button
          type="submit"
          className="btn btn-primary w-full mt-5"
        >
          تایید
        </button>
      </form>
    </div>
  );
};

export default ProposalStatusModalContent;
