const config = {
    AppwriteURL: String(import.meta.env.VITE_APPWRITE_URL), // in vite we have the axis the env fils like (import.meta.env) 
    AppwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    AppwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    AppwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    AppwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default config   