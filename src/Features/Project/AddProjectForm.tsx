import {
  ChangeEvent,
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
} from "react";
import { Controller, useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import { MessagesText } from "../../Constants/Messages";
import { IAddProjectRequiredData } from "../../Types/Server/Projects";
import { textService } from "../../Utils/TextAndNumber";
import DatePicker from "../Shared/UI/DatePicker";
import LabeledInput from "../Shared/UI/LabeledInput";
import Loading from "../Shared/UI/Loading";
import Select from "../Shared/UI/Select";
import Textarea from "../Shared/UI/Textarea";
import useAddProject from "./Hooks/useAddProject";
import useGetCategoryList from "./Hooks/useGetCategoryList";

const AddProjectForm = ({
  modalStateSetterFn,
}: {
  modalStateSetterFn: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddProjectRequiredData>();
  const { data } = useGetCategoryList();
  const { mutateAsync, isPending, isSuccess } = useAddProject();
  const onSubmit = (data: IAddProjectRequiredData) => {
    const serverData = {
      ...data,
      budget: +(data.budget as string).split(",").join(""),
    };
    mutateAsync(serverData);
  };
  useEffect(() => {
    if (isSuccess) {
      modalStateSetterFn(false);
    }
  }, [isSuccess]);
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
            label="بودجه به تومان"
            name="budget"
            register={register}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const formattedValue = textService.addCommas(e.target.value);

              e.target.value = formattedValue;
            }}
            error={errors.budget?.message}
            validation={{
              required: MessagesText.RequiredFieldError,
            }}
          />

          <Select
            label="دسته بندی"
            name="category"
            register={register}
            validation={{ required: MessagesText.RequiredFieldError }}
          >
            {data?.data.categories.map((item) => (
              <Fragment key={item._id}>
                <Select.Option value={item._id}>{item.title}</Select.Option>
              </Fragment>
            ))}
          </Select>

          <div className=" flex flex-col justify-between ">
            <label htmlFor="tags">تگ ها</label>
            <Controller
              control={control}
              name="tags"
              render={({ field: { onChange, value } }) => {
                return (
                  <TagsInput
                    value={value ?? []}
                    onChange={onChange}
                  />
                );
              }}
            />
          </div>
          <div className="col-span-2">
            <Controller
              control={control}
              name="deadline"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  date={value}
                  label="مهلت"
                  onChange={onChange}
                />
              )}
            />
          </div>
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
      <button
        className="btn btn-primary"
        disabled={isPending}
      >
        {isPending ? <Loading /> : "افزودن"}
      </button>
    </form>
  );
};

export default AddProjectForm;
