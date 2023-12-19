interface IProps {
  message: string;
  className?: string;
}

const ErrorLabel = ({ message, className }: IProps) => {
  return <div className={`text-error text-xs ${className}`}>{message}</div>;
};

export default ErrorLabel;
