import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';

import Main from './component/Main';
import Admin from './component/Admin';
import Write from './component/Write';
import Signup from './component/Signup';
import Single from './component/Single';
import Login from './component/Login';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route exact path="*" element={<Main />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/write" element={<Write />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/sign" element={<Signup />} />
            <Route exact path="/single" element={<Single />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;