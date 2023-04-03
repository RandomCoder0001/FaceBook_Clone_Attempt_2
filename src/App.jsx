import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from "./Feed"
import Widgets from "./Widgets" 
// import Login from "./Login"
// import { useState } from 'react';
// import { useStateValue } from './StateProvider';

function App() {
  // const [state , setState] = useState();
  // const user = null;
  // console.log(user);
  return (
    <div className="app">
        <Header/>
        <div className="app__body">
          <Sidebar/>
          <Feed />
          <Widgets/>
        </div>
    </div>
  );
}

export default App;
