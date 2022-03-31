import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

function Navbar() {
    // const
    const [language, setlanguage] = useState()
    return (
        <div className='nav-container'>
            <div className='nav-box'>
                <div className='logo'>
                    <img src={Logo} alt='Logo' className='logoImg' />
                    <p>Supersite</p>
                </div>
                <div className='links'>
                    <ul>
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
                            <Link to='/about'>
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link to='/services'>
                                КОманда
                            </Link>
                        </li>
                        <li>
                            <Link to='/services'>
                                Блог
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='left_nav'>
                    <select onChange={(value) => {
                        setlanguage(value)
                    }}>
                        <option value='RUS'>
                            RUS
                        </option>
                        <option value='RUS'>
                            ENG
                        </option>
                    </select>
                    <Link to='/' className='phone_number'>
                        +99899 810-70-90
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar