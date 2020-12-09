import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TimelineEvent from './TimelineEvent';
import { render, screen } from '@testing-library/react'

describe('TimelineEvent', () => {
  beforeEach(() => {
    render(<TimelineEvent
      person="Ada Lovelace"
      status="The Original programmer... old-school style, on PAPER."
      timeStamp="2018-05-18T22:12:03Z" />);  
  });

  test('renders without crashing and shows the name', () => {
    expect(screen.getByText(/Ada Lovelace/)).toBeInTheDocument();
  });

  test('that it will display the status', async () => {
    expect(screen.getByText(/The Original programmer/)).toBeInTheDocument();
  });

  test('that it will display the time', async () => {
    expect(screen.getByText(/\d+ years ago/)).toBeInTheDocument();
  });
});