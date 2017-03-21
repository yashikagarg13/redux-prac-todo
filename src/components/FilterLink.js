import connect from "react-redux";
import setVisibilityFilter from "../actions/setVisibilityFilter";
import Link from "./Link";


const mapStateToPropsFilterLink = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
}

const mapDispatchToPropsFilterLink = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  };
}

const FilterLink = connect(
  mapStateToPropsFilterLink,
  mapDispatchToPropsFilterLink,
)(Link);

export default FilterLink;