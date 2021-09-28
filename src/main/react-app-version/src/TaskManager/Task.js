import React from "react";

export default function Task({task, toggleTasks}){

    function toggleHandler(){ /**function to handle the toggling by ID **/
        toggleTasks(task.taskId)
    }

    /**
     * Can use the
     * Task Name or the Checkbox to toggle the taskComplete value to false/true
     * usefull in touch capable devices
     */


    return( /**return the individual values of the List **/
        <div>
            <p id={"taskObject"} className={"task"} >
                <input type={"checkbox"} checked={task.complete} onChange={toggleHandler}/>
                <label id={"taskLink"} onClick={toggleHandler} >{task.taskName}</label>
            </p>
        </div>




    )
}