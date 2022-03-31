import React from 'react'

function Services() {
    const data = [
        {
            option: true,
            text: 'Разработка сайтов',
            servicesType: [
                {
                    context: 'Landing Page'
                },
                {
                    context: 'Корпоративный сайт'
                },
                {
                    context: 'Интернет магазин'
                },
                {
                    context: 'Платформы'
                }
            ]
        },
        {
            option: true,
            text: 'Мобибольные приложения',
            servicesType: [
                {
                    context: 'Каталог iOS & Android'
                },
                {
                    context: 'Интернет магазин'
                },
                {
                    context: 'Индивидуальные приложения'
                },
            ]
        },
        {
            option: true,
            text: 'БРЕНДИНГ',
            servicesType: [
                {
                    context: 'НЕйминг, логотип'
                },
                {
                    context: 'Брендбук'
                },
                {
                    context: 'Бизнес планы, БИЗНЕС'
                },
                {
                    context: 'презентации'
                }
            ]
        },
        {
            option: true,
            text: 'Продвижение',
            servicesType: [
                {
                    context: 'SMM Старт'
                },
                {
                    context: 'SMM Базовый, SMM Профи'
                },
                {
                    context: 'SEO оптимизация'
                },
                {
                    context: 'Google топ 3'
                }
            ]
        },
        {
            option: true,
            text: 'Телеграм боты',
            servicesType: [
                {
                    context: 'Информационный'
                },
                {
                    context: 'Для онлайн продаж'
                },
                {
                    context: 'Сетевой ресторан'
                },
            ]
        },
        {
            option: true,
            text: 'Продакшн',
            servicesType: [
                {
                    context: 'Фотосъёмка'
                },
                {
                    context: 'Видеосъёмка'
                },
                {
                    context: 'Анимационный ролик'
                },
            ]
        }
    ]
    return (
        <div>
            <div className='contextBox'>
                <h2>
                    Услуги
                </h2>
            </div>
            <div className='dropdown_container'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='dropdown_box' key={index}>
                                <div>
                                    <h2>
                                        {
                                            item.text
                                        }
                                    </h2>
                                </div>
                                <div>
                                    {
                                        item.servicesType.map((servicesItem, servicesIndex) => {
                                            return (
                                                <div style={{
                                                    display: 'none'
                                                }} key={servicesIndex}>
                                                    <h2>
                                                        {
                                                            servicesItem.context
                                                        }
                                                    </h2>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services