import React from "react";
import ViewUser from "../../components/admin/user/ViewUser";
import { useSelector } from "react-redux";

const UserPage = () => {
  const user = useSelector((state) => state.user);
  return <> {user && <ViewUser user={user} />}</>;
};

export default UserPage;
