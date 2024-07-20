"use client";
import { MdCancelPresentation } from "react-icons/md";
import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };
  const handledelet = () => {
    setInput("");
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Display value={input} />
      <div className="grid grid-cols-4 gap-4 mt-4">
        {["7", "8", "9", "/"].map((val) => (
          <Button key={val} value={val} onClick={handleClick} />
        ))}
        {["4", "5", "6", "*"].map((val) => (
          <Button key={val} value={val} onClick={handleClick} />
        ))}
        {["1", "2", "3", "-"].map((val) => (
          <Button key={val} value={val} onClick={handleClick} />
        ))}
        {["0", ".", "=", "+"].map((val) => (
          <Button key={val} value={val} onClick={handleClick} />
        ))}
        <button
          className="flex justify-center items-center w-[100%] p-2 text-3xl  text-white bg-red-500"
          onClick={handledelet}
        >
          <MdCancelPresentation className=" border-2 border-black" />
        </button>
      </div>
    </div>
  );
};

export default Calculator;
