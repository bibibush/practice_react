import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { requestAPI } from "../../api";
import { AxiosError } from "axios";

const fakeDataListAPI = (params?: {
  limit: number;
}): Promise<Array<{ [key: string]: any }>> => {
  return requestAPI<Array<{ [key: string]: any }>>({
    url: "https://fakestoreapi.com/products",
    method: "GET",
    params,
  }).then((res) => res.data);
};

export default function useGetFakeDataList(
  options: UseQueryOptions<{ [key: string]: any }[], AxiosError> & {
    params?: any;
  }
) {
  const queryResults = useQuery({
    queryFn: () => fakeDataListAPI(options.params),
    ...options,
  });

  return {
    ...queryResults,
    data: queryResults.data,
  };
}
