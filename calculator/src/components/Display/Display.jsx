import {React, useEffect, useRef} from "react";
import "./Display.css";

const Display = ({ input, setInput, answer }) => {
  //It will focus on input whenever the component is mounted
  const inputRef = useRef(null);
  useEffect(() => {
      inputRef.current.focus();
  }, []);

  //check if the input is empty
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <>
      <div className="display">
        {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className="input"
              style={{ padding: "29px" }}
              value={input}
              placeholder="0"
              maxLength={12}
              onChange={onChangeTagInput}
              autoComplete="off"
              ref={inputRef}
              />
          </>
        ) : (
          <>
          {/* if answer is not empty then we will show answer and disable the input */}
            <input
              type="text"
              name="input"
              className="value"
              value={input}
              placeholder="0"
              maxLength={12}
              disabled
            />
            <input
              type="text"
              name="value"
              className="input"
              value={answer}
              disabled
            />
          </>
        )}
      </div>
    </>
  );
};

export default Display;
