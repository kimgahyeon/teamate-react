import React, { useEffect, useState } from "react";
import MatePresenter from "./MatePresenter";

const MateContainer = () => {
  const [loading, setLoading] = useState(true);

  // for test indicator
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <MatePresenter loading={loading} />;
};

export default MateContainer;
