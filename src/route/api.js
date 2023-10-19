import express from "express";
import APIController from "../controllers/APIController";
import doctorController from "../controllers/doctorController";
import patientController from "../controllers/patientController";
import specialtyController from "../controllers/specialtyController";
import clinicController from "../controllers/clinicController";
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
  router.get("/get-detail-doctor-by-id", doctorController.getDetailDoctorById);

  // write API for schedule-doctor
  router.post("/bulk-create-schedule", doctorController.bulkCreateSchedule);
  router.get("/get-shedule-doctor-by-date", doctorController.getScheduleByDate);

  router.get(
    "/get-extra-infor-doctor-by-id",
    doctorController.getExtraInforDoctorById
  );

  router.get(
    "/get-profile-doctor-by-id",
    doctorController.getProfileDoctorById
  );

  router.get(
    "/get-list-patient-for-doctor",
    doctorController.getListPatientForDoctor
  );
  router.post(
    "/patient-book-appointment",
    patientController.postBookAppointment
  );

  router.post(
    "/verify-book-appointment",
    patientController.postVerifyBookAppointment
  );

  router.post("/create-new-specialty", specialtyController.createSpecialty);

  router.get("/get-all-specialty", specialtyController.getAllSpecialty);

  router.get(
    "/get-detail-specialty-by-id",
    specialtyController.getDetailSpecialtyById
  );

  // API for Clinic
  router.post("/create-new-clinic", clinicController.createClinic);

  router.get("/get-all-clinic", clinicController.getAllClinic);

  router.get("/get-detail-clinic-by-id", clinicController.getDetailClinicById);

  return app.use("/api", router);
};
export default initAPIRoutes;
