import { Fragment } from "react";

import Loading from "../Shared/UI/Loading";
import Table from "../Shared/UI/Table";
import useGetOwnerProjects from "./Hooks/useGetOwnerProjects";
import ProjectRow from "./ProjectRow";
const _TD_CLASS_NAMES =
  "text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base";
const ProjectsTable = () => {
  const { data: projects, isLoading } = useGetOwnerProjects();

  if (isLoading) return <Loading />;
  return (
    <Fragment>
      <Table>
        <Table.Header>
          <th className={_TD_CLASS_NAMES}>#</th>
          <th className={_TD_CLASS_NAMES}>عنوان پروژه</th>
          <th className={_TD_CLASS_NAMES}>دسته بندی</th>
          <th className={_TD_CLASS_NAMES}>بودجه</th>
          <th className={_TD_CLASS_NAMES}>ددلاین</th>
          <th className={_TD_CLASS_NAMES}>تگ ها</th>
          <th className={_TD_CLASS_NAMES}>فریلنسر</th>
          <th className={_TD_CLASS_NAMES}>وضعیت</th>
          <th className={_TD_CLASS_NAMES}>عملیات</th>
          <th className={_TD_CLASS_NAMES}>درخواست ها</th>
        </Table.Header>

        <Table.Body className="bg-primary-gray-0">
          {projects?.data.projects.map((project, index) => {
            return (
              <Table.Row
                className={`border-b border-primary-gray-200 ${
                  index === projects.data.projects.length - 1 && "border-none"
                }`}
                key={project._id}
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
