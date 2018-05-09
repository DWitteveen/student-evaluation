import React, {PureComponent} from 'react'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import {getEvaluations, addEvaluation } from '../../actions/evaluations'
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import EvaluationForm from './EvaluationForm'


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

class EvaluationPage extends PureComponent {

  componentWillMount() {
		this.props.getEvaluations()
    }
  
  addEvaluation = (evaluation) => {
    this.props.addEvaluation(evaluation)
  }
 
  
  render() {
    const { evaluations } = this.props;
     return (
      <div>
        <EvaluationForm onSubmit={this.addEvaluation}/>  
        <Paper>
          <Table>
            <TableHead>
              <TableRow >
                {/* <TableCell >Evaluation ID</TableCell> */}
                <TableCell >Student ID</TableCell>
                <TableCell >Batch ID</TableCell>
                <TableCell >Evaluation Date</TableCell>
                <TableCell >Evaluation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>     
              {evaluations.map(evaluation => {
                return (
                  <TableRow key={evaluation.id}>
                      <TableCell>{evaluation.id}</TableCell>
                      <TableCell>{evaluation.student}</TableCell>
                      <TableCell>{evaluation.batch}</TableCell>
                      <TableCell>{evaluation.evaluation}</TableCell>
                      <TableCell>{evaluation.date}</TableCell>
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
    evaluations: state.evaluations,
  }
}


export default withStyles(styles)(connect(mapStateToProps, {getEvaluations, addEvaluation})(EvaluationPage));