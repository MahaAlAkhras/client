import classes from "./StartingPageContent.module.css";
import { Link} from "react-router-dom";
import Logo from "../Layout/Logo";
const StartingPageContent = () => {
  return (
    <>
      <Link to="/Welcome" className={classes.starting}>
        <h1>Stress Bewertung App</h1>
      </Link>
      <Logo />
    </>
  );
};

export default StartingPageContent;
