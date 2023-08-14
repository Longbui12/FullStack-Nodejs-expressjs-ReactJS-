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

const getCRUD = (req, res) => {
  return res.render("crudPage.ejs");
};

const postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  //console.log(req.body);
  return res.send("<h1>Post CRUD from server 🎁🎁🎁 </h1>");
};

module.exports = {
  getHomePage,
  testPage,
  getCRUD,
  postCRUD,
};
