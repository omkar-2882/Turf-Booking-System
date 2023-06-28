import React, { useState } from 'react';
import './BookingManager.css';


function BookingManager() {
  // State for the list of booked turfs
  const [bookedTurfs, setBookedTurfs] = useState([
    { id: 1, name: 'Turf A', day: 'Monday', time: '10:00 AM - 12:00 PM' },
    { id: 2, name: 'Turf B', day: 'Tuesday', time: '3:00 PM - 5:00 PM' },
    { id: 3, name: 'Turf C', day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
  ]);

  // State for new turf form
  const [newTurfName, setNewTurfName] = useState('');
  const [newTurfDay, setNewTurfDay] = useState('');
  const [newTurfTime, setNewTurfTime] = useState('');

  // Function to mark a turf as booked
  const markAsBooked = (id) => {
    const updatedTurfs = bookedTurfs.map((turf) =>
      turf.id === id ? { ...turf, booked: true } : turf
    );
    setBookedTurfs(updatedTurfs);
  };

  // Function to add a new turf
  const addNewTurf = (event) => {
    event.preventDefault();

    const newTurf = {
      id: Math.random(), // You can use a more robust ID generation method
      name: newTurfName,
      day: newTurfDay,
      time: newTurfTime,
      booked: false,
    };

    setBookedTurfs([...bookedTurfs, newTurf]);

    // Reset form inputs
    setNewTurfName('');
    setNewTurfDay('');
    setNewTurfTime('');
  };

  return (

    <div className="booking-manager">
      <h2>Booked Turfs</h2>
      {bookedTurfs.map((turf) => (
        <div key={turf.id}>
          <h3>{turf.name}</h3>
          <p>Day: {turf.day}</p>
          <p>Time: {turf.time}</p>
          {turf.booked ? (
            <p>Status: Booked</p>
          ) : (
            <button onClick={() => markAsBooked(turf.id)}>Mark as Booked</button>
          )}
        </div>
      ))}

      <h2>Add New Turf</h2>
      <form onSubmit={addNewTurf}>
        <input
          type="text"
          placeholder="Turf Name"
          value={newTurfName}
          onChange={(e) => setNewTurfName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Day"
          value={newTurfDay}
          onChange={(e) => setNewTurfDay(e.target.value)}
        />
        <input
          type="text"
          placeholder="Time"
          value={newTurfTime}
          onChange={(e) => setNewTurfTime(e.target.value)}
        />
        <button type="submit">Add Turf</button>
      </form>
    </div>
  );
}

export default BookingManager;
