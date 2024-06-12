import { ErrorHandler } from "../middlewares/error.js";
import { Task } from "../models/task.js"

export const newTask = async (req,res,next) => {
   try{
    const {title,description} = req.body;
    await Task.create({
        title,
        description,
        user: req.user,
    });
    res.status(201).json({
        suceess: true,
        message: "Task added Successfully",
    });
   }
   catch(err){
    next(err);
   } 
};

export const getMytask = async (req,res,next) => {
   try{
    const userid = req.user._id;
    const tasks = await Task.find({ user: userid });
    res.status(200).json({
        suceess: true,
        tasks,
    });
   }
   catch(err){
    next(err);
   }
};

export const updateTask  = async (req,res,next) => {
    try{
    const { id } = req.params;
    const task = await Task.findById(id);

    if(!task) return next(new ErrorHandler("Task Not Found",404));

    task.isCompleted = !task.isCompleted;
    await task.save();
 
    res.status(200).json({
        suceess: true,
        message: "Task Updated",
    });
    }
    catch(err){
        next(err);
    }
};

export const deleteTask = async (req,res,next) => {
    try{
        const { id } = req.params;
    const task = await Task.findById(id);

    if(!task) return next(new ErrorHandler("Task Not Found",404));
    await task.deleteOne();

    res.status(200).json({
        suceess: true,
        message: "Task Deleted",
    });
    }
    catch(err){
        next(err);
    }
};

