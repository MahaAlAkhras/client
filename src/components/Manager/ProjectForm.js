import React from 'react'
import Layout from '../Layout/Layout';
import classes from "../Manager/Project.module.css"

 function ProjectForm() {
  return (
    <Layout>
    <section className={classes.pro}>
    <h1>Project</h1>
    <form>
      <div className={classes.control}>
        <label htmlFor="project">Projekt Name:</label>
        <select type="text" id="project" required />
      </div>
      <div className={classes.control}>
        <label htmlFor="Sprint">Projekt Dauer: </label>
        <select type="text" id="Sprint" required />
      </div>
      <div className={classes.control}>
        <label htmlFor="Bewertung">Sprint Anzahl: </label>
        <select type="text" id="Sprint" required />
      </div>
      <ul className={classes.ul}>
      <div className={classes.actions}>
        <button>Projekt hinfügen</button>
       
      </div>
      <div className={classes.actions}>
        <button>Projekt bearbeiten</button>
       
      </div>
      <div className={classes.actions}>
        <button>Projekt löschen </button>
     
      </div></ul>
    </form>
    
  </section></Layout>
  )
}
export default ProjectForm;
