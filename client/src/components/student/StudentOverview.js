import { withStyles } from 'material-ui/styles';
// import Grid from 'material-ui/Grid';
import { connect } from 'react-redux'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import {Link} from 'react-router-dom'
import Radio, { RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper'
import React, { PureComponent } from 'react';
import {getStudents } from '../../actions/students'


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });


  class StudentOverview extends PureComponent {

    componentWillMount() {
		this.props.getStudents()
    }

    render() {
        const { students, classes } = this.props;
        return (
            <GridList cellHeight={280} className={classes.gridList}>
             { student.batch.map(student => (
              <GridListTile key={student.id}>
                <Link to={ `/students/${student.id}` }></Link>
                <GridListTileBar
                  title={student.firstName}
                />
              </GridListTile>
            ))}
          </GridList> 
        )
    }
  }

  const mapStateToProps = (state) => {
    return {   
      students: state.students,
    }
  }
  
  export default withStyles(styles)(connect(mapStateToProps, {getStudents})(StudentOverview));