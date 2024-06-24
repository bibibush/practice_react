import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Form from "../../form";
import { useMemo } from "react";

export default function Main() {
  const fn = useMemo(
    () => (str: string) => {
      console.log(str);
    },
    []
  );

  return (
    <Flex mt="120px" ml="260px">
      <Form fn={fn} />
      <Outlet />
    </Flex>
  );
}
