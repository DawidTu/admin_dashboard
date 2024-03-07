import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const MyCalendar = () => {
  const events = [
    { title: 'Event 1', date: '2024-03-07' },
    { title: 'Event 2', date: '2024-03-12' },
    { title: 'Event 3', date: '2024-03-09' },
    { title: 'Event 6', date: '2024-03-14' },
    { title: 'Event 8', date: '2022-03-15' },
  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default MyCalendar;
