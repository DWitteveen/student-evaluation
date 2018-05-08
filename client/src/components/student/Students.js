import React, {PureComponent} from 'react'
import StudentPage from './StudentPage'
import StudentForm from './StudentForm'


export default class Students extends PureComponent {

	render() {

		return (
			<div>
                <StudentForm />
                <StudentPage />
			</div>
		)
	}
}