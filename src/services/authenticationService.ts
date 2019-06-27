import { Credentials } from '../models/credentials';

// configurations
import * as appSetting from '../configs/config';
import * as mockService from './mock/mockService';

export const AuthenticateUser = (credentials: Credentials) => {
    if (appSetting.config.mode === appSetting.OFFLINE) {
        return mockService.authenticateUser(credentials);
    } else {
        return mockService.authenticateUser(credentials);
    }
};
