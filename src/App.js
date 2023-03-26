
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route } from 'react-router-dom';
import Home from './road/Home';
import Message from './road/Message';

function App() {
  return <div className="App">
    <Route path='/' component={Home} exact/>
    <Route path='/messages' component={Message} />
    
    
  </div>;
  
}

export default App;
