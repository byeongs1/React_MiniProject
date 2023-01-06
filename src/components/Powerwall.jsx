import React from 'react'

const Powerwall = props => {
    return (
        <header className='h-screen' style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/0x0/27d0055c-b0bf-476c-b3aa-ec59d314f871)`,
            backgroundPosition: 'center center'
        }}>
            <div className='pt-[15vh] text-center'>
                <p className='text-2xl inline'>태양광과 <p className='font-semibold inline'>Powerwall</p></p>
                <p className='pt-3 text-[10px]'>모든 전력을 공급</p>
            </div>
            <div className='pt-56 flex justify-center '>
                <button className='flex justify-center items-center h-7 w-44 opacity-95 text-[10px] text-white bg-slate-800 mr-2 rounded'>
                    자세히 알아보기
                </button>
            </div>
        </header>
    )
}

export default Powerwall