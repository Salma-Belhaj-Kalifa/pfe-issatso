import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';

import Actualite from './components/Actualite';
import Actualitedirigee from './components/Actualitedirigee';

import Affectation from './components/Affectation';

import DisponibiliteProf from './components/DisponibiliteProf';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="DisponibiliteProf" element={<DisponibiliteProf />} />
          <Route path="Actualite" element={<Actualite />} />
          <Route path="Affectation" element={<Affectation />} />
          <Route path="Actualitedirigee" element={<Actualitedirigee />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
