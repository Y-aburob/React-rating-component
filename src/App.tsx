import { useState } from "react";
import "./App.css";
import StarSVG from "./assets/StarSVG.tsx";
import Phone from "./assets/Phone.tsx";

export default function App() {
  const [checked, setChecked] = useState(false);
  const [number, setNumber] = useState(0);
  const [thanksNumber, setthanksNumber] = useState(0);
  const [submit, setSubmit] = useState(false);

  const check = (e) => {
    if (checked === true) {
      setChecked(false);
      // alert('not checked!')
      setNumber(0);
    } else {
      setChecked(true);
      setNumber(parseInt(e.target.value));
      setthanksNumber(parseInt(e.target.value));
      // alert(`checked! ${e.target.value}`)
    }
  };

  const final = () => {
    if (number > 0) {
      // alert(`you chicked ${number}`)
      setChecked(false);
      setSubmit(true);
    } else {
      alert("please rate us first!");
      setSubmit(false);
    }
  };

  const reset = () => {
    setNumber(0);
    setSubmit(false);
  };

  return (
    <section
      className={`bg-[#131518] flex justify-center items-center h-screen p-8 relative`}
    >
      <div
        className="
        absolute w-full
        py-8 px-4 min-h-[300px]
        rounded-xl
        flex flex-col text-center items-center gap-4
        transition-all
        duration-500
        m-auto"
      >
        <div
          className={`
        gradiant max-w-[380px]
        py-8 px-4 min-h-[300px]
        rounded-3xl
        flex flex-col text-center items-center gap-4
        transition-all
        duration-500
        m-auto
        
        ${submit ? "scaleBig" : "scaleHidden"}
        
      `}
        >
          <Phone />
          <h3 className="text-[#FC7614] bg-[#262E38] p-3 rounded-full text-[14px] mt-3">
            You selected {thanksNumber} out of 5
          </h3>
          <h1 className="text-[#FFF] text-[24px] font-bold">Thank you!</h1>
          <p className="text-[#969FAD] text-[14px]">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
          <button
            onClick={reset}
            className="w-full transition-all duration-500 bg-[#FC7614] mt-4 p-2 rounded-xl hover:bg-[#FFF] uppercase font-medium hover:-translate-y-1"
          >
            Thanks
          </button>
        </div>
      </div>

      <div
        className={`
        gradiant w-full max-w-[380px]
        py-8 px-4 min-h-[300px]
        rounded-3xl
        flex flex-col gap-4
        transition-all
        duration-500
        ${submit ? "scaleHidden" : "scaleBig"}
        `}
      >
        <div className=" transition-all duration-500 p-4 rounded-full bg-[#303a46] w-fit hover:cursor-pointer flipmain hover:bg-[#394654]">
          <StarSVG />
        </div>
        <h1 className="text-[#FFF] text-[24px] font-bold">How did we do?</h1>

        <p className="text-[#969FAD] text-[14px]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-4 sm:justify-start">
          <label
            htmlFor="1"
            className={`${
              number === 1 ? "checkedGreen" : ""
            } text-[#969FAD] move bg-[#303a46] font-medium rounded-full py-2 px-4 sm:px-5 sm:py-3 text-[14px] hover:bg-[#FC7614] hover:text-black cursor-pointer`}
          >
            1
          </label>
          <input
            className="hidden"
            type="checkbox"
            name=""
            value="1"
            checked={checked}
            id="1"
            onChange={(e) => check(e)}
          />

          <label
            htmlFor="2"
            className={`${
              number === 2 ? "checkedGreen" : ""
            } text-[#969FAD] move bg-[#303a46] font-medium rounded-full py-2 px-4 sm:px-5 sm:py-3 text-[14px] hover:bg-[#FC7614] hover:text-black cursor-pointer`}
          >
            2
          </label>
          <input
            className="hidden"
            type="checkbox"
            name=""
            value="2"
            checked={checked}
            id="2"
            onChange={(e) => check(e)}
          />

          <label
            htmlFor="3"
            className={`${
              number === 3 ? "checkedGreen" : ""
            } text-[#969FAD] move bg-[#303a46] font-medium rounded-full py-2 px-4 sm:px-5 sm:py-3 text-[14px] hover:bg-[#FC7614] hover:text-black cursor-pointer`}
          >
            3
          </label>
          <input
            className="hidden"
            type="checkbox"
            name=""
            value="3"
            checked={checked}
            id="3"
            onChange={(e) => check(e)}
          />

          <label
            htmlFor="4"
            className={`${
              number === 4 ? "checkedGreen" : ""
            } text-[#969FAD] move bg-[#303a46] font-medium rounded-full py-2 px-4 sm:px-5 sm:py-3 text-[14px] hover:bg-[#FC7614] hover:text-black cursor-pointer`}
          >
            4
          </label>
          <input
            className="hidden"
            type="checkbox"
            name=""
            value="4"
            checked={checked}
            id="4"
            onChange={(e) => check(e)}
          />

          <label
            htmlFor="5"
            className={`${
              number === 5 ? "checkedGreen" : ""
            } text-[#969FAD] move bg-[#303a46] font-medium rounded-full py-2 px-4 sm:px-5 sm:py-3 text-[14px] hover:bg-[#FC7614] hover:text-black cursor-pointer`}
          >
            5
          </label>
          <input
            className="hidden"
            type="checkbox"
            name=""
            value="5"
            checked={checked}
            id="5"
            onChange={(e) => check(e)}
          />
        </div>
        <button
          onClick={final}
          className="w-full transition-all duration-500 bg-[#FC7614] mt-4 p-2 rounded-xl hover:bg-[#FFF] uppercase font-medium hover:-translate-y-1"
        >
          Submit
        </button>
      </div>
    </section>
  );
}
