import React from "react";
import withLoading from "hoc/withLoading";
import { connect } from "react-redux";
import { getUsers } from "components/users/usersSlice";

export const Users = ({ users, getUsers }) => {
  return (
    <div>
      Users
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <button onClick={getUsers}>getUsers</button>
    </div>
  );
};

const mapStoreToProps = ({ users }) => ({
  users: users.all,
  isFeching: users.isFeching,
});
const mapDispatchToProps = { getUsers };

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withLoading("isFeching", "getUsers")(Users));
