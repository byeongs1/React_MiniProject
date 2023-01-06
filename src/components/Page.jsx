import React from 'react'
import './Page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Page = props => {
    return (
        <header className='h-screen' style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${props.url})`,
            backgroundPosition: 'center center'
        }}>
            <div className='pt-[15vh] text-center'>
                <h1 className='text-3xl font-semibold'>{props.modelName}</h1>
                <p className='text-[10px]'>Order Online for Touchless Delivery</p>
            </div>
            <div className='pt-64 flex justify-center '>
                <button className='flex justify-center items-center h-7 w-44 opacity-70 text-[10px] text-white bg-black mr-2 rounded'>
                    주문하기
                </button>
                <button className='flex justify-center items-center h-7 w-44 opacity-70 text-[10px] text-black bg-white ml-2 rounded'>
                    자세히 알아보기
                </button>
                <FontAwesomeIcon icon="far fa-chevron-down" />
            </div>
        </header>
    )
}

export default Page