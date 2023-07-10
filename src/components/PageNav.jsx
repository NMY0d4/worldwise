import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';

function PageNav() {
  return (
    <nav className={styles.nav}>
      <logo className={styles.logo}>Logo</logo>
      <ul className={styles.ul}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
