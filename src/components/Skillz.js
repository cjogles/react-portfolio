import React from 'react';
import MUIDataTable from "mui-datatables";

const columns = ["SKILLS", "DESCRIPTION"];

const data = [
 ["HTML/CSS", "Preprocessing w/ Less, Styling w/ Flexbox and Material UI/Semantic UI, Mobile Responsive Design, SEO mindfulness"],
 ["JavaScript", "OOP, Closures, Higher Order Functions, Variable Scope & Hoisting, TDD"],
 ["React", "Function Components w/ Hooks, Class Components w/ Life Cycle Methods, Higher Order Components, Context API"],
 ["Redux", "Action, Action Creators, Reducers, Store, Async API Calls with Axios"],
 ["Back End", "NodeJS, Express, Knex, Sqlite3, SQL, DRY code is best, opinionated but logical folder and file structure for server creation and API creation, CRUD"],
 ["Version Control", "Detailed Commit History for group projects, logical planning of software architecutre fit for solution to specefic problems, GIT, Github, merge conflicts resolved"],
 ["People Skills", "Bachelors of Science in Psychology, customer service experience, mental health work/casework work experience"],
];

const options = {
  filterType: 'none',
  selectableRows: "none",
  elevation: 4,
  responsive: 'scroll',
  pagination: false
};

const Skillz = () => {
  return (
    <>
      <div className="skillzHead">
      <MUIDataTable
        title={"Skills Data Table"}
        data={data}
        columns={columns}
        options={options}
      />
      </div>
    </>
  )
}

export default Skillz;