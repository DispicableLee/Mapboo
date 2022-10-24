import logo from './logo.svg';
import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map from './Maps';
import Search from './Search';
function App() {

  return (
    <div>
      <Search/>
      <Map/>
    </div>
  );
}

export default App;
