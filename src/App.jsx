import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import WorkPage from './pages/WorkPage';
import PersonalDetailsPage from './pages/PersonalDetailsPage';
import FaqsPage from './pages/FaqsPage';
import MembershipPage from './pages/MembershipPage';
import DonationPage from './pages/DonationPage'; // Ensure this matches the path
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import MottoPage from './pages/MottoPage';
import ObjectivesPage from './pages/ObjectivesPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CoreMembersPage from './pages/CoreMembersPage';
import DetailedProjectPage from './pages/DetailedWorkPage';
import DonorListPage from './pages/DonorListPage'; // Import the new DonorListPage

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/blogs" element={<BlogPage />} />
                    <Route path="/our-works" element={<WorkPage />} />
                    <Route path="/personaldetails" element={<PersonalDetailsPage />} />
                    <Route path="/faqs" element={<FaqsPage />} />
                    <Route path="/motto-objective" element={<MottoPage />} />
                    <Route path="/objectives" element={<ObjectivesPage />} />
                    <Route path="/membership-volunteership" element={<MembershipPage />} />
                    <Route path="/donate-us" element={<DonationPage />} /> {/* Donation Page Route */}
                    <Route path="/donors" element={<DonorListPage />} /> {/* New Donor List Page Route */}
                    <Route path="/privacy-policies" element={<PrivacyPolicyPage />} />
                    <Route path="/blogs/:id" element={<BlogDetailPage />} />
                    <Route path="/our-works/:id" element={<DetailedProjectPage/>}/>
                    <Route path="/core-members" element={<CoreMembersPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
