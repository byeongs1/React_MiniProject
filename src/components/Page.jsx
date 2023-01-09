import React from 'react'
import './Page.css'
const Page = props => {
    return (
        <header className='h-screen' style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${props.url})`,
            backgroundPosition: 'center center'
        }}>
            <section className='pt-[15vh] text-center'>
                <h1 className='text-[44px] font-semibold'>{props.modelName}</h1>
                <p className='text-[15px]'>Order Online for Touchless Delivery</p>
            </section>
            <div className='flex justify-center pt-[370px] '>
                <button className='flex justify-center items-center h-10 w-64 opacity-80 text-[15px] text-white bg-black mr-2 rounded'>
                    주문하기
                </button>
                <button className='flex justify-center items-center h-10 w-64 opacity-80 text-[15px] text-black bg-white ml-2 rounded'>
                    자세히 알아보기
                </button>
            </div>
        </header>
    )
}
export default Page