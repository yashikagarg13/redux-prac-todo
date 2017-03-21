import React from "react";
import FilterLink from "./FilterLink";

const Footer = () => {
  return (
    <p>Show: &nbsp;&nbsp;
      <FilterLink filter="SHOW_ALL">
        All</FilterLink>&nbsp;&nbsp;
      <FilterLink filter="SHOW_ACTIVE">
        Active</FilterLink>&nbsp;&nbsp;
      <FilterLink filter="SHOW_COMPLETED">
        Completed</FilterLink>
    </p>
  );
}

export default Footer;