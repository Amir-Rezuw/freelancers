interface IProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  isConfirmButtonDisabled?: boolean;
}

const ConfirmDelete = ({
  title,
  onCancel,
  onConfirm,
  isConfirmButtonDisabled = true,
}: IProps) => {
  return (
    <>
      <h2 className="font-bold text-base mb-8">
        <span>آیا از حذف </span>
        <span>{title}</span>
        <span>مطمعن هستید؟</span>
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          onClick={onConfirm}
          className={`btn btn-danger flex-1 ${
            isConfirmButtonDisabled &&
            "border-opacity-50 text-opacity-50 cursor-not-allowed"
          }`}
          disabled={isConfirmButtonDisabled}
        >
          بله، حذف شود
        </button>
        <button
          onClick={onCancel}
          className="btn btn-primary flex-1"
        >
          خیر، حذف نشود
        </button>
      </div>
    </>
  );
};

export default ConfirmDelete;
