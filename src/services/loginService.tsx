import { config } from "../configs/config";
import { Credentials } from "../models/credentials";
import * as mockService from "../services/mock/mockService";

export const AuthenticateUser = (credentials: Credentials) => {
  if (config.mode === "online") {
    return mockService.authenticateUser(credentials);
  } else {
    return mockService.authenticateUser(credentials);
  }
};
