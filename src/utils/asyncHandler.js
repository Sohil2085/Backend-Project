//with promises
const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}




export {asyncHandler}




//with try and catch 
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.status || 500).json({
//             message: error.message,
//             success : false
//         })
//     }
// }