// import React, {PureComponent} from 'react'
// import TextField from 'material-ui/TextField';
// import Button from 'material-ui/Button';
// import { withStyles } from 'material-ui/styles';

// const styles = {
//     propContainer: {
//       width: 200,
//       overflow: 'hidden',
//       margin: '20px auto 0',
//     },
//     propToggleHeader: {
//       margin: '20px auto 10px',
//     },
//   };
// class BatchForm extends PureComponent {
// 	state = {}

// 	handleSubmit = (event) => {
//     event.preventDefault()
// 		this.props.onSubmit(this.state)

// 	}

// 	handleChange = (event) => {
//     const {name, value} = event.target

//     this.setState({
//       [name]: value

//     })
//   }

// 	render() {
//         const {classes} = this.props
// 		return (
       
            
// 			<form onSubmit={this.handleSubmit}>
            
//                 <h1>Add Batch</h1>
//                 <div>
                    
//                     <TextField
//                         id="batchNumber"
//                         name="batchNumber"
//                         label="Batch Number"
//                         type="text"
//                         margin="normal"
//                         className={classes.TextField}
//                         value={
//                             this.state.id || ''
//                         }
//                         onChange={ this.handleChange.bind(this) }
                        
//                         required
//                     />
//                 </div>
            
//                 <div>
                    
//                     <TextField
//                         id="startDate"
//                         name="startDate"
//                         label="Start Date"
//                         type="date"
//                         margin="normal"
//                         className={classes.container}
//                         value={
//                             this.state.startDate || ''
//                         }
//                         onChange={ this.handleChange.bind(this) }
//                         InputLabelProps={{
//                             shrink: true,
//                             }}
//                         required
//                     />
//                 </div>
                
//                 <div>
                    
//                     <TextField
//                         id="endDate"
//                         name="endDate"
//                         label="End Date"
//                         type="date"
//                         margin="normal"
//                         className={classes.container}
//                         value={
//                             this.state.endDate || ''
//                         }
//                         onChange={ this.handleChange.bind(this) }
//                         InputLabelProps={{
//                             shrink: true,
//                             }}
//                         required
//                     />
//                 </div>
                
//                 <div>
//                     <Button variant="raised" type="submit"> Submit </Button>
//                 </div>
// 			</form>
            
// 		)
// 	}
// }

// export default withStyles(styles)(BatchForm);