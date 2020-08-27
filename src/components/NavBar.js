import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <div className="navbar">
              <p>Jackson's Portfolio</p>
              <a className="hiddenA" href="#firstProject">View Projects</a>
              <a className="hiddenA" href="#carouselid">View Testimonials</a>
              <a  className="hiddenA" href="#skillsid">View Skills</a>

            </div>
          </Typography>
          <a
            href="mailto: jackson.ogles28@gmail.com"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit">Get In Contact</Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
