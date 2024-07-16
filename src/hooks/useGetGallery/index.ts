import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GalleryResponse } from "../../types/Gallery";
import { AxiosError } from "axios";
import { requestAPI } from "../../api";

export default function useGetGallery(
  params: { limit: number | null },
  options?: UseQueryOptions<GalleryResponse, AxiosError>
) {
  const limit = params.limit === 0 ? null : params.limit;
  const queryResults = useQuery({
    queryKey: ["Gallery", limit],
    queryFn: () =>
      requestAPI<GalleryResponse>({
        url: "https://fakestoreapi.com/products",
        method: "GET",
        params: params.limit === 0 ? null : params,
      }),
    ...options,
  });
  return {
    ...queryResults,
    data: queryResults.data?.data,
  };
}
