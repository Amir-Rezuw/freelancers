import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toast";
import { MessagesText } from "../../../Constants/Enums/Messages";
import { IAddingProposalData } from "../../../Types/Server/Proposal";
import { textService } from "../../../Utils/TextAndNumber";
import useErrorType from "../../Shared/Hooks/useErrorType";
import LabeledInput from "../../Shared/UI/LabeledInput";
import Loading from "../../Shared/UI/Loading";
import Textarea from "../../Shared/UI/Textarea";
import useCreateProposal from "../Hooks/useCreateProposal";

type IFormData = {
  description: string;
  price: string;
  duration: number;
};
interface IProps {
  modalToggler: (preferredValue?: boolean) => void;
  projectId: string;
}
const CreateProposal = ({ projectId, modalToggler }: IProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormData>();
  const { mutateAsync, isPending } = useCreateProposal();
  const sendProposal = (data: IFormData) => {
    const dataWithProjectId: IAddingProposalData = {
      ...data,
      projectId,
      price: +data.price.split(",").join(""),
      duration: +data.duration,
    };

    mutateAsync(dataWithProjectId, {
      onSettled: () => {
        modalToggler(false);
      },
      onSuccess: (data) => {
        toast.success(data.data.message);
      },
      onError: (error) => {
        toast.error(useErrorType(error));
      },
    });
  };
  return (
    <form
      className="grid grid-cols-2 gap-x-4 gap-y-2"
      onSubmit={handleSubmit(sendProposal)}>
      <LabeledInput
        dir="ltr"
        className="w-full"
        label="بودجه"
        name="price"
        register={register}
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const formattedValue = textService.addCommas(e.target.value);
          e.target.value = formattedValue;
        }}
        error={errors.price?.message}
        validation={{
          required: MessagesText.RequiredFieldError,
        }}
        labelAfters="after:absolute after:content-['تومان'] after:top-[3rem] after:text-xs after:right-5"
      />
      <LabeledInput
        dir="ltr"
        className="w-full"
        label="مدت زمان"
        name="duration"
        register={register}
        type="number"
        error={errors.duration?.message}
        validation={{
          required: MessagesText.RequiredFieldError,
        }}
        labelAfters="after:absolute after:content-['روز'] after:top-[3rem] after:right-5 after:text-xs after:text-primary-gray-900"
      />
      <div className="col-span-2">
        <Textarea
          dir="rtl"
          label="توضیحات"
          name="description"
          register={register}
          required
          error={errors.description?.message}
          validation={{
            required: MessagesText.RequiredFieldError,
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary text-primary-gray-900 col-start-2"
        disabled={isPending}>
        {isPending ? <Loading width={45} /> : "ارسال"}
      </button>
    </form>
  );
};

export default CreateProposal;
