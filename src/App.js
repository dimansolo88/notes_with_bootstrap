import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Alert from "./components/Alert";
import AlertState from "./context/alertState";
import {FireBaseState} from "./context/fireBase/fireBaseState";


function App() {
    return (
        <FireBaseState>
            <AlertState>
                <div className="container pt-4">
                    <Alert/>
                    <Switch>
                        <Route path='/' exact render={() => <Home/>}/>
                        <Route path='/about' render={() => <About/>}/>
                    </Switch>
                </div>
            </AlertState>
        </FireBaseState>
    );
}

export default App;
