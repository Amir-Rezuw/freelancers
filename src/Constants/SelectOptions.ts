import { textService } from "../Utils/TextAndNumber";
import { Statuses } from "./Enums/Shared";

export const ChangeStatus = [
  {
    label: textService.getStatusText(Statuses.VERIFIED),
    value: Statuses.VERIFIED,
  },
  {
    label: textService.getStatusText(Statuses.PENDING),
    value: Statuses.PENDING,
  },
  {
    label: textService.getStatusText(Statuses.REJECTED),
    value: Statuses.REJECTED,
  },
];
