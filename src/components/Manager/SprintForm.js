import React from "react";
import Layout from "../Layout/Layout";
import classes from "../Manager/Sprint.module.css";
function SprintForm() {
  return (
    <Layout>
      <section>
        <form className={classes.sprint}>
          <h1>Sprint</h1>

          <div className={classes.control}>
            <label htmlFor="proj">Projekt Name:</label>
            <input type="text" id="proj" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="snummer">Sprint Nummer: </label>
            <input type="text" id="snummer" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="sdauer">Sprint Dauer: </label>
            <input type="text" id="sdauer" required />
          </div>
          <ul className={classes.ul}>
            <div className={classes.actions}>
              <button>Sprint hinfügen</button>
            </div>
            <div className={classes.actions}>
              <button>Sprint bearbeiten</button>
            </div>
            <div className={classes.actions}>
              <button>Sprint löschen </button>
            </div>
          </ul>
        </form>
      </section>
    </Layout>
  );
}
export default SprintForm;
