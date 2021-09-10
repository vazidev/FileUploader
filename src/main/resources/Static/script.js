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