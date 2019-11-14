import axios from "axios";
import oversmash from "oversmash";
export const getProfile = async (platform, region, tag) => {
  const ow = oversmash();
  ow.playerStats(tag, platform).then(player => console.log(player));
};
