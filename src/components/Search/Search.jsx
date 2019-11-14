import React from "react";
import "./Search.scss";
import {
  handleSearchChange,
  handleSearchSubmit
} from "../../redux/search/search-actions";
import { connect } from "react-redux";
function Search({ search, handleSearchChange, handleSearchSubmit }) {
  const handleChange = e => {
    handleSearchChange(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    let selectedPlatform = document.getElementById("platform");
    let platform =
      selectedPlatform.options[selectedPlatform.selectedIndex].value;
    let selectedRegion = document.getElementById("region");
    let region = selectedRegion.options[selectedRegion.selectedIndex].value;
    handleSearchSubmit({ region, platform, tag: search });
  };
  return (
    <div className="container mt-5">
      <form className="form-group form-inline" onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          value={search}
          name="player"
          onChange={handleChange}
          className="form-control player-search py-4"
          id="player-search"
          placeholder="Enter a player's profile name and region to search"
        />
        <select className="custom-select mr-3" id="region">
          <option value="us">US</option>
          <option value="eu">EU</option>
          <option value="kr">Korea</option>
          <option value="cn">Canada</option>
          <option value="global">Global</option>
        </select>
        <select className="custom-select " id="platform">
          <option value="pc">PC</option>
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
  handleSearchChange: item => dispatch(handleSearchChange(item)),
  handleSearchSubmit: item => dispatch(handleSearchSubmit(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
