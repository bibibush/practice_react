import { Box, Spinner } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import useGetInfiniteFakeDataList from "../../../../hooks/useGetInfiniteFakeDataList";

export default function InfiniteScrollReactQuery() {
  const observerRef = useRef<HTMLDivElement>(null);

  const {
    data: dataList,
    isFetching,
    isLoading,
    fetchNextPage,
  } = useGetInfiniteFakeDataList({
    initialPageNumber: 12,
    nextPageNumber: 10,
  });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const target = entries[0];

      if (target.isIntersecting && !isFetching) {
        fetchNextPage();
      }
    },
    [isFetching, fetchNextPage]
  );

  useEffect(() => {
    if (dataList?.length) {
      const observer =
        globalThis.observer ||
        new IntersectionObserver(handleObserver, {
          threshold: 0.3,
        });
      observer.observe(observerRef.current as HTMLDivElement);
      globalThis.observer = observer;
    }
  }, [dataList, handleObserver]);

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
        dataList?.map((data, i) => (
          <Box key={i} mb={2} textDecor="underline">
            {data.title}
          </Box>
        ))
      )}
      <Box ref={observerRef} height="30px"></Box>
    </Box>
  );
}
