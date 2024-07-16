import { Flex, Img } from "@chakra-ui/react";
import React from "react";
import { GalleryDataResponse } from "../../../../types/Gallery";

interface WorksProps {
  galleryData: GalleryDataResponse[];
}

function Works({ galleryData }: WorksProps) {
  return (
    <Flex wrap="wrap" gap={10} justifyContent="center">
      {galleryData?.map((data, i) => {
        return (
          <Img
            alt={data.description}
            src={data.image}
            key={i}
            maxWidth="150px"
          />
        );
      })}
    </Flex>
  );
}

export default Works;
