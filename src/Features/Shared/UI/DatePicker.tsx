import { Dispatch, SetStateAction } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";
import MultiDatePicker from "react-multi-date-picker";
interface IProps {
  label: string;
  date: Value;
  setDate: Dispatch<SetStateAction<Value>>;
}

const DatePicker = ({ label, date, setDate }: IProps) => {
  return (
    <div>
      <span className="mb-2 block text-primary-gray-700">{label}</span>
      <MultiDatePicker
        containerClassName="w-full"
        inputClass="text-input"
        value={date}
        onChange={setDate}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="left-center"
      />
    </div>
  );
};

export default DatePicker;
