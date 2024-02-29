import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
    const [index, setIndex] = useState(0);

    const handleBackArrow = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleForwardArrow = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div id="main-div">
                <img className="carousal-imgs" src={images[index].img} alt="carousal_imgs" />
                <h1 className="carousal-title">{images[index].title}</h1>
                <h2 className="carousal-subtitle">{images[index].subtitle}</h2>
                <ArrowBackIosIcon className="back-arrow" onClick={handleBackArrow}/>
                <ArrowForwardIosIcon className="forward-arrow" onClick={handleForwardArrow}/>
            </div>
        </>
    );
}

export default Carousel;