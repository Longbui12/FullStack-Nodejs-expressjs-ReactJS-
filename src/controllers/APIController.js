import APIService from "../services/APIService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  //console.log("your email : " + email);
  let password = req.body.password;
  // console.log("your password : " + password);
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter !",
    });
  }

  let userData = await APIService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

module.exports = {
  handleLogin,
};
