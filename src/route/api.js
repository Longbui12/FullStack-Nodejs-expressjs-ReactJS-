import express from "express";
import APIController from "../controllers/APIController";

let router = express.Router();

const initAPIRoutes = (app) => {
  router.post("/login", APIController.handleLogin);
  router.get("/get-all-users", APIController.handleGetAllUsers);
  router.post("/create-new-user", APIController.handleCreateNewUser);
  router.put("/edit-user", APIController.handleEditUser);
  router.delete("/delete-user", APIController.handleDeleteUser);

  return app.use("/api", router);
};
export default initAPIRoutes;
