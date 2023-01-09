import React from 'react'
const Powerwall = props => {
    return (
        <header className='h-screen' style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/0x0/27d0055c-b0bf-476c-b3aa-ec59d314f871)`,
            backgroundPosition: 'center center'
        }}>
            <div className='pt-[15vh] text-center'>
                <p className='inline text-[36px]'>태양광과 <p className='inline font-semibold'>Powerwall</p></p>
                <p className='pt-3 text-[15px]'>모든 전력을 공급</p>
            </div>
            <div className='flex justify-center pt-80 '>
                <button className='flex justify-center items-center h-10 w-60 opacity-95 text-[13px] text-white bg-slate-900 mr-2 rounded'>
                    자세히 알아보기
                </button>
            </div>
        </header>
    )
}
export default Powerwall







