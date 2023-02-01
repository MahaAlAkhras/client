import React from "react";
import Layout from "../Layout/Layout";
import classes from "./Process.module.css";
import {Link} from "react-router-dom";

function Process() {
  return (
    <Layout>
      <section className={classes.process}>
        <h1>Manager</h1>

        <ul className={classes.ul}>
          <div className={classes.actions}>
            <Link to="/Project">
              <button>Projekte bearbeiten</button>
            </Link>
           
          </div>

          <div className={classes.actions}>
            <Link to="/Sprint">
              <button>Sprints bearbeiten</button>
            </Link>{" "}
        
          </div>

          <div className={classes.actions}>
            <Link to="/bewertungdetails">
              <button>Bwertungen ansehen</button>
            </Link>{" "}
           
          </div>
        </ul>
      </section>
    </Layout>
  );
}
export default Process;
