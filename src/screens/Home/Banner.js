import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    const data = [
        {
            img: require('../../img/phone.png')
        },
        {
            img: require('../../img/telegram.png')
        },
        {
            img: require('../../img/instagram.png')
        }
    ]
    return (
        <div className='banner_container'>
            <div className='banner_box'>
                <h2>
                    <span>
                        IT-услуги
                    </span>
                    для бизнеса любого уровня
                </h2>
                <p>
                    Более
                    <span>
                        3 лет
                    </span>
                    наш фокус в онлайн трансформации Вашего бизнеса
                </p>
                <Link to='/contact'>
                    Связаться с нами
                </Link>
            </div>
            <div className='contact_navigation'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='navigation_box' key={index}>
                                <img src={item.img} alt={index} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Banner