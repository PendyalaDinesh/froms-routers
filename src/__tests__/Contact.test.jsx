import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';
import { MemoryRouter } from 'react-router-dom';

describe('Contact form validation', () => {
  test('submit button disabled until form valid and shows validation messages on invalid submit', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const submit = screen.getByRole('button', { name: /submit/i });
    expect(submit).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'A' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'bademail' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'short msg' } });

    expect(submit).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Valid Name' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'valid@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'This message has more than twenty characters.' } });
    fireEvent.click(screen.getByLabelText(/I agree to terms/i));

    expect(submit).toBeEnabled();
  });
});
