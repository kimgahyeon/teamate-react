import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import reset from "styled-reset";
import "./Home.css";
import { mateAPI, projectAPI } from "api";

const ROW_COUNT = 6;

const HomeContainer = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(0)
  const [error, setError] = useState("");
  const [projects, setProjects] = useState([]);
  const [mates, setMates] = useState([]);

  useEffect(async () => {
    try {
      setLoading(true);
      const { data: { projects } } = await projectAPI.getProjectsByStatusAndLimit(status, ROW_COUNT);
      const { data: { mates } } = await mateAPI.getMates(ROW_COUNT);
      setProjects(projects);
      setMates(mates);
    } catch {
      setError("Projects를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  }, [status]);

  return <HomePresenter setStatus={setStatus} loading={loading} error={error} projects={projects} mates={mates} />;
};

export default HomeContainer;
