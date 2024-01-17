import { useSearchParams } from "react-router-dom";
import { IKeyValue } from "../../../Types/Shared/IKeyValue";

interface IProps<T> {
  options: T;
  filterField: string;
}

const FilterDropdown = <T extends IKeyValue[]>({
  options,
  filterField,
}: IProps<T>) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  return (
    <select
      className="text-input p-2 text-sm"
      value={value}
      onChange={(e) => {
        searchParams.set(filterField, e.target.value);
        if (e.target.value === "ALL") {
          searchParams.delete(filterField);
        }
        setSearchParams(searchParams);
      }}>
      {options.map((item) => {
        return (
          <option
            key={item.value}
            value={item.value}>
            {item.key}
          </option>
        );
      })}
    </select>
  );
};

export default FilterDropdown;
