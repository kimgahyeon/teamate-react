import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [loading, setLoading] = useState(true);

  // for test indicator
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <HomePresenter loading={loading} />;
};

export default HomeContainer;
