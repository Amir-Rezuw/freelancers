import { useForm } from "react-hook-form";
import LabeledInput from "../Shared/UI/LabeledInput";
interface IFormData {
  title: string;
}
const AddProjectForm = () => {
  const { register, handleSubmit } = useForm<IFormData>();
  const onSubmit = (data: IFormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabeledInput
        inputDirection="rtl"
        name="title"
        label="عنوان پروژه"
        type="text"
        register={register}
      />
    </form>
  );
};

export default AddProjectForm;
