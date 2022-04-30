import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home';
import Welcome from './Welcome';
import BlogDetails from './BlogDetails';
import Environment from './Categories/Environment';
import Updates from './Categories/Updates';
import Technology from './Categories/Technology';
import Design from './Categories/Design';
import Culture from './Categories/Culture';
import Business from './Categories/Business';
import Politics from './Categories/Politics';
import Opinion from './Categories/Opinion';
import Science from './Categories/Science';
import Health from './Categories/Health';
import Style from './Categories/Style';
import Travel from './Categories/Travel'
import Create from './Create';
import Login from './sigin';
import SelectCategory from './SelectCategory';
import Landing from './Landing';

function App() {
  return (
    <div className="App">
      <Router>
        {
         window.location.pathname=="/category" &&
        <Route exact path="/category">
        <SelectCategory/>
         </Route>
      } 
      { 
        <div className="App">
        
          <div className="content">
            
            <Switch>
            

              <Route exact path="/welcome">
              
                <Welcome/>
               

              </Route>
                
                
              <Route exact path="/home">
                
                <Home/>
              </Route>
              <Route exact path="/">
                
                <Landing/>
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/create">
                <Create/>
              </Route>
              <Route exact path="/home/updates">
                <Updates/>
              </Route>
              <Route exact path="/home/environment">
                <Environment/>
              </Route>
              <Route exact path="/home/technology">
                <Technology/>
              </Route>
              <Route exact path="/home/design">
                <Design/>
              </Route>
              <Route exact path="/home/culture">
                <Culture/>
              </Route>
              <Route exact path="/home/business">
                <Business/>
              </Route>
              <Route exact path="/home/Politics">
                <Politics/>
              </Route>
              <Route exact path="/home/opinion">
                <Opinion/>
              </Route>
              <Route exact path="/home/science">
                <Science/>
              </Route>
              <Route exact path="/home/health">
                <Health/>
              </Route>
              <Route exact path="/home/style">
                <Style/>
              </Route>
              <Route exact path="/home/travel">
                <Travel/>
              </Route>
              <Route exact path="/blogs/:id">
                <BlogDetails/>
              </Route>
            </Switch>
          </div>
        </div>  
      }  
      </Router>
    </div>
  );
}
export default App;
