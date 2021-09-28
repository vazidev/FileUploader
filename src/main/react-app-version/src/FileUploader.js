import React from "react";

export default function FileUploader(){







function tabManager(){
    return (
        <div id={"uploader"}>
            <div>
                <button className="tablinks active" id={"singleTab-uploader"} onClick={openUploader} > Single Upload </button>
                <button className="tablinks" id={"multiTab-uploader"}> Multiple Uploads</button>
            </div>
            <div className="form-group mt-3 btn">
                <button type="submit" className="btn-upload btn-primary" id="submitFileBtn"> Submit</button>
                <br/>
                <label className="uploadFile1"> </label>
            </div>
        </div>
    )
}

function singleFileUpload(){
    return (
        <div id={"uploader"}>
            <div className="tab single-uploader tabContent" id={"single_file_uploader"}>
                <label> Single File</label>
                <input type={"file"}  single/>
            </div>
            <div className="form-group mt-3 btn">
                <button type="submit" className="btn-upload btn-primary" id="submitFileBtn"> Submit</button>
                <br/>
                <label className="uploadFile1"> </label>
            </div>
        </div>

        )

}

function multiFileUpload(){
    return (
            <div className={"tab multi-uploader tabcontent"} id={"multi_file_uploader"}>
                <label> Multiple Files </label>
                <input type={"File"} multiple />
            </div>
        )

}

function openUploader(evt, uploader) {
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
        <div className="fileupload" >
            <h4> File uploader </h4>
            <tabManager />
            <singleFileUpload />
            <multiFileUpload />
        </div>
    )
}