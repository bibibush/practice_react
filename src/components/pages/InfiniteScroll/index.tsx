import { Box, Spinner } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import React, { useEffect, useRef, useState } from "react";
import { getFakeProducts } from "../../../redux/slices";

export default function InfiniteScroll() {
  const dispatch = useAppDispatch();

  const listRef = useRef<HTMLDivElement | null>(null);

  const [isLoading, setLoading] = useState<boolean>(true);
  const [throttle, setThrottle] = useState<boolean>(false);

  const fakeProductsState = useAppSelector((state) => state.fakeProducts);
  const dataList = fakeProductsState.dataList;
  const status = fakeProductsState.status;

  const handleScroll = () => {
    if (throttle) {
      return;
    }
    setThrottle(true);
    setTimeout(() => {
      if (dataList.length >= 40) {
        return;
      }

      const scrollHeight = listRef.current?.scrollHeight ?? 0;
      const scrollTop = listRef.current?.scrollTop ?? 0;
      const offsetHeight = listRef.current?.offsetHeight ?? 0;

      if (scrollHeight <= scrollTop + offsetHeight) {
        dispatch(getFakeProducts(5));
      }
      setThrottle(false);
    }, 200);
  };
  useEffect(() => {
    if (status === "pending") {
      dispatch(getFakeProducts(10));
    } else {
      setLoading(false);
    }
  }, [status, dispatch]);

  return (
    <Box
      ref={listRef}
      bg="white"
      height="350px"
      margin="15px auto"
      overflowX="hidden"
      overflowY="scroll"
      textAlign="center"
      width="850px"
      onScroll={handleScroll}
    >
      {isLoading ? (
        <Spinner size="lg" mt="15%" />
      ) : (
        dataList.map((data, i) => (
          <Box key={i} mb={2} textDecor="underline">
            {data.title}
          </Box>
        ))
      )}
    </Box>
  );
}
