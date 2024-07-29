import React from "react";
import useGetFakeDataList from "../../../hooks/useGetFakeDataList";
import { Box, Flex } from "@chakra-ui/react";

export default function Console() {
  const { data } = useGetFakeDataList({
    queryKey: ["fake-data"],
  });
  console.log(data);
  return (
    <Flex direction="column" gap={3}>
      {data.map((el, i) => (
        <Box key={i}>{el.title}</Box>
      ))}
    </Flex>
  );
}
