import React from 'react'
import { UilBrightness, UilCloudSun, UilCloudMoonShowers, UilThunderstorm, UilClouds } from '@iconscout/react-unicons';
import { iconUrlFormCode } from '../services/weatherServicse';

export default function DailyForecast({ items }) {
    items.map((item) => {
        console.log(item.icon)
    })

    return (
        <div className="hourlyForecastContainer">
            <div className='divTitlehourly'><span>Daily Forecast</span></div>
            <div className="hourlyForecastCards">
                {items.map((item) => {
                    return (<div className="hourlyCard">
                        <div className="cardTimeHourly">
                            {item.title}
                        </div>
                        <img src={iconUrlFormCode(item.icon)} alt="weathericon" height="30px" />
                        <div className="cardTempHourly">
                            {`${item.temp.toFixed()}°`}
                        </div>
                    </div>)
                })}



            </div>
        </div>
    )
}
