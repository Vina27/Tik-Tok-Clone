import React, { useRef } from 'react';
import './Video.css';


function Video() {
    const videoRef = useRef(null); 

    const onVideoPress = () => {
        videoRef.current.play(); 
    }


    return (
        <div className="Video">
            <video className="video__player" 
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src="https://www.tiktok.com/@arshsoni10/video/6781848546199997701?lang=en&sender_device=pc&sender_web_id=6906597055420155398&is_from_webapp=1"></video>
        </div>
    );
}

export default Video;



