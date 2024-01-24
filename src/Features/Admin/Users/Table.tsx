import { Fragment } from "react";

import Empty from "../../Shared/UI/Empty";
import Loading from "../../Shared/UI/Loading";
import Table from "../../Shared/UI/Table";
import useGetUsersList from "../Hooks/useGetUsersList";
import UserRow from "./UserRow";
const _TD_CLASS_NAMES =
  "text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base";
const UsersTable = () => {
  const { data, isLoading } = useGetUsersList();
  if (isLoading) return <Loading />;
  if (!data?.data.users.length) return <Empty />;
  return (
    <Fragment>
      <Table>
        <Table.Header>
          <th className={_TD_CLASS_NAMES}>#</th>
          <th className={_TD_CLASS_NAMES}>نام کاربر</th>
          <th className={_TD_CLASS_NAMES}>ایمیل</th>
          <th className={_TD_CLASS_NAMES}>موبایل</th>
          <th className={_TD_CLASS_NAMES}>نقش</th>
          <th className={_TD_CLASS_NAMES}>وضعیت</th>
          <th className={_TD_CLASS_NAMES}>عملیات</th>
        </Table.Header>

        <Table.Body className="bg-primary-gray-0">
          {data.data.users.map((user, index) => {
            return (
              <Table.Row key={user._id}>
                <UserRow
                  user={user}
                  index={index}
                />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default UsersTable;
