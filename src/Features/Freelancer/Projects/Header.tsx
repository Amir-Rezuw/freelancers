import { Statuses } from "../../../Constants/Enums/Shared";
import { _SORTS } from "../../../Constants/Sortings";
import useGetCategoryList from "../../Shared/Hooks/useGetCategoryList";
import FilterButton from "../../Shared/UI/FilterButton";
import FilterDropdown from "../../Shared/UI/FilterDropdown";
const StatusOptions = [
  {
    key: "همه",
    value: `${Statuses.ALL}`,
  },
  {
    key: "باز",
    value: `${Statuses.OPEN}`,
  },
  {
    key: "بسته",
    value: `${Statuses.CLOSE}`,
  },
];
const FreelancerProjectsHeader = () => {
  const { data } = useGetCategoryList();
  const selectOptions = data?.data.categories.map((item) => ({
    ...item,
    key: item.title,
    value: item.englishTitle,
  }));
  return (
    <div className="flex items-center justify-between text-primary-gray-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>

      <div className="flex gap-x-4">
        <FilterButton
          filterField="status"
          options={StatusOptions}
        />
        <FilterDropdown
          options={_SORTS}
          filterField="sort"
        />
        <FilterDropdown
          options={[{ key: "همه", value: "ALL" }, ...(selectOptions ?? [])]}
          filterField="category"
        />
      </div>
    </div>
  );
};

export default FreelancerProjectsHeader;
