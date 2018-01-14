import React, { Component } from 'react';

export default class Contacts extends Component {

   componentDidMount() {
      let pos = {lat: 42.277724, lng: 22.669760};

      let map = new window.google.maps.Map(document.getElementById('google-map'), {
         center: pos,
         zoom: 16,
         mapTypeId: 'roadmap',
         scrollwheel: false,
      });

      let marker = new window.google.maps.Marker({
          position: pos,
          map: map,
          title: 'Ресторант Езерата 2'
      });
  }

  render() {
    return (
      <div className="contacts-wrapper">
         <div className="contacts-content">
            <div className="class-contacts-left-container">
               <div className="address-container">
                  <span className="key">Адрес:</span>
                  <span className="dots"></span>
                  <span className="value align-right">
                     ул. „Гюешевско шосе“ 1, Кюстендил
                  </span>
               </div>
               <div className="address-container">
                  <span className="key">Телефон за резервации:</span>
                  <span className="dots"></span>
                  <span className="align-right value">08844777868</span>
               </div>
            </div>
            <div className="class-contacts-right-container">
               <p>За снимки от събития и актуални промоции, посетете нашата Facebook страница:</p>
               <a href="https://www.facebook.com/ezerata2/" target="_blank" className="facebook-button">
                  <span className="facebook-logo"></span>
                  Езерата 2
               </a>
            </div>
         </div>
         <div id="google-map">
         </div>
      </div>
    );
  }
}
