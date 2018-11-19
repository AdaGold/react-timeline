import React, { Component } from 'react';
import moment from 'moment';

const Timestamp = () => {
  const time = moment(props.time);
  const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
  const relative = time.fromNow();

  return (
    <span title={absolute}>{relative}</span>
  );
};

export default Timestamp;
