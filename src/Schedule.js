import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import rrulePlugin from '@fullcalendar/rrule';

const events = [
  { title: 'Stationary Posture', 
    daysOfWeek: [ 1 ] }
]

export function Schedule() {
  return (
    <div>
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
