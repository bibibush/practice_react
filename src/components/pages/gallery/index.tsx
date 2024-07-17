import { Select, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Works from "./Works";
import useGetGallery from "../../../hooks/useGetGallery";
import StaleTime from "../../../types/staleTime";

function Gallery() {
  const [limit, setLimit] = useState<number | null>(null);

  const { data: galleryData } = useGetGallery({
    params: { limit },
    queryKey: ["Gallery", limit],
    staleTime: StaleTime.five,
  });

  const handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      return setLimit(null);
    }
    setLimit(Number(e.target.value));
  };

  return (
    <VStack>
      <Select
        bg="white"
        placeholder="몇개를 불러오시겠습니까?"
        width="389px"
        onChange={handleChangeLimit}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </Select>
      <Works galleryData={galleryData} />
    </VStack>
  );
}

export default Gallery;
