import { Flex } from "@chakra-ui/react";

export default function SideBar() {
  return (
    <Flex
      bg="gray"
      direction="column"
      height="100%"
      overflow="hidden"
      position="fixed"
      top={0}
      left={0}
      width="260px"
    ></Flex>
  );
}
