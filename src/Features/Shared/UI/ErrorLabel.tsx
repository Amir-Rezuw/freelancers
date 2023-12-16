interface IProps {
  message: string;
}

const ErrorLabel = ({ message }: IProps) => {
  return <div className="text-error text-xs">{message}</div>;
};

export default ErrorLabel;
