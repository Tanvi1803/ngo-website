import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EventRegistration = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate();

  const [eventDetails, setEventDetails] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const events = [
    {
      id: '1',
      title: "Fund Raising Webinar on: Depression Among Youngsters",
      description: "A webinar addressing depression among youngsters.",
      date: "2024-11-14",
    },
    {
      id: '2',
      title: "Open Mic Event – The Virtual Verse",
      description: "An open mic event showcasing poetic talents.",
      date: "2024-11-20",
    },
    // Add more events as needed
  ];

  useEffect(() => {
    // Find the event details based on the event ID
    const event = events.find(event => event.id === id);
    setEventDetails(event);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      name,
      email,
      phone,
      message: `Event: ${eventDetails.title}\nDescription: ${eventDetails.description}\nDate: ${eventDetails.date}`, // Updated message format
    };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        setConfirmationMessage('Registration successful! A confirmation email has been sent.');
        // Clear form fields after successful registration
        setName('');
        setEmail('');
        setPhone('');
      } else {
        setConfirmationMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setConfirmationMessage('An error occurred. Please try again later.');
    }
  };

  if (!eventDetails) {
    return <div>Loading...</div>; // Optional: Loading state if event details are not available
  }

  return (
    <>
      <Navbar />
      <section className="py-12 bg-gray-100 border-b-4 border-[#fee57e] border-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{eventDetails.title}</h2>
          <p className="text-center text-gray-700 mb-4">{eventDetails.description}</p>
          <p className="text-center text-gray-500 mb-4">{eventDetails.date}</p>

          {confirmationMessage && (
            <div className="mb-4 text-green-600 text-center">{confirmationMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-amber-500 rounded-md hover:bg-amber-600 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventRegistration;
