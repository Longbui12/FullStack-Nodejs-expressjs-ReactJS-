import db from "../models/index";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, passWord) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ["email", "roleId", "passWord"],
          where: { email: email },
          raw: true,
        });

        if (user) {
          // compare passWord :
          //   let check = bcrypt.compareSync(passWord, user.passWord);
          let check = await bcrypt.compare(passWord, user.passWord);

          if (check) {
            userData.errCode = 0;
            userData.errMessage = "OK";
            console.log(user);
            delete user.passWord;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong passWord";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found ~`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in your system . Please try other email !`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "ALL") {
        users = await db.User.findAll({
          // delete passWord
          attributes: {
            exclude: ["passWord"],
          },
        });
      }
      if (userId && userId !== "ALL") {
        users = await db.User.findOne({
          where: { id: userId },
          // delete passWord
          attributes: {
            exclude: ["passWord"],
          },
        });
      }
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserLogin,
  //   checkUserEmail,
  getAllUsers,
};
