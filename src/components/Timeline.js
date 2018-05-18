import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const events = this.props.events.map((event) => {
      return (<TimelineEvent
                person={event.person}
                status={event.status}
                time={event.timeStamp} />);
    });

    return (
      <section className='timeline'>
        {events}
      </section>
    );
  }
}

export default Timeline;
