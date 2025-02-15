import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { fetchUsers } from "./userSlice";
export const UserView = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
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
              <table>
                <thead>
                  <tr>
                    <th>New User Starts</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name :</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <td>Username :</td>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <td>Email :</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>Phone :</td>
                    <td>{user.phone}</td>
                  </tr>
                  <tr>
                    <td>Website :</td>
                    <td>{user.website}</td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          ))}
      </div>
    </>
  );
};
