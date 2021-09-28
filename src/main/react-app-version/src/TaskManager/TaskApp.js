import React, {useState, useRef, useEffect} from "react";
import uuidv4 from 'uuidv4';
import TaskMapper from "./TaskMapper";

const LOCAL_STORAGE_KEY = 'taskManager.tasks'


export default function TaskApp(){
    /** render to state using the useState hook [Variable, function]=object destructuring
     * inital Data:
     * {taskId:1, name:'Water Plants', complete:false},
     * {taskId:2, name:'Feed Cat', complete:false}
     * **/

    const [getTasks, setTasks] = useState([
            {taskId:uuidv4, taskName:'Water Plants', taskComplete:false},
            {taskId:uuidv4, taskName:'Feed Cat', taskComplete:false}

    ])
    const addTaskRef = useRef(null)
    console.log(getTasks)
    function addTaskHandler(e){
        /* assign the current values of the input filed to the useRef values state w/ unique Id **/
        const addTask = addTaskRef.current.value
        if ( addTask === '') return
        console.log(addTask) /** capture data in log **/
        setTasks(prevTasks => {
            return [...prevTasks, { taskId:uuidv4, taskName:addTask, taskComplete:false}]
        })
        addTaskRef.current.value = null /** reset the input filed to null **/
    }

    function deleteTaskHandler(e){
        const newTaskList = getTasks.filter(pendingTasks =>  !pendingTasks.taskComplete)
        setTasks(newTaskList)
    }

    /** Toggling and Deleting **/
    function toggleTasks(id){
        const newTaskList = [...getTasks]
        const openTasks = newTaskList.find(openTasks => openTasks.taskId === id)
        openTasks.taskComplete= !openTasks.taskComplete
        setTasks(newTaskList)
    }

    /** retrieve stored values and insert into the the current list **/
    useEffect(() => {
        let storedValues =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedValues === true)  setTasks(storedValues)
    },[])

    /** store in local storage using useEffect **/
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,  JSON.stringify(getTasks))
    }, [getTasks])




    return (
            <div className={"tasksSection"}>
                <h2> Task List </h2>
                <div className="taskLister" id="taskLister">
                    {/** ToDo demos Sections **/}
                    <div>
                       <div className= {"displayTasks"}>
                           <TaskMapper tasks={getTasks} toggleTasks={toggleTasks} />  {/* pass the variables/props/attributes  to the function */}
                       </div>

                        <input ref={addTaskRef} type={"text"}   />
                        <button className={'.btn'} onClick={addTaskHandler}> Add to list </button>
                        <button className={'.btn'} onClick={deleteTaskHandler} > Delete from List</button>
                        <br/>
                        <label> {getTasks.filter(pendingTasks => !pendingTasks.taskComplete).length} : Tasks Pending </label>
                    </div>

                </div>
            </div>


    )
}



function GetFileList({files}){
    return (
        <div>
            {files.length} {/* curly brackets indicate the prescence of java code */}
        </div>
    )
}
