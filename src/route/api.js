import express from "express";
import APIController from "../controllers/APIController";

let router = express.Router();

const initAPIRoutes = (app) => {
  router.post("/login", APIController.handleLogin);

  return app.use("/api", router);
};
export default initAPIRoutes;
