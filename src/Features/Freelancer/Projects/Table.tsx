import { Fragment } from "react";
import Loading from "../../Shared/UI/Loading";
import Table from "../../Shared/UI/Table";
import useGetProjectList from "../Hooks/useProjectList";
import ProjectRow from "./ProjectRow";
const _TD_CLASS_NAMES =
  "text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base";
const ProjectsTable = () => {
  const { data, isLoading } = useGetProjectList();
  if (isLoading) return <Loading />;

  return (
    <Fragment>
      <Table>
        <Table.Header>
          <th className={_TD_CLASS_NAMES}>#</th>
          <th className={_TD_CLASS_NAMES}>عنوان پروژه</th>
          <th className={_TD_CLASS_NAMES}>بودجه</th>
          <th className={_TD_CLASS_NAMES}>ددلاین</th>
          <th className={_TD_CLASS_NAMES}>وضعیت</th>
          <th className={_TD_CLASS_NAMES}>عملیات</th>
        </Table.Header>

        <Table.Body className="bg-primary-gray-0">
          {data?.data.projects.map((item, index) => (
            <Table.Row key={item._id}>
              <ProjectRow
                project={item}
                index={index}
              />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default ProjectsTable;
