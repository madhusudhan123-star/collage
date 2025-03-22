import React, { useState } from 'react';
import { FileText, Briefcase, Shield, BarChart, Globe, ClipboardList } from "lucide-react"; // Icons for Subjects




const CA_final = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
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

  const facultyMembers = [
    { 
      id: 1,
      name: "Prof. Rajiv Kumar",
      expertise: "Financial Reporting & Accounting",
      image: "https://via.placeholder.com/200?text=Prof.+Kumar",
      experience: "15+ years"
    },
    {
      id: 2,
      name: "CA Priti Agarwal",
      expertise: "Advanced Auditing & Professional Ethics",
      image: "https://via.placeholder.com/200?text=CA+Agarwal",
      experience: "12+ years"
    },
    {
      id: 3,
      name: "Prof. Sanjay Verma",
      expertise: "Corporate & Economic Laws",
      image: "https://via.placeholder.com/200?text=Prof.+Verma",
      experience: "18+ years"
    }
  ];



  return (
    <div className=" overflow-x-hidden p-5 font-sans text-gray-800">
      {/* Hero Section with Background Image */}
      <div className="relative rounded-lg overflow-hidden mb-8 shadow-lg">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
            // Alternative options:
            // "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" - Students studying
            // "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80" - Modern classroom
            // "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&q=80" - Finance focused
            alt="CA Final Course Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-60"></div>
        </div>
        <div className="relative z-10 py-20 px-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best CA Final Institute in India </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">welcome to Lakshya – Your Gateway to Success in CA Final</p>
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
          <div className="flex justify-center mt-10 space-x-6">
            <div className="text-center">
              <div className=" rounded-full p-4 mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="block text-sm">Expert Faculty</span>
            </div>
            <div className="text-center">
              <div className=" rounded-full p-4 mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="block text-sm">Proven Results</span>
            </div>
            <div className="text-center">
              <div className=" rounded-full p-4 mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="block text-sm">Fast-track Learning</span>
            </div>
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
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">OverView</h2>
                <p className="text-gray-700">At Lakshya Edu, we provide expert-led CA Final coaching, covering essential subjects like Financial Reporting, Strategic Financial Management, Advanced Auditing, and Professional Ethics. Our curriculum also includes specialized elective papers tailored to your career goals.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">CA Final Passing Criteria – What You Need to Qualify</h2>
                <ul className="text-gray-700 list-disc list-inside mt-4">
                  <li>Minimum 40 marks in each subject.</li>
                  <li>Aggregate of at least 150 marks in each group.</li>
                </ul>
                <p className='text-primary'>This ensures a strong understanding of core subjects while maintaining high standards of professional knowledge.</p>
              </div>

              <div className="bg-white w-screen rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Why Choose Lakshya Edu for CA Final?</h2>
                <ul className='list-disc list-inside mt-4 text-gray-700'>
                  <li>Comprehensive Study Material – Access detailed color-coded notes and concept-based explanations.</li>
                  <li>Experienced Faculty – Learn from industry experts and top-ranked CAs.</li>
                  <li>Mock Tests & Assessments – Regular tests to track your progress & improve accuracy.</li>
                  <li>Flexible Learning Options – Choose between Live Online, Pen drive, and Classroom Coaching.</li>
                  <li>Personalized Mentorship – Get one-on-one guidance to resolve doubts and improve performance.</li>
                  <li>Strong Track Record – Join the ranks of our top achievers and successful CAs.</li>
                </ul>
                <p className='text-primary'>Take the final step towards your CA success! Join Lakshya Edu today and crack the CA Final with confidence.</p>
              </div>

            </div>
            <div className="bg-white w-screen rounded-lg p-6 shadow-sm mb-6">
                <div className="my-16 w-screen px-6 md:px-12 lg:px-24">
                  {/* Section Heading */}
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-blue-700 mb-3">
                      CA Final Course Structure & Subjects
                    </h2>
                  </div>
                </div>

                {/* CA Final Subjects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {[
                    { icon: FileText, title: "Financial Reporting", optional: false },
                    { icon: Briefcase, title: "Strategic Financial Management", optional: false },
                    { icon: Shield, title: "Advanced Auditing & Professional Ethics", optional: false },
                    { icon: BarChart, title: "Corporate & Economic Laws", optional: false },
                    { icon: BarChart, title: "Strategic Cost Management & Performance Evaluation", optional: false },
                    { icon: ClipboardList, title: "Multi-Disciplinary Case Study", optional: false },
                    { icon: Globe, title: "Risk Management (Optional)", optional: true },
                    { icon: Globe, title: "Financial Services & Capital Markets (Optional)", optional: true },
                    { icon: Globe, title: "International Taxation (Optional)", optional: true },
                    { icon: Globe, title: "Economic Laws (Optional)", optional: true },
                    { icon: Globe, title: "Global Financial Reporting Standards (Optional)", optional: true }
                  ].map(({ icon: Icon, title, optional }, index) => (
                    <div key={index} className={`p-6 rounded-lg shadow-md border-l-4 ${optional ? "border-yellow-500 bg-yellow-50" : "border-blue-600 bg-blue-50"} flex items-start`}>
                      <Icon className={`w-8 h-8 mr-4 ${optional ? "text-yellow-700" : "text-blue-700"}`} />
                      <h3 className={`text-lg font-semibold ${optional ? "text-yellow-700" : "text-blue-700"}`}>{title}</h3>
                    </div>
                  ))}
                </div>

                {/* Course Structure Table */}
                <div className="">
                  <table className=" w-[90vw] bg-white border border-gray-300 shadow-lg">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="py-3 px-6 text-left">Paper</th>
                        <th className="py-3 px-6 text-left">Subject</th>
                        <th className="py-3 px-6 text-left">Marks</th>
                        <th className="py-3 px-6 text-left">Type of Questions</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      {[
                        ["Paper 1", "Financial Reporting", "100", "Subjective"],
                        ["Paper 2", "Strategic Financial Management", "100", "Subjective"],
                        ["Paper 3", "Advanced Auditing & Professional Ethics", "100", "Subjective"],
                        ["Paper 4", "Corporate & Economic Laws", "100", "Subjective"],
                        ["Paper 5", "Strategic Cost Management & Performance Evaluation", "100", "Subjective"],
                        ["Paper 6", "Elective Paper (Choose One)", "100", "Subjective"],
                        ["6A", "Risk Management", "100", "Subjective"],
                        ["6B", "Financial Services & Capital Markets", "100", "Subjective"],
                        ["6C", "International Taxation", "100", "Subjective"],
                        ["6D", "Economic Laws", "100", "Subjective"],
                        ["6E", "Global Financial Reporting Standards", "100", "Subjective"],
                        ["6F", "Multi-Disciplinary Case Study", "100", "Subjective"]
                      ].map(([paper, subject, marks, type], index) => (
                        <tr key={index} className={`${index % 2 === 0 ? "bg-primary/5" : "bg-white"} border-b hover:bg-primary/10 transition-colors`}>
                          <td className="py-3 px-6">{paper}</td>
                          <td className="py-3 px-6">{subject}</td>
                          <td className="py-3 px-6">{marks}</td>
                          <td className="py-3 px-6">{type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
        )}
        {/* Books Section */}
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


            {/* CTA Banner */}
            <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Bundle & Save!</h3>
                  <p className="mb-4">Get all CA Final study materials and save up to 35%. Complete coverage for all subjects.</p>
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

            {/* Virtual tour section */}
            <div className="mt-12 bg-bg-light rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Take a Virtual Tour</h3>
                  <p className="text-gray-700 mb-4">Experience our campus facilities and classrooms through our interactive virtual tour.</p>
                  <button className="flex items-center bg-primary hover:bg-primary-dark text-white rounded-lg px-5 py-3 font-medium transition-all">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Start Virtual Tour
                  </button>
                </div>
                <div className="md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img src="https://via.placeholder.com/800x450?text=Virtual+Tour" alt="Virtual Tour" className="w-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4">
                        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default CA_final;




