import classes from "./SideNavigation.module.css";

const SideNavigation = () => {
  return (
    <div>
      <div class={classes.sidenav}>
        <ul>
          <li>
            <a href="/datenschutz">Datenschutz</a>
          </li>
          <li>
            <a href="/starting">Home</a>
          </li>
         </ul>
      </div>
    </div>
  );
};

export default SideNavigation;






