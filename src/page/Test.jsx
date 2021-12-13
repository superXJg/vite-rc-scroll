import React, { useRef, useEffect, useState } from "react";
const useWatch = (data, callback, config) => {
  const prev = useRef();
  const { immdiate } = config;
  const inited = useRef(false);
  const stop = useRef(false);
  useEffect(() => {
    const execute = () => callback(prev.current);
    if (!stop.current) {
      if (!inited.current) {
        inited.current = true;
        immdiate && execute();
        debugger;
      } else {
        execute();
      }
      prev.current = data;
    }
  }, [data]);

  return () => (stop.current = true);
};
const Test = () => {
  const [num, setNum] = useState(1);
  useWatch(num, (pre) => console.log(pre, num), { immdiate: true });
  return (
    <div>
      <div style={{ color: "#fff" }}>{num}</div>
      <button onClick={() => setNum(num + 1)}>点我</button>
    </div>
  );
};

export default Test;
