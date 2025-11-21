import "./globals.css";
import { useDateCalculator } from "./hooks/useDateCalculator";
import DateInputsContainer from "./components/DateInputsContainer";
import CalculateButton from "./components/CalculateButton";
import AgeDisplay from "./components/AgeDisplay";

function App() {
  const { dateInputs, handleInputChange, age, calculateAgeFromInputs, isFormValid } = useDateCalculator();

  return (
    <div className="bg-neutral-grey-100 h-dvh w-dvw flex justify-center items-center overflow-hidden">
      <main className="bg-neutral-white flex font-primary flex-col w-[92%] px-8 py-10 rounded-3xl rounded-br-[150px] mt-[-50px] lg:w-[60%] 2xl:w-[40%]">
        <DateInputsContainer dateInputs={dateInputs} onInputChange={handleInputChange} />

        <div className="flex py-9 relative lg:py-4">
          <hr className="border-0.5 border-neutral-grey-200 my-10 w-full" />
          <CalculateButton onClick={calculateAgeFromInputs} disabled={!isFormValid} />
        </div>

        <AgeDisplay years={age.years} months={age.months} days={age.days} />
      </main>
    </div>
  );
}

export default App;
