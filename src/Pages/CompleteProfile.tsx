import CompleteProfileForm from "../Features/Authentication/CompleteProfileForm";

interface IProps {}

const CompleteProfile = ({}: IProps) => {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center">
        <div className="w-full sm:max-w-sm">
          <CompleteProfileForm />
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
