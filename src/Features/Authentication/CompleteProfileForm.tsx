import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toast";
import { UserTypes } from "../../Constants/Enums/Shared";
import { MessagesText } from "../../Constants/Messages";
import { ICompleteProfileRequiredData } from "../../Types/Server/User";
import useErrorType from "../Shared/Hooks/useErrorType";
import LabeledInput from "../Shared/UI/LabeledInput";
import Loading from "../Shared/UI/Loading";
import Radio from "../Shared/UI/Radio";
import useCompleteProfile from "./Hooks/useCompleteProfile";
interface IFormData {
  name: string;
  email: string;
  role: UserTypes;
}
const CompleteProfileForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormData>();

  const { mutateAsync, isPending } = useCompleteProfile();
  const onCompleteProfileSubmit = async ({ email, name, role }: IFormData) => {
    const data: ICompleteProfileRequiredData = {
      email,
      name,
      role,
    };
    try {
      const response = await mutateAsync(data);
      toast.success(response.data.message ?? "موفق");
      navigate(`/${role.toString().toLowerCase()}`);
    } catch (error) {
      toast.error(useErrorType(error));
    }
  };

  return (
    <form
      className="space-y-8"
      onSubmit={handleSubmit(onCompleteProfileSubmit)}
    >
      <div>
        <LabeledInput
          register={register}
          dir="rtl"
          label="نام و نام خانوادگی"
          name="name"
          error={errors.name?.message}
          validation={{
            required: MessagesText.RequiredFieldError,
          }}
          type="text"
        />
      </div>

      <div>
        <LabeledInput
          register={register}
          dir="ltr"
          label="ایمیل"
          name="email"
          type="email"
          error={errors.email?.message}
          validation={{
            required: MessagesText.RequiredFieldError,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: MessagesText.EmailFormatError,
            },
          }}
        />
      </div>
      <div className="flex items-center gap-x-7">
        <Radio
          watch={watch}
          errorMessage={errors.role?.message}
          name="role"
          label="کارفرما"
          value={UserTypes.owner}
          register={register}
          validation={{
            required: MessagesText.RequiredFieldError,
          }}
        />

        <Radio
          errorMessage={errors.role?.message}
          watch={watch}
          name="role"
          value={UserTypes.freelancer}
          label="فریلنسر"
          register={register}
          validation={{ required: MessagesText.RequiredFieldError }}
        />
      </div>
      <button
        className="btn btn-primary w-full"
        type="submit"
        disabled={isPending}
      >
        {isPending ? <Loading /> : "تایید"}
      </button>
    </form>
  );
};

export default CompleteProfileForm;
