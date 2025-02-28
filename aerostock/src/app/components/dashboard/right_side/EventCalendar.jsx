'use client'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import React, { useState } from 'react'; // Import React and useState
import 'react-calendar/dist/Calendar.css'

//Temporary
const events = [
  {
    id: 1,
    title: "Something",
    description: "Do soemthing with this",
  },
  {
    id: 2,
    title: "Something",
    description: "Do soemthing with this",
  },
  {
    id: 3,
    title: "Something",
    description: "Do soemthing with this",
  }
];

const EventCalendar = () => {
    const [value, onChange] = useState(new Date()); 
    return (
      <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-semibold my-4'>Events</h1>
        </div>
        <div className='flex flex-col gap-4'>
          {events.map(event=>(
            <div className='p-5 rounded-md border-2 border-grey-100 border-t-4 odd:border-t-sky-900 even:border-t-yellow-200' key={event.id}>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                <span className='text-gray-300 text-xs'>{event.time}</span>
              </div>
              <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default EventCalendar
