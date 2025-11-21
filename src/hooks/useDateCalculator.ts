import { useState } from "react";
import { calculateAge } from "../utils/calculateAge";
import { isValidCompleteDate } from "../utils/validateDate";

export const useDateCalculator = () => {
  const [dateInputs, setDateInputs] = useState({ day: "", month: "", year: "" });
  const [age, setAge] = useState({ years: "-", months: "-", days: "-" });

  const handleInputChange = (field: keyof typeof dateInputs, value: string) => {
    setDateInputs((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = isValidCompleteDate(dateInputs.day, dateInputs.month, dateInputs.year);

  const calculateAgeFromInputs = () => {
    if (!isFormValid) return;

    const [years, months, days] = calculateAge(
      dateInputs.day,
      dateInputs.month,
      dateInputs.year
    );
    setAge({
      years: years.toString(),
      months: months.toString(),
      days: days.toString(),
    });
  };

  return { dateInputs, handleInputChange, age, calculateAgeFromInputs, isFormValid };
};
