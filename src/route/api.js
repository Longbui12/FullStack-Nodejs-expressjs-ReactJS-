import express from "express";
import APIController from "../controllers/APIController";
import doctorController from "../controllers/doctorController";

let router = express.Router();

const initAPIRoutes = (app) => {
  router.post("/login", APIController.handleLogin);
  router.get("/get-all-users", APIController.handleGetAllUsers);
  router.post("/create-new-user", APIController.handleCreateNewUser);
  router.put("/edit-user", APIController.handleEditUser);
  router.delete("/delete-user", APIController.handleDeleteUser);

  // write APi for models (allcodes)
  router.get("/allcode", APIController.getAllCode);
  router.get("/top-docdor-home", doctorController.getTopDoctorHome);

  // write API for Manage-doctor
  router.get("/get-all-doctors", doctorController.getAllDoctors);
  router.post("/save-infor-doctors", doctorController.postInforDoctor);
  return app.use("/api", router);
};
export default initAPIRoutes;
