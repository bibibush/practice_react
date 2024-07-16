import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GalleryResponse } from "../../types/Gallery";
import { AxiosError } from "axios";
import { requestAPI } from "../../api";

const galleryAPI = (params: {
  limit: number | null;
}): Promise<GalleryResponse> => {
  return requestAPI<GalleryResponse>({
    url: "https://fakestoreapi.com/products",
    method: "GET",
    params: params.limit === 0 ? null : params,
  }).then((res) => res.data);
};

export default function useGetGallery(
  params: { limit: number | null },
  options?: UseQueryOptions<GalleryResponse, AxiosError>
) {
  const queryResults = useQuery<GalleryResponse, AxiosError>({
    queryKey: options?.queryKey ?? [""],
    queryFn: () => galleryAPI(params),
    ...options,
  });
  return {
    ...queryResults,
    data: queryResults.data?.data,
  };
}
