import React from "react";
import bannerImage from "../../Images/header/banner.png";

function Banner() {
    return(
        <React.Fragment>
            <div className="flex items-center px-24 py-5 rounded-xl" style={{background:"#FFF7ED"}}>
                <div className="w-5/12 pl-64">
                    <img src={bannerImage} className="w-44 h-24 " alt="" />
                </div>
                <div className="w-7/12" style={{color:"#FB6D3A"}}>
                    <h1 className="text-4xl font-bold">Promo Hari ini</h1>
                    <h2 className="text-2xl">Perut kenyang, hati senang</h2>
                </div>
            </div>
            <div className="flex items-center justify-center mt-4">
                <ul className="w-1/12 flex items-center justify-between">
                    <li>
                        <div className="w-2 h-2 rounded-full bg-red-300"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-red-200"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-red-200"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-red-200"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-red-200"></div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )    
}

export default Banner