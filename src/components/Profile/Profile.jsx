import React from "react";
import { connect } from "react-redux";
function Profile({ search }) {
  return <div className="container">{search}</div>;
}
const mapStateToProps = state => {
  return {
    search: state.search.search
  };
};
export default connect(mapStateToProps)(Profile);
