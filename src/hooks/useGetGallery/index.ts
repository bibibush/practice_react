import { useQuery } from "@tanstack/react-query";
import { GalleryResponse } from "../../types/Gallery";
import { requestAPI } from "../../api";
import StaleTime from "../../types/staleTime";

const galleryAPI = (params: number | null): Promise<GalleryResponse[]> => {
  return requestAPI<GalleryResponse[]>({
    url: "https://fakestoreapi.com/products",
    method: "GET",
    params: params === 0 ? null : params,
  }).then((res) => {
    return res.data;
  });
};

export default function useGetGallery(params: number | null) {
  const queryResults = useQuery({
    queryKey: ["Gallery", params],
    queryFn: () => galleryAPI(params),
    staleTime: StaleTime.five,
  });
  return {
    ...queryResults,
    data: queryResults.data,
  };
}
