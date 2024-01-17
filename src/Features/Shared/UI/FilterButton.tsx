import { useSearchParams } from "react-router-dom";
import { IKeyValue } from "../../../Types/Shared/IKeyValue";

interface IProps<T> {
  options: T[];
  filterField: string;
}

const FilterButton = <T extends IKeyValue>({
  filterField,
  options,
}: IProps<T>) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border-primary-gray-100 bg-primary-gray-0 rounded-lg">
        {options.map(({ key, value }) => (
          <button
            className={`whitespace-nowrap rounded-md px-4 py-1.5 font-bold transition-all duration-75 ${
              currentFilter === value && "border-b border-b-warning"
            }`}
            disabled={currentFilter.toLowerCase() === value.toLowerCase()}
            onClick={() => {
              searchParams.set(filterField, value);
              if (value === "ALL") {
                searchParams.delete(filterField);
              }
              setSearchParams(searchParams);
            }}
            key={value}
            type="button">
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButton;
