import React from 'react';

export default function Profile() {
  const user = {
    name: 'Dinesh Pendyala',
    email: 'D@okcu.edu',
    role: 'Student',
  };

  return (
    <div>
      <h2>Profile</h2>
      <div style={{ border: '1px solid #ccc', padding: 12, maxWidth: 400 }}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
}
