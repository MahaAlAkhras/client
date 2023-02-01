

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <a href='/'>
        <div className={classes.logo}>Stress Bewertung App</div>
      </a>
      <nav>
        <ul>
          <li>
            <a href='/manager'>geschäftsführer</a>
          </li>
          <li>
            <a href='/employee'>Mitarbeiter</a>
          </li>
          <li>
            <a href='/profile'>Profile</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
