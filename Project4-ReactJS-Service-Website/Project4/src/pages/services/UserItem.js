import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserItem extends Component {
  render() {
    const { service, avatar_url, html_url } = this.props.user;
    return (
      <div className="m-card text-center">
        <img
          src={avatar_url}
          alt=""
          className="img-1 round-border"
          style={{ width: "300px", height: "200px" }}
        />
        <div className="serviceName">
          <h3>{service}</h3>
        </div>
        <div>
          <Link to={html_url}>
            <a
              href={html_url}
              className="btn-Services  my-4  fourth"
              target="_blank"
            >
              Book Now
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserItem;
