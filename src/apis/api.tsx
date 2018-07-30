import * as Configuration from "../configs/config";
import * as offlineApi from "./offline";
import * as onlineApi from "./online";

export const Api = () => {
  if (Configuration.config.mode == Configuration.ONLINE_MODE) return onlineApi;
  return offlineApi;
};
