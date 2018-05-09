import React, {PureComponent} from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import {getBatches, addBatch } from '../../actions/batches'
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import BatchForm from './BatchForm';
import {Link} from 'react-router-dom'


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

class BatchPage extends PureComponent {

  componentWillMount() {
		this.props.getBatches()
    }
  
  addBatch = (batch) => {
    this.props.addBatch(batch)
  }
 
  
  render() {
    const { batches } = this.props;
     return (
      <div>
        <BatchForm onSubmit={this.addBatch}/> 
        <Paper>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell>Batch number</TableCell>
                <TableCell >Start Date</TableCell>
                <TableCell >End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>     
              {batches.map(batch => {
                return (
                  <TableRow key={batch.id}>
                      <TableCell><Link to={ `/batches/${batch.id}` }>{batch.id}</Link></TableCell>
                      <TableCell>{batch.startDate}</TableCell>
                      <TableCell>{batch.endDate}</TableCell>
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
    batches: state.batches,
  }
}


export default withStyles(styles)(connect(mapStateToProps, {getBatches, addBatch })(BatchPage));