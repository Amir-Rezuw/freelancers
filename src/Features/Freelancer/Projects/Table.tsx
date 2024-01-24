import { Fragment } from "react";

import { useLocation } from "react-router-dom";
import Empty from "../../Shared/UI/Empty";
import Loading from "../../Shared/UI/Loading";
import Table from "../../Shared/UI/Table";
import useGetProjectList from "../Hooks/useProjectList";
import ProjectRow from "./ProjectRow";
const _TD_CLASS_NAMES =
  "text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base";
const FreelancerProjectsTable = () => {
  const { data, isLoading } = useGetProjectList();
  const location = useLocation();
  let isAdmin = location.pathname.toLowerCase().includes("admin");

  if (isLoading) return <Loading />;
  if (data?.data.projects.length === 0) return <Empty />;
  return (
    <Fragment>
      <Table>
        <Table.Header>
          <th className={_TD_CLASS_NAMES}>#</th>
          <th className={_TD_CLASS_NAMES}>عنوان پروژه</th>
          <th className={_TD_CLASS_NAMES}>بودجه</th>
          <th className={_TD_CLASS_NAMES}>ددلاین</th>
          <th className={_TD_CLASS_NAMES}>وضعیت</th>
          {!isAdmin && <th className={_TD_CLASS_NAMES}>عملیات</th>}
        </Table.Header>

        <Table.Body className="bg-primary-gray-0">
          {data?.data.projects.map((item, index) => (
            <Table.Row key={item._id}>
              <ProjectRow
                isAdmin={isAdmin}
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

export default FreelancerProjectsTable;
