import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Pagination from '../components/usersPagination.js'

const Users = (props) => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(10);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token"))) {
      props.history.push("/");
    } else {
      axios
        .get("http://86.108.1.225/api/users/all")
        .then((response) => setUsers(response.data));
    }
  }, []);
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(users[0]);
  const addUser = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    console.log(data);
    axios.post(`http://86.108.1.225/api/users/create`, data).then((res) => {
      alert("User Added as " + JSON.stringify(res.data));
      //   history.push("/Products");
    });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-12 col-sm-12 ">
          <div className="x_panel">
            <div className="x_title">
              <h2>
                Form Design <small>different form elements</small>
              </h2>
              <ul className="nav navbar-right panel_toolbox">
                <li>
                  <a className="collapse-link">
                    <i className="fa fa-chevron-up" />
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-wrench" />
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="close-link">
                    <i className="fa fa-close" />
                  </a>
                </li>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="x_content">
              <br />
              <form
                onSubmit={addUser}
                id="form"
                data-parsley-validate
                className="form-horizontal form-label-left"
              >
                <div className="item form-group">
                  <label
                    className="col-form-label col-md-3 col-sm-3 label-align"
                    htmlFor="first-name"
                  >
                    User Name <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 ">
                    <input
                      type="text"
                      id="first-name"
                      required="required"
                      name="productName"
                      className="form-control "
                    />
                  </div>
                </div>
                <div className="item form-group">
                  <label
                    className="col-form-label col-md-3 col-sm-3 label-align"
                    htmlFor="first-name"
                  >
                    User Password <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 ">
                    <input
                      type="text"
                      id="first-name"
                      required="required"
                      name="productPrice"
                      className="form-control "
                    />
                  </div>
                </div>
                <div className="item form-group">
                  <label
                    className="col-form-label col-md-3 col-sm-3 label-align"
                    htmlFor="last-name"
                  >
                    User Role <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 ">
                    <select
                      className="col-md-12 col-sm-3 "
                      name="isAdmin"
                      style={{ fontSize: "1rem" }}
                      id=""
                    >
                      <option value="false">User</option>
                      <option value="true">Admin</option>
                    </select>
                  </div>
                </div>
                <div className="ln_solid" />
                <div className="item form-group">
                  <div className="col-md-6 col-sm-6 offset-md-3">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-sm-12  ">
        <div className="x_panel">
          <div className="x_title">
            <h2>
              Table design <small>Custom design</small>
            </h2>
            <ul className="nav navbar-right panel_toolbox">
              <li>
                <a className="collapse-link">
                  <i className="fa fa-chevron-up" />
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="fa fa-wrench" />
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Settings 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Settings 2
                  </a>
                </div>
              </li>
              <li>
                <a className="close-link">
                  <i className="fa fa-close" />
                </a>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          <div className="x_content">
            <p>
              Add class <code>bulk_action</code> to table for bulk actions
              options on row select
            </p>
            <div className="table-responsive">
              <table className="table table-striped jambo_table bulk_action">
                <thead>
                  <tr className="headings">
                    <th className="column-title">User Name </th>
                    <th className="column-title">Is Admin?</th>
                    <th className="column-title">Edit </th>
                    <th className="column-title">Delete </th>

                    <th className="bulk-actions" colSpan={7}>
                      <a
                        className="antoo"
                        style={{ color: "#fff", fontWeight: 500 }}
                      >
                        Bulk Actions ( <span className="action-cnt"> </span> ){" "}
                        <i className="fa fa-chevron-down" />
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((item) => (
                    <tr className="even pointer">
                      <td>{item.username}</td>
                      <td>
                        {item.isAdmin ? (
                          <i
                            style={{ fontSize: "2.5rem", color: "blue" }}
                            class="fa fa-thumbs-up"
                          ></i>
                        ) : (
                          <i
                            style={{ fontSize: "2.5rem", color: "red" }}
                            class="fa fa-thumbs-down"
                          ></i>
                        )}
                      </td>
                      <td>
                        <button
                          style={{ cursor: "pointer" }}
                          onClick={() => history.push(`edit-user/${item._id}`)}
                          style={{ fontSize: "2rem" }}
                          className="btn "
                        >
                          <i
                            style={{ color: "blue" }}
                            className="fa fa-edit"
                          ></i>
                        </button>
                      </td>
                      <td>
                        <button
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            axios
                              .delete(
                                `http://86.108.1.225/api/users/${item._id}`
                              )
                              .then((res) => {
                                console.log(res);
                                setUsers((c) =>
                                  c.filter((i) => i._id != item._id)
                                );
                              })
                          }
                          style={{ fontSize: "2rem" }}
                          className="btn "
                        >
                          <i
                            style={{ color: "red" }}
                            className="fa fa-trash"
                          ></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                <tr >
                <th colspan= '4' >
                <Pagination usersPerPage={userPerPage} users={users.length} paginate={paginate}  />
                </th>
                </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
