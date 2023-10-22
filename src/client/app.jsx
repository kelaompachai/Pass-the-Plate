/* eslint-disable react/jsx-no-bind */
// the heart of the homepage

import React, { useState } from 'react';
// import Login from './components/login';
import Sidebar from './components/sidebar';
import CentralDisplay from './components/centralDisplay';

function App() {
  const listingArr = [
    {
      title: 'Listing 1',
      body: 'this is my listing',
    },
    {
      title: 'Listing 2',
      body: 'this is my listing',
    },
    {
      title: 'Listing 3',
      body: 'this is my listing',
    },
    {
      title: 'Listing 4',
      body: 'this is my listing',
    },
  ];
  const [listings, setListings] = useState(listingArr);

  const [display, setDisplay] = useState('allListings');
  // display states: allListings, fullListing, postListing, ownListings
  // this piece of state and the associated display functions control
  // what is being shown in the central area of the home page

  function displayFullListing(milk) {
    setDisplay('fullListing');
  }

  function displayPostListing() {
    setDisplay('postListing');
  }

  function displayOwnListings() {
    setDisplay('ownListings');
  }

  return (
    <>
      <h1>Pass the Plate</h1>
      <div className="container">
        {/* <Login /> */}
        <Sidebar
          displayOwnListings={displayOwnListings}
          displayPostListing={displayPostListing}
        />
        <CentralDisplay
          listings={listings}
          display={display}
          displayFullListing={displayFullListing}
        />
      </div>
    </>
  );
}

export default App;
