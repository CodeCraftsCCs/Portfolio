import { useState } from 'react';
import { supabase } from '../supabase/SupabaseClient';

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Going');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('rsvps')
      .insert([{ name, email, status }]);

    if (error) {
      setMessage('Error submitting RSVP: ' + error.message);
    } else {
      setMessage('RSVP submitted successfully!');
      setName('');
      setEmail('');
      setStatus('Going');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
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

        <button type="submit">RSVP</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
