import { useState } from "react";

function useHome() {
  const [tabActiveIndex, setTabActiveIndex] = useState(0);

  return {
    tabs: {
      tabActiveIndex,
      setTabActiveIndex,
    },
  };
}

export default useHome;
