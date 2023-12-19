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
import useEditProject from "./Hooks/useEditProject";
import useGetCategoryList from "./Hooks/useGetCategoryList";

const AddProjectForm = ({
  modalStateSetterFn,
  defaultValues,
  id,
}: {
  modalStateSetterFn: Dispatch<SetStateAction<boolean>>;
  defaultValues?: IAddProjectRequiredData;
  id?: string;
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddProjectRequiredData>();
  const { data } = useGetCategoryList();
  const { addProject, isAdded, isAdding } = useAddProject();
  const { editProject, isEdited, isEditing } = useEditProject();
  const onSubmit = (data: IAddProjectRequiredData) => {
    const serverData = {
      ...data,
      budget: +(data.budget as string).split(",").join(""),
    };
    if (defaultValues && id) {
      editProject({ data: serverData, id });
    } else {
      addProject(serverData);
    }
  };
  useEffect(() => {
    if (isAdded || isEdited) {
      modalStateSetterFn(false);
      reset();
    }
  }, [isAdded, isEdited]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-5"
    >
      <div className="flex flex-col gap-y-3">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <LabeledInput
            value={defaultValues?.title}
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
            value={defaultValues?.budget.toString()}
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
            defaultValue={defaultValues?.category._id}
            validation={{
              required: MessagesText.RequiredFieldError,
              value: defaultValues?.category._id,
            }}
            error={errors.category?.message}
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
              defaultValue={defaultValues?.tags}
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
              defaultValue={defaultValues?.deadline}
              rules={{ required: MessagesText.RequiredFieldError }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <DatePicker
                  date={value}
                  label="مهلت"
                  onChange={onChange}
                  error={error?.message}
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
              defaultValue={defaultValues?.description}
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
        disabled={isAdding || isEditing}
      >
        {isAdding || isEditing ? (
          <Loading />
        ) : defaultValues ? (
          "ویرایش"
        ) : (
          "افزودن"
        )}
      </button>
    </form>
  );
};

export default AddProjectForm;
