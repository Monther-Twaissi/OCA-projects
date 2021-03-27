import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

const EditProduct = (props) => {
  let history = useHistory();
  const [singleProduct, setSingleProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token"))) {
      props.history.push("/");
    } else {
      axios
        .get("http://86.108.1.225/api/category")
        .then((response) => setCategories(response.data));
      axios.get(`http://86.108.1.225/api/product/${id}`).then((response) => {
        setSingleProduct(response.data);
        setName(response.data.productName);
        setPrice(response.data.productPrice);
        setDesc(response.data.productDescription);
      });
    }
  }, []);
  const editProduct = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    console.log(data);
    axios.put(`http://86.108.1.225/api/product/${id}`, data).then((res) => {
      alert("product updated as " + JSON.stringify(res.data));
      //   history.push("/products");
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
                onSubmit={editProduct}
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
                      value={name}
                      className="form-control "
                      onChange={(e) => setName(e.target.value)}
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
                      value={price}
                      className="form-control "
                      onChange={(e) => setPrice(e.target.value)}
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
                      value={desc}
                      className="form-control "
                      onChange={(e) => setDesc(e.target.value)}
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
    </div>
  );
};

export default EditProduct;
