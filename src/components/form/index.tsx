import { useState } from "react";

interface Codes {
  empty: string;
  sinner: string;
  alcaraz: string;
  zverev: string;
  nadal: string;
  djokovic: string;
}

export default function Form() {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");

  const codes: Codes = {
    empty: "",
    sinner: "sinner",
    alcaraz: "alcaraz",
    zverev: "zverev",
    nadal: "nadal",
    djokovic: "djokovic",
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "15px",
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <select
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
      >
        <option value={codes.empty}>선수를 선택하세요</option>
        <option value={codes.sinner}>Jannick Sinner</option>
        <option value={codes.alcaraz}>Carlos Alcaraz</option>
        <option value={codes.zverev}>Alexander Zverev</option>
        <option value={codes.nadal}>Rafael Nadal</option>
        <option value={codes.djokovic}>Novak Djokovic</option>
      </select>
    </form>
  );
}
