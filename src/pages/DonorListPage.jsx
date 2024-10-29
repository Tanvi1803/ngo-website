import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function DonorListPage() {
  const [donorList, setDonorList] = useState([]);

  useEffect(() => {
    // Retrieve donor list from localStorage on component mount
    const storedDonors = JSON.parse(localStorage.getItem('donorList')) || [];
    setDonorList(storedDonors);
  }, []);

  const removeDonor = (id) => {
    // Filter out the donor by id and update both localStorage and state
    const updatedList = donorList.filter(donor => donor.id !== id);
    localStorage.setItem('donorList', JSON.stringify(updatedList));
    setDonorList(updatedList);
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.header}>Our Donors</h2>
        <ul style={styles.list}>
          {donorList.length > 0 ? (
            donorList.map((donor) => (
              <li key={donor.id} style={styles.listItem}>
                <div style={styles.donorInfo}>
                  <strong style={styles.name}>{donor.name}</strong>
                  {donor.email && <span style={styles.email}>{donor.email}</span>}
                  {donor.phone && <span style={styles.phone}>📞 {donor.phone}</span>}
                </div>
                <div style={styles.donationInfo}>
                  <span style={styles.amount}>₹{donor.amount}</span>
                  <span style={styles.paymentType}>{donor.paymentType}</span>
                  <button
                    onClick={() => removeDonor(donor.id)}
                    style={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li style={styles.noDonors}>No donors found.</li>
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#f3f4f6',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
  header: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#2c3e50',
    textAlign: 'center',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    marginBottom: '12px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
  },
  donorInfo: {
    display: 'flex',
    flexDirection: 'column',
    flex: 3,
  },
  name: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#34495e',
    marginBottom: '5px',
  },
  email: {
    color: '#7f8c8d',
    fontSize: '14px',
    marginBottom: '5px',
  },
  phone: {
    color: '#16a085',
    fontSize: '14px',
  },
  donationInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 2,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#27ae60',
  },
  paymentType: {
    fontSize: '14px',
    color: '#2980b9',
    marginTop: '5px',
  },
  removeButton: {
    marginTop: '5px',
    padding: '5px 10px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  noDonors: {
    textAlign: 'center',
    color: '#888',
    fontSize: '16px',
  },
};

export default DonorListPage;
