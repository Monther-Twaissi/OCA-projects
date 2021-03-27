import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Products = (props) => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token"))) {
      props.history.push("/");
    } else {
      axios
        .get("http://86.108.1.225/api/category")
        .then((response) => setCategories(response.data));
      axios
        .get("http://86.108.1.225/api/product")
        .then((response) => setProducts(response.data));
    }
  }, []);
  const addProduct = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    console.log(data);
    axios.post(`http://86.108.1.225/api/product`, data).then((res) => {
      alert("Product Added as " + JSON.stringify(res.data));
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
                onSubmit={addProduct}
                id="form"
                data-parsley-validate
                className="form-horizontal form-label-left"
              >
                <div className="item form-group">
                  <label
                    className="col-form-label col-md-3 col-sm-3 label-align"
                    htmlFor="first-name"
                  >
                    Product Name <span className="required">*</span>
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
                    Product Price <span className="required">*</span>
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
                    htmlFor="first-name"
                  >
                    Product Description <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 ">
                    <input
                      type="text"
                      id="first-name"
                      required="required"
                      name="productDescription"
                      className="form-control "
                    />
                  </div>
                </div>
                <div className="item form-group">
                  <label
                    className="col-form-label col-md-3 col-sm-3 label-align"
                    htmlFor="last-name"
                  >
                    Product Category <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 ">
                    <select
                      className="col-md-12 col-sm-3 "
                      name="categoryID"
                      style={{ fontSize: "1rem" }}
                      id=""
                    >
                      {categories.map((element) => (
                        <option value={element._id}>
                          {element.categoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="item form-group">
                  <label
                    htmlFor="middle-name"
                    className="col-form-label col-md-3 col-sm-3 label-align"
                  >
                    product Image
                  </label>
                  <div className="col-md-6 col-sm-6 ">
                    <input
                      id="middle-name"
                      className="form-control"
                      type="file"
                      name="productImage"
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
                    <th className="column-title">Product Name </th>
                    <th className="column-title">Product Image </th>
                    <th className="column-title">Product Price </th>
                    <th className="column-title">Product description </th>
                    <th className="column-title">Product Category</th>
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
                  {products.map((item) => (
                    <tr className="even pointer">
                      <td>{item.productName}</td>
                      <td>
                        <img
                          style={{ width: "75px" }}
                          src={"http://86.108.1.225:8080/" + item.productImage}
                        />
                      </td>
                      <td>{item.productPrice} JOD</td>
                      <td>{item.productDescription}</td>
                      <td>{item.category.categoryName}</td>
                      <td>
                        <button
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            history.push(`edit-product/${item._id}`)
                          }
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
                                `http://86.108.1.225/api/product/${item._id}`
                              )
                              .then((res) => {
                                console.log(res);
                                setProducts((c) =>
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
