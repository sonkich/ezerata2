import React, { Component } from 'react';
import {
   Route,
   Link,
   Switch
} from 'react-router-dom';
import  Home  from './components/Home'
import  Contacts  from './components/Contacts'
import  Menu from './components/Menu'
import  About  from './components/About'

class App extends Component {
  render() {
    return (
      <div className="ezerata-wrapper" >
         <header>
            <nav>
               <ul>
                  <li><Link to="/" >Начало</Link></li>
                  <li><Link to="/promotions" >Промоции</Link></li>
               </ul>
            </nav>
            <h3 className="header-logo">Езерата <span className="number">2</span></h3>
            <nav>
               <ul>
                  <li><Link to="/menu/salads" >Меню</Link></li>
                  <li><Link to="/contacts" >Контакти</Link></li>
               </ul>
            </nav>
         </header>
         <section>
         <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/promotions" component={About}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/contacts" component={Contacts}/>
         </Switch>
         </section>
         <footer className="ta-center">
            Copyright © 2017
         </footer>
      </div>
    );
  }
}

export default App;
