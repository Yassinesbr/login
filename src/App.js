import './App.css'
import Login from './Login'
import Home from './Home'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Nav />
      <Route path='/Login' component={Login} />
      <Route path='/Home' component={Home} />
    </Router>
  )
}

export default App
