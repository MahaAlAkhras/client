import classes from "./EmployeeForm.module.css";
import Layout from "../Layout/Layout";
const EmployeeForm = () => {
  return (
    <Layout>
    <section className={classes.emp}>
      <h1>Employee</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="project">Projekt auswählen:</label>
          <select type="text" id="project" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="Sprint">Sprint auswäheln: </label>
          <select type="text" id="Sprint" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="Bewertung">Deine Bewertung:</label>
          <select type="text" id="Sprint" required />
        </div>
        <ul className={classes.ul}>
        <div className={classes.actions}>
          <button>Bewertung hinfügen</button>
          
        </div>
        <div className={classes.actions}>
          <button>Bewertung bearbeiten</button>
       
        </div>
        <div className={classes.actions}>
          <button>Bewertung löschen</button>
          
        </div></ul>
      </form>
      
    </section></Layout>
  );
};

export default EmployeeForm;
