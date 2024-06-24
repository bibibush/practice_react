import React, { useEffect, useMemo, useState } from "react";

const Codes = {
  empty: "",
  sinner: "sinner",
  alcaraz: "alcaraz",
  zverev: "zverev",
  nadal: "nadal",
  djokovic: "djokovic",
} as const;
// eslint-disable-next-line
type Codes = (typeof Codes)[keyof typeof Codes];

export default function Form() {
  const pattern: RegExp = useMemo(() => /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{2,10}$/, []);

  const [inputValue, setInputValue] = useState<string>("");
  const [inputValid, setInputValid] = useState<boolean>(true);
  const [selectValue, setSelectValue] = useState<Codes | string>("");

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    if (pattern.test(inputValue)) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [pattern, inputValue]);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "15px",
        width: "389px",
      }}
    >
      <input
        style={
          inputValid
            ? { border: "2px solid skyblue" }
            : { border: "2px solid red" }
        }
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {!inputValid && <p>2~10자 이내로 작성해 주세요 (특수문자 제외)</p>}
      <select
        style={{ border: "2px solid skyblue" }}
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
      >
        <option value={Codes.empty}>선수를 선택하세요</option>
        <option value={Codes.sinner}>Jannick Sinner</option>
        <option value={Codes.alcaraz}>Carlos Alcaraz</option>
        <option value={Codes.zverev}>Alexander Zverev</option>
        <option value={Codes.nadal}>Rafael Nadal</option>
        <option value={Codes.djokovic}>Novak Djokovic</option>
      </select>
    </form>
  );
}
