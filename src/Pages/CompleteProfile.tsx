import CompleteProfileForm from "../Features/Authentication/CompleteProfileForm";

interface IProps {}

const CompleteProfile = ({}: IProps) => {
  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <CompleteProfileForm />
      </div>
    </div>
  );
};

export default CompleteProfile;
