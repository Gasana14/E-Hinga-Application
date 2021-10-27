import React from 'react';
import './App.css';
import './index.css';
import Login from '../src/components/authentication/login'
// import Login1 from '../src/components//authentication/login1'
// import Header from '../src/components/header/header'
// import Body from '../src/components/body/body'
// import Footer from '../src/components/footer/footer'
// import About from '../src/components/body/about'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// npm install react-router-dom @types/react-router-dom
// import Register from './components/state/register'
import Register from './components/authentication/register'
import { frontEndEnums } from './components/utils/enum';

function App() {
  return (

  //  <>
  //   <Login></Login>
  //   <Login1></Login1>
  //     <Header></Header>
  //    <Body></Body>
  //    <Footer></Footer>
  //     <About></About>
  //   </>
   <Router>
     <Switch>
       <Route exact path="/">
         <Login></Login>
       </Route>

       <Route path={frontEndEnums.REGISTER}>
         <Register/>
       </Route>
     </Switch>
   </Router>


  );
}

export default App;
