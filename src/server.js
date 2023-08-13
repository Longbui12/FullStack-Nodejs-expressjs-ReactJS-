import express from "express";
//import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connetDB from "./config/connectDB";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init web route
viewEngine(app);
initWebRoutes(app);

connetDB();

app.listen(port, () => {
  console.log(`Server run success on port : ${port}`);
});
