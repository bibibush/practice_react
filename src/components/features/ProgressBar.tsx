import { Progress } from "@chakra-ui/react";
import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";

export default function ProgressBar() {
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  type IntervalCurrent = ReturnType<typeof setInterval>;

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
    interval.current = setInterval(() => {
      setState((prev) => {
        return prev + 1;
      });
    }, 10);

    return () => {
      clearInterval(interval.current as IntervalCurrent);
    };
  }, []);

  useEffect(() => {
    if (state >= 100) {
      clearInterval(interval.current as IntervalCurrent);
    }
  }, [state]);

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
