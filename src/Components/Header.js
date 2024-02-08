import React from "react";
import alpacaImage from "../public/c25717a74e5d99f3cc847317b9d0e4b6.png"; // Assuming the image is located in the same folder as your component

const Header = () => {
    return (
        <div>
            <img src={alpacaImage} alt="Alpaca" className="alpaca-image" />
        </div>
    )
}

export default Header;
