import React from "react";
import getUsers from "../../services/getUsers";

interface User {
  userId: number;
  name: string;
  email: string;
}

interface UserProps {
  params: {
    userId: number;
  };
}

const UserComponent: React.FC<UserProps> = async (props) => {
  const data = await getUsers();
  const currentId = props.params.userId;

  return (
    <div>
      <h1 className="text-2xl text-center text-green-500">
        {data[currentId - 1].name}
      </h1>
      <p className="text-xl text-center text-green-500">
        {data[currentId - 1].email}
      </p>
    </div>
  );
};

export default UserComponent;
