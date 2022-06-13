import React from 'react'
import styles from './DashContainer.module.scss'
import DashItem from '../DashItem/DashItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import GlobalContainer from '../GlobalContainer/GlobalContainer'


const DashContainer = () => {

  const [cases, setCases] = useState();

  const fetchCases = async () =>{
    const cases = await axios.get('https://covid-api.mmediagroup.fr/v1/cases');
    console.log(cases);
    setCases(cases);
  }

  useEffect(()=>{fetchCases();}, [])

  if(!cases){
    return <div>Loading</div>
  }


  return (
    <div className={styles['DashContainer']}>
      <GlobalContainer cases={cases}/>
      {/* {cases.map((case)=>(

      ))} */}
      <DashItem cases={cases}/>
      <DashItem cases={cases}/>
      <DashItem cases={cases}/>
      <DashItem cases={cases}/>
      <DashItem cases={cases}/>
      <DashItem cases={cases}/>
      <DashItem cases={cases}/>
      <DashItem cases={cases}/>
    </div>
  )
}

export default DashContainer