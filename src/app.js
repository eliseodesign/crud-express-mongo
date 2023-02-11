import express from "express";
const {engine} = require("express-handlebars")
import path from 'path'
import indexRoutes from "./routes/index.routes"
const app = express()

app.set("views", path.join(__dirname, "views"))

app.engine(".hbs", engine({
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs"
}));

app.set("view engine", ".hbs")

app.use(indexRoutes)

export default app