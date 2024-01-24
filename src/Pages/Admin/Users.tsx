import UsersTable from "../../Features/Admin/Users/Table";

const AdminUsers = () => {
  return (
    <div>
      <h1 className="font-black text-primary-gray-700 text-xl mb-8">
        لیست کاربران
      </h1>
      <UsersTable />
    </div>
  );
};

export default AdminUsers;
