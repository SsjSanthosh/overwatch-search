import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProfile } from "./profilehelper";
function Profile({ search }) {
  let { tag, region, platform } = search;
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (tag) {
      getProfile(platform, region, tag).then(data => {
        // let { username, level, games } = data;
        // let isprivate = data.private;
        // let profile = { username, isprivate, games, level };
        // setProfile(profile);
        console.log("in effect");
      });
    }
  }, [tag]);
  console.log(profile);
  return <div className="container">{tag}</div>;
}
const mapStateToProps = state => {
  return {
    search: state.search
  };
};
export default connect(mapStateToProps)(Profile);
