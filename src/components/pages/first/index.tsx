import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function First() {
  const [firstState, setFirstState] = useState<string>("");

  useEffect(() => {
    setFirstState("first");
  }, []);
  console.log(firstState);
  return (
    <Link to="/second">
      <h1>First Page 입니다.</h1>
    </Link>
  );
}
