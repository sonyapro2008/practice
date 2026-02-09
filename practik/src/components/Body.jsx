import React from "react";
import HeaderComponent from "./Header";

const BodyComponent = () => {
    return (
        <div className = "painting flex w-full flex-col items-center" >
            <HeaderComponent />
            <div className="container">
                <div className="flex flex-col gap-1 text-8xl capitalize">
                    <h1 className="text-[#495E4C] font-semibold mt-20">Чистый Воздух</h1>
                    <h2 className="text-[#495E4C] font-semibold ">Вместе с</h2>
                    <h3 className="text-[#78C081] font-bold">PASCAL VENT</h3>
                </div>
                <p className="mt-10 text-[#7CA381] text-2xl w-128.75 mb-13" >Проектирование, поставка и монтаж систем вентиляции и кондиционирования</p>
                <div className="flex gap-18.25 ml-4">
                    <div className="flex">
                        <img className='mr-5 w-8 h-8 mt-1.5' src="pin 1.png" alt="pin" />
                        <p className="w-38.5  text-[#7B897D] text-base ">Московский регион, Москва</p>
                    </div>
                    <div className="flex">
                        <img className='mr-5 w-8 h-8 mt-1.5' src="telephone.png" alt="tel" />
                        <p className="w-32 text-[#7B897D] text-base">+ 7 492 373 63 31 + 7 424 367 89 29</p>
                    </div>
                </div>
                <button className="w-111.75 h-21.25 rounded-2xl text-xl font-medium bg-[#5CCD6A] mr-11 ml-4 text-white
            cursor-pointer mt-19.5 mb-20">ОСТАВИТЬ ЗАЯВКУ</button>




            </div>

        </div>
    )
}



export default BodyComponent