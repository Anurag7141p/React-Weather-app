
//api.openweathermap.org/data/2.5/weather?q=pune&appid=c31fd6829876a1953eaac5182eb4f3c9


import React, { useEffect, useState } from 'react'
import './style.css'
import { Weathercard } from './Weathercard'

function Temp() {

  const [searchValue,setSearchValue]=useState('pune')
  const [tempInfo,setTempInfo]=useState({})

  const getWeatherInfo=async()=>{
    try {

      let url=`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}
               &appid=c31fd6829876a1953eaac5182eb4f3c9&units=metric`

      const res=await fetch(url)
      const data=await res.json()

      console.log(data)

      const {temp,humidity,pressure}=data.main
      console.log(temp)
      const {main:weathermood}=data.weather[0]
      const {name}=data
      const {speed}=data.wind
      const {country,sunset}=data.sys

      const myNewWeatherInfo={
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      }

      setTempInfo(myNewWeatherInfo)
      
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{

    getWeatherInfo()

  },[])




  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search"
            placeholder='search..'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
          />
          <button type='button' className='searchButton' onClick={getWeatherInfo}>Search</button>
        </div>
      </div>

      <Weathercard tempinfo={tempInfo}/>
    </>
  )
}

export default Temp