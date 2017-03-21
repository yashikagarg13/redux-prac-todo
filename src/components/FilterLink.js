import {connect} from "react-redux";
import {setVisibilityFilter} from "../actions";
import Link from "./Link";


const mapStateToPropsFilterLink = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToPropsFilterLink = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
});

const FilterLink = connect(
  mapStateToPropsFilterLink,
  mapDispatchToPropsFilterLink,
)(Link);

export default FilterLink;