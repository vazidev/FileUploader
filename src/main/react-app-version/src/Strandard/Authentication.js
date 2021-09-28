import React, { useState} from "react";


export default function Authentication({getUser}) {

const [tabState] = useState([{evt:"active", currLoader:"login"}])

    function GetUser() {
        return (
            <>
                <div className="tab login " id="logInUser">
                    <button className="login-tab" onClick="tabManager(active)"> Sign in </button>
                    <br/>
                    <div className="tabContent">
                        <br />
                        <div className="dta-set">
                            <label>User Name:  </label>
                            <input type="text"/>
                        </div>
                        <div className="dta-set">
                            <label> Password:  </label>
                            <input type="password" />
                        </div>
                        <button type="submit" className="btn-upload btn-primary" id="submitFileBtn" >Log in </button>
                        <br />
                        <br/>
                    </div>
                </div>

            </>

        )
    }

    function RegisterUser() {
        return (
            <>
                <div className="tab register" id="registerUser">
                    <button className="register-tab" onClick="tabManager(active)"> Register New User </button>
                    <br/>
                    <div className="tabContent">
                        <br />
                        <div className="dta-set">
                            <label>UserName: </label>
                            <input type="text"/>
                        </div>
                        <div className="dta-set">
                            <label> Password: </label>
                            <input type="password" />
                        </div>

                        <br />
                        <button type="submit" className="btn-upload btn-primary" id="submitFileBtn" > Register </button>
                       <br />
                    </div>
                    <br />
                </div>
            </>

        )
    }

    function tabManager(evt, uploader) {
        // Declare all variables
        let i;
        let tabcontent;
        let tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        //Display the default Tab
        //document.getElementById("defaultTab").click();

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(uploader).style.display="block";
        evt.currentTarget.className += " active";



    }

    return (
        <>
            <div className={"authenticator"}>
                <tabManager evt={tabState.evt} uploader={tabState.currLoader}  />
                <GetUser  />
                <RegisterUser />
            </div>
        </>
    )


}