import React, { useState, useEffect } from 'react';

const Home = () => {

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
    <img className="w3-image" src="./src/images/tumblr_fc99d02fdd5076589fb1b68d9e548c34_45d90266_1280.jpg" alt="picture of minecraft forest" width="1500" height="800">
    <div className="w3-display-middle w3-margin-top w3-center">
      <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min "><b>WIKICRAFT</b></span> <span className="w3-hide-small w3-text-light-grey"></span></h1>
    </div>
  </header>
  

  <div className="w3-content w3-padding" style="max-width:1564px">
  
    <div className="w3-container w3-padding-32" id="games">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Games</h3>
    </div>
  
    <div className="w3-row-padding">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Minecraft</div>
          <img src="./images/minecraft_logo_icon_168974.png" alt="minecraft grass block icon" style="width:100%">
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Breath of the Wild</div>
          <img src="./src/images/pnghut_the-legend-of-zelda-breath-wild-ocarina-time-3d-link-twilight-princess-hd-universe-zelda-nintendo.png" alt="breath of the wild logo" style="width:100%" className="zelda">
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Subnautica</div>
          <img src="./src/images/ddxnpd1-fcd7b274-bf6d-4dcf-b23c-66bf353abe10.png" alt="Subnautica logo" style="width:100%">
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">Stardew Valley</div>
            <img src="./src/images/pngegg.png" alt="stardew valley logo" style="width:100%" className="stardew">
          </div>
        </div>
      </div>
    
    </div>
     
  
    <div className="w3-container w3-padding-32" id="about">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  

    <div className="w3-container w3-padding-32" id="contact">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
      <p>Looking for a game, but don't see it here? Let us know what we can add!</p>
      <form action="/action_page.php" target="_blank">
        <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name">
        <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email">
        <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject">
        <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment">
        <button className="w3-button w3-black w3-section" type="submit">
          <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </form>
    </div>
    

  </div>
  
  <footer className="w3-center w3-black w3-padding-16">
    <p>TBD</p>
  </footer>
  );
};

export default Home;
