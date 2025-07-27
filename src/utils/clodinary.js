import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"//file system red,write,permission etc..

const uploadCloudinary = async (localFilePath) => {

    try {
        if(!localFilePath) return null
        //upload the file in cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type : 'auto'
        })
        //file has been successfull uploaded
        console.log("file successfully uploaded",response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove locally file 
        return null;
    }

}

export {uploadCloudinary}