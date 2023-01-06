import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer_box'>
            <nav>
                <ul className='footer_top'>
                    <li>Tesla © 2023</li>
                    <li>개인정보 처리방침 및 법적고지 </li>
                    <li>이용 약관</li>
                    <li>문의하기</li>
                    <li>채용정보</li>
                    <li>새 소식</li>
                    <li>위치</li>
                </ul><br />
                <div>
                    <div>
                        <p className='footer_bottom'>테슬라코리아 유한회사 | 사업자등록번호 : 524-88-00237 | 데이비드존파인스타인, 리리 | 통신판매업신고: 제2016-서울강남-02964호 |
                            <br /> | 호스팅제공자: Tesla Inc. | 주소 : 서울특별시 강남구 테헤란로 134, 14층 <br />
                            대표전화 : 080-617-1388 | <a href="mailto:southkorea@tesla.com">southkorea@tesla.com</a>
                        </p>
                    </div>
                </div>
            </nav>
        </footer>
    )
}

export default Footer