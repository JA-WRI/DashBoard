// 'use client'
// import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar';
// import React, { useState } from 'react'; // Import React and useState
// import 'react-calendar/dist/Calendar.css'

// //Temporary
// const events = [
//   {
//     id: 1,
//     title: "Something",
//     description: "Do soemthing with this",
//   },
//   {
//     id: 2,
//     title: "Something",
//     description: "Do soemthing with this",
//   },
//   {
//     id: 3,
//     title: "Something",
//     description: "Do soemthing with this",
//   }
// ];

// const EventCalendar = () => {
//     const [value, onChange] = useState(new Date()); 
//     return (
//       <div className='bg-white p-4 rounded-md'>
//         <Calendar onChange={onChange} value={value} />
//         <div className='flex items-center justify-between'>
//           <h1 className='text-xl font-semibold my-4'>Events</h1>
//         </div>
//         <div className='flex flex-col gap-4'>
//           {events.map(event=>(
//             <div className='p-5 rounded-md border-2 border-grey-100 border-t-4 odd:border-t-purple-400 even:border-t-orange-400' key={event.id}>
//               <div className='flex items-center justify-between'>
//                 <h1 className='font-semibold text-gray-600'>{event.title}</h1>
//                 <span className='text-gray-300 text-xs'>{event.time}</span>
//               </div>
//               <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
// export default EventCalendar
'use client'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import React, { useState, useEffect } from 'react'; // Import useEffect for fetching data

const EventCalendar = () => {
    const [value, onChange] = useState(new Date());
    const [events, setEvents] = useState([]); // State to store fetched events
    const [newEvent, setNewEvent] = useState({ title: '', description: '', time: '' }); // State for new event input

    // Fetch events from the backend when the component mounts
    useEffect(() => {
        fetch('http://localhost:3000/api/events')  // Fetch data from the backend
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setEvents(data))         // Update the events state with fetched data
            .catch(error => console.error('Error fetching events:', error)); // Handle errors
    }, []);

    // Handle input changes for the new event form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    // Handle form submission to create a new event
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await fetch('http://localhost:3000/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEvent), // Send the new event data to the backend
            });

            if (response.ok) {
                const createdEvent = await response.json(); // Get the created event from the response
                setEvents([...events, createdEvent]); // Update the events state with the new event
                setNewEvent({ title: '', description: '', time: '' }); // Clear the form
            } else {
                console.error('Failed to create event');
            }
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Events</h1>
            </div>

            {/* Form to create a new event */}
            <form onSubmit={handleSubmit} className='mb-6'>
                <div className='flex flex-col gap-2'>
                    <input
                        type='text'
                        name='title'
                        placeholder='Event Title'
                        value={newEvent.title}
                        onChange={handleInputChange}
                        className='p-2 border rounded-md'
                        required
                    />
                    <input
                        type='text'
                        name='description'
                        placeholder='Event Description'
                        value={newEvent.description}
                        onChange={handleInputChange}
                        className='p-2 border rounded-md'
                        required
                    />
                    <input
                        type='text'
                        name='time'
                        placeholder='Event Time (e.g., 10:00 AM)'
                        value={newEvent.time}
                        onChange={handleInputChange}
                        className='p-2 border rounded-md'
                        required
                    />
                    <button
                        type='submit'
                        className='bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600'
                    >
                        Add Event
                    </button>
                </div>
            </form>

            {/* Render events dynamically from the fetched data */}
            <div className='flex flex-col gap-4'>
                {events.map(event => (
                    <div className='p-5 rounded-md border-2 border-grey-100 border-t-4 odd:border-t-purple-400 even:border-t-orange-400' key={event.id}>
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

export default EventCalendar;