import { Select, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Works from "./Works";
import useGetGallery from "../../../hooks/useGetGallery";

function Gallery() {
  const [limit, setLimit] = useState<number | null>(null);

  const { data: galleryData } = useGetGallery(limit);

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
      <Works galleryData={galleryData ?? []} />
    </VStack>
  );
}

export default Gallery;
