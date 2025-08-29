import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadCloudinary } from "../utils/clodinary.js";
import { apiResponse } from "../utils/apiResponse.js";


const registerUser = asyncHandler(async (req, res) => {
    //get user detail 
    //validation - not empty
    //check if user already exists : with username or email
    //check for images and avatars
    //upload them on cloudinary
    //create user object - create entry in db
    //remove password and refresh token from user object
    //check for user creation
    //return res

    const {fullName,email,username,password} = req.body
    console.log("email : ", email)
    
    if(
        [fullName,email,username,password].some((field) => field?.trim() === "")
    ){
        throw new apiError("All fields are required", 400);
    }

    const existedUser = User.findOne({
        $or : [{email}, {username}]
    })

    if(existedUser){
        throw new apiError("User already exists", 409)
    }

    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path

    if(!avatarLocalPath){
        throw new apiError("Avatar is required", 400)
    }

    if(!coverImageLocalPath){
        throw new apiError("Cover image is required", 400)
    }

    const avatar = await uploadCloudinary(avatarLocalPath);
    const coverImage = await uploadCloudinary(coverImageLocalPath);

    if(!avatar){
        throw new apiError("Avatar upload failed", 400);
    }

    if(!coverImage){
        throw new apiError("Cover image upload failed", 400);
    }

    const user  = await User.create({
        fullName,
        email,
        username : username.toLowerCase(),
        password,
        avatar : avatar.url,
        coverImage : coverImage?.url || ""
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new apiError("User creation failed", 400);
    }

    return res.status(201).json(
        new apiResponse(200, createdUser, "User Registered Successfully")
    )
});



export { registerUser }