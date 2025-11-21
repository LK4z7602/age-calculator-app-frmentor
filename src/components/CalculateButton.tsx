import ArrowIcon from "/assets/images/icon-arrow.svg";

interface CalculateButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export default function CalculateButton({ onClick, disabled }: CalculateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full cursor-pointer p-4 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:left-auto lg:right-0 lg:translate-x-0 transition duration-200 ease-in-out ${
        disabled
          ? "bg-neutral-grey-200 cursor-not-allowed opacity-100"
          : "bg-primary-purple hover:bg-black"
      }`}
    >
      <img src={ArrowIcon} alt="Calculate" />
    </button>
  );
}
