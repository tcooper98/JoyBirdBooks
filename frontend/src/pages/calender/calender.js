import React, { useState } from 'react'
import Calendar from 'react-awesome-calendar';


 //events are hardcoded for now, will be fetched from backend
const events = [{
    id: 1,
    color: '#7e9e32',
    from: '2023-02-05T18:00:00+00:00',
    to: '2023-02-05T19:00:00+00:00',
    title: 'Storytime'
}, {
    id: 2,
    color: '#7e9e32',
    from: '2023-02-06T13:00:00+00:00',
    to: '2023-02-06T14:00:00+00:00',
    title: 'Storytime'
}, {
    id: 3,
    color: '#7e9e32',
    from: '2023-02-07T13:00:00+00:00',
    to: '2023-02-07T20:00:00+00:00',
    title: 'Zine Meetup'
},
{
    id: 4,
    color: '#7e9e32',
    from: '2023-02-10T13:00:00+00:00',
    to: '2023-02-10T20:00:00+00:00',
    title: 'Publishing Workshop'
},
{
    id: 5,
    color: '#7e9e32',
    from: '2023-02-12T13:00:00+00:00',
    to: '2023-02-12T20:00:00+00:00',
    title: 'Margaret Edwards Author Spotlight'
},
{
    id: 6,
    color: '#7e9e32',
    from: '2023-02-14T13:00:00+00:00',
    to: '2023-02-14T20:00:00+00:00',
    title: 'Little Weird Book Club'
},
{
    id: 6,
    color: '#7e9e32',
    from: '2023-02-15T13:00:00+00:00',
    to: '2023-02-15T20:00:00+00:00',
    title: 'Open Mic & Poetry Slam'
}];


export default function Calender() {
    const [value, setValue] = useState(new Date())
    
    return (
        <>
       <Calendar
                events={events}
            />
        </>
    )
}