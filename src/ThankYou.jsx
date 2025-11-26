import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ThankYou() {
  const location = useLocation();
  const name = (location.state && location.state.name) || 'Guest';

  return (
    <section>
      <h1>Thank you!</h1>
      <div style={{ 
        border: '1px solid #d4edda', 
        background: '#f7fff7', 
        padding: 12 
      }}>
        <p>
          Thanks, <strong>{name}</strong> — we received your message.
        </p>
      </div>
    </section>
  );
}
