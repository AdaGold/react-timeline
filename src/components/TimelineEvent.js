import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    return (
      <article className='timeline-event'>
        <p className='event-person'>{this.props.person}</p>
        <p className='event-status'>{this.props.status}</p>
        <p className='event-time'>{this.props.time}</p>
      </article>
    );
  }
}

export default TimelineEvent;
