'use client'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import React, { useState } from 'react'; // Import React and useState
import 'react-calendar/dist/Calendar.css'

const EventCalendar = () => {
    const [value, onChange] = useState(new Date()); 
    return (
      <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
      </div>
    );
  }
  
export default EventCalendar
