import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Img, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Header() {
  const [showInput, setShowInput] = useState<boolean>(false);

  return (
    <Flex
      height="90px"
      justifyContent="space-between"
      alignItems="center"
      px={2}
    >
      <Img
        src="https://1000logos.net/wp-content/uploads/2023/02/Roland-Garros-logo-768x432.png"
        alt="Roland Garros"
        maxWidth="150px"
      />
      <Flex gap={2} justifyContent="center" width="350px">
        <Input
          flexShrink={0}
          maxWidth="240px"
          opacity={showInput ? 1 : 0}
          transform="auto"
          translateY={showInput ? 0 : -10}
          transition="0.3s"
        />
        <IconButton
          aria-label="Search database"
          colorScheme="blue"
          icon={showInput ? <CloseIcon /> : <SearchIcon />}
          onClick={() => {
            setShowInput((prev) => !prev);
          }}
        />
      </Flex>
    </Flex>
  );
}
