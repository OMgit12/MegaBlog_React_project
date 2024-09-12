import config from "../config/config";
import { Client, ID, Storage, Databases, Query  } from "appwrite";


export class Service{
    Client = new Client();
    Storage;
    Databases;

    constructor(){
        this.Client.setEndpoint(config.AppwriteURL).setProject(
            config.AppwriteProjectID
          );
          this.Storage = new Storage(this.Client)
          this.Databases = new Databases(this.Client)

    }

    async CreatePost({title , content , FraturedImage, status, userid}){
        try {
            const post =  await this.Databases.createDocument(
                config.AppwriteDatabaseId, 
                config.AppwriteCollectionId,
                {
                    title,
                    content,
                    FraturedImage,
                    status,
                    userid
                }
            )

            return 
            
        } catch (error) {
            throw error
        }
    }

    async Updatepost (slug, {title , content , FraturedImage, status}){
        try {
            const update = await this.Databases.updateDocument(
                config.AppwriteDatabaseId, 
                config.AppwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    FraturedImage,
                    status
                }
            )
            return update

        } catch (error) {
            throw error
        }
    }

    async DeletePost(slug){
        try {   
            await this.Databases.deleteDocument(
                config.AppwriteDatabaseId, 
                config.AppwriteCollectionId,
                slug,
               
            )

            return true
            
        } catch (error) {
            throw error

            return false
        }
    }

    async GetDocument(slug){
        try {
            return await this.Databases.getDocument(
                config.AppwriteDatabaseId, 
                config.AppwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }
    }

    async GetallPost(queries = Query.equal("status", "active")){
        try {
            return await this.Databases.listDocuments(
                config.AppwriteDatabaseId, 
                config.AppwriteCollectionId,
                queries
            )
        } catch (error) {
            throw error
        }
    }

    // file upload methods 

    async Fileupload(file){
        try {
            return await this.Storage.createFile(
                config.AppwriteBucketId, 
                ID.unique(),
                file
            )
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileid){
        try {
             await this.Storage.deleteFile(
                config.AppwriteBucketId,
                fileid
            )
            return true 
        } catch (error) {
            throw error
        }
    }

    getFilePreview(fileid){
        try {
            return this.Storage.getFilePreview(
                config.AppwriteBucketId,
                fileid
            )     
        } catch (error) {
            throw error
        }
            
    }

}


const service = new Service()

export default service