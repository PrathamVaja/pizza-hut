import React, { useState } from "react";
import '../css/style.css'


const Category = () => {
    const items = [
        { img: "./icons/Dessert.svg", name: "Dessert" },
        { img: "./icons/steak.svg", name: "Steak" },
        { img: "./icons/coffee.svg", name: "Coffee" },
        { img: "./icons/burger.svg", name: "Burger" },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="flex justify-center items-center flex-wrap mt-[80px] gap-[20px]">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`relative flex flex-col items-center justify-center gap-[10px] rounded-[10px] border-4 border-[#E4E4E4] w-[150px] h-[150px] cursor-pointer transition-all duration-300 
          ${selectedIndex === index ? "bg-[#F3274C] text-white border-[#F3274C]" : "bg-white"}`}
                    onClick={() => setSelectedIndex(index)}
                >

                    <img
                        src={item.img}
                        alt={item.name}
                        className={`w-[50px] h-[50px] transition-all duration-300 ${selectedIndex === index ? "invert brightness-0" : ""
                            }`}
                        
                        
                    />


                    <p className=" home_banner_text font-semibold">{item.name}</p>


                    {selectedIndex === index && (
                        <img
                            src="./icons/bottom_mask.svg"
                            alt="bottom_mask"
                            className="absolute bottom-[-20px] w-full"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Category;
