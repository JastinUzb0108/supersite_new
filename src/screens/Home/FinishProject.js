import React from 'react'
import { Link } from 'react-router-dom'

function FinishProject() {
    const data = [
        {
            img: require('../../img/services0.png'),
            button: 'SKADIBOOST',
        },
        {
            img: require('../../img/services2.png'),
            button: '23TV',
        },
        {
            img: require('../../img/services4.png'),
            button: 'Yamir Tour',
        },
        {
            img: require('../../img/services5.png'),
            button: 'Candy Gold',
        },
        {
            img: require('../../img/services3.png'),
            button: 'UMT GLOBAL',
        },
        {
            img: require('../../img/services1.png'),
            button: 'Demar',
        },
    ]
    return (
        <div className='finshProject_container'>
            <div className='contextBox'>
                <h2>
                    Наши работы
                </h2>
            </div>
            <div className='services_box_port'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='portfolio_box'>
                                <img src={item.img} alt='Images' />
                                <Link to='/'>
                                    {
                                        item.button
                                    }
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className='btn_services'>
                <Link to='/'>
                    Смотреть все работы
                </Link>
            </div>
        </div>
    )
}

export default FinishProject