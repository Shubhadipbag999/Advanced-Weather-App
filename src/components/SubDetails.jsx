import React from 'react'
import { UilBrightness, UilSunset, UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind } from '@iconscout/react-unicons';
import { formatToLocalTime } from '.././services/weatherServicse'
export default function SubDetails({ weather: { feels_like, humidity, speed, sunrise, sunset, temp_min, temp_max, timezone } }) {
    return (
        <div className="subDetailsContainer flexNow">
            <div className='subDetailsContainer2 flexNow'>
                <UilBrightness /> {`Rais ${formatToLocalTime(sunrise, timezone, "hh:mm a")}`} |
                <UilSunset /> {`Set ${formatToLocalTime(sunset, timezone, "hh:mm a")}`} |
                <UilArrowUp /> {`High ${temp_max.toFixed()}°`} |
                <UilArrowDown />{`Low ${temp_min.toFixed()}°`}
            </div>
            <div className='subDetailsContainer1 flexNow'>
                <span><UilTemperature size="20" style={{ marginRight: "1vw" }} />{`Feels Like ${feels_like.toFixed()}°`}</span>
                <span><UilTear size="20" style={{ marginRight: "1vw" }} />{`Humidity ${humidity}%`}</span>
                <span><UilWind size="20" style={{ marginRight: "1vw" }} /> {`Wind Speed ${speed}km/h`}</span>
            </div>

        </div>
    )
}
