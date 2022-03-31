import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer_container'>
            <div className='box1'>
                <h2>
                    навигация
                </h2>
                <ul>
                    <li>
                        <Link to='/about'>
                            О нас
                        </Link>
                    </li>
                    <li>
                        <Link to='/services'>
                            Услуги
                        </Link>
                    </li>
                    <li>
                        <Link to='/portfolio'>
                            Портфолио
                        </Link>
                    </li>
                    <li>
                        <Link to='/blog'>
                            Блог
                        </Link>
                    </li>
                </ul>
                <p className='logoCopyrigth'>
                    © Supersite 2022
                </p>
            </div>
            <div className='box2'>
                <div>
                    <h2>
                        Ташкент
                    </h2>
                    <p>
                        info@supersite.uz
                    </p>
                    <p>
                        Юнусабад, Стройцентр 227-офис
                    </p>
                </div>
                <div>
                    <h2>
                        Cамарканд
                    </h2>
                    <p>
                        info@supersite.uz

                    </p>
                    <p>
                        Самарканд, Мирсаид барака улица , 20-уй
                    </p>
                </div>
            </div>
            <div className='box2'>
                <div style={{
                    marginBottom: 60
                }}>
                    <h2>
                        Санкт Петербург
                    </h2>
                    <p>
                        info@supersite.uz
                    </p>
                    <p>
                        Академика павлова 5А ,
                    </p>
                    <p>
                        тц River House 2-этаж
                    </p>
                </div>

                <Link to='/'>
                    Скачать онлайн каталог
                </Link>
            </div>
            <div className='box3'>
                <h2>
                    +99899 810-70-90
                </h2>

                <Link to='/'>
                    Связаться с нами
                </Link>
            </div>
        </div>
    )
}
