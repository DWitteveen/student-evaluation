import React, {PureComponent} from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import {getStudents } from '../../actions/students'
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';


const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

class StudentPage extends PureComponent {

  componentWillMount() {
		this.props.getStudents()
    }
 
  
  render() {
    const { students } = this.props;
     return (
      <div>
        <h1>Students</h1>  
        <Paper>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell>Student ID</TableCell>
                <TableCell >First Name</TableCell>
                <TableCell >Last Name</TableCell>
                <TableCell >Profile Picture</TableCell>
                <TableCell >Evaluation</TableCell>
                <TableCell >Batch Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>     
              {students.map(student => {
                return (
                  <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>{student.firstName}</TableCell>
                      <TableCell>{student.lastName}</TableCell>
                      <TableCell className="failSample"> <img src={student.photo} alt="" height={60}/>  </TableCell>
                      <TableCell>{student.evaluation}</TableCell>
                      <TableCell>{student.batch_id}</TableCell>
                  </TableRow>
                 )
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
      )
  }
}

const mapStateToProps = function (state) {
  return {
    students: state.students,
  }
}


export default withStyles(styles)(connect(mapStateToProps, {getStudents})(StudentPage));