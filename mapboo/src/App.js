import React from 'react';
import './App.css';
<<<<<<< HEAD
import Header from './Header';
import Map from './Map';
import Form from './Form';
import Footer from './Footer';


function App() {


  return (
    <div>
      <Header />
      <Map />
      <Form />
      <Footer />
=======
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map from './Maps';
import Search from './Search';
function App() {

  return (
    <div>
      <Search/>
      <Map/>
>>>>>>> ad94bbeda2b83ce852333718a9da0f46c32da0dc
    </div>
  );
}

export default App;
