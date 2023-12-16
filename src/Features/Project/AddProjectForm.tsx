import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Value } from "react-multi-date-picker";
import { TagsInput } from "react-tag-input-component";
import { MessagesText } from "../../Constants/Messages";
import { textService } from "../../Utils/TextAndNumber";
import DatePicker from "../Shared/UI/DatePicker";
import LabeledInput from "../Shared/UI/LabeledInput";
import Select from "../Shared/UI/Select";
import Textarea from "../Shared/UI/Textarea";
interface IFormData {
  title: string;
  description: string;
  budget: number;
  category: string;
}
const AddProjectForm = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [date, setDate] = useState<Value>(new Date());
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
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
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
          <Select
            label="دسته بندی"
            name="category"
            options={[]}
            register={register}
            validation={{}}
          />
          <div className=" flex flex-col justify-between ">
            <label htmlFor="tags">تگ ها</label>
            <TagsInput
              value={tags}
              onChange={setTags}
            />
          </div>
          <DatePicker
            date={date}
            label="مهلت"
            setDate={setDate}
          />
          <div className="col-span-2">
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
      </div>
      <button className="btn btn-primary">افزودن</button>
    </form>
  );
};

export default AddProjectForm;
