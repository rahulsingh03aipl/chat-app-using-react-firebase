import './App.css';
import {Switch,Route,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Chat from './components/Chat';
import ChatWith from './components/ChatWith';

function App(props) {

  return (
    <div className="App">
      <h1>Chat application</h1>

        <NavLink className="linkStyle" to = "/">Home</NavLink>
      <NavLink className="linkStyle" to = "/signup">Signup</NavLink>
      <NavLink className="linkStyle" to="/login">Login</NavLink>
      <NavLink className="linkStyle" to="/chats">Chats</NavLink>
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        <Route path="/chats" component={Chat} />
        <Route path="/chat-with/:id" render={(props)=>(<ChatWith {...props}  />)} />
        </Switch>
      
    </div>
  );
}

export default App;
