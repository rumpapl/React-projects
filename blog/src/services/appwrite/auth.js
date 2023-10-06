/* eslint-disable no-useless-catch */
import { Client, Account, ID } from "appwrite";
import ENV_VARIABLES from "../../config/env-variables";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(ENV_VARIABLES.appwriteUrl) // Your API Endpoint
      .setProject(ENV_VARIABLES.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
