import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Feedback from '../Feedback';

describe('Feedback uncontrolled form', () => {
  test('submitting shows a summary card', () => {
    render(<Feedback />);

    const nickname = screen.getByLabelText(/Nickname/i);
    const rating = screen.getByRole('combobox');
    const comments = screen.getByLabelText(/Comments/i);
    const submit = screen.getByRole('button', { name: /submit feedback/i });

    fireEvent.change(nickname, { target: { value: 'Tester' } });
    fireEvent.change(rating, { target: { value: '5' } });
    fireEvent.change(comments, { target: { value: 'Great app' } });

    fireEvent.click(submit);

    expect(screen.getByText(/Feedback Summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Tester/)).toBeInTheDocument();
    expect(screen.getByText(/Great app/)).toBeInTheDocument();
  });
});
