import { useInfiniteQuery } from "@tanstack/react-query";
import { requestAPI } from "../../api";

type Response = {
  [key: string]: any;
};

interface Params {
  initialPageNumber: number;
  nextPageNumber: number;
}

const infiniteFakeDataAPI = (params: {
  limit: number;
}): Promise<Array<Response>> => {
  return requestAPI<Array<Response>>({
    url: "https://fakestoreapi.com/products",
    method: "GET",
    params,
  }).then((res) => res.data);
};

export default function useGetInfiniteFakeDataList(params: Params) {
  const queryResults = useInfiniteQuery({
    queryKey: ["infinite-fake-data"],
    queryFn: ({ pageParam }) => infiniteFakeDataAPI(pageParam),
    initialPageParam: { limit: params.initialPageNumber },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.length) {
        return undefined;
      }

      return { limit: params.nextPageNumber };
    },
  });
  const results = queryResults.data?.pages.reduce((acc, current) => {
    return acc.concat(current);
  }, []);

  return {
    ...queryResults,
    data: results,
  };
}
