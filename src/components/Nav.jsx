import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'

const Nav = props => {
    const navigate = useNavigate();
    const navigateToHome = props => {
        navigate("/");
    }
    const navigateToEunhye = props => {
        navigate("/eunhye");
    }
    const navigateToGilhwan = props => {
        navigate("/gilhwan");
    }
    const navigateToSado = props => {
        navigate("/sado");
    }
    const navigateToByeong = props => {
        navigate("/byeong");
    }

    return (

        <div className='fixed flex justify-between w-full p-5 nav h-30px '>
            <img className='nav__logo pl-2 w-[140px] max-h-[16px] ml-4' src="/images/tesla_logo.png" alt="" onClick={navigateToHome} />
            <div className="flex nav__models" >

                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:mr-2 md:inline lg:mr-6 hover:bg-slate-200 "
                    onClick={navigateToEunhye}>Model H</button>
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:mr-2 md:inline lg:mr-6 hover:bg-slate-200"
                    onClick={navigateToGilhwan}>Model C</button>
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:mr-2 md:inline lg:mr-6 hover:bg-slate-200"
                    onClick={navigateToSado}>Model S</button>
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:mr-2 md:inline lg:mr-6 hover:bg-slate-200"
                    onClick={navigateToByeong}>Model K</button>
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:mr-2 md:inline lg:mr-6 hover:bg-slate-200">Cybertruck</button>
                <button className="hidden pl-2 pr-2 text-sm font-semibold rounded-sm nav__model sm:hidden md:inline hover:bg-slate-200">Powerwall</button>
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