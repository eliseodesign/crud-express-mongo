import { Router } from "express"
import Task from "../models/Task"

const router = Router()

router.get("/", async (req, res)=>{
  console.log("first")
  const tasks = await Task.find().lean()
  res.render("index", {tasks: tasks})

})

router.post("/tasks/add", async (req, res)=>{
  console.log(req.body)
  const task = Task(req.body)

  await task.save()

  res.redirect("/")
})

router.get("/about", (req, res)=>{
  res.render("about")

})

router.get("/edit", (req, res)=>{
  res.render("edit")
})
export default router 