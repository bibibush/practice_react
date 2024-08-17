import { Box, Flex } from "@chakra-ui/react";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import axios, { AxiosError } from "axios";
import Pagination from "../../pagination";

function ListPage() {
  const [dataList, setDataList] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 5;
  const offset = useMemo(() => (currentPage - 1) * limit, [currentPage]);
  const resultDataList = useMemo(
    () => dataList.slice(offset, currentPage * limit),
    [currentPage, dataList, offset]
  );

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
      {dataList.length ? (
        <Fragment>
          <Flex
            alignItems="center"
            bg="white"
            direction="column"
            height="350px"
            margin="15px auto"
            overflow="hidden"
            justifyContent="center"
            width="850px"
          >
            {resultDataList.map((data: any, i) => (
              <Box key={i}>{data.title}</Box>
            ))}
          </Flex>
          <Pagination
            currentPage={currentPage}
            totalCount={dataList.length ?? 0}
            limit={limit}
            onChange={handleChangePage}
          />
        </Fragment>
      ) : null}
    </Flex>
  );
}

export default ListPage;
