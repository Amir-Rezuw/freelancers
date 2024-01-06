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
          <th className="text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base">
            #
          </th>
          <th className="text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base">
            عنوان پروژه
          </th>
          <th className="text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base">
            دسته بندی
          </th>
          <th className="text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base">
            بودجه
          </th>
          <th className="text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base">
            ددلاین
          </th>
          <th className="text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base">
            تگ ها
          </th>
          <th className="text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base">
            فریلنسر
          </th>
          <th className="text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base">
            وضعیت
          </th>
          <th className="text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base">
            عملیات
          </th>
          <th className="text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base">
            درخواست ها
          </th>
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
