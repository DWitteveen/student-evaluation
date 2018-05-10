import React, {PureComponent} from 'react'
import StudentPage from './StudentPage'
// import StudentOverview from './StudentOverview'


export default class Students extends PureComponent {

	render() {

		return (
			<div>
                {/* <StudentOverview /> */}
                <StudentPage />
			</div>
		)
	}
}