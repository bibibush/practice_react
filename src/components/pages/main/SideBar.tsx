import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function SideBar() {
  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);

  const menus = [
    {
      id: 1,
      name: "제품",
      Children: [],
    },
    {
      id: 2,
      name: "공지사항",
      Children: [],
    },
    {
      id: 3,
      name: "문의",
      Children: [],
    },
  ];

  return (
    <Flex
      bg="gray.300"
      direction="column"
      gap={6}
      height="100%"
      overflow="hidden"
      position="fixed"
      pt="36px"
      top="120px"
      left={0}
      width="260px"
    >
      {menus.map((menu) => {
        return (
          <Button
            bg={menu.id === selectedMenuId ? "white" : "gray.200"}
            borderRadius={0}
            boxSizing="content-box"
            py={1}
            key={menu.id}
            _active={{ bg: "white" }}
            _hover={{ bg: "white" }}
            onClick={() => {
              setSelectedMenuId(menu.id);
            }}
          >
            {menu.name}
          </Button>
        );
      })}
    </Flex>
  );
}
