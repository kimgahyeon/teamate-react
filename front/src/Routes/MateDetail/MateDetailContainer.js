import React, { useEffect, useState } from "react";
import MateDetailPresenter from "./MateDetailPresenter";
import { mateAPI } from "api";

const MateDetailContainer = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [mate, setMate] = useState(null);
  const [error, setError] = useState("");

  useEffect(async () => {
    try {
      setLoading(true);
      const { data: { mate } } = await mateAPI.getMateByID(id);
      setMate(mate);
    } catch {
      setError("Mate를 찾을 수 없습니다.")
    } finally {
      setLoading(false);
    }
  }, []);

  return <MateDetailPresenter loading={loading} error={error} {...mate} />;
};

export default MateDetailContainer;
