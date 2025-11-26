import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const activeStyle = { textDecoration: 'underline', fontWeight: 'bold' };

export default function AccountLayout() {
  return (
    <div>
      <h1>Account</h1>
      <div style={{ marginBottom: 8 }}>
        <NavLink to='profile' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Profile</NavLink>{' | '}
        <NavLink to='settings' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Settings</NavLink>
      </div>
      <div style={{ border: '1px solid #eee', padding: 12 }}>
        <Outlet />
      </div>
    </div>
  );
}
