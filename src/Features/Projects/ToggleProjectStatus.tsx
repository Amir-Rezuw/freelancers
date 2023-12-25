import { Statuses } from "../../Constants/Enums/Shared";
import { IOwnerProjects } from "../../Types/Server/Projects";
import { textService } from "../../Utils/TextAndNumber";
import Toggle from "../Shared/UI/Toggle";
import useToggleProjectStatus from "./Hooks/useToggleProjectStatus";

interface IProps {
  project: IOwnerProjects;
}

const ToggleProjectStatus = ({ project }: IProps) => {
  const { isToggling, toggleStatus } = useToggleProjectStatus();
  const onToggleStatus = () => {
    const nextStatus =
      project.status === Statuses.OPEN ? Statuses.CLOSE : Statuses.OPEN;
    toggleStatus({ data: { status: nextStatus }, id: project._id });
  };
  return (
    <div className="w-[5rem]">
      <Toggle
        isActive={project.status === Statuses.OPEN}
        label={textService.getStatusText(project.status)}
        onChange={onToggleStatus}
        disabled={isToggling}
      />
    </div>
  );
};

export default ToggleProjectStatus;
