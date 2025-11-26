import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Feedback from './Feedback';
import AccountLayout from './AccountLayout';
import Profile from './Profile';
import Settings from './Settings';
import ThankYou from './ThankYou';

export default function App() { 
  return (
    <div>
      <NavBar />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/feedback' element={<Feedback />} />

          <Route path='/account' element={<AccountLayout />}>
            <Route index element={<Navigate to='profile' replace />} />
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />
          </Route>

          <Route path='/thank-you' element={<ThankYou />} />

          <Route path='*' element={<h2>404 - Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}
