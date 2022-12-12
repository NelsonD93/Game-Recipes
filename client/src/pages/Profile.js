import React, { useState, useEffect } from 'react';

const Profile = () => {

return (
    <div className="w3-top">
    <div className="w3-bar w3-white w3-wide w3-padding w3-card">
      <a href="./skeleton.html" className="w3-bar-item w3-button">WIKICRAFT</a>
   
      <div className="w3-right w3-hide-small">
        <a href="profile.html" className="w3-bar-item w3-button">Profile</a>
        <a href="bag.html" className="w3-bar-item w3-button">Bag</a>
        <a href="#games" className="w3-bar-item w3-button">Games</a>
      </div>
    </div>
  </div>


  <header className="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
    <img className="w3-image" src="./images/botw02.jpg" alt="picture of minecraft forest" width="1500" height="800">
    <div className="w3-display-middle w3-margin-top w3-center">
      <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min "><b>WIKICRAFT</b></span>
        <span className="w3-hide-small w3-text-light-grey"></span></h1>
    </div>
  </header>


  <div className="w3-content w3-padding" style="max-width:1564px">

    
    <div className="w3-container w3-padding-32" id="games">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16"></h3>
    </div>

    <div className="w3-row-padding">
      <div className="w3-container">
        <h1 className="w3-border-bottom w3-border-light-grey w3-padding-16">Account Info:</h1>
        <h3>Username:</h3>
        <h3>Email:</h3>
      </div>
    </div>
    
   
    <footer className="w3-center w3-black w3-padding-16">
      <p>TBD</p>
    </footer>

)
}