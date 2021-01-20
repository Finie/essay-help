import React from "react";
import { useTable } from "react-table";
import { AiFillDelete } from "react-icons/ai";
import { RiRadioButtonLine } from "react-icons/ri";

import "./ManageUsers.css";
import { userInfo } from "../../../../assets/data/userinfo";

function ManageUsers() {
  return (
    <div className="dash-manageUsers-container">
      <div className="manageUsers-item-holder">
        <div className="breadcrumbs">
          <span>User Management</span>
          <div className="spacer-manage" />
          <span>Admin</span>
        </div>
        <h1>Hello again guys this this the User management section</h1>
        <div className="table">
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <th>UserId</th>
                <th>Username</th>
                <th>Email Address</th>
                <th>Role</th>
                <th>Amount spent</th>
                <th>Assignments</th>
                <th>Active</th>
                <th>Delete User</th>
              </tr>
            </thead>

            <tbody>
              {userInfo.data.map((user, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    <td>{user.userId}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{`$${user.spendings}`}</td>
                    <td>{user.assignmet}</td>
                    <td>{user.active ? <RiRadioButtonLine style={{color:"green"}}/> : <RiRadioButtonLine style={{color:"red"}}/>}</td>
                    <td><AiFillDelete onClick={()=>{
                        console.log("delete...")
                    }} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
