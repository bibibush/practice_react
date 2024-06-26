import { FormControl, FormErrorMessage, Input, Select } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";

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

function Form() {
  const methods = useForm<{
    inputValue: string;
    selectValue: Codes | string;
  }>({ mode: "onChange" });

  const pattern: RegExp = useMemo(() => /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{2,10}$/, []);

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
      <FormControl isInvalid={!!methods.formState.errors.inputValue}>
        <Input
          bg="white"
          {...methods.register("inputValue", {
            pattern: {
              value: pattern,
              message: "2~10자내로 입력해주세요. (특수문자 제외)",
            },
          })}
        />
        <FormErrorMessage>
          {methods.formState.errors.inputValue?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!methods.formState.errors.selectValue}>
        <Select bg="white" {...methods.register("selectValue")}>
          <option value={Codes.empty}>선수를 선택하세요</option>
          <option value={Codes.sinner}>Jannick Sinner</option>
          <option value={Codes.alcaraz}>Carlos Alcaraz</option>
          <option value={Codes.zverev}>Alexander Zverev</option>
          <option value={Codes.nadal}>Rafael Nadal</option>
          <option value={Codes.djokovic}>Novak Djokovic</option>
        </Select>
      </FormControl>
    </form>
  );
}

export default Form;
