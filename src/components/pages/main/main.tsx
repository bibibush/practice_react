import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <Flex mt="120px" ml="260px">
      <Outlet />
    </Flex>
  );
}
