import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { tileData } from '../data/tileData';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'Lato, sans-serif',
  },
  gridList: {
    width: 500,
    height: 450,
    fontFamily: 'Lato, sans-serif',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    fontFamily: 'Lato, sans-serif',
  },
  rando: {
    fontFamily: 'Lato, sans-serif',
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor:"#e1f5fe"}}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile className={classes.rando} key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader className={classes.rando} component="div" style={{fontSize:'2rem', fontWeight:"bold"}}>Projects</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
            <GridListTile className={classes.rando} key={tile.img}>
              <a className={classes.rando} href={tile.address} target="_blank">
              <img className={classes.rando} src={tile.img} alt={tile.title} />
              <GridListTileBar
                className={classes.rando}
                title={tile.title}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <InfoIcon className={classes.rando}/>
                  </IconButton>
                }
              /></a>
            </GridListTile>
          
        ))}
      </GridList>
    </div>
  );
}