import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./breadcrumb.css";
import Zoom from "react-reveal/Zoom";

const Breadcrumb = ({ path }) => {
  return (
    <div className="breadcrumbs-section d-flex align-items-center ">
      <div className="container">
        <Zoom right>
        <nav className="breadcrumbs  ">
          <Link to="/" className="breadcrumbs__item">
            <AiFillHome />
          </Link>
          <span className="breadcrumbs__item is-active">{path}</span>
        </nav>
        </Zoom>
      </div>
    </div>
  );
};

export default Breadcrumb;
