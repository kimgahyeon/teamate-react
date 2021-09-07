import React, { useEffect, useState } from "react";
import ProjectPresenter from "./ProjectPresenter";
import { projectAPI } from "api";

const ProjectContainer = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(1);
  const [error, setError] = useState("");
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);

  const getProjectsData = async () => {
    try {
      setLoading(true);
      const {
        data: { projects },
      } = await projectAPI.getProjectsByStatusAndRange(status, 0, 12);
      setProjects(projects);
    } catch {
      setError("Projects를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectsData();
  }, [status]);

  return <ProjectPresenter setStatus={setStatus} loading={loading} error={error} projects={projects} />;
};

export default ProjectContainer;
