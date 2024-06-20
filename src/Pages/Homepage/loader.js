import React from "react";
import "../../Assets/css/loader.css"
import video from '../../Assets/images/logo_animation.mp4'

const Loader = () => {
    return (
        <div className="loader">
            <video className="loader-video" autoPlay muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Loader;
