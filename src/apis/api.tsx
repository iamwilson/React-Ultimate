import * as onlineApi from './online';
import * as offlineApi from './offline';
import * as appSetting from '../configs/config';

export const Api = () => {
  if (appSetting.config.mode === appSetting.ONLINE_MODE) 
    return onlineApi;
  return offlineApi;
};
