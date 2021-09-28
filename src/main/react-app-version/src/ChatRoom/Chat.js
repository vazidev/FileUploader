import React, {useRef} from "react";
import userImg from "./user.png"
import techImg from "./tech.png"

export default function Chat(chat) {
    console.log(chat)

    function setStyling() {
        let className;
        if (chat.tech === true) {
            console.log(chat.tech)
            return document.getElementById("chatMessage")
                .style.alignContent="left"

        } else {
            return document.getElementById("chatMessage")

        }
    }

    /** TODO currently unable to display data **/
    return (
        <div id={setStyling()} className={"chatMessage"}>
            <label>
                {<img className={"userIcon"} src={techImg}/>}
                {chat.userId}:
                {chat.newChat}
            </label>


        </div>
    )
}

