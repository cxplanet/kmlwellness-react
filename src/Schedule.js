import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import rrulePlugin from '@fullcalendar/rrule';
import './Schedule.css';

const events = [
  { title: 'Stationary Posture', 
   startTime: '18:00',
   endTime: '19:30',
   eventDisplay: 'auto',
   daysOfWeek: [ 1 ] },
  { title: 'Stationary Posture', 
   startTime: '16:15',
   endTime: '17:30',
   eventDisplay: 'auto',
   daysOfWeek: [ 3 ] }
]

export function Schedule() {
  return (
    <div className='schedule'>
      <h1>Yoga Class Schedule</h1>
      <FullCalendar
        plugins={[rrulePlugin, dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default Schedule
