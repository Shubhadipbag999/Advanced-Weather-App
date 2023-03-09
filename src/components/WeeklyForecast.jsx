import React from 'react'
import { UilThunderstorm } from '@iconscout/react-unicons';
import { iconUrlFormCode } from '../services/weatherServicse'

export default function WeeklyForecast({ items }) {
    return (
        <div className="weeklyForecastDiv">
            <span className="weeklyForecast">
                Weekly Forecast
            </span>
            <div className="weeklyForecastDivCards">

                {
                    items.map((item, key) => {
                        return (<div className="weeklyCard flexNow">
                            <div className="cardDayWeekly">
                                {item.title}
                            </div>
                            <img src={iconUrlFormCode(item.icon)} alt="weathericon" height="40px" />
                            <div className="cardTempWeekly">
                                {`${item.temp.toFixed()}°`}
                            </div>
                        </div>)
                    })
                }


            </div>
        </div>
    )
}
