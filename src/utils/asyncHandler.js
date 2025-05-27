const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve()
     .catch(error=>next(error))
    }
} 

export {asyncHandler} 

//try catch wrapper for async functions in Express.js
// const asyncHandler = (fn)=>async (err,req,res,next)=>{
//     try{}
//     catch(error){
//         res.statuse(error.code ||500 ).json({
//             success:false,
//             message:error.message
//         })
//     }
// } 