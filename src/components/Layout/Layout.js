import { Fragment } from 'react';
import SideNavigation from "./SideNavigation"
import MainNavigation from './MainNavigation';
import Logo from './Logo';
const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <SideNavigation/>
      <Logo/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
