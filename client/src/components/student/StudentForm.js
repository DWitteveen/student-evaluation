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
  
class StudentForm extends PureComponent {
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
            
                <h1>Add Student</h1>
                <div>
                    
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="FirstName"
                        type="text"
                        margin="normal"
                        className={classes.TextField}
                        value={
                            this.state.firstName || ''
                        } onChange={ this.handleChange}
                        
                        required
                    />
                </div>

                <div>
                    
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Lastname"
                        type="text"
                        margin="normal"
                        className={classes.TextField}
                        value={
                            this.state.lastName || ''
                        } onChange={ this.handleChange}
                        
                        required
                    />
                </div>

                <div >
                   
                    <TextField
                    accept="image"
                    id="photo"
                    name="photo"
                    label="Photo url"
                    type="url"
                    margin="normal"
                    className={classes.TextField}
                    value={
                        this.state.photo || ''
                    } onChange={this.handleChange}
                    />
                </div>
                
                <div>
                    <Button variant="raised" type="submit"> Submit </Button>
                </div>
			</form>
            
		)
	}
}

export default withStyles(styles)(StudentForm);