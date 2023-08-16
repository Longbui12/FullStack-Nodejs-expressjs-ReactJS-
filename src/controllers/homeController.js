import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let testPage = (req, res) => {
  return res.render("test/aboutPage.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crudPage.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("<h1>Post CRUD from server 🎁🎁🎁 </h1>");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;

  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    // check user data not found
    return res.render("editCRUD.ejs", {
      userData,
    });
  } else {
    return res.send("Users not found !");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    //return res.send("deleted the user succeed 👌👌 !!");
    return res.redirect("/get-crud"); // Redirect to the listing page
  } else {
    return res.send("User not found !! 🤬🤬🤬");
  }
};

module.exports = {
  getHomePage,
  testPage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
