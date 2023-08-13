import db from "../models/index";

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

module.exports = {
  getHomePage,
  testPage,
};
