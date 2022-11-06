import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import Reimbursement from './pages/Reimbursement';

const App = () => {
  return (
    <>
    <BrowserRouter basename="/personal_website">
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/contact"} element={<Contact />}/>
          <Route path={"/knowledges"} element={<Knowledges />}/>
          <Route path={"/portfolio"} element={<Portfolio />}/>
          <Route path={"/remboursement_loyer"} element={<Reimbursement />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;