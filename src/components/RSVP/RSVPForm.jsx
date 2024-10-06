import { useState } from 'react';
import { supabase } from '../supabase/SupabaseClient';
import './RSVPForm.css';

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Going');
  const [message, setMessage] = useState('');
  const [headcount, setHeadCount] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('RSVPS')
      .insert([{
        Name: name,
        Email: email,
        Status: status,
        HeadCount: parseInt(headcount),
        EventName: 'Diwali',
        DateTime: new Date('2024-11-02T17:00:00')
      }]);
    if (error) {
      setMessage('Error submitting RSVP: ' + (error.message || error));
      console.error('Insert error:', error);  // For additional debugging
    } else {
      setMessage('RSVP submitted successfully!');
      setName('');
      setEmail('');
      setStatus('Going');
      setHeadCount(1);
    }
  };

  return (
    <div className='divFormParent'>
      
      <form onSubmit={handleSubmit} className="RSVPForm">
        <div className ="info">
          <h1>RSVP</h1>
          <h2>for DIWALI</h2>
          <h1>Festival Of Light</h1>
          <p className= "line">________________________________________</p>
          <h2>Date</h2>
          <p>Saturday, November 2, 2024</p>
          <p>5:00 PM Onwards</p>
          <br/>
          <h2>Venue</h2>
          <p>Party Hall</p>
          <p>950 Portage Parkway, Vaughan</p>
          <p className= "line">________________________________________</p>
          <input type="text" placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)}
            required/>
            <input type="text" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
          <select placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Going">Going</option>
            <option value="Not Going">Not Going</option>
            <option value="Maybe">Maybe</option>
          </select>
          <input type="number" min="1" placeholder="# of Guests" value={headcount}
            onChange={(e) => setHeadCount(e.target.value)}
            required  />
        </div>
        <button className ="accept" type="submit">RSVP</button>

        {/* <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Going">Going</option>
            <option value="Not Going">Not Going</option>
            <option value="Maybe">Maybe</option>
          </select>
        </label>

        <button type="submit">RSVP</button> */}
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
