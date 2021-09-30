import React, { useEffect, useState } from "react";
import MatePresenter from "./MatePresenter";
import { mateAPI } from "api";

const PAGE_SIZE = 12;

const MateContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [role, setRole] = useState("");
  const [mates, setMates] = useState([]);
  const [page, setPage] = useState(0);
  const [left, setLeft] = useState(true);

  const getMatesData = async () => {
    try {
      setLoading(true);
      const {
        data: { mates: matesData },
      } = role
        ? await mateAPI.getMatesByRoleAndRange(role, page * PAGE_SIZE, PAGE_SIZE)
        : await mateAPI.getMatesByRange(page * PAGE_SIZE, PAGE_SIZE);
      if (matesData.length < PAGE_SIZE) setLeft(false);
      setPage(page + 1);
      setMates(mates.concat(matesData));
    } catch {
      setError("Mate를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = async () => {
    const d = document.documentElement;
    const { scrollHeight, scrollTop, clientHeight } = d;

    if (scrollTop + clientHeight >= scrollHeight && left) {
      const currentScrollTop = scrollTop;
      await getMatesData();
      console.log(currentScrollTop);
      // window.scrollTo({ top: currentScrollTop, behavior: "auto" });
    }
  };

  // for test indicator
  useEffect(() => {
    getMatesData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mates]);

  return (
    <MatePresenter loading={loading} error={error} mates={mates}>
      {console.log("container rendered")}
    </MatePresenter>
  );
};

export default MateContainer;
