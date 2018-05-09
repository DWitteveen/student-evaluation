import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });

class EvaluationForm extends PureComponent {
  	state = {}


	handleSubmit = (e) => {
    e.preventDefault()
		this.props.onSubmit(this.state)

	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value

    })
  }

	render() {
        const {classes} = this.props
		return (


			<form onSubmit={this.handleSubmit}>

                <h1>Add Evaluation</h1>
                <div>

                    <TextField
                        id="student"
                        name="student"
                        label="Student"
                        type="text"
                        margin="normal"
                        className={classes.TextField}
                        value={
                            this.state.student || ''
                        }
                        onChange={ this.handleChange }
                      
                        required
                    />
                </div>

                <div>

                    <TextField
                        id="batch"
                        name="batch"
                        label="Batch"
                        type="text"
                        margin="normal"
                        className={classes.TextField}
                        value={
                            this.state.batch || ''
                        }
                        onChange={ this.handleChange }
                        
                        required
                    />
                    
                </div>

                <div>

                    <TextField
                        id="evaluation"
                        name="evaluation"
                        label="Evaluation"
                        type="text"
                        margin="normal"
                        className={classes.TextField}
                        value={
                            this.state.evaluation || ''
                        }
                        onChange={ this.handleChange }
                       
                        required
                    />

                </div>

                <div>    

                    <TextField
                        id="date"
                        name="date"
                        label="Date"
                        type="date"
                        margin="normal"
                        className={classes.container}
                        value={
                            this.state.date || ''
                        }
                        onChange={ this.handleChange }
                        InputLabelProps={{shrink: true,}}
                        
                        required
                    />

                    </div>


                <div>
                    <Button variant="raised" type="submit"> Submit </Button>
                </div>
			</form>

		)
	}
}

export default withStyles(styles)(EvaluationForm);