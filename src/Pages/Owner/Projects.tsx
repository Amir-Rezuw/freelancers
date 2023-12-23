import { Fragment } from "react";
import ProjectsTable from "../../Features/Projects/ProjectTable";
import ProjectsHeader from "../../Features/Projects/ProjectsHeader";
const Projects = () => {
  return (
    <Fragment>
      <ProjectsHeader />
      <ProjectsTable />
    </Fragment>
  );
};

export default Projects;
