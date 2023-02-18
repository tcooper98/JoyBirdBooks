import React, { useState } from 'react';
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import "./calender.css"



const events = [{
    id: 1,
    color: '#7e9e32',
    from: '2023-02-15T18:00:00+00:00',
    to: '2023-02-15T19:00:00+00:00',
    title: 'Storytime'
}, {
    id: 2,
    color: '#7e9e32',
    from: '2023-02-16T13:00:00+00:00',
    to: '2023-02-16T14:00:00+00:00',
    title: 'Storytime'
}, {
    id: 3,
    color: '#7e9e32',
    from: '2023-02-20T13:00:00+00:00',
    to: '2023-02-20T20:00:00+00:00',
    title: 'Zine Meetup'
},
{
    id: 4,
    color: '#7e9e32',
    from: '2023-02-26T13:00:00+00:00',
    to: '2023-02-26T20:00:00+00:00',
    title: 'Publishing Workshop'
},
{
    id: 5,
    color: '#7e9e32',
    from: '2023-02-28T13:00:00+00:00',
    to: '2023-022-28T20:00:00+00:00',
    title: 'Margaret Edwards Author Spotlight'
},
{
    id: 6,
    color: '#7e9e32',
    from: '2023-03-01T13:00:00+00:00',
    to: '2023-03-01T20:00:00+00:00',
    title: 'Little Weird Book Club'
},
{
    id: 6,
    color: '#7e9e32',
    from: '2023-03-15T13:00:00+00:00',
    to: '2023-03-15T20:00:00+00:00',
    title: 'Open Mic & Poetry Slam'
}];

function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

function MyCalendar() {
    const [value, setValue] = useState(new Date());

    function handleDateClick(date) {
        const eventsOnDay = events.filter(event => isSameDay(date, new Date(event.from)));
        eventsOnDay.forEach(event => {
            highlightCell(date, "#7e9e32");
        });
    }

    function highlightCell(date, color) {
        const cell = document.querySelector(`[aria-label="${date.toDateString()}"]`);
        if (cell) {
            cell.style.backgroundColor = color;
        }
    }

    const upcomingEvents = events
        .filter(event => new Date(event.from) >= value)
        .sort((a, b) => new Date(a.from) - new Date(b.from))
        .slice(0, 3);

    return (
        <div className='calendar-container'>
            <div className="calendar">
                <Calendar onChange={setValue} value={value} onClickDay={handleDateClick} />
            </div>
            <div className='events'>
                <div className='event-title'>
                    <h2>Upcoming Events</h2>
                </div>
                <div className='event-list'>
                <ul>
                    {upcomingEvents.map(event => (
                        <li key={event.id}>
                            {`${event.title} @ ${new Date(event.from).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ${new Date(event.from).toLocaleDateString()}`}
                        </li>
                    ))}
                </ul>
                
                </div>
                </div>
            </div>
        
    );
}

export default MyCalendar;