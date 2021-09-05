import React, { useEffect, useState } from "react";
import MatePresenter from "./MatePresenter";
import { mateAPI } from "api";

const MateContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mates, setMates] = useState([]);

  // for test indicator
  useEffect(async () => {
    try {
      setLoading(true);
      const { data: { mates } } = await mateAPI.getAllMates();
      setMates(mates);
    } catch {
      setError("Mate를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  }, []);

  return <MatePresenter loading={loading} error={error} mates={mates} />;
};

export default MateContainer;
