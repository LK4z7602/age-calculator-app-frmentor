export const validateDay = (value: string): boolean => {
  if (value === "") return true;
  const regex = /^(\d{1,2})$/;
  if (!regex.test(value)) return false;
  const day = parseInt(value);
  return day >= 1 && day <= 31;
};

export const validateMonth = (value: string): boolean => {
  if (value === "") return true;
  const regex = /^(\d{1,2})$/;
  if (!regex.test(value)) return false;
  const month = parseInt(value);
  return month >= 1 && month <= 12;
};

export const validateYear = (value: string): boolean => {
  if (value === "") return true;

  // Permite digitar até 4 dígitos
  const regex = /^\d{0,4}$/;
  if (!regex.test(value)) return false;

  // Só valida ano real quando houver 4 dígitos
  if (value.length < 4) return true;

  const year = parseInt(value);
  const currentYear = new Date().getFullYear();

  return year >= 1900 && year <= currentYear;
};

export const validateDateField = (field: string, value: string): boolean => {
  if (value === "") return true;
  switch (field) {
    case "day":
      return validateDay(value);
    case "month":
      return validateMonth(value);
    case "year":
      return validateYear(value);
    default:
      return false;
  }
};

export const isValidCompleteDate = (day: string, month: string, year: string): boolean => {
  if (!day || !month || !year) return false;

  const isValidDay = validateDay(day);
  const isValidMonth = validateMonth(month);
  const isValidYear = validateYear(year) && year.length === 4;

  if (!isValidDay || !isValidMonth || !isValidYear) return false;

  // Validar data real (ex: fevereiro não tem 30 dias)
  const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return (
    birthDate.getDate() === parseInt(day) &&
    birthDate.getMonth() === parseInt(month) - 1 &&
    birthDate.getFullYear() === parseInt(year)
  );
};
