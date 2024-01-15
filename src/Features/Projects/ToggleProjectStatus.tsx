import { Statuses } from "../../Constants/Enums/Shared";
import { IProjects } from "../../Types/Server/Projects";
import { textService } from "../../Utils/TextAndNumber";
import IsVisible from "../Shared/UI/IsVisible";
import Loading from "../Shared/UI/Loading";
import Toggle from "../Shared/UI/Toggle";
import useToggleProjectStatus from "./Hooks/useToggleProjectStatus";

interface IProps {
  project: IProjects;
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
      <IsVisible isVisible={isToggling}>
        <Loading color="rgb(var(--primary-blue-900))" />
      </IsVisible>
      <IsVisible isVisible={!isToggling}>
        <Toggle
          isActive={project.status === Statuses.OPEN}
          label={textService.getStatusText(project.status)}
          onChange={onToggleStatus}
          disabled={isToggling}
        />
      </IsVisible>
    </div>
  );
};

export default ToggleProjectStatus;
