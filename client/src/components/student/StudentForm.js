import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 162,
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
                        label="first"
                        type="text"
                        margin="normal"
                        className={classes.TextField}
                        value={
                            this.state.firstName || ''
                        }
                        onChange={ this.handleChange.bind(this) }
                        
                        required
                    />
                </div>

                <div>
                    
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="last"
                        type="text"
                        margin="normal"
                        className={classes.TextField}
                        value={
                            this.state.lastName || ''
                        }
                        onChange={ this.handleChange.bind(this) }
                        
                        required
                    />
                </div>

                <div className="upload">
                   
                    <TextField
                    accept="image/*"
                    id="photo"
                    label="Photo"
                    type="file"
                    name="photo"
                    margin="normal"
                    className={classes.TextField}
                    value={
                        this.state.photo || ''
                    }
                    onChange={this.handleChange.bind(this)}
                    InputLabelProps={{
                        shrink: true,
                        }}
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