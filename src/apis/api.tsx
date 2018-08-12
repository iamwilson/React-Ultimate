import * as appSetting from "../configs/config";
import * as onlineApi from "./online";
import * as offlineApi from "./offline";

export const Api = () => {
  if (appSetting.config.mode === appSetting.ONLINE_MODE) 
    return onlineApi;
  return offlineApi;
};
