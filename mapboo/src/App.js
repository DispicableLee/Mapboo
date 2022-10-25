import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Maps from './Maps';
import Form from './Form';
import Footer from './Footer';
import Search from './Search';


function App() {
  return (
    <div>
      <Header />
      <Maps />
      <Form />
      <Footer />
</div>
  );
}

export default App;
