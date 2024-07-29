import React, { useEffect, useState } from "react";
import useGetFakeDataList from "../../../hooks/useGetFakeDataList";
import { Box, Button, Flex } from "@chakra-ui/react";
import useStore from "../../../zustand";

export default function Console() {
  const [state, setState] = useState<number>(0);

  const { data, refetch } = useGetFakeDataList({
    queryKey: ["fake-data", state],
    params: {
      limit: 20,
    },
  });

  const dataList = useStore((state) => state.dataList);
  const updateStore = useStore((state) => state.updateState);

  const handleClick = () => {
    refetch();
    setState((state) => (state += 1));
  };

  useEffect(() => {
    updateStore(data);
  }, [data, updateStore]);
  console.log(dataList);
  return (
    <Flex alignItems="center" direction="column" gap={3}>
      <Button colorScheme="green" width="35%" onClick={handleClick}>
        추가
      </Button>
      {dataList.map((el, i) => (
        <Box key={i}>{el.title}</Box>
      ))}
    </Flex>
  );
}
