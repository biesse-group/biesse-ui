import { type Dayjs } from "dayjs";

export function useUniqueDates(dateFrom: Dayjs, dateTo: Dayjs, format = "DD MMMM YYYY") {
  const formattedDates = [dateFrom, dateTo]
    .filter((d) => !Number.isNaN(d.unix()))
    .map((d) => d?.format(format));

  if (formattedDates.length === 1 || formattedDates[0] === formattedDates[1]) {
    return formattedDates.slice(0, 1);
  } else {
    return formattedDates;
  }
}
