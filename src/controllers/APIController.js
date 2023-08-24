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
  let id = req.query.id; // ALL or id
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

let handleCreateNewUser = async (req, res) => {
  let message = await APIService.createNewUser(req.body);
  //console.log(message);
  return res.status(200).json(message);
};

let handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await APIService.updateUserData(data);
  return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters !",
    });
  }
  let message = await APIService.deleteUser(req.body.id);
  return res.status(200).json(message);
};
module.exports = {
  handleLogin,
  handleGetAllUsers,
  handleCreateNewUser,
  handleEditUser,
  handleDeleteUser,
};
