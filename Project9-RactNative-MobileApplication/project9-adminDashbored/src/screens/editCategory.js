import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

const Admin = (props) => {
  let history = useHistory();
  const [singleCategory, setSingleCategory] = useState({});
  const [name, setName] = useState("");
  const { id } = useParams();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token"))) {
      props.history.push("/");
    } else {
      axios.get(`http://86.108.1.225/api/category/${id}`).then((response) => {
        setSingleCategory(response.data);
        setName(response.data.categoryName);
      });
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    console.log(data);
    axios.put(`http://86.108.1.225/api/category/${id}`, data).then((res) => {
      alert("category updated as " + JSON.stringify(res.data));
      history.push("/admin");
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
                onSubmit={handleSubmit}
                id="form"
                data-parsley-validate
                className="form-horizontal form-label-left"
              >
                <div className="item form-group">
                  <label
                    className="col-form-label col-md-3 col-sm-3 label-align"
                    htmlFor="first-name"
                  >
                    Category Name <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 ">
                    <input
                      type="text"
                      id="first-name"
                      name="categoryName"
                      required="required"
                      className="form-control "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="item form-group">
                  <label
                    className="col-form-label col-md-3 col-sm-3 label-align"
                    htmlFor="last-name"
                  >
                    Category Color <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 ">
                    <input
                      type="text"
                      id="last-name"
                      name="categoryColor"
                      required="required"
                      className="form-control"
                      value={singleCategory.categoryColor}
                    />
                  </div>
                </div>
                <div className="item form-group">
                  <label
                    htmlFor="Image"
                    className="col-form-label col-md-3 col-sm-3 label-align"
                  >
                    Category Image
                  </label>
                  <div className="col-md-6 col-sm-6 ">
                    <input
                      id="middle-name"
                      className="form-control"
                      type="file"
                      name="categoryImage"
                    />
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
    </div>
  );
};

export default Admin;
