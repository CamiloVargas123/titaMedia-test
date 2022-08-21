import moment from "moment";
interface format {
  date: string
  format: string
}
export function formatDate({date, format}:format) {
  return moment(date).format(format)
}