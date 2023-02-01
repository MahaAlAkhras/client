import React from "react";
import Layout from "../Layout/Layout";
import classes from "../Manager/AssessmentViewing.module.css";

function AssessmentViewing() {

  return (
    <Layout>
      <section className={classes.assessment}>
        <form>
          <h1>Bewertung ansehen</h1>

          <div className={classes.control}>
            <label htmlFor="mname">Mitarbeiter Name:</label>
            <select type="text" id="mname" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="pname">Projekt Name: </label>
            <select type="text" id="pname" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="snummer">Sprint Nummer: </label>
            <select type="text" id="snummer" required />
          </div>

          <div className={classes.actions}>
            <button>Bewertung ansehen </button>
          </div>
        </form>
      </section>
      
    </Layout>
  );
}
export default AssessmentViewing;
