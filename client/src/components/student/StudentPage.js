import React, {PureComponent} from 'react'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import {getStudents, addStudent, deleteStudent } from '../../actions/students'
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import StudentForm from './StudentForm'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button'



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
  
  addStudent = (student) => {
    this.props.addStudent(student)
  }

  deleteStudent = (studentId) => {
    this.props.deleteStudent(studentId)
  }
 
  
  render() {
    const { students } = this.props;
     return (
      <div>
        <StudentForm onSubmit={this.addStudent}/>  
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
                      <TableCell><Link to={ `/students/${student.firstName}` }>{student.firstName}</Link></TableCell>
                      <TableCell>{student.lastName}</TableCell>
                      <TableCell className="studentphoto"> <img src={student.photo} alt="" height={60}/>  </TableCell>
                      <TableCell>
                      <Button
                        size="small"
                        variant="raised"
                        onClick={ () => this.deleteStudent(student.id) }
                        > Delete </Button></TableCell> 
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


export default withStyles(styles)(connect(mapStateToProps, {getStudents, addStudent, deleteStudent})(StudentPage));