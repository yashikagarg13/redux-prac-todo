import React from "react";
import FilterLink from "./FilterLink";

const Footer = () => {
  return (
    <p>Show: &nbsp;&nbsp;
      <FilterLink filter="all">
        All</FilterLink>&nbsp;&nbsp;
      <FilterLink filter="active">
        Active</FilterLink>&nbsp;&nbsp;
      <FilterLink filter="completed">
        Completed</FilterLink>
    </p>
  );
}

export default Footer;