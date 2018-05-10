import React, {PureComponent} from 'react'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import {getStudents, addStudent, deleteStudent } from '../../actions/students'
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
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


class StudentOverview extends PureComponent {

//update state before render

  componentWillMount() {
		this.props.getStudents(this.props.match.params.batch)
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
        <Paper>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell>Student ID</TableCell>
                <TableCell >First Name</TableCell>
                <TableCell >Last Name</TableCell>
                <TableCell >Profile Picture</TableCell>
                <TableCell >Batch Number</TableCell>
                <TableCell >Evaluation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>     
              {students.map((student) => {
                //   if (student.batch === this.props.match.params
                //   ) return
               //map --> filter
                return (
                  <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell><Link to={ `/students/${student.firstName}` }>{student.firstName}</Link></TableCell>
                      <TableCell>{student.lastName}</TableCell>
                      <TableCell className="studentphoto"> <img src={student.photo} alt="" height={60}/>  </TableCell>
                      <TableCell>{student.batch}</TableCell>
                      <TableCell></TableCell>
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


export default withStyles(styles)(connect(mapStateToProps, {getStudents, addStudent, deleteStudent})(StudentOverview));