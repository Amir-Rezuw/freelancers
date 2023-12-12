import { Fragment } from "react";
import Loading from "../Shared/UI/Loading";
import Table from "../Shared/UI/Table";
import useGetOwnerProjects from "./Hooks/useGetOwnerProjects";
import ProjectRow from "./ProjectRow";
const ProjectsTable = () => {
  const { data: projects, isLoading } = useGetOwnerProjects();

  if (isLoading) return <Loading />;
  return (
    <Fragment>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>

        <Table.Body>
          {projects?.data.projects.map((project, index) => {
            return (
              <Table.Row
                key={project._id}
                className="bg-primary-gray-0 "
              >
                <ProjectRow
                  index={index}
                  project={project}
                />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default ProjectsTable;
