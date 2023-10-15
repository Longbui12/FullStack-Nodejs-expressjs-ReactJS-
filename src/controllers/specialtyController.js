import SpecialtyService from "../services/SpecialtyService";

let createSpecialty = async (req, res) => {
  try {
    let infor = await SpecialtyService.createSpecialtyService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let getAllSpecialty = async (req, res) => {
  try {
    let infor = await SpecialtyService.getAllSpecialtyService();
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};
module.exports = {
  createSpecialty,
  getAllSpecialty,
};
