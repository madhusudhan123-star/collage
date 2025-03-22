import React, { useState } from 'react';

const CMA_final = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAllVideos, setShowAllVideos] = useState(false);
  
  const books = [
    {
      "discountPercentage": 18,
      "title": "CA Final | FR",
      "instructor": "CA Aakash Kandoi",
      "pricingOptions": {
        "min": 10999.00,
        "max": 11499.00
      }
    },
    {
      "discountPercentage": 7,
      "title": "CA Final | Direct Tax DT",
      "instructor": "CA Bhanwar Borana",
      "applicableExams": ["May 25", "Nov 25"],
      "originalPrice": 14999.00,
      "currentPrice": 13999.00
    },
    {
      "discountPercentage": 9,
      "title": "CA Final | FR",
      "instructor": "CA Jai Chawla",
      "pricingOptions": {
        "min": 9999.00,
        "max": 10999.00
      }
    },
    {
      "discountPercentage": 8,
      "title": "CA Final | IDT | English | For May & Nov 2025",
      "instructor": "CMA Tharun Raj",
      "language": "English",
      "applicableExams": ["May 2025", "Nov 2025"],
      "pricingOptions": {
        "min": 11800.00,
        "max": 12390.00
      }
    },
    {
      "discountPercentage": 8,
      "title": "CA Final | Indirect Tax IDT",
      "instructor": "CA Vishal Bhattad",
      "applicableExams": ["May 25", "Nov 25"],
      "pricingOptions": {
        "min": 11999.00,
        "max": 12999.00
      }
    },
    {
      "title": "CA FINAL || AFM",
      "instructor": "CA Sankalp Kanstiya",
      "currentPrice": 10999.00
    },
    {
      "discountPercentage": 50,
      "title": "CA FINAL || AFM",
      "instructor": "CA CMA Rajkiran",
      "pricingOptions": {
        "min": 6999.00,
        "max": 8999.00
      }
    },
    {
      "discountPercentage": 8,
      "title": "CA Final || Direct Tax DT",
      "instructor": "CA Vijay Sarda",
      "pricingOptions": {
        "min": 10999.00,
        "max": 11999.00
      }
    },
    {
      "discountPercentage": 36,
      "title": "New CA Final | Audit",
      "instructor": "CA Ravi Taori",
      "applicableExams": ["May 2025", "Nov 2025"],
      "pricingOptions": {
        "min": 6999.00,
        "max": 7999.00
      }
    }
  ]

  const galleryImages = [
    { id: 1, src: "https://via.placeholder.com/400x300?text=Classroom+Sessions", alt: "Classroom Sessions", caption: "Interactive Classroom Sessions" },
    { id: 2, src: "https://via.placeholder.com/400x300?text=Study+Materials", alt: "Study Materials", caption: "Comprehensive Study Materials" },
    { id: 3, src: "https://via.placeholder.com/400x300?text=Faculty+Guidance", alt: "Faculty Guidance", caption: "Expert Faculty Guidance" },
    { id: 4, src: "https://via.placeholder.com/400x300?text=Mock+Exams", alt: "Mock Exams", caption: "Rigorous Mock Exams" },
    { id: 5, src: "https://via.placeholder.com/400x300?text=Student+Achievements", alt: "Student Achievements", caption: "Our Student Achievements" },
    { id: 6, src: "https://via.placeholder.com/400x300?text=Campus+Facilities", alt: "Campus Facilities", caption: "State-of-the-art Campus Facilities" }
  ];



  return (
    <div className="max-w-7xl mx-auto p-5 font-sans text-gray-800">
      {/* Hero Section with Background Image */}
      <div className="relative rounded-xl overflow-hidden mb-12 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://via.placeholder.com/1600x900?text=CMA+Final+Course" 
            alt="CMA Final Course Background" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-85"></div>
        </div>
        <div className="relative z-10 py-24 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-white md:w-1/2">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">CMA Final Course</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">Take the final step toward becoming a distinguished Cost & Management Accountant with our comprehensive program</p>
                <div className="flex flex-wrap gap-4">
                  <a href='#contact-form'>
                    <button className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Request Callback
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center text-white p-4 rounded-lg bg-white/5">
                      <div className="text-4xl font-bold mb-2">85%</div>
                      <div className="text-sm opacity-80">Success Rate</div>
                    </div>
                    <div className="text-center text-white p-4 rounded-lg bg-white/5">
                      <div className="text-4xl font-bold mb-2">5000+</div>
                      <div className="text-sm opacity-80">Students</div>
                    </div>
                    <div className="text-center text-white p-4 rounded-lg bg-white/5">
                      <div className="text-4xl font-bold mb-2">25+</div>
                      <div className="text-sm opacity-80">Expert Faculty</div>
                    </div>
                    <div className="text-center text-white p-4 rounded-lg bg-white/5">
                      <div className="text-4xl font-bold mb-2">100+</div>
                      <div className="text-sm opacity-80">Rank Holders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-50 p-2 rounded-lg">
        {['overview', 'books', 'images'].map((tab) => (
          <button
            key={tab}
            className={`py-3 px-6 rounded-lg text-base font-medium transition-all duration-300 ${
              activeTab === tab 
              ? 'bg-primary text-white shadow-lg transform -translate-y-0.5' 
              : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(tab)}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="course-content">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div>
            {/* CMA Final Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3 text-primary">CMA Final</h2>
              <p className="text-xl text-gray-700 font-medium">Best CMA Final Institute in India</p>
              <p className="mt-4 text-gray-600">
                Welcome to Lakshya - Your Gateway to success in CMA Final.<br />
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8" id="contact-form">
              <h3 className="text-xl font-bold mb-4 text-primary">Get in Touch</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">City</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </form>
            </div>

            {/* CMA Final Subjects */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">CMA Final Subjects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start p-3 border-l-4 border-primary bg-gray-50">
                  <span className="text-primary font-medium">Paper 1:</span>
                  <span className="ml-2">Advanced Financial Management</span>
                </div>
                <div className="flex items-start p-3 border-l-4 border-primary bg-gray-50">
                  <span className="text-primary font-medium">Paper 2:</span>
                  <span className="ml-2">Corporate Financial Reporting</span>
                </div>
                <div className="flex items-start p-3 border-l-4 border-primary bg-gray-50">
                  <span className="text-primary font-medium">Paper 3:</span>
                  <span className="ml-2">Strategic Financial Management</span>
                </div>
                <div className="flex items-start p-3 border-l-4 border-primary bg-gray-50">
                  <span className="text-primary font-medium">Paper 4:</span>
                  <span className="ml-2">Business Strategy and Strategic Cost Management</span>
                </div>
              </div>

              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left">Sr. No</th>
                      <th className="border p-2 text-left">CMA Final Subjects</th>
                      <th className="border p-2 text-left">Marks</th>
                      <th className="border p-2 text-left">Types of Questions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Paper 1</td>
                      <td className="border p-2">Advanced Financial Management</td>
                      <td className="border p-2">100 Marks</td>
                      <td className="border p-2">Descriptive</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Paper 2</td>
                      <td className="border p-2">Corporate Financial Reporting</td>
                      <td className="border p-2">100 Marks</td>
                      <td className="border p-2">Descriptive</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Paper 3</td>
                      <td className="border p-2">Strategic Financial Management</td>
                      <td className="border p-2">100 Marks</td>
                      <td className="border p-2">Descriptive</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Paper 4</td>
                      <td className="border p-2">Business Strategy and Strategic Cost Management</td>
                      <td className="border p-2">100 Marks</td>
                      <td className="border p-2">Descriptive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Passing Criteria */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Passing Criteria for CMA Final:</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Candidates must score at least 40 marks in each subject.</li>
                <li>The total score for each group must be 150 marks or more to qualify.</li>
              </ul>
              <p className="text-gray-700">
                The table above provides a detailed overview of the subjects, groups, individual paper marks, and the exam pattern for the CMA Final course.
              </p>
            </div>

            {/* CMA Final Online-Pendrive Classes */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">CMA Final Online & Pendrive Classes – Available Across Hyderabad & India</h3>
              <p className="mb-4">
                Take your CMA career to the next level with Lakshya Edu's expertly designed CMA Final Online Classes. 
                Our program provides in-depth training, expert mentorship, and structured guidance to help you master key subjects, including:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced Financial Management</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Corporate Financial Reporting</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Strategic Financial Management</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Business Strategy & Strategic Cost Management</span>
                </li>
              </ul>
              <p className="mb-4">
                With experienced faculty, comprehensive study materials, and interactive learning sessions, we ensure you're fully equipped for success in your CMA Final exams.
              </p>
              <p className="font-medium">
                Join Lakshya Edu – Hyderabad's trusted institute for CMA Final preparation – and take the final step toward becoming a distinguished Cost & Management Accountant!
              </p>
            </div>

            {/* Why Choose Lakshya for CMA Final */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Why Choose Lakshya Edu for CMA Final?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Expert Faculty:</span>
                    <span className="ml-1">Learn from industry-leading professionals with vast experience in CMA training.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Personalized Guidance:</span>
                    <span className="ml-1">Get one-on-one mentorship and tailored study plans to maximize your success.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Comprehensive Courses:</span>
                    <span className="ml-1">Access in-depth study materials, live sessions, and recorded lectures for flexible learning.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Proven Success:</span>
                    <span className="ml-1">Join a community of successful CMA candidates who have excelled with our structured approach.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {/* Books section */}
        {activeTab === 'books' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">CA Final Study Material</h2>
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
                        CA Final
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
    </div>
  );
};

export default CMA_final;


