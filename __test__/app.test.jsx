import { render, screen } from '@testing-library/react';
import React from 'react';
// import { expect, describe, it } from 'jest';
import App from '../src/client/app';
import Sidebar from '../src/client/components/sidebar';


describe('App tests', () => {
  it('should contains the heading Pass The Plate', () => {
    render(<App />);
    const heading = screen.getByText(/Pass the Plate/i);
    expect(heading).toBeInTheDocument();
  });
});
