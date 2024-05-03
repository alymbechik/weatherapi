import React from 'react'
import './card.css'
import loc from '../../assets/icon _location_.png'
import temp from '../../assets/icon _temperature_.png'

const Card = (props) => {

  const {
    weather,
    bishkek,
  } = props
  console.log(weather);
  return (
    <div className='card'>
      <div className="city-box">
      <h2>{weather.location? weather.location?.name : bishkek.location?.name}</h2> <img src={loc} alt="" />
      </div>

      <div className="temperature">
        <img src={temp} alt="" />
    <h4 className="temp_c">{weather.current? weather.current?.temp_c : bishkek.current?.temp_c}°C</h4>
    <img src={weather.current? weather.current?.condition.icon :  bishkek.current?.condition.icon} alt="" ></img>
      </div>

      <h4 className="day">{weather.current? weather.current?.last_updated : bishkek.current?.last_updated}</h4>

      <div className="classes">

    <div>
        <h4 className="name">HUMIDITY</h4>
        <h4 className='info'>{weather.current? weather.current?.humidity : bishkek.current?.humidity}%</h4>
    </div>
    <div>
        <h4 className="name">VISIBLITY</h4>
        <h4 className='info'>{weather.current? weather.current?.vis_km : bishkek.current?.vis_km}km</h4>
    </div>
    <div>
        <h4 className="name">AIR PRESSURE</h4>
        <h4 className='info'>{weather.current? weather.current?.pressure_mb : bishkek.current?.pressure_mb}hPa</h4>
    </div>
    <div>
        <h4 className="name">WIND</h4>
        <h4 className='info'>{weather.current? weather.current?.wind_mph : bishkek.current?.wind_mph}mph</h4>
    </div>

    </div>

    </div>
  )
}

export default Card