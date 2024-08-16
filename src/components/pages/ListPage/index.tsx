import { Box, Flex } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import Pagination from "../../pagination";

function ListPage() {
  const [dataList, setDataList] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const dataListThunk = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setDataList([...res.data, ...res.data, ...res.data]);
    } catch (err) {
      if (err instanceof AxiosError) console.error(err.response);
    }
  };
  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dataListThunk();
  }, []);

  return (
    <Flex
      direction="column"
      gap={5}
      justifyContent="center"
      alignItems="center"
    >
      {dataList.length && (
        <Fragment>
          <Box
            bg="white"
            height="350px"
            margin="15px auto"
            overflow="hidden"
            textAlign="center"
            width="850px"
          >
            {dataList.map((data: any, i) => (
              <Box key={i}>{data.title}</Box>
            ))}
          </Box>
          <Pagination
            currentPage={currentPage}
            totalCount={dataList.length ?? 0}
            limit={5}
            onChange={handleChangePage}
          />
        </Fragment>
      )}
    </Flex>
  );
}

export default ListPage;
