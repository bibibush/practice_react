import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, FormControl, IconButton, Img, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface MethodsType {
  inputValue: string;
  selectValue: string;
}

export default function Header() {
  const [showInput, setShowInput] = useState<boolean>(false);

  const methods = useForm<MethodsType>({ mode: "onChange" });

  const handleClick = () => {
    setShowInput((prev) => !prev);
    methods.resetField("inputValue");
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
      <Link to="/">
        <Img
          src="https://1000logos.net/wp-content/uploads/2023/02/Roland-Garros-logo-768x432.png"
          alt="Roland Garros"
          maxWidth="150px"
        />
      </Link>

      <Flex gap={2} justifyContent="center" width="350px">
        <FormControl maxWidth="240px">
          <Input
            flexShrink={0}
            opacity={showInput ? 1 : 0}
            transform="auto"
            translateY={showInput ? 0 : -10}
            transition="0.3s"
            width="100%"
            {...methods.register("inputValue")}
          />
        </FormControl>
        <IconButton
          aria-label="Search"
          colorScheme="blue"
          icon={showInput ? <CloseIcon /> : <SearchIcon />}
          onClick={handleClick}
        />
      </Flex>
    </Flex>
  );
}
