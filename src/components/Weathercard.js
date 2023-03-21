

import React, { useEffect, useState } from 'react'

export const Weathercard = ({ tempinfo }) => {

    const [weatherState, setWeatherState] = useState('')

    // const {
    //     temp,
    //     humidity,
    //     pressure,
    //     weathermood,
    //     name,
    //     speed,
    //     country,
    //     sunset
    // }=tempinfo

    let sec = tempinfo.sunset
    let date = new Date(sec * 1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()}`


    useEffect(() => {
        if (tempinfo.weathermood) {
            switch (tempinfo.weathermood) {
                case "Clouds":
                    setWeatherState('wi-day-cloudy');
                    break;
                case "Haze":
                    setWeatherState('wi-fog');
                    break;
                case "Clear":
                    setWeatherState('wi-day-sunny');
                    break;

                case "Mist":
                    setWeatherState('wi-dust');
                    break;

                default:
                    setWeatherState('wi-day-sunny');
                    break;
            }
        }
    }, [tempinfo.weathermood]);



    return (
        <>

            {/* our temp card */}

            <article className="widget">

                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span className='temp_display'>{tempinfo.temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{tempinfo.weathermood}</div>
                        <div className="place">{tempinfo.name},{tempinfo.country}</div>
                    </div>
                </div>

                <div className="date">{new Date().toLocaleString()}</div>

                {/* our 4 column section */}

                <div className="extra-temp">

                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">{timeStr} <br />Sunset</p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">{tempinfo.humidity} <br />Humidity</p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">{tempinfo.pressure} <br />Pressure</p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">{tempinfo.speed} <br />Speed</p>
                        </div>

                    </div>

                </div>
            </article>

        </>
    )
}
