import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Image from './images/table.jpg';

const styles = theme => ({
 
});




function SimpleTable(props) {
  const { classes } = props;
  const BackgroundHead = {
  backgroundImage: `url(${Image})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: 600,
  width:1500


  }



  return (
    <div style ={BackgroundHead} >
    
    
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
