import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class Authtication {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(config.AppwriteURL).setProject(
      config.AppwriteProjectID
    );
    this.account = new Account(this.Client)
  }

  async CreateAccount({email, password, name}){
    try {
        const userAccount = await this.account.create(ID.unique() ,email, password, name)

        if(userAccount){
            return userAccount
        }
        else{
            return null
        }

    } catch (error) {
        throw error
    }
  }

  async Login({email, password}){
    try {
        const userlogin  = await this.account.createEmailPasswordSession(email, password)
        
        if(userlogin){
            return userlogin
        }
        else {
            return false
        }
    } catch (error) {
        throw error
    }
  }

  async GetcurrentUser(){
    try {
        return this.account.get()
    } catch (error) {
        throw error
    }

    return null;
  }

  async Logout(){
    try {
         const userlogout =  await this.account.deleteSessions()

        return userlogout
    } catch (error) {
        throw error
    }
  }
}

const authservice = new Authtication()

export default authservice;
