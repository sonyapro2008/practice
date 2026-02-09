import React from "react";

const HeaderComponent = () => {
    return (
        <div className = "flex items-center justify-between w-full pt-6.5 px-11 max-w-[1920px]">
            <img className='' src="Logo.png" alt="paint" />
            <div className='flex gap-10 text-[#495E4C] text-xl'>
                <a href = "#" >услуги</a>
                <a href = "#" >о нас</a>
                <a href = "#" >польза продукта</a>
                <a href = "#" >оборудование</a>
                <a href = "#" >этапы работы</a>
                <a href = "#" >отзывы</a>
            </div>
            <button className="w-47.5 h-14 rounded-xl text-lg font-medium bg-[#5CCD6A] text-white
            ring-12 ring-white/45 cursor-pointer">СВЯЗАТЬСЯ</button>
            
        </div>
    )
}

export default HeaderComponent