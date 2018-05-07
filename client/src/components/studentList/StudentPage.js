import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudent} from '../../actions/students'
import {Redirect} from 'react-router-dom'
// import Card, {CardActions, CardContent} from 'material-ui/Card'
// import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';


const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };



export class StudentPage extends PureComponent {
    state = {}

    componentWillMount() {
        this.props.getStudent()
    }

    render() {
     return (
        <Table>
            <TableHeader>
                <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Start Date</TableHeaderColumn>
                <TableHeaderColumn>End Date</TableHeaderColumn>
                </TableRow>
            </TableHeader>

        </Table>    

        )
    }
}

const mapStateToProps = function (state) {
    student: state.students
}

export default (mapStateToProps)(StudentPage)