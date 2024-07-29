import React from 'react'
import styles from './Topbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faArrowRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarContent}>
        <div className={styles.topbarName}>
          <h1>Hinds Trucking</h1> 
        </div>
        <div className={styles.topbarBtn}>
          <button className={styles.homeBtn}><FontAwesomeIcon icon={faHouse} /></button>
          <button className={styles.settingsBtn}><FontAwesomeIcon icon={faGear} /></button>
          <button className={styles.logoutBtn}><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
