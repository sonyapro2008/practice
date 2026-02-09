import React from "react";

const ServicesComponent = () => {
    return (
        <div className="flex container justify-between">
            <div className="mt-42.25">
                <h1 className="text-[#495E4C] text-6xl font-semibold mb-5">Предоставляемые</h1>
                <h2 className="text-[#495E4C] text-6xl font-semibold">Услуги</h2>
                <div className="text-[#848484] w-111 mt-10">
                    <p className="mb-6">При разработке проекта предложим техническое решение
    оптимальное по соотношению цены и качества, оно идеально впишется в ваш дизайн, а также будет учитывать все ваши пожелания.</p>
                    <p className="mb-5.5">Монтаж выполняется опытными бригадами с соблюдением всех действующих технических норм, правил безопасности и строго по 
                        согласованному проекту.</p>
                    <p>Одинаково эффективно выполняем проектирование и монтаж на объектах любой сложности – от небольшой квартиры, 
                        до объектов со сложными технологическими процессами на основе действующей нормативной документации.</p>
                </div>
            </div>
            
            <div className="flex flex-col items-center ml-[158px] mt-[41px]">
                <div className="flex rounded-t-[45px] flex-row px-3 pt-3 bg-[#D9FADD] w-fit ">
                    <button id="aaa" className="text-[#7CA281] w-[233px] h-[65px] cursor-pointer font-normal flex gap-4 items-center pl-4 rounded-tl-[40px]
                    bg-[#FFFFFF]">Кондиционирование<img src="air-conditioning.png" alt="hz" className="w-[33px] h-[27px]"/></button>
                    <button id="aaa" className="text-[#FFFFFF] w-[233px] h-[65px] cursor-pointer font-normal flex gap-3 items-center pl-5 rounded-tr-[40px]
                    bg-[#5CCD6A]">Система Вентиляции<img src="Group.png" alt="hz" className="w-[33px] h-[33px]"/></button>
                </div>
                <div className="bg-[#D9FADD] w-[676px] h-[655px] rounded-[65px] flex justify-between">
                        <div className="ml-8 mt-31.75 w-[356px] h-[428px] text-[#495D4C] text-[20px]">     
                            <p className="flex mb-[21px]"><img src="Group 20359.png" alt="hz" className="w-[34px] h-[34px] mr-[15px]"/>Проектирование систем вентиляции любой сложности</p>
                            <p className="flex mb-[21px]"><img src="Group 20360.png" alt="hz" className="w-[34px] h-[34px] mr-[15px]"/>Монтаж приточной вентиляции</p>
                            <p className="flex mb-[21px]"><img src="Group 20361.png" alt="hz" className="w-[34px] h-[34px] mr-[15px]"/>Монтаж вытяжной вентиляции</p>
                            <p className="flex mb-[21px]"><img src="Group 20363.png" alt="hz" className="w-[34px] h-[34px] mr-[15px]"/>Монтаж вентиляции с увлажнением воздуха</p>
                            <p className="flex mb-[21px]"><img src="Group 20364.png" alt="hz" className="w-[34px] h-[34px] mr-[15px]"/>Монтаж вентиляции с рекуператором</p>
                            <p className="flex"><img src="Group 20362.png" alt="hz" className="w-[34px] h-[34px] mr-[15px]"/>Монтаж вентиляции с осушением для бассейна</p>
                        </div>
                        <img src="photo.png" alt="hz" className="object-cover rounded-tr-[71px] rounded-br-[70px]" />
                        

                </div>
            </div>

        </div>
    )
}



export default ServicesComponent