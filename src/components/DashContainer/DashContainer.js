import React from 'react'
import styles from './DashContainer.module.scss'
import DashItem from '../DashItem/DashItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import GlobalContainer from '../GlobalContainer/GlobalContainer'
import { Link } from 'react-router-dom'


const DashContainer = () => {

  const [cases, setCases] = useState();

  const fetchCases = async () =>{
    const cases = await axios.get('https://api.covidtracking.com/v1/states/current.json');
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
      
      {console.log(Object.entries(cases.data))}
      
      {Object.entries(cases.data).map(key=>(
        <Link to={`/${key[0]}`}>
          <DashItem key={key[0]} title={key[1].state} deaths={key[1].death} />
        </Link>
      ))}
    </div>
  )
}

export default DashContainer