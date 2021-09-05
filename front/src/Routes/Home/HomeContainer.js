import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import reset from "styled-reset";
import "./Home.css";

const HomeContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <HomePresenter loading={loading} />;
};

export default HomeContainer;
