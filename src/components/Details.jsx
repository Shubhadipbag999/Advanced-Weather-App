import React from 'react'
import { iconUrlFormCode } from '.././services/weatherServicse'

export default function Details({ weather: {
    name, country, temp, details, icon
}, setUnits }) {

    const cHandle = () => {
        setUnits("metric")
    }
    const fHandle = () => {
        setUnits("imperial")
    }
    return (
        <div className="detailsContainer flexNow">
            <div className="cityAndTemp flexNow">
                <span className='caityName'>{`${name},${country}`}</span>
                <span className='temp'> {`${temp.toFixed()} °`}</span>
            </div>

            <div className="btnAndWeatherType flexNow">
                <div className="twoBtn flexNow">

                    <h2 style={{ backgroundColor: "greenyellow" }} onClick={cHandle} className="cel">C °</h2>
                    <h2 style={{ backgroundColor: "orange" }} onClick={fHandle} className="fer">F °</h2>
                </div>
                {/* <button className="searchButton flexNow" onClick={() => props.onChange(search)}>Click</button> */}
                <span className='weatherType'>- {details} -</span>
            </div>

            <div className="weatherLogo flexNow">
                <img src={iconUrlFormCode(icon)} height="120px" />
            </div>
        </div>
    )
}
