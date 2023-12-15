import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { MessagesText } from "../../Constants/Messages";
import { textService } from "../../Utils/TextAndNumber";
import LabeledInput from "../Shared/UI/LabeledInput";
import Textarea from "../Shared/UI/Textarea";
interface IFormData {
  title: string;
  description: string;
  budget: number;
}
const AddProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit = (data: IFormData) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-5"
    >
      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between gap-x-4">
          <LabeledInput
            className="w-full"
            dir="rtl"
            name="title"
            label="عنوان پروژه"
            type="text"
            register={register}
            error={errors.title?.message}
            validation={{
              required: MessagesText.RequiredFieldError,
            }}
          />

          <LabeledInput
            dir="ltr"
            className="w-full"
            label="بودجه"
            name="budget"
            register={register}
            type="text"
            error={errors.budget?.message}
            validation={{
              required: MessagesText.RequiredFieldError,
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const formattedValue = textService.addCommas(e.target.value);

              e.target.value = formattedValue;
            }}
          />
        </div>
        <div>
          <Textarea
            dir="rtl"
            label="توضیحات"
            name="description"
            register={register}
            type="text"
            error={errors.description?.message}
            validation={{
              required: "پس توضیحات؟ 🗿",
            }}
          />
        </div>
      </div>
      <button className="btn btn-primary">افزودن</button>
    </form>
  );
};

export default AddProjectForm;
