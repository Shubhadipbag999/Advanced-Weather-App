import React, { useState } from 'react'
import { UilLocationPoint, UilSearch } from '@iconscout/react-unicons';
import { ToastContainer, toast } from 'react-toastify';
export default function SearchHeader({ setQuery }) {
    const [search, setSearch] = useState("")
    const handleClick = () => {


        if (search !== '') {

            setQuery({ q: search })
            setSearch("")

        }
        else {
            toast.warn("Please Enter A Location");
        }


    }
    //to find current location
    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            console.log(navigator.geolocation)
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude


                setQuery({
                    lat,
                    lon
                })
            })


        }
    }


    return (
        <div className="searchDivContainer">
            <input type="text" placeholder="Search for city.." className="searchBox"
                onChange={(e) => {
                    setSearch(e.target.value)
                }} value={search} />
            <button className="searchButton flexNow" onClick={handleClick}>
                <span>Search</span>
                <UilSearch size="20" />
            </button>
            <UilLocationPoint size="39" className="currentLoaction" onClick={handleCurrentLocation} />
            {/* <button >click</button> */}
            <ToastContainer autoClose={6000} theme="colored" newestOnTop={true} />
        </div>
    )
}


