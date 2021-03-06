import {useState, useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/Routes/UserRoute";

const UserIndex = () => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
        <h1 className="user text-center square">
          <pre>{JSON.stringify(user, null, 4)}</pre>
        </h1>
    </UserRoute>
  );
};

export default UserIndex;