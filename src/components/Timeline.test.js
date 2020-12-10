import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Timeline from './Timeline';
import { render, screen } from '@testing-library/react'

describe('Timeline', () => {
  beforeEach(() => {
    const events = [
      {
        person: 'Grace Hopper',
        status: 'Ada is a strongly typed language. C++ is a strongly hyped language.',
        timeStamp: '2018-05-18T22:12:03Z'
      },
      {
        person: 'Richard O\'Keefe',
        status: 'Fifty years of programming language research, and we end up with C++ ???',
        timeStamp: '2018-05-18T22:19:40Z'
      }
    ];
    render(<Timeline events={events} />);  
  });

  test('renders without crashing and shows all the names', () => {
    ['Grace Hopper', 'Richard O\'Keefe'].forEach((name) => {
      expect(screen.getByText(new RegExp(name))).toBeInTheDocument();
    });
  });

  test('renders an empty list without crashing', () => {
    const element = render(<Timeline events={[]} />);  
    expect(element).not.toBeNull();
  })
});