import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const MyCalendar = () => {
  
  const events = [
    { title: 'Event 1', date: '2024-03-07' },
    { title: 'Event 2', date: '2024-03-12' },
    { title: 'Event 3', date: '2024-03-09' },
    { title: 'Event 6', date: '2024-03-14' },
    { title: 'Event 8', date: '2022-03-15' },
  ];

  const customHeaderToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay',
  };

  return (
    <div className='mt-16'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={customHeaderToolbar}
      />
    </div>
  );
};

export default MyCalendar;
