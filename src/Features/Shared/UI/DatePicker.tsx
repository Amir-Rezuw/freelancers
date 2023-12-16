import persian from "react-date-object/calendars/persian";

import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";
import MultiDatePicker from "react-multi-date-picker";
interface IProps {
  label: string;
  date: Value;
  onChange: (date?: string) => void;
}

const DatePicker = ({ label, date, onChange }: IProps) => {
  return (
    <>
      <span className="mb-2 block text-primary-gray-700">
        {label} <span className="text-error">*</span>
      </span>
      <MultiDatePicker
        minDate={Date.now()}
        containerClassName="w-full"
        inputClass="text-input w-full"
        value={date}
        onChange={(date) => {
          if (!date) return;
          onChange(new Date(date.valueOf() as number).toISOString());
        }}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="top-right"
      />
    </>
  );
};

export default DatePicker;
