import { Statuses } from "../Constants/Enums/Shared";

export const textService = {
  truncateText: (str: string, length: number) => {
    if (str.length < length) return str;
    return str.slice(0, length) + "...";
  },
  persianToEN: (digit: string | number) => {
    return digit
      .toString()
      .replace(/[۰-۹]/g, (item) => "۰۱۲۳۴۵۶۷۸۹".indexOf(item).toString());
  },
  addCommas: (digit: string) => {
    const numericValue = `${digit}`.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedValue;
  },
  getStatusText: (status: Statuses) => {
    switch (status) {
      case Statuses.CLOSE:
        return "بسته";
      case Statuses.OPEN:
        return "باز";
      case Statuses.PENDING:
        return "در انتظار";
      case Statuses.REJECTED:
        return "رد";
      case Statuses.VERIFIED:
        return "تایید";
    }
  },
  getStatusBadge: (status: Statuses) => {
    switch (status) {
      case Statuses.CLOSE:
        return "badge--primary";
      case Statuses.OPEN:
        return "badge--primary";
      case Statuses.PENDING:
        return "badge--secondary";
      case Statuses.REJECTED:
        return "badge--danger";
      case Statuses.VERIFIED:
        return "badge--success";
    }
  },
};
