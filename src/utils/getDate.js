export function getDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const day = newDate.getDay();
  const daylist = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  const formatedDay = daylist[day];
  const formatedMonth = month.toString().padStart(2, "0");

  const formatedDate = `${year}. ${formatedMonth}. ${date}. ${formatedDay}`;
  return formatedDate;
};