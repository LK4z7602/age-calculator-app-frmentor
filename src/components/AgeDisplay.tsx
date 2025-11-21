interface AgeDisplayProps {
  years: string;
  months: string;
  days: string;
}

export default function AgeDisplay({ years, months, days }: AgeDisplayProps) {
  const ageItems = [
    { value: years, label: "years", size: "text-6xl sm:text-7xl lg:text-8xl" },
    { value: months, label: "months", size: "text-5xl sm:text-7xl lg:text-8xl" },
    { value: days, label: "days", size: "text-6xl sm:text-7xl lg:text-8xl" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {ageItems.map((item) => (
        <p key={item.label} className={`font-extrabold italic text-neutral-black ${item.size}`}>
          <span className="text-primary-purple">{item.value}</span> {item.label}
        </p>
      ))}
    </div>
  );
}
