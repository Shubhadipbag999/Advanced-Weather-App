import React from 'react'
import { useHistory } from "react-router-dom";
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';
import umbrella from '../images/umbrella.png';
import wetherApp from '../images/weatherapp.png';

export default function Home() {
    let history = useHistory();
    function handleClick() {
        history.push("/weather");
    }
    return (
        <div className='HomePageContainer flexNow'>
            <div className="HomePageChildAppName flexNow">
                <img src={cloud1} className="cloud1" alt="cloud" />

                <img src={cloud2} className="cloud2" alt="cloud" />
                <img src={umbrella} className="umbrella" alt="cloud" />
                <span>Weather App</span>
                <button className="exploreBtn displayNone" onClick={handleClick}>
                    Explore Now
                </button>
            </div>
            <div className="HomePageChildExplore flexNow">
                <img src={wetherApp} alt="weatherApp logo" className='appLogo' />
                <span> Checkout Weather To Your Location</span>
                <button className="exploreBtn" onClick={handleClick}>
                    Explore Now
                </button>
            </div>
        </div>
    )
}
