
import Login from './login';
import Dashboard from './dashboard';
import Master,{InsertMaster} from './mastertable';
// import  from './mastertable';
// import  from './mastertable';
import Pitched from './pitched';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/login" component={Login} />
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/showmaster" component={Master} />
          <Route exact path='/insertmaster' component={InsertMaster} />
          {/* <Route exact path='/updatemaster' component={UpdateMaster} /> */}
          <Route exact path='/pitched' component={Pitched} />
        </Switch>
    </Router> 
    </div>
  );
}

export default App;
