import { Box, Spinner } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useCallback, useEffect, useRef, useState } from "react";
import { getFakeProducts } from "../../../../redux/slices";

export default function InininiteScrollObserver() {
  const fakeProducts = useAppSelector((state) => state.fakeProducts);
  const dispatch = useAppDispatch();
  const dataList = fakeProducts?.dataList;
  const status = fakeProducts?.status;
  const observerRef = useRef<HTMLDivElement>(null);

  const [isLoading, setLoading] = useState<boolean>(true);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const target = entries[0];

      if (target.isIntersecting && status === "fulfilled") {
        dispatch(getFakeProducts(5));
      }
    },
    [dispatch, status]
  );

  useEffect(() => {
    if (status === "pending") {
      dispatch(getFakeProducts(12));
    } else {
      setLoading(false);
    }
  }, [status, dispatch]);
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.3,
    });
    observer.observe(observerRef.current as HTMLDivElement);
  }, [handleObserver]);

  return (
    <Box
      bg="white"
      height="350px"
      margin="15px auto"
      overflowX="hidden"
      overflowY="scroll"
      textAlign="center"
      width="850px"
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
      <Box ref={observerRef} height="30px"></Box>
    </Box>
  );
}
