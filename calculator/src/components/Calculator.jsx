import React, { useState } from "react";
import { evaluate, round } from "mathjs";
import Display from "./Display/Display";
import Buttons from "./Buttons/Buttons";

function Calculator() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const inputHandler = (event) => {
    if (answer === "Invalid Input!!") return;
    let val = event.target.innerText;
    let str = input + val;
    if (str.length > 14) return;
    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
  };

  const clearInput = () => {
    setInput("");
    setAnswer("");
  };

  //calculate the answer
  const calculateAns = () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;
    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");
    try {
      result = evaluate(finalexpression); 
    } catch (error) {
      result = "Invalid Input!!"; 
    }
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  };

  //coding backspace key to delete the last input
  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  //coding changePlusMinus key to change the sign of the last input
  const changePlusMinus = () => {
    if (answer === "Invalid Input!!") return;
    else if (answer !== "") {
      let ans = answer.toString();
      if (ans.charAt(0) === "-") {
        let plus = "+";
        setInput(plus.concat(ans.slice(1, ans.length)));
      } else if (ans.charAt(0) === "+") {
        let minus = "-";
        setInput(minus.concat(ans.slice(1, ans.length)));
      } else {
        let minus = "-";
        setInput(minus.concat(ans));
      }
      setAnswer("");
    } else {
      if (input.charAt(0) === "-") {
        let plus = "+";
        setInput((prev) => plus.concat(prev.slice(1, prev.length)));
      } else if (input.charAt(0) === "+") {
        let minus = "-";
        setInput((prev) => minus.concat(prev.slice(1, prev.length)));
      } else {
        let minus = "-";
        setInput((prev) => minus.concat(prev));
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <Display input={input} setInput={setInput} answer={answer} />
          <Buttons
            inputHandler={inputHandler}
            clearInput={clearInput}
            backspace={backspace}
            changePlusMinus={changePlusMinus}
            calculateAns={calculateAns}
          />
        </div>
      </div>
    </>
  );
}

export default Calculator;
