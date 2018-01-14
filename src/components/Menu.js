import React, { Component } from 'react';
import {
   Route,
   Link
} from 'react-router-dom';
import MenuCategory from './MenuCategory';



export default class Menu extends Component {
  render() {
    return (
      <div className="menu-wrapper">
         <nav>
            <ul>
               <li><Link to="/menu/salads" >Салати</Link></li>
               <li><Link to="/menu/soups" >Супи</Link></li>
            </ul>
         </nav>
         <section>
            <Route path="/menu/:categoryName" component={MenuCategory}/>
         </section>
      </div>
    );
  }
}
