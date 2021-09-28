React Web-Chat Demo

Structure
1. index.Html
2. index.js
3. index.css
4. App.js
5. Authentication.js
6. TaskApp.js
7. Standard.js
8. FileUploader.js
9. TabManager.js

####Index.html
        //Contains  the generic HTML tag structure, //which is the block that will hold all the javascript code running 
        <body>
        <div id="root" />  
        </body>

####index.js
        //contains the React Render fucntion that will all the App.js
        import React from 'react';
        import ReactDOM from 'reactDom';
        ReactDOM.render(<App />, document.getElementById('root'));

####index.css
        //Contains all the styling elements

#he