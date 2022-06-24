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
      // console.log(response)
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
        <img src="" alt="StateImg" />
        <h3>{cases.data[pathname].death}</h3>
      </div>
    </div>
  )
}

export default StateDetails