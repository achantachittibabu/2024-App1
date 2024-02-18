import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import CreateItemComponent from './components/CreateItemComponent';
import UpdateItemComponent from './components/UpdateItemComponent';
import SearchItemComponent from './components/SearchItemComponent';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Item />} />
              <Route path='/Plans' element={<Item />} />
              <Route path='/add-plans' element={<CreateItemComponent />} />
              <Route path='/Update-plans/:id' element={<UpdateItemComponent />} />
              <Route path='/Search-plans' element={<SearchItemComponent />} />
              <Route path='/prop-items' element={<Item />} />
              <Route path='/add-properties' element={<CreateItemComponent />} />
              <Route path='/Update-property/:id' element={<UpdateItemComponent />} />
              <Route path='/search-properties' element={<SearchItemComponent />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
