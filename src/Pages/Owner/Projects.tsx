import { Fragment } from "react";
import ProjectsTable from "../../Features/Project/ProjectTable";
import ProjectsHeader from "../../Features/Project/ProjectsHeader";
const Projects = () => {
  return (
    <Fragment>
      <ProjectsHeader />
      <ProjectsTable />
    </Fragment>
  );
};

export default Projects;
