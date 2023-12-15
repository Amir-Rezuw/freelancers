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
};
