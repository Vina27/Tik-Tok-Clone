import React from "react"; 
import Video from "./Video"; 
import "./App.css";

function App() {
  return (
    //BEM 
    <div className="App">
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
        <Video />
       </div>
    </div>
  );
}

export default App;


//video components 
//footer 
//Video Sidebar heart, chat, share 
//footer ticker, disk spinner
