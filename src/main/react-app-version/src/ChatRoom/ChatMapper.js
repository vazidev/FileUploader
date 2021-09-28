import React, {useRef} from "react";
import Chat from "./Chat";

export default function ChatMapper({chatLog}){
    console.log(chatLog)
    return (
        chatLog.map(chats => {
            return <Chat key={chats.chatId} chat={chats} />
        })

    )
}