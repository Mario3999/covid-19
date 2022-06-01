import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/covid-19.svg';

const Header = () => {
  return (
    <div className={styles['header-container']}>
        <h1>Covid-19</h1>
        <img className={styles['logo']} src={logo} alt="Logo" />
        <div className={styles['menu-container']}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </div>
    </div>
  )
}

export default Header