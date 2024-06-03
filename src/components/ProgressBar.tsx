import { Progress } from "@chakra-ui/react";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

export default function ProgressBar() {
  const [state, setState] = useState<number>(0);
  const [isFetching, setFetching] = useState(true);

  const getAPI = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setTimeout(() => {
        setFetching(false);
      }, 1000);
      return res.data;
    } catch (err: any) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    getAPI();
    for (let i = 0; i < 100 + 1; i++) {
      setTimeout(() => {
        setState(i);
      }, 500);
    }
  }, []);

  return (
    <Fragment>
      {isFetching || state < 100 ? (
        <Progress value={state} />
      ) : (
        <h1>Hello World !</h1>
      )}
    </Fragment>
  );
}
