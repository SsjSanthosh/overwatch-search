import React from "react";
import "./Search.scss";
import { handleSearchChange } from "../../redux/search/search-actions";
import { connect } from "react-redux";
function Search({ search, handleSearchChange }) {
  const handleChange = e => {
    handleSearchChange(e.target.value);
  };
  return (
    <div className="container mt-5">
      <form className="form-group form-inline">
        <input
          type="text"
          value={search}
          name="player"
          onChange={handleChange}
          className="form-control player-search py-4"
          id="player-search"
          placeholder="Enter a player's profile name and region to search"
        />
        <select class="custom-select p-4">
          <option value="pc" selected>
            PC
          </option>
          <option value="xbox">Xbox</option>
          <option value="ps4">PlayStation</option>
        </select>
        <button className="btn btn-success btn-lg">Search</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search.search
  };
};
const mapDispatchToProps = dispatch => ({
  handleSearchChange: item => dispatch(handleSearchChange(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
