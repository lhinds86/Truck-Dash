import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faScrewdriverWrench, faHouse, faList, faTruck, faClipboardList, faAddressCard } from '@fortawesome/free-solid-svg-icons'

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);

  return (
   
      <Sidebar className={styles.sidebar}>
        <Menu>
          <SubMenu label='General' className={styles.subMenu}>
            <MenuItem component={<Link to="/" />} className={styles.menuItem}><FontAwesomeIcon icon={faHouse} /> Dashboard </MenuItem>
            <MenuItem component={<Link to="/settings" />} className={styles.menuItem}><FontAwesomeIcon icon={faGear} /> Settings </MenuItem>
          </SubMenu>

          <SubMenu label='Drivers' className={styles.subMenu}>
            <MenuItem component={<Link to="/drivers" />} className={styles.menuItem}><FontAwesomeIcon icon={faList} /> Driver List </MenuItem>
            <MenuItem component={<Link to="/triplog" />} className={styles.menuItem}><FontAwesomeIcon icon={faClipboardList} /> Trip Log </MenuItem>
            <MenuItem component={<Link to="/create" />} className={styles.menuItem}><FontAwesomeIcon icon={faAddressCard} /> New Driver </MenuItem>
          </SubMenu>

          <SubMenu label='Maintenance' className={styles.subMenu}>
            <MenuItem component={<Link to="/maintenance" />} className={styles.menuItem}><FontAwesomeIcon icon={faScrewdriverWrench} /> Logs </MenuItem>
            <MenuItem component={<Link to="/trucks" />} className={styles.menuItem}><FontAwesomeIcon icon={faTruck} /> Trucks </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
   
  );
}

export default SidebarMenu;
