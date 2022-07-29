import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import fasilitasRoute from "./routes/FasilitasRoute.js";
import gedungRoute from "./routes/gedungRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(fasilitasRoute);
app.use(gedungRoute);

app.listen(5000, ()=> console.log('Server Up and Running...'));