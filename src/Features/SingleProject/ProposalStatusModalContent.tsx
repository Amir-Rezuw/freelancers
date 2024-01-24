import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { MessagesText } from "../../Constants/Enums/Messages";
import { Statuses } from "../../Constants/Enums/Shared";
import { ChangeStatus } from "../../Constants/SelectOptions";
import IsVisible from "../Shared/UI/IsVisible";
import Loading from "../Shared/UI/Loading";
import Select from "../Shared/UI/Select";
import useChangeProposalStatus from "./Hooks/useChangeProposalStatus";
interface IProps {
  id: string;
  closerFn: (value?: boolean) => void;
  status: Statuses;
}

const ProposalStatusModalContent = ({ status, id, closerFn }: IProps) => {
  const { projectId } = useParams();
  const { register, handleSubmit } = useForm<{ status: Statuses }>();
  const { changeStatus, isChanging } = useChangeProposalStatus();

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          changeStatus({
            id,
            status: data.status,
            projectId: projectId ?? "",
          });
          closerFn(false);
        })}>
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
          }}>
          {ChangeStatus.map((item) => (
            <Select.Option
              key={item.value}
              value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
        <button
          type="submit"
          className="btn btn-primary w-full mt-5">
          <IsVisible isVisible={isChanging}>
            <Loading />
          </IsVisible>
          <IsVisible isVisible={!isChanging}>تایید</IsVisible>
        </button>
      </form>
    </div>
  );
};

export default ProposalStatusModalContent;
