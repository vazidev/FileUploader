import React, {useRef, useEffect, useState} from 'react'
import techImg from "../ChatRoom/tech.png";
import userImg from "../ChatRoom/user.png"


const LOCAL_SESSION_KEY = 'chatManager.session' /** Chat session holder **/
export default function Standard(session){


/** TODO Values not being retrieved form the app **/
console.log(session)
    let thisSession = useRef(session)


    useEffect(() => {
        localStorage.setItem(LOCAL_SESSION_KEY,  JSON.stringify(session))
    }, [session])
        console.log("SessionKey:", JSON.parse(localStorage.getItem(LOCAL_SESSION_KEY)))

    return (
                <div className="session-info">
                    <label id={"session-label"}> Session: {session.sessionId}</label>
                    <br/>
                    <label id="user-label">{<img className={"userIcon"} src={userImg}/>} :  {session.sessionUser} </label>
                    <br/>
                    <label id="tech-label"> {<img className={"userIcon"} src={techImg}/>} : {session.sessionTech}</label>
                </div>
        )
}