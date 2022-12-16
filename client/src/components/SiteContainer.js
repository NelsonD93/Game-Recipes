import React, { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';

import AddItem from '../pages/AddItem';
import Profile from '../pages/Profile';
import Bag from '../pages/Bag';
import Game from '../pages/Game';
import Home from '../pages/Home';
import Item from '../pages/Item';
// import image from '../images/botwBG.jpg';






export default function SiteContainer() {


  const [currentPage, setCurrentPage] = useState('Home');

  // Below renders page structure components like Header Navbar and Footer

  const renderHeader = () => {
    return (
      <div>
        <Navbar/>
        <Header />

</div>
    )
  };

  // Below renders content for the page you are on, so if you are Portfolio, it renders page for Portfolio, if its not any of the first 3 pages, render the default page which is About
  const renderPage = () => {
    if (currentPage === 'Profile') {
      return (
        <div>
          <Profile />
        </div>
      );
    }
    if (currentPage === 'Item') {
      return <Item />;
    }
    if (currentPage === 'Game') {
      return <Game />;
    }
    if (currentPage === 'Bag') {
      return <Bag />;
    }
    if (currentPage === 'AddItem') {
      return <AddItem />;
    }


    //   Home is the default page
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);



  return (
    <div>
      {renderHeader()}
      {/* the status of the current page and handle page change function */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* runs the render page function */}

      {renderPage()}

    </div>
  );
}
