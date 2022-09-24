import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

const App = () => {
  
  const baseUrl = "personal_website";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={baseUrl+"/"} element={<Home />}/>
          <Route path={baseUrl+"/contact"} element={<Contact />}/>
          <Route path={baseUrl+"/knowledges"} element={<Knowledges />}/>
          <Route path={baseUrl+"/portfolio"} element={<Portfolio />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;