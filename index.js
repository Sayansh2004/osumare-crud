const express=require("express");
const app=express();
const path=require("path");
const { v4: uuidv4}=require('uuid');
const methodOverride = require("method-override");
const ExpressError = require('./expressError');

app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


let tasks=[
    {    
        id:uuidv4(),
        title: "Morning Routine",
        username:"Aakash",
        description:"I have to wake up early to finish revise the concepts of Node.js",
    },
    {   
        id:uuidv4(),
        title: "Household Chores",
        username:"Ankit",
        description:"Have to wash clothes and buy some groceries,",
    },
    {   
        id:uuidv4(),
        title: "Study Group",
        username:"Sanchit",
        description:"Call Aakash to bring some notes for the upcoming exams",
    },
];

app.get("/tasks",(req,res)=>{
    res.render("index.ejs",{tasks});
})

app.get("/tasks/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/tasks",(req,res,next)=>{
    let{title, username, description}=req.body;
    if(!title || !username || !description) {
        throw new ExpressError("Missing required fields!", 400);
    }
    let id=uuidv4();
    tasks.push({id, title, username, description});
    res.redirect("/tasks");
})

app.get("/tasks/:id",(req,res,next)=>{
    let {id}=req.params;
    let task=tasks.find((t)=>id===t.id);
    if(!task) {
        throw new ExpressError("Task not found!", 404);
    }
    res.render("show.ejs",{task});
})

app.put("/tasks/:id",(req,res,next)=>{
    let {id}=req.params;
    let {title, description} = req.body;
    if(!title || !description) {
        throw new ExpressError("Missing required fields!", 400);
    }
    let task=tasks.find((t)=>id===t.id);
    if(!task) {
        throw new ExpressError("Task not found!", 404);
    }
    task.title = title;
    task.description = description;
    res.redirect("/tasks");
})

app.delete("/tasks/:id",(req,res,next)=>{
    let {id}=req.params;
    let task=tasks.find((t)=>id===t.id);
    if(!task) {
        throw new ExpressError("Task not found!", 404);
    }
    tasks = tasks.filter((t) => t.id !== id);
    res.redirect("/tasks");
})

app.get("/tasks/:id/edit",(req,res,next)=>{
    let {id}=req.params;
    let task=tasks.find((t)=>id===t.id);
    if(!task) {
        throw new ExpressError("Task not found!", 404);
    }
    res.render("edit.ejs",{task});
})

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.msg || "Something went wrong!"
    });
});

app.listen(8080,()=>{
    console.log("listening to port 8080");
})