import React, { useEffect, useState } from "react";
import ProjectPresenter from "./ProjectPresenter";
import { projectAPI } from "api";

const PAGE_SIZE = 12;

const ProjectContainer = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(1);
  const [error, setError] = useState("");
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(0);
  const [left, setLeft] = useState(true);

  const getProjectsData = async () => {
    setLoading(true);
    try {
      const {
        data: { projects: projectsData },
      } = await projectAPI.getProjectsByStatusAndRange(status, page * PAGE_SIZE, PAGE_SIZE);
      if (projectsData.length < PAGE_SIZE) setLeft(false);
      setPage(page + 1);
      setProjects(projectsData);
    } catch {
      setError("Projects를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  const getMoreProjectsData = async () => {
    setLoading(true);
    try {
      const {
        data: { projects: projectsData },
      } = await projectAPI.getProjectsByStatusAndRange(status, page * PAGE_SIZE, PAGE_SIZE);
      if (projectsData.length < PAGE_SIZE) setLeft(false);
      setPage(page + 1);
      setProjects(projects.concat(projectsData));
    } catch {
      setError("Projects를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = async () => {
    const d = document.documentElement;
    const { scrollHeight, scrollTop, clientHeight } = d;

    if (scrollTop + clientHeight >= scrollHeight && left) {
      const currentScrollTop = scrollTop;
      await getMoreProjectsData();
      window.scrollTo({ top: currentScrollTop, behavior: "auto" });
    }
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  useEffect(() => {
    console.log(projects);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects]);

  return <ProjectPresenter setStatus={setStatus} loading={loading} error={error} projects={projects} />;
};

export default ProjectContainer;
