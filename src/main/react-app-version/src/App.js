import React, {useState} from 'react';
import Standard from "./Strandard/Standard";
import Authenticate from "./Strandard/Authentication";
import FileUploader from "./FileUploader";
import TaskApp from "./TaskManager/TaskApp";
import './index.css';
import {uuid, isUuid} from 'uuidv4';
import ChatBox from './ChatRoom/ChatBox';



function App() {
    const [authUser, setUser] = useState(["userName", "passKey"])
    const [getSessionUsers, updateUsers] = useState([{sessionUser:"Steve", sessionTech:'Kevin', sessionId:uuid}])

  return (
      <div>
          <Standard session={getSessionUsers} />

          <hr />
           {/** <Authenticate/>
          <hr />
          <hr />
        <TaskApp />
          <hr/>
          <hr />
        <FileUploader />

            <hr />
          <TaskApp />**/}
          <hr />
          <ChatBox />
      </div>
  )
}

export default App;
