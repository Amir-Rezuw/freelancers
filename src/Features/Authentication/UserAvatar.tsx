interface IProps {
  avatarUrl?: null | string;
  name?: string;
}

const UserAvatar = ({ avatarUrl, name }: IProps) => {
  return (
    <div className="flex items-center gap-x-2 text-primary-gray-600">
      <img
        className="w-7 h-7 rounded-full object-cover object-center"
        src={avatarUrl ?? "/user.jpg"}
        alt="User-Avatar"
      />
      <span>{name}</span>
    </div>
  );
};

export default UserAvatar;
