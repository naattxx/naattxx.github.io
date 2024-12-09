import * as React from "react";
import { useState } from "react";
import { useRef } from "react";

type ButtonProps = {
  className?: string;
  onClick: Function;
  children: React.ReactNode;
};

function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button
      className={`${className} rounded-[1px] px-5 py-1 shadow-[rgba(0,0,0,0.2)_0px_-0.25rem_0px_inset] active:h-[calc(100%-0.125rem)] active:translate-y-0.5 active:shadow-[rgba(0,0,0,0.2)_0px_-0.125rem_0px_inset]`}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function NumButton({ className, onClick, children }: ButtonProps) {
  return (
    <Button
      className={`bg-cyan-50 ${className}`}
      onClick={() => {
        onClick(children);
      }}
    >
      {children}
    </Button>
  );
}

function Screen({ content }: { content: any }) {
  return (
    <output className="col-span-5 overflow-hidden rounded-[1px] border-2 border-solid border-black bg-lime-700 px-2 font-['Jersey_10'] text-4xl leading-normal text-neutral-100">
      {content}
    </output>
  );
}

function Calculator() {
  const sum = useRef(0);
  const [lastAction, setLastAction] = useState(
    () => (_x: any, screenContent: any) => screenContent,
  );
  const isFirstType = useRef(false);
  const isFirstInput = useRef(true);
  const [screenText, setScreenText] = useState("0");

  function handelNumpad(input: string) {
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
    <div className="mx-auto grid w-fit grid-flow-row auto-rows-auto grid-cols-5 gap-px rounded-sm bg-slate-500 p-1 shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-3px_0px_inset]">
      <Screen content={String(screenText)} />
      <div className="col-span-3 row-span-3 grid grid-cols-subgrid gap-px">
        <NumButton onClick={handelNumpad}>1</NumButton>
        <NumButton onClick={handelNumpad}>2</NumButton>
        <NumButton onClick={handelNumpad}>3</NumButton>
        <NumButton onClick={handelNumpad}>4</NumButton>
        <NumButton onClick={handelNumpad}>5</NumButton>
        <NumButton onClick={handelNumpad}>6</NumButton>
        <NumButton onClick={handelNumpad}>7</NumButton>
        <NumButton onClick={handelNumpad}>8</NumButton>
        <NumButton onClick={handelNumpad}>9</NumButton>
      </div>
      <NumButton className="col-span-2 col-start-1" onClick={handelNumpad}>
        0
      </NumButton>
      <Button className="col-start-3 bg-blue-50" onClick={point}>
        .
      </Button>
      <Button
        className="col-start-4 bg-sky-500 text-white"
        onClick={() => {
          act((x: number, y: number): number => x + y);
        }}
      >
        +
      </Button>
      <Button
        className="col-start-4 row-start-4 bg-green-400 text-white"
        onClick={() => {
          act((x: number, y: number): number => x - y);
        }}
      >
        -
      </Button>
      <Button
        className="col-start-4 row-start-3 bg-orange-400 text-white"
        onClick={() => {
          act((x: number, y: number): number => x * y);
        }}
      >
        ×
      </Button>
      <Button
        className="col-start-4 row-start-2 bg-rose-600 text-white"
        onClick={() => {
          act((x: number, y: number): number => x / y);
        }}
      >
        ÷
      </Button>
      <Button
        className="col-start-5 row-start-2 bg-gray-700 text-white"
        onClick={sqrt}
      >
        √
      </Button>
      <Button
        className="col-start-5 row-span-3 row-start-3 bg-orange-300"
        onClick={act}
      >
        =
      </Button>
    </div>
  );
}

export default Calculator;
