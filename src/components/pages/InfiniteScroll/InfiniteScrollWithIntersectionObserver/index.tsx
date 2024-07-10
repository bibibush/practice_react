import { Box, Spinner } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useEffect, useRef, useState } from "react";
import { getFakeProducts } from "../../../../redux/slices";

export default function InininiteScrollObserver() {
  const fakeProducts = useAppSelector((state) => state.fakeProducts);
  const dispatch = useAppDispatch();
  const dataList = fakeProducts?.dataList;
  const status = fakeProducts?.status;
  const observerRef = useRef<HTMLDivElement>(null);

  const [isLoading, setLoading] = useState<boolean>(false);
  const [throttle, setThrottle] = useState<boolean>(false);

  const handleObserver = () => {};
  const observer = new IntersectionObserver(handleObserver, { threshold: 0.3 });
  const handleScroll = () => {
    if (throttle) {
      return;
    }
    observer.observe(observerRef.current as HTMLDivElement);
    setThrottle(true);
    setTimeout(() => {
      dispatch(getFakeProducts(5));
      setThrottle(false);
    }, 200);
  };

  useEffect(() => {
    if (status === "pending") {
      dispatch(getFakeProducts(10));
      setLoading(false);
    }
  }, [status, dispatch]);

  return (
    <Box
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
      <Box ref={observerRef}></Box>
    </Box>
  );
}
