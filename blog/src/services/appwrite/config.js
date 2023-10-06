import { Client, ID, Databases, Storage, Query } from "appwrite";
import ENV_VARIABLES from "../../config/env-variables";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(ENV_VARIABLES.appwriteUrl)
      .setProject(ENV_VARIABLES.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        ENV_VARIABLES.appwriteDatabaseId,
        ENV_VARIABLES.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userID }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        ENV_VARIABLES.appwriteDatabaseId,
        ENV_VARIABLES.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        ENV_VARIABLES.appwriteDatabaseId,
        ENV_VARIABLES.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        ENV_VARIABLES.appwriteDatabaseId,
        ENV_VARIABLES.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        ENV_VARIABLES.appwriteDatabaseId,
        ENV_VARIABLES.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  // file service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        ENV_VARIABLES.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(ENV_VARIABLES.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(ENV_VARIABLES.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: getFilePreview :: error", error);
      return false;
    }
  }
}

const service = new Service();

export default service;
