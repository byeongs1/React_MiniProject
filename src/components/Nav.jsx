import React from 'react'
import { useNavigate } from 'react-router-dom'


const Nav = props => {
    const navigate = useNavigate();
    const navigateTo = (e) => {
        if (e.target.id === 'logo') {
            navigate("/");
        } else {
            navigate("/" + e.target.id)
        }

    }


    return (

        <div className='fixed flex justify-between w-full p-5 nav h-30px '>
            <img className='nav__logo pl-2 w-[140px] max-h-[16px] ml-4' id="logo" src="/images/tesla_logo.png" alt="" onClick={navigateTo} />
            <div className="flex nav__models" >

                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:hidden lg:mr-6 lg:inline hover:bg-slate-200 "
                    id='gilhwan' onClick={navigateTo}>Model C</button>
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:hidden lg:mr-6 lg:inline hover:bg-slate-200"
                    id='eunhye' onClick={navigateTo}>Model H</button>
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:hidden lg:mr-6 lg:inline hover:bg-slate-200"
                    id="sado" onClick={navigateTo}>Model S</button>
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:hidden lg:mr-6 lg:inline hover:bg-slate-200"
                    id="byeong" onClick={navigateTo}>Model K</button>
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:hidden lg:mr-6 lg:inline hover:bg-slate-200">Cybertruck</button>
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:hidden lg:inline hover:bg-slate-200">Powerwall</button>
            </div>
            <div className="flex nav__menus ">
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__menu sm:hidden md:mr-3 md:inline lg:mr-5 hover:bg-slate-200">Shop</button>
                <button className="hidden pl-2 pr-2 text-sm rounded-sm nav__menu__kor sm:hidden md:mr-3 md:inline lg:mr-5 hover:bg-slate-200">계정</button>
                <button className="pl-2 pr-2 text-sm rounded-sm nav__menu__kor hover:bg-slate-200 ">메뉴</button>
            </div>
        </div >
    )
}

export default Nav