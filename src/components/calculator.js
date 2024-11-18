import * as React from "react";
import { useState } from "react";

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

function Screen({content}) {
  return <output>{content}</output>;
}

function Calculator() {
  const {sum, setSum} = useState(0);
  const {lastAction, setLastAction} = useState((x, screenContent) => screenContent);
  const {isNewInput, setIsNewInput} = useState(false);
  const {isFirstType, setIsFirstType} = useState(true);
  const {screenText, setScreenText} = useState("0");

  function handelNumpad(input) {

    if (!isNewInput) setScreenText(input);
    else if (screenText.length <= 10) {
      setScreenText(screenText+input);
    }
    if (isFirstType) setSum(Number(screenText));

    setIsNewInput = true;
  }

  function act(action = lastAction) {
    if (isNewInput && !isFirstType) {
      setSum(action(sum, Number(screenText)));
      setScreenText(String(sum));
    }
    setLastAction(action);
    setIsNewInput(false);
    setIsFirstType(false);
  }

  return (
    <>
      <div className="calculator">
        <Screen content={screenText} />
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
        <Button
          className="pt"
          onClick={function () {
            if (screenText.endsWith("."))
              setScreenText(String(Number(screenText)));
            else if (!screenText.includes("."))
              setScreenText(screenText + ".");
          }}
        >
          .
        </Button>
        <Button
          className="sq"
          onClick={function () {
            setScreenText(String(Math.sqrt(Number(screenText))));
            isFirstType = false;
          }}
        >
          √
        </Button>
        <Button className="eq" onClick={act}>
          =
        </Button>
      </div>
    </>
  );
}

export default Calculator;
