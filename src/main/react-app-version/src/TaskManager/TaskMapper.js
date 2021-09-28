import React from "react";
import Task from "./Task";

export default function TaskMapper({tasks, toggleTasks}){
    return (
        tasks.map(task => {
            return <Task key={task.taskId} task={task} toggleTasks={toggleTasks}/>
        })
    )

}