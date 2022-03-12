import React from "react";
import image1 from '../images/developer.jpg'
import image2 from '../images/ipu1.jpg'
import image3 from '../images/developer.jpg'
import image4 from '../images/ipu1.jpg'

const CardComp = (image, alt) => {
    const styleDiv = {
        width: "100%",
        height: "100%"
    };
    const style = {
        width: "100%",
        height: "100%"
    };

    return (
        <div style={styleDiv}>
            <img src={image} alt={alt} style={style} />
        </div>
    );
};

const CardList = [
    {
        element: CardComp(image1, "image1")
    },
    {
        element: CardComp(image2, "image2")
    },
    {
        element: CardComp(image3, "image3")
    },
    {
        element: CardComp(image4, "image4")
    },
];

export default CardList;