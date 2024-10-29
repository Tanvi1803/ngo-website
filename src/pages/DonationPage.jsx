import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function DonationPage() {
  const navigate = useNavigate();
  const [donationComplete, setDonationComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    pan: '',
    email: '',
    phone: '',
    amount: '',
    paymentType: 'Credit/Debit Card', // Default payment type
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDonateClick = () => {
    const newDonor = {
      id: Date.now(), // Unique ID for each donor
      name: formData.name,
      email: formData.email,
      amount: formData.amount,
    };

    // Retrieve existing donors from localStorage
    const storedDonors = JSON.parse(localStorage.getItem('donorList')) || [];
    // Add the new donor to the list
    const updatedDonorList = [...storedDonors, newDonor];

    // Store the updated list in localStorage
    localStorage.setItem('donorList', JSON.stringify(updatedDonorList));

    // Mark donation as complete and navigate to Donor List page
    setDonationComplete(true);
    navigate('/donors', { state: { donors: updatedDonorList } });
  };

  const paymentTypes = ['Credit/Debit Card', 'UPI', 'Net Banking'];

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      backgroundColor: '#fff',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginTop: '10px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    select: {
      width: '100%',
      padding: '8px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    donateButton: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#FFA500',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        {!donationComplete ? (
          <form style={styles.form}>
            <h3>Make a Donation</h3>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <label style={styles.label}>PAN</label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <label style={styles.label}>Phone No</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <label style={styles.label}>Amount to Donate</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <label style={styles.label}>Payment Type</label>
            <select
              name="paymentType"
              value={formData.paymentType}
              onChange={handleChange}
              style={styles.select}
            >
              {paymentTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleDonateClick}
              style={styles.donateButton}
            >
              Donate
            </button>
          </form>
        ) : (
          <div>Thank you for your donation!</div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DonationPage;
