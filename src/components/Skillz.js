import React from 'react';
import MUIDataTable from "mui-datatables";

const columns = ["SKILLS", "DESCRIPTION"];

const data = [
 ["HTML", "I am continually learning how to utilize semantic HTML to leverage higher SEO and benefits with accessibility."],
 ["CSS", "I know how to use Preprocessing with LESS, Flexbox, Box Model, as well as how to utilize third party styling libraries such as Material UI/Semantic UI, Emotion or styled components in a react ecosystem. I focus on Mobile First Responsive Design and I understand CSS Specificity and Inheritance and know how to leverage them to achieve client design specs."],
 ["JavaScript", "I understand OOP paradigms, Closures, Higher Order Functions, Variable Scope & Hoisting, TDD, asyncronous programming with promises, and functional programming paradigms"],
 ["React", "I understand how to utilize Function Components with Hooks, Class Components with Life Cycle Methods, Higher Order Components (i.e. with Formik), and how to use Context API and drill props. I also know how to use React Router."],
 ["Redux", "I know how to manage an applications global state through the redux work flow i.e. creating Actions, Action Creators, Reducers, Store, the Connect Function, MapStateToProps, and asynchronously requesting and changing state with axios."],
 ["Back End", "I know how to use NodeJS to create a server and back end API using Express, Knex, Sqlite3, PostgresQL, and SQL. I know how to implement middleware to provide an authentication layer on the Server API. I am continually learning to handle more complex database queries."],
 ["Version Control", "I try to create detailed Commit History for group projects, logically plan out software architecutre via sound process models. I know GIT, Github, and how to manage merge conflicts."],
 ["People Skills", "I have a Bachelors of Science in Psychology, mentoring experience in web development as a team lead at Lambda School, customer service experience, as well as mental health work and child welfare casework experience"],
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
      <div className="skillzHead" id ="skillsid">
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