import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ListProduct from './components/ListProduct';
import WriteProduct from './components/WriteProduct';
function App() {
  console.warn = function no_console() {};
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<ListProduct/>}/>
            <Route path='/write' element={<WriteProduct/>}/>
            <Route path='*' element={<ListProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
