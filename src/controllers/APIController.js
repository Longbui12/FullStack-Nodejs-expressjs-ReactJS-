import APIService from "../services/APIService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  //console.log("your email : " + email);
  let passWord = req.body.passWord;
  // console.log("your password : " + password);
  if (!email || !passWord) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter !",
    });
  }

  let userData = await APIService.handleUserLogin(email, passWord);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

let handleGetAllUsers = async (req, res) => {
  let id = req.body.id; // ALL or id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters",
      users: [],
    });
  }
  let users = await APIService.getAllUsers(id);
  //console.log(users);
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    users,
  });
};
module.exports = {
  handleLogin,
  handleGetAllUsers,
};
