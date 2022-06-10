import React from 'react'
import styles from './DashContainer.module.scss'
import DashItem from '../DashItem/DashItem'
import { useState, useEffect } from 'react'


const DashContainer = () => {

  const [cases, setCases] = useState();

  const fetchCases = async () =>{
    const cases = await axios.get('https://covid-api.mmediagroup.fr/v1/cases?country=Afghanistan');
    console.log(cases);
  }

  useEffect(()=>{fetchCases();}, [])

  return (
    <div className={styles['DashContainer']}>
        <DashItem />
        <DashItem />
        <DashItem />
        <DashItem />
        <DashItem />
        <DashItem />
    </div>
  )
}

export default DashContainer