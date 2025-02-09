//show list of ussers
import React, { useEffect } from "react";
import { fetchUsers } from "../redux/user/userActions";
import { connect } from "react-redux";
function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading ...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <>
      <h2>User Data: </h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <div key={user.id}>
              <h2>New User starts</h2>
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
              <br/>
            </div>
          ))}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
