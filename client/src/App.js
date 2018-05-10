import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import Batches from './components/batch/Batches'
import './App.css'
import TopBar from './components/layout/TopBar'
import Students from './components/student/Students'
import Evaluations from './components/evaluation/Evaluations'
import Questions from './components/functionality/Questions'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 className="title">Evaluation Tool</h1>
          <nav>
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/batches" component={Students} />
            <br />
            <Route exact path="/batches" component={Evaluations} />
            <br />
            <Route exact path="/batches" component={Batches} />
            <Route exact path="/students" component={Questions} />
            <Route exact path="/" render={ () => <Redirect to="/batches" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
