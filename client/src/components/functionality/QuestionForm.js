import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import {Link} from 'react-router-dom'


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



class QuestionForm extends PureComponent {
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
                <Button
                        size="small"
                        variant="raised"
                        
                        ><Link to={`/students/`}>Get "Random" Student</Link>
                </Button>
                <br />
                <div>
                <p>Chosen Student:</p>
                <br />
                  
                    
                    <TextField
                        id="question"
                        name="question"
                        label="Question"
                        type="text"
                        margin="normal"
                        className={classes.TextField}
                        value=  ''
                         onChange={ this.handleChange}
                        
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

export default withStyles(styles)(QuestionForm);