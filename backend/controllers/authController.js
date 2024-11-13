const { errorHandler } = require("../lib/utils");
const { authService } = require("../services/authService");


const registerController = async (req, res) => {
  try {
    const response = await authService.registerService(req);
    return res.status(201).send({
      success: true,
      message: "user Register Successfully",
      user: response.user,
      token: response.token
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
const signInController = async (req, res) => {
    try {
      const response = await authService.signInService(req);
      return res.status(200).send({
        success: true,
        message: "user Logined Successfully",
        user: response.user,
        token:response.token
      });
      
    } catch (error) {
      errorHandler(res, error);
    }
  };

const logoutController = async(req,res)=>{
  try{
    console.log("hello")
    const response = await authService.logOutService(req);
    return res.status(200).send({
      success: true,
      message: "user Logout Successfully",
      user: response.user
    });
  }
  catch(error){
    errorHandler(res,error)
  }
}
module.exports.authController = {
    registerController,signInController,logoutController
}
