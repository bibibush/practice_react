import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Form from "../../form";

export default function Main() {
  return (
    <Flex mt="120px" ml="260px">
      <Form />
      <Outlet />
    </Flex>
  );
}
