import SearchHeader from '../components/SearchHeader';
import LocationDate from '../components/LocationDate';
import Details from '../components/Details';
import DailyForecast from '../components/DailyForecast';
import SubDetails from '../components/SubDetails';
import WeeklyForecast from '../components/WeeklyForecast';
import getFormattedWeatherData from '../services/weatherServicse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';



const WeatherApp = () => {

    const [query, setQuery] = useState({ q: 'london' })
    const [units, setUnits] = useState('metric')
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {

            const message = query.q ? query.q : "Current Lovation.";

            toast.info("Feaching weather for " + message)
            await getFormattedWeatherData({ ...query, units }).then((data) => {
                toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)
                setWeather(data)
            })
        }
        fetchWeather()
    }, [query, units])




    return (
        <div className="weatherAppMainContainer flexNow">
            <div className="weatherDetailsContainer flexNow">
                {/* //search Div/ */}
                <SearchHeader setQuery={setQuery} />

                {/* //LocationDate */}

                {weather && (<>
                    <LocationDate weather={weather} />
                    {/* //Details Container/ */}
                    <Details weather={weather} setUnits={setUnits} />

                    {/* //subDetails container/ */}
                    <SubDetails weather={weather} />

                    {/* //daily forecast */}
                    <DailyForecast items={weather.hourly} /></>)}
            </div>

            <div className="weeklyForecastContainer flexNow">
                {weather && (<WeeklyForecast items={weather.daily} />)}
            </div>
            <ToastContainer autoClose={6000} theme="colored" newestOnTop={true} />
        </div>
    )
}

export default WeatherApp