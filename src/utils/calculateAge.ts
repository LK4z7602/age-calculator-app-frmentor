export const calculateAge = (day: string, month: string, year: string): number[] => {
  const today = new Date();
  const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return [years, months, days];
};
