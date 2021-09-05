import React, { useEffect, useState } from "react";
import ProjectDetailPresenter from "./ProjectDetailPresenter";
import { projectAPI } from "api";

const ProjectDetailContainer = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);
  const [error, setError] = useState("");

  useEffect(async () => {
    try {
      setLoading(true);
      const { data: { project } } = await projectAPI.getProjectByID(id);
      setProject(project);
    } catch {
      setError("Project를 찾을 수 없습니다.")
    } finally {
      setLoading(false);
    }
  });

  return <ProjectDetailPresenter loading={loading} error={error} {...project} />;
};

export default ProjectDetailContainer;
