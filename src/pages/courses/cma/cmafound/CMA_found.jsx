import React, { useState } from 'react';

const CMA_found = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAllVideos, setShowAllVideos] = useState(false);
  
  const books = [
    {
      "discountPercentage": 15,
      "title": "CA Foundation | Accounts",
      "instructor": "CA Anand Kumar",
      "pricingOptions": {
        "min": 3999.00,
        "max": 4499.00
      }
    },
    {
      "discountPercentage": 10,
      "title": "CA Foundation | Business Law",
      "instructor": "CA Raj Kumar",
      "applicableExams": ["May 24", "Nov 24"],
      "originalPrice": 4999.00,
      "currentPrice": 4499.00
    },
    {
      "discountPercentage": 12,
      "title": "CA Foundation | Business Mathematics",
      "instructor": "Prof. Amit Shah",
      "pricingOptions": {
        "min": 3499.00,
        "max": 3999.00
      }
    },
    {
      "discountPercentage": 8,
      "title": "CA Foundation | Economics",
      "instructor": "CA Neha Gupta",
      "pricingOptions": {
        "min": 3999.00,
        "max": 4499.00
      }
    }
  ];



  const galleryImages = [
    { id: 1, src: "https://via.placeholder.com/400x300?text=Classroom+Sessions", alt: "Classroom Sessions", caption: "Interactive Classroom Sessions" },
    { id: 2, src: "https://via.placeholder.com/400x300?text=Study+Materials", alt: "Study Materials", caption: "Comprehensive Study Materials" },
    { id: 3, src: "https://via.placeholder.com/400x300?text=Faculty+Guidance", alt: "Faculty Guidance", caption: "Expert Faculty Guidance" },
    { id: 4, src: "https://via.placeholder.com/400x300?text=Mock+Exams", alt: "Mock Exams", caption: "Rigorous Mock Exams" },
    { id: 5, src: "https://via.placeholder.com/400x300?text=Student+Achievements", alt: "Student Achievements", caption: "Our Student Achievements" },
    { id: 6, src: "https://via.placeholder.com/400x300?text=Campus+Facilities", alt: "Campus Facilities", caption: "State-of-the-art Campus Facilities" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "CA Final Ranker",
      image: "https://via.placeholder.com/150?text=Priya+S",
      quote: "The faculty at Lakshya Edu provided exceptional guidance that helped me secure a top rank in CA Final exams."
    },
    {
      id: 2,
      name: "Rahul Mehta",
      position: "CA Professional",
      image: "https://via.placeholder.com/150?text=Rahul+M",
      quote: "The structured approach and comprehensive study materials at Lakshya made complex topics easier to understand."
    },
    {
      id: 3,
      name: "Sneha Patel",
      position: "CA Final Student",
      image: "https://via.placeholder.com/150?text=Sneha+P",
      quote: "The mock exams and practice sessions significantly boosted my confidence for the actual CA Final exams."
    }
  ];


  const demoVideos = [
    {
      id: "q5M6edvT170",
      title: "DEMO LEC : 01 || CA FOUNDATION ACCOUNTS || BY CA CMA GOPINADH SIR ( AIR 23 )",
      instructor: "Lakshya Faculty",
      thumbnail: "https://img.youtube.com/vi/q5M6edvT170/maxresdefault.jpg",
    },
    {
      id: "fy54UHOBu4g",
      title: "DEMO LEC : 01 || CA FOUNDATION LAW || BY CA DHAMODHAR SIR",
      instructor: "Lakshya Faculty",
      thumbnail: "https://img.youtube.com/vi/fy54UHOBu4g/maxresdefault.jpg",
    },
    {
      id: "iPRSJ4fudHM",
      title: "DEMO LEC : 01 || CA FOUNDATION QT || BY GANESH SIR M.Sc",
      instructor: "Lakshya Faculty",
      thumbnail: "https://img.youtube.com/vi/iPRSJ4fudHM/maxresdefault.jpg"    
    },
    {
      id: "7qez3diSEkA",
      title: "DEMO LEC : 01 || CA FOUNDATION ECONOMICS || BY CA RAJESH NANDA SIR",
      instructor: "Lakshya Faculty",
      thumbnail: "https://img.youtube.com/vi/7qez3diSEkA/maxresdefault.jpg",
    }
  ];

  // Function to open YouTube video in a new tab
  const openYouTubeVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto p-5 font-sans text-gray-800">
      {/* Hero Section with Background Image */}
      <div className="relative rounded-lg overflow-hidden mb-8 shadow-lg">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.freepik.com/free-photo/accounting-finance-banking-tax-payment-concept_31965-4879.jpg"
            alt="CMA Foundation Course Background" 
            className="w-full h-full object-cover " 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-50"></div>
        </div>
        <div className="relative z-10 py-20 px-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best CMA Foundation institute in india</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Welcome to Lakshya - Your Gateway to success in CMA Foundation</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href='/request'>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded transition-all duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Request Callback
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap border-b-2 border-gray-100 mb-8">
        <button 
          className={`py-4 px-5 text-base font-medium cursor-pointer relative ${activeTab === 'overview' ? 'text-primary after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary' : 'text-gray-500'}`} 
          onClick={() => setActiveTab('overview')}>
          Overview
        </button>
        <button 
          className={`py-4 px-5 text-base font-medium cursor-pointer relative ${activeTab === 'books' ? 'text-primary after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary' : 'text-gray-500'}`} 
          onClick={() => setActiveTab('books')}>
          Books
        </button>
        <button 
          className={`py-4 px-5 text-base font-medium cursor-pointer relative ${activeTab === 'images' ? 'text-primary after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary' : 'text-gray-500'}`} 
          onClick={() => setActiveTab('images')}>
          Images
        </button>
      </div>

      {/* Content Sections */}
      <div className="course-content">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">OverView</h2>
              <p className="text-gray-700">Begin your CMA journey with Lakshya Edu, the leading institute for CMA Foundation preparation in Hyderabad. Our expert faculty, structured curriculum, and interactive learning ensure a strong grasp of economics, accounting, business laws, ethics, and mathematics. At Lakshya, we go beyond teaching—we empower you to succeed. Whether you prefer face-to-face batches or flexible online learning, we provide personalized guidance to help you reach your career goals.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Enroll now for CMA Foundation and propel your career to new heights.</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label className="block text-gray-700">Email Address</label>
                  <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">Submit</button>
              </form>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">CMA Foundation Course Structure</h2>
              <p className="text-gray-700">Kickstart your Certified Management Accountant (CMA) journey with Lakshya Edu’s expert-led CMA Foundation course. The curriculum is designed to build a strong foundation in accounting, law, economics, and mathematics, ensuring a seamless transition to advanced CMA levels.</p>
              <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">Paper</th>
                    <th className="border border-gray-300 p-2">Subject</th>
                    <th className="border border-gray-300 p-2">Marks</th>
                    <th className="border border-gray-300 p-2">Question Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">1</td>
                    <td className="border border-gray-300 p-2">Fundamentals of Business Laws & Business Communication</td>
                    <td className="border border-gray-300 p-2">100</td>
                    <td className="border border-gray-300 p-2">Objective</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">2</td>
                    <td className="border border-gray-300 p-2">Fundamentals of Financial & Cost Accounting</td>
                    <td className="border border-gray-300 p-2">100</td>
                    <td className="border border-gray-300 p-2">Objective</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">3</td>
                    <td className="border border-gray-300 p-2">Fundamentals of Business Mathematics & Statistics</td>
                    <td className="border border-gray-300 p-2">100</td>
                    <td className="border border-gray-300 p-2">Objective</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">4</td>
                    <td className="border border-gray-300 p-2">Fundamentals of Business Economics & Management</td>
                    <td className="border border-gray-300 p-2">100</td>
                    <td className="border border-gray-300 p-2">Objective</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">CMA Foundation Exam Pattern, Eligibility & Career Scope</h2>
              <p className="text-gray-700">Exam Centre Application Fee:</p>
              <ul className="list-disc list-inside">
                <li>For centres in India: Rs 1200</li>
                <li>For overseas centres: US $60</li>
              </ul>
              <p className="text-gray-700 mt-4">CMA Foundation Exam Format:</p>
              <ul className="list-disc list-inside">
                <li>How You’ll Be Tested: The exam format will be announced soon</li>
                <li>MCQ-Based Test: Each paper has 50 MCQs worth 2 marks each (100 marks per paper).</li>
                <li>Total Marks: 200 (Morning & Afternoon Sessions Combined).</li>
                <li>Course Structure: The CMA Foundation consists of 4 papers.</li>
              </ul>
              <p className="text-gray-700 mt-4">CMA Foundation Eligibility Criteria:</p>
              <ul className="list-disc list-inside">
                <li>Class 10 or Equivalent from a recognized board.</li>
                <li>Senior Secondary (10+2) from a recognized board or equivalent.</li>
                <li>National Diploma in Commerce (AICTE/State Board) or Diploma in Rural Service (National Council of Higher Education).</li>
              </ul>
              <p className="text-gray-700 mt-4">Exemptions:</p>
              <ul className="list-disc list-inside">
                <li>ICSI Foundation Exam Qualified candidates are exempted.</li>
                <li>CA Intermediate Qualified candidates are exempted.</li>
                <li>Direct Admission to CMA Intermediate grants exemption from CMA Foundation.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">CMA Job Roles & Salary in India</h2>
              <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">JOB DESCRIPTION</th>
                    <th className="border border-gray-300 p-2">SALARY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Senior Financial Analyst</td>
                    <td className="border border-gray-300 p-2">6.5 lakhs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Financial Analyst</td>
                    <td className="border border-gray-300 p-2">4.5 lakhs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Senior Finance Manager</td>
                    <td className="border border-gray-300 p-2">16.5 lakhs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Finance Manager</td>
                    <td className="border border-gray-300 p-2">11.2 lakhs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Chief Financial Officer</td>
                    <td className="border border-gray-300 p-2">36.33 lakhs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Cost Management Accountant</td>
                    <td className="border border-gray-300 p-2">6 lakhs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Accountant</td>
                    <td className="border border-gray-300 p-2">7.7 lakhs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Highly Paying Companies Hiring CMA in India</h2>
              <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">Company</th>
                    <th className="border border-gray-300 p-2">Salary Annually</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Deloitte India</td>
                    <td className="border border-gray-300 p-2">INR 14 Lakhs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">KPMG India</td>
                    <td className="border border-gray-300 p-2">INR 12 Lakhs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">EY India</td>
                    <td className="border border-gray-300 p-2">INR 12 Lakhs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">PwC India</td>
                    <td className="border border-gray-300 p-2">INR 11 Lakhs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Accenture India</td>
                    <td className="border border-gray-300 p-2">INR 10 Lakhs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Join Our Face-to-Face Batches</h2>
              <p className="text-gray-700 mb-4">Join our face-to-face batches to immerse yourself in a comprehensive learning experience. Our expert faculty and interactive sessions help you build a strong foundation for your CMA journey. At Lakshya, we go beyond teaching – we empower you to excel. Choose the best – Choose Lakshya for your CMA Foundation preparation. Hurry! Limited seats available. Your Success, Our Priority!</p>
              <a href="/request">
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded transition-all duration-300">Register Now</button>
              </a>
            </div>
          </div>
        )}

        {/* Books Section */}
        {activeTab === 'books' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">CA Foundation Study Material</h2>
            {/* Book Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Book Image with Discount Badge */}
                  <div className="relative h-48 bg-gray-100">
                    <img 
                      src={`https://via.placeholder.com/400x240?text=${encodeURIComponent(book.title)}`} 
                      alt={book.title} 
                      className="w-full h-full object-cover" 
                    />
                    {book.discountPercentage && (
                      <div className="absolute top-0 right-0 bg-red-500 text-white font-bold py-1 px-3 rounded-bl-lg">
                        {book.discountPercentage}% OFF
                      </div>
                    )}
                  </div>
                  
                  {/* Book Info */}
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium bg-accent text-primary px-2 py-1 rounded">
                        CA Foundation
                      </span>
                      {book.language && (
                        <span className="ml-2 text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {book.language}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{book.title}</h3>
                    <p className="text-gray-600 mb-3">By {book.instructor}</p>
                    {book.applicableExams && (
                      <p className="text-sm text-gray-500 mb-4">
                        <span className="font-medium">Applicable for:</span> {book.applicableExams.join(", ")}
                      </p>
                    )}
                  </div>
                  
                  {/* Price and Buy Button */}
                  <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {book.originalPrice && (
                          <span className="text-gray-500 line-through mr-2">₹{book.originalPrice.toLocaleString()}</span>
                        )}
                        {book.currentPrice ? (
                          <span className="text-2xl font-bold text-primary">₹{book.currentPrice.toLocaleString()}</span>
                        ) : book.pricingOptions ? (
                          <span className="text-2xl font-bold text-primary">
                            ₹{book.pricingOptions.min.toLocaleString()} - ₹{book.pricingOptions.max.toLocaleString()}
                          </span>
                        ) : null}
                      </div>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 rounded transition-colors">
                        Buy Now
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            {/* CTA Banner */}
            <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Bundle & Save!</h3>
                  <p className="mb-4">Get all CA Foundation study materials and save up to 35%. Complete coverage for all subjects.</p>
                  <button className="bg-white text-primary hover:bg-gray-100 font-bold py-2 px-6 rounded-lg transition-colors">
                    View Bundles
                  </button>
                </div>
                <div className="md:w-1/3 p-4">
                  <img src="https://via.placeholder.com/400x300?text=Bundle+Offer" alt="Bundle Offer" className="rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Images Gallery Section */}
        {activeTab === 'images' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">CA Final Program Gallery</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Take a visual tour of our CA Final program, facilities, and student achievements.
            </p>

            {/* Gallery navigation tabs */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              <button className="px-4 py-2 bg-accent text-primary rounded-full font-medium hover:bg-primary transition-colors">All Photos</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Classroom</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Facilities</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Events</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Achievements</button>
            </div>

            {/* Enhanced gallery with different image sizes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 md:row-span-2">
                <div className="rounded-lg overflow-hidden shadow-sm h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative overflow-hidden h-full">
                    <img 
                      src="https://via.placeholder.com/800x600?text=Campus+Overview" 
                      alt="Campus Overview" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold">Campus Overview</h3>
                      <p className="text-white/80">Our state-of-the-art campus facilities</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {galleryImages.slice(0, 4).map(image => (
                <div className="rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" key={image.id}>
                  <div className="relative overflow-hidden pt-[75%]">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Demo Video Section - Add before Faculty Section */}
      <div className="my-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-3">Watch Our Demo Classes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Get a glimpse of our teaching methodology and expert faculty through our actual YouTube lectures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Show either all videos or limited videos based on state */}
          {(showAllVideos ? demoVideos : demoVideos.slice(0, 3)).map((video) => (
            <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative cursor-pointer" onClick={() => openYouTubeVideo(video.id)}>
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group">
                  <button 
                    className="bg-white/90 hover:bg-white text-red-600 rounded-full p-3 transition-transform hover:scale-110 group-hover:scale-110"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff"/>
                  </svg>
                  YouTube
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">{video.instructor}</span>
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.id}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831z" />
                      <path fill="#fff" d="M9.996 15.005l5.207-3.006-5.207-3.006z" />
                    </svg>
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Videos CTA */}
        <div className="text-center mt-10">
          <button 
            onClick={() => setShowAllVideos(!showAllVideos)}
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            {showAllVideos ? 'Show Less' : 'View More Demo Classes'}
            <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAllVideos ? 'rotate-180' : ''}`} 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-bg-light rounded-2xl p-8 my-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-3">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from our successful students who have transformed their careers with our CA Final program</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div className="bg-white rounded-xl p-6 shadow-sm relative" key={testimonial.id}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover" 
                />
              </div>
              <div className="pt-10">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic text-center mb-4">"{testimonial.quote}"</p>
                <div className="text-center">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative rounded-xl overflow-hidden my-16">
        <div className="absolute inset-0">
          <img 
            src="https://via.placeholder.com/1600x600?text=CA+Final+Success" 
            alt="Success Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90"></div>
        </div>
        <div className="relative z-10 py-16 px-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Excel in CA Final?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join Lakshya Edu for expert guidance and success in your CA journey</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href='/enroll'>
            <button className="bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-8 rounded transition-all duration-300">Enroll Now</button>
            </a>
            <a href='/contact'>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded border-2 border-white transition-all duration-300">Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMA_found;