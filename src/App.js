import {BrowserRouter, Route, Router} from 'react-router-dom'

import SignUp from './components/SignUp'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Router>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LoginForm} />
    </Router>
  </BrowserRouter>
)

export default App
