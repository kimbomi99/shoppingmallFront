import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ListProduct from './components/ListProduct';
import WriteProduct from './components/WriteProduct';
import DetailProduct from './components/DetailProduct'; 
import ListNotice from './components/ListNotice'; 
import WriteNotice from './components/WriteNotice';
import DetailNotice from './components/DetailNotice'; 
import ListQuestion from './components/ListQuestion'; 


function App() {
  console.warn = function no_console() {};
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<ListProduct/>}/>
            <Route path='/write' element={<WriteProduct/>}/>
            <Route path='/detail/:product_code' element={<DetailProduct/>} />
            <Route path='/notice' element={<ListNotice/>}/>
            <Route path='/writeNotice' element={<WriteNotice/>}/>
            <Route path='/detailNotice/:notice_number' element={<DetailNotice/>} />
            <Route path='/question' element={<ListQuestion/>}/>
            <Route path='*' element={<ListProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
