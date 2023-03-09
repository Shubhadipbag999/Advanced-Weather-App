import React from 'react'
import { formatToLocalTime } from '../services/weatherServicse'


export default function LocationDate({ weather: { dt, timezone } }) {

    return (
        <div className="loacalDateTime flexNow">{formatToLocalTime(dt, timezone)}</div>
    )
}
