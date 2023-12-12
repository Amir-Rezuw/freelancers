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
  addCommas: (digit: string | number) => {
    const numericValue = +digit;
    return numericValue.toLocaleString();
  },
};
