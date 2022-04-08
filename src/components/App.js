import React from 'react'
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom'
import { useStateValue } from './Context/StateProvider'
import Home from './items/home/Home'
import Result from './items/resultpage/Result'
const App = () => {
    const[{searchValue},dispatch]=useStateValue()
    return (
        <Router>
            <div className="app__container">
                <Switch>
                    <Route exact path='/'>
                        <div className="app__home">
                            <Home/>
                        </div>
                    </Route>
                    <Route path='/search'>
                        <div className="app__result">
                            <Result/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
