import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, assets) {
  return { name, assets };
}

const rows = [
  createData('HTML/CSS', 'Preprocessing w/ Less, Styling w/ Flexbox and Material UI/Semantic UI, Mobile Responsive Design, SEO mindfulness'),
  createData('JavaScript', 'OOP, Closures, Higher Order Functions, Variable Scope & Hoisting, TDD,'),
  createData('React', 'Function Components w/ Hooks, Class Components w/ Life Cycle Methods, Higher Order Components, Context'),
  createData('Redux', 'Action, Action Creators, Reducers, Store, Async API Calls with Axios'),
  createData('NodeJS', 'To Be Continued...'),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  color: {
    backgroundColor: "#e1f5fe",
    background: "#e1f5fe"
  },
  familyH1: {
    fontSize: '5rem',
    fontFamily: 'Wendy One, Sans-serif',
  }, 
  familyH2: {
    fontSize: '4rem',
    fontFamily: 'Wendy One, Sans-serif',
  },
  familyP: {
    fontSize: '2rem',
    fontFamily: 'Wendy One, sans-serif',
  }
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} >
      <Table className={classes.table} aria-label="customized table" >
        <TableHead className={classes.color}>
          <TableRow>
            <StyledTableCell>Skills (by topic)</StyledTableCell>
            <StyledTableCell align="right">Assets these Skills Bring to the Table</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.color}>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.assets}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}