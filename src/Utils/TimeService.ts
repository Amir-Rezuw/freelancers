export const timeService = {
  convertIsoToPersian(isoDate: string): string {
    return new Date(isoDate).toLocaleDateString("fa-IR");
  },
};
