import React, { useEffect, useState } from "react";
import ProjectPresenter from "./ProjectPresenter";

const ProjectContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <ProjectPresenter loading={loading} />;
};

export default ProjectContainer;
