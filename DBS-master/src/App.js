
import Login from './login';
import Dashboard from './dashboard';
import Master,{InsertMaster,UpdateMaster} from './mastertable';
import Pitched,{InsertPitched,UpdatePitched} from './pitched';
import Pitched18 from './pc18';
import Pitched19 from './pc19';
import Pitched20 from './pc20';
import Pr19 from './pr19';
import Pr20 from './pr20';
// import  from './mastertable';
// import  from './mastertable';
// import Pitched from './pitched';

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
          <Route exact path='/updatemaster' component={UpdateMaster} />
          <Route exact path='/showpitched' component={Pitched} />
          <Route exact path='/insertpitched' component={InsertPitched} />
          <Route exact path='/updatepitched' component={UpdatePitched} />
          <Route exact path='/pc18' component={Pitched18} />
          <Route exact path='/pc19' component={Pitched19} />
          <Route exact path='/pc20' component={Pitched20} />
          <Route exact path='/pr19' component={Pr19} />
          <Route exact path='/pr20' component={Pr20} />
        </Switch>
    </Router> 
    </div>
  );
}

export default App;
