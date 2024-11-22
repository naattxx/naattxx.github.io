import * as React from "react";
import { useState } from "react";
import { useRef } from "react";

function Button({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function NumButton({ onClick, children }) {
  return (
    <Button
      className={`n n${children}`}
      onClick={() => {
        onClick(children);
      }}
    >
      {children}
    </Button>
  );
}

function Screen({ content }) {
  return <output>{content}</output>;
}

function Calculator() {
  const sum = useRef(0);
  const [lastAction, setLastAction] = useState(
    () => (x, screenContent) => screenContent
  );
  const isFirstType = useRef(false);
  const isFirstInput = useRef(true);
  const [screenText, setScreenText] = useState("0");

  function handelNumpad(input) {
    if (!isFirstType.current) setScreenText(input);
    else if (screenText.length <= 100) {
      setScreenText(screenText + input);
    }
    if (isFirstInput.current) sum.current = Number(screenText + input);

    isFirstType.current = true;
  }

  function act(action = lastAction) {
    if (isFirstType.current && !isFirstInput.current) {
      sum.current = action(sum.current, Number(screenText));
      setScreenText(String(sum.current));
    }
    setLastAction(() => action);
    isFirstType.current = false;
    isFirstInput.current = false;
  }

  const point = () => {
    if (screenText.endsWith(".")) setScreenText(String(Number(screenText)));
    else if (!screenText.includes(".")) setScreenText(screenText + ".");
  };

  const sqrt = () => {
    sum.current = Math.sqrt(Number(screenText));
    setScreenText(String(sum.current));
    isFirstInput.current = false;
  };

  return (
    <div className="calculator">
      <Screen content={String(screenText)} />
      <NumButton onClick={handelNumpad}>1</NumButton>
      <NumButton onClick={handelNumpad}>2</NumButton>
      <NumButton onClick={handelNumpad}>3</NumButton>
      <NumButton onClick={handelNumpad}>4</NumButton>
      <NumButton onClick={handelNumpad}>5</NumButton>
      <NumButton onClick={handelNumpad}>6</NumButton>
      <NumButton onClick={handelNumpad}>7</NumButton>
      <NumButton onClick={handelNumpad}>8</NumButton>
      <NumButton onClick={handelNumpad}>9</NumButton>
      <NumButton onClick={handelNumpad}>0</NumButton>
      <Button
        className="dv"
        onClick={() => {
          act((x, y) => x / y);
        }}
      >
        ÷
      </Button>
      <Button
        className="ml"
        onClick={() => {
          act((x, y) => x * y);
        }}
      >
        ×
      </Button>
      <Button
        className="mn"
        onClick={() => {
          act((x, y) => x - y);
        }}
      >
        -
      </Button>
      <Button
        className="pl"
        onClick={() => {
          act((x, y) => x + y);
        }}
      >
        +
      </Button>
      <Button className="pt" onClick={point}>
        .
      </Button>
      <Button className="sq" onClick={sqrt}>
        √
      </Button>
      <Button
        className="eq"
        onClick={
          (/*e*/) => {
            act();
          }
        }
      >
        =
      </Button>
    </div>
  );
}

export default Calculator;
