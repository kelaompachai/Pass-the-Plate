import { render, screen } from '@testing-library/react';
import React from 'react';
import Sidebar from '../src/client/components/sidebar';

describe('sidebar tests', () => {
  it('sidebar should have button', () => {
    render(<Sidebar />);
    const buttonEle = screen.getByRole('button', { name: 'Post Listing' });
    expect(buttonEle).toBeInTheDocument();
  });
});
