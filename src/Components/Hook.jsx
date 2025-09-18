// import { useState } from "react";

const Hook = () => {
  //   const [count, setCount] = useState(0);
  let count = 0;
  const handleCounter = () => {
    // console.log(setCount);
    // setCount(count + 5);
    // setCount((prev) => prev + 5);
    // count++;
    count = count + 1;
    // console.log(count);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCounter}>Click</button>
    </>
  );
};

export default Hook;
