import React, {useEffect, useRef, useState} from "react";
import uuidv4 from "uuidv4";
import ChatMapper from "./ChatMapper";


const LOCAL_STORAGE_KEY = 'ChatManager.chats'
let varMessage =1001; //set the index value of the start chat

export default function ChatBox() {
    const [getChats, setChats] = useState([
        /** Test Message Data **/
        { tech:true, userId:"Manish",  newChat:"Hello Steve, how may I assist you?", chatId:( varMessage++)},
        { tech:false, userId:"Steve",  newChat:"Hello Manish, my keyboard is not working!",chatId:( varMessage++)},
        { tech:true, userId:"Manish",  newChat:"The entire keyboard, or just some keys?",chatId:( varMessage++)}
    ])
    const newChatRef = useRef(null)
    console.log("getChats:", getChats)  /*** test to verify data parsing **/
    console.log("SetChats:", setChats)

    function addChatHandler(e){
        const nextChat = newChatRef.current.value
        if ( nextChat === '') return
        console.log(nextChat) /** capture data in log **/
        console.log(setChats)
        setChats(chatLog => {
            return [...chatLog, { tech:false, userId:"Steve", newChat:nextChat, chatId:( varMessage++)}]
        })
        newChatRef.current.value = null /** reset the input filed to null **/
    }

    /** retrieve stored values and insert into the the current list **/
    useEffect(() => {
        const storedChats = JSON.parse( sessionStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedChats === true)  setChats(storedChats)
    },[])

    /** store in local storage using useEffect **/
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,  JSON.stringify(getChats))
    }, [getChats])


    return(
        <div className={"chatSection"} id={"chatSection"}>
            <div className={"chatRoom"} >
                <h3> Chat Room </h3>
                <ChatMapper chatLog={getChats} />
            </div>
            <div className={"chatBox"} id={"chatBox"}>
                <input ref={newChatRef} type={<textarea name={"chatText"} id={"addChat"}  className={"chatText"} cols="30" rows="25"/>} />
                <button className={'.btn'} onClick={addChatHandler}> Send </button>
            </div>
        </div>

    )
}