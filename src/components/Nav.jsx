import React from 'react'
import './Nav.css'

const Nav = props => {
    return (
        <div className='nav flex fixed w-full p-5 h-30px justify-between '>
            <img className='nav__logo pl-2 w-[140px] max-h-[16px] ml-4' src="/images/tesla_logo.png" alt="" />
            <div className="nav__models flex" >
                <button className="nav__model hidden text-sm font-semibold sm:hidden md:mr-2 md:inline lg:mr-6  pl-2 pr-2 hover:bg-slate-200 rounded-sm ">Model S</button>
                <button className="nav__model hidden text-sm font-semibold sm:hidden md:mr-2 md:inline lg:mr-6 pl-2 pr-2 hover:bg-slate-200 rounded-sm">Model 3</button>
                <button className="nav__model hidden text-sm font-semibold sm:hidden md:mr-2 md:inline lg:mr-6 pl-2 pr-2 hover:bg-slate-200 rounded-sm">Model X</button>
                <button className="nav__model hidden text-sm font-semibold sm:hidden md:mr-2 md:inline lg:mr-6 pl-2 pr-2 hover:bg-slate-200 rounded-sm">Model Y</button>
                <button className="nav__model hidden text-sm font-semibold sm:hidden md:mr-2 md:inline lg:mr-6 pl-2 pr-2 hover:bg-slate-200 rounded-sm">Cybertruck</button>
                <button className="nav__model hidden text-sm font-semibold sm:hidden  md:inline pl-2 pr-2 hover:bg-slate-200 rounded-sm">Powerwall</button>
            </div>
            <div className="nav__menus flex ">
                <button className="nav__menu hidden text-sm font-semibold sm:hidden md:mr-3 md:inline lg:mr-5 pl-2 pr-2 hover:bg-slate-200 rounded-sm">Shop</button>
                <button className="nav__menu__kor hidden text-sm sm:hidden md:mr-3 md:inline lg:mr-5 pl-2 pr-2 hover:bg-slate-200 rounded-sm">계정</button>
                <button className="nav__menu__kor text-sm pl-2 pr-2 hover:bg-slate-200 rounded-sm ">메뉴</button>
            </div>
        </div >
    )
}

export default Nav