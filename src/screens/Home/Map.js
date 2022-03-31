import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

function Maps() {
  return (
    <div className='map_container'>
      <div>
        <h2>
          Работаем по всему миру
        </h2>

        <h3>
          Ташкент
        </h3>
        <p>
          Юнусабад, Улица Амир Темура
          Stroycenter, 2-этаж
        </p>

        <h3>
          Санкт Петербург
        </h3>
        <p>
          Академика павлова 5А
          River House 2-этаж
        </p>
      </div>
      <div>
        <YMaps>
          <Map defaultState={{
            center: [41.366659, 69.286500],
            zoom: 17
          }}
            width={700}
            height={550}>
            <Placemark defaultGeometry={[41.366659, 69.286500]} />
          </Map>
        </YMaps>
      </div>
    </div>
  )
}

export default Maps