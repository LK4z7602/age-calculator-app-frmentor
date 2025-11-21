import DateInput from "./DateInput";

interface DateInputsContainerProps {
  dateInputs: { day: string; month: string; year: string };
  onInputChange: (field: "day" | "month" | "year", value: string) => void;
}

export default function DateInputsContainer({ dateInputs, onInputChange }: DateInputsContainerProps) {
  const inputs = [
    { label: "DAY", field: "day" as const },
    { label: "MONTH", field: "month" as const },
    { label: "YEAR", field: "year" as const },
  ];

  return (
    <div className="flex justify-between sm:justify-start sm:gap-8">
      {inputs.map(({ label, field }) => (
        <DateInput
          key={field}
          label={label}
          value={dateInputs[field]}
          onChange={(value) => onInputChange(field, value)}
          fieldName={field}
        />
      ))}
    </div>
  );
}
