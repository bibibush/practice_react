import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Img, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Header() {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleClick = () => {
    setShowInput((prev) => !prev);
    setValue("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Flex
      alignItems="center"
      bg="white"
      height="120px"
      justifyContent="space-between"
      position="fixed"
      top={0}
      left={0}
      px={2}
      width="100%"
      zIndex={99}
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
          value={value}
          onChange={handleChange}
        />
        <IconButton
          aria-label="Search database"
          colorScheme="blue"
          icon={showInput ? <CloseIcon /> : <SearchIcon />}
          onClick={handleClick}
        />
      </Flex>
    </Flex>
  );
}