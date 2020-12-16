import React, { useRef, useState } from "react";
import "./Video.css";


function Video() {
    const [playing, setPlay] =  useState(false); 
    const videoRef = useRef(null); 

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause(); 
            setPlay(false); 

        }else {
            videoRef.current.play(); 
            setPlay(true); 
        }
    };


    return (
        <div className="Video">
            <video className="video__player" 
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src= "https://www.tiktok.com/@william.ngvyen/video/6906685723814956293?lang=en"></video>
        </div>
    );
}

export default Video;



