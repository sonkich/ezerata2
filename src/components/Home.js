import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="home-page-wrapper">
         <div className="home-page-content">
            <h1 className="home-page-title">Ресторант Езерата <span>2</span></h1>
            <h2 className="light italic">Всеки петък и събота жива музика и разнообразни промоции!</h2>
            <h3 className="light italic">За резервации: 08844777868</h3>
         </div>
      </div>
    );
  }
}
