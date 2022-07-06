import React from 'react'
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles['container']}>
        <div className='info-container'>
            <img src={process.env.PUBLIC_URL + '/assets/img/covid-19.svg'} alt="" />
            <p>Ciao, mi chiamo Mario e ho 25 anni. Amo la programmazione e l'informatica. Attualmente sono studente presso Start2Impact, nel percorso di Sviluppo Web e App.</p>
        </div>
    </div>
    
  )
}

export default About