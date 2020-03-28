import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events.map((event) => {
    return (<TimelineEvent
      key={event.timeStamp}
      person={event.person}
      status={event.status}
      time={event.timeStamp} />);
  });

  return (
    <section className='timeline'>
      {events}
    </section>
  );
};

export default Timeline;