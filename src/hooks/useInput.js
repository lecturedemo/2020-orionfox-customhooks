import { useState } from "react";

export default (initailValue) => {
  const [data, setData] = useState(initailValue);

  return {
    data,
    onChange: (e) => {
      setData(e.target.value);
    },
    onReset: () => {
      setData("");
    },
  };
};
