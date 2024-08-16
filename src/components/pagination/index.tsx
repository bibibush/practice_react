import { Box, ButtonProps, Flex } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";

const commonStyle: ButtonProps = {
  p: 3,
  borderWidth: 1,
  borderColor: "blue",
  cursor: "pointer",
};

interface PaginationProps {
  totalCount: number;
  currentPage: number;
  limit?: number;
  onChange: (page: number) => void;
}

function Pagination({
  currentPage = 1,
  limit = 5,
  totalCount,
  onChange,
}: PaginationProps) {
  const [pageList, setPageList] = useState<Array<number>>([1]);

  const totalPage = Math.ceil(totalCount / limit);
  const calculatedPages = useMemo(() => {
    const duplicatedPageList = [...pageList];

    if (pageList.length <= 9) {
      return duplicatedPageList;
    } else if (currentPage <= 5) {
      return duplicatedPageList.slice(0, 9);
    } else {
      if (pageList[pageList.length - 1] - currentPage < 4) {
        return duplicatedPageList.slice(-9, pageList[pageList.length - 1]);
      }
      return duplicatedPageList.splice(currentPage - 5, 9);
    }
  }, [currentPage, pageList]);

  const handlePage = (page: number) => {
    if (page < 1 || page > pageList[pageList.length - 1]) {
      return;
    }

    onChange(page);
  };

  useEffect(() => {
    if (!totalPage) {
      return;
    }

    const list = [];
    for (let i = 1; i <= totalPage; i++) {
      list.push(i);
    }

    setPageList(list);
  }, [totalPage]);

  return (
    <Flex w="100%" justifyContent="center">
      <Flex alignItems="center" gap={2}>
        <Box
          {...commonStyle}
          _hover={{ bg: "skyblue" }}
          onClick={() => handlePage(currentPage - 1)}
        >
          {"<"}
        </Box>
        {calculatedPages.map((page) => (
          <Box
            {...commonStyle}
            bg={currentPage === page ? "skyblue" : "unset"}
            key={page}
            onClick={() => handlePage(page)}
          >
            {page}
          </Box>
        ))}
        <Box
          {...commonStyle}
          _hover={{ bg: "skyblue" }}
          onClick={() => handlePage(currentPage + 1)}
        >
          {">"}
        </Box>
      </Flex>
    </Flex>
  );
}

export default Pagination;
