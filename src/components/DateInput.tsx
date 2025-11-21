import { validateDateField } from "../utils/validateDate";

interface DateInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  fieldName: "day" | "month" | "year";
}

export default function DateInput({ label, value, onChange, fieldName }: DateInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (validateDateField(fieldName, newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="font-bold text-neutral-grey-500 tracking-[0.15rem] ml-1 text-sm sm:text-lg">
        {label}
      </label>
      <input
        type="text"
        inputMode="numeric"
        onChange={handleChange}
        value={value}
        className="border-neutral-grey-200 border rounded-lg h-14 focus:outline-primary-purple focus:outline-1 font-bold text-3xl px-3 w-21 sm:w-30"
      />
    </div>
  );
}
