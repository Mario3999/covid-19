import React from 'react'
import styles from './StateDetails.module.scss'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const StateDetails = () => {

  const unstrippedPathname = useLocation().pathname

  const pathname = unstrippedPathname.substring(1, unstrippedPathname.length)

  const [cases, setCases] = useState();

  useEffect(()=>{fetchCases();},[]);
  
  const fetchCases = async () => {
    try{
      const response = await axios.get(`https://api.covidtracking.com/v1/states/current.json`)
      setCases(response)
    }
    catch(error){
      alert(error)
    }
  }

  if(!cases){
    return <div>Loading</div>
  }

  return (
    <div className={styles['container']}>
      <div className={styles['info-container']}>
        <img src={process.env.PUBLIC_URL + `/assets/img/states/${pathname}.png`} alt="StateImg" />
        <div className={styles['positive']}>
          <img src={process.env.PUBLIC_URL + `/assets/img/positive.png`} alt="" />
          <h3>Positive:{cases.data[pathname].positive}</h3>
        </div>
        <div className={styles['hospitalized']}>
          <img src={process.env.PUBLIC_URL + `/assets/img/hospitalized.png`} alt="" />
          <h3>Hospitalized:{cases.data[pathname].hospitalized}</h3>
        </div>
        <div className={styles['deaths']}>
          <img src={process.env.PUBLIC_URL + `/assets/img/deaths.png`} alt="" />
          <h3>Deaths:{cases.data[pathname].death}</h3>
        </div>
      </div>
    </div>
  )
}

export default StateDetails