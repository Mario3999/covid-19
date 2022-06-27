import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <h1>Covid-19</h1>
      <img className={styles['logo']} src={process.env.PUBLIC_URL + '/assets/img/COVID-19+icon.png'} alt="Logo" />
      <div className={styles['menu-container']}>
        <ul>
          <Link to={'/'}>
          <li>Home</li>
          </Link>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Header