import React from 'react'

function About() {
  const data = [
    {
      text: '4',
      descript: 'года опыта'
    },
    {
      text: '82',
      descript: 'Успешных сайтов'
    },
    {
      text: '16',
      descript: 'Tелеграм ботов'
    },
    {
      text: '41',
      descript: 'Компаний'
    }
  ]
  return (
    <div className='about_container'>
      <div className='contextBox'>
        <h2>
          о нас
        </h2>
      </div>
      <div className='mainServices'>
        {
          data.map((item, index) => {
            return (
              <div className='boxProducts' key={index}>
                <div>
                  <h2>
                    {
                      item.text
                    }
                  </h2>
                  <p>
                    {item.descript}
                  </p>
                </div>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default About