import React, {Component} from 'react';
import AllPeopleComponent from "./components/all-people/AllPeopleComponent";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import Home from "./components/Home/Home";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/people'}> People </Link>
                        <Link to={'/home'}> home </Link>
                    </div>

                    <Switch>

                        <Route path={'/people'} render={() => {
                            return <AllPeopleComponent/>;
                        }}/>
                        <Route path='/home' component={Home}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
