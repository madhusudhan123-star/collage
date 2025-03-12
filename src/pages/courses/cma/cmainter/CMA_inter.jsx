import React, { useState } from 'react';
// Remove CSS import since we'll use Tailwind classes

const CMA_inter = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const subjects = {
    "Paper_1": "Financial Reporting",
    "Paper_2": "Strategic Financial Management",
    "Paper_3": "Advanced Auditing and Professional Ethics",
    "Paper_4": "Corporate and Economic Laws",
    "Paper_5": "Strategic Cost Management and Performance Evaluation",
    "Paper_6A": "Risk Management (Optional)",
    "Paper_6B": "Financial Services and Capital Markets (Optional)",
    "Paper_6C": "International Taxation (Optional)",
    "Paper_6D": "Economic Laws (Optional)",
    "Paper_6E": "Global Financial Reporting Standards (Optional)",
    "Paper_6F": "Multi-Disciplinary Case Study"
  };

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

  const courseStructure = [
    { "Paper": "Financial Reporting", "Marks": 100, "Type_of_Questions": "Subjective" },
    { "Paper": "Strategic Financial Management", "Marks": 100, "Type_of_Questions": "Subjective" },
    { "Paper": "Advanced Auditing and Professional Ethics", "Marks": 100, "Type_of_Questions": "Subjective" },
    { "Paper": "Corporate and Economic Laws", "Marks": 100, "Type_of_Questions": "Subjective" },
    { "Paper": "Strategic Cost Management and Performance Evaluation", "Marks": 100, "Type_of_Questions": "Subjective" },
    { "Paper": "Risk Management (Optional)", "Marks": 100, "Type_of_Questions": "Subjective" },
    { "Paper": "Financial Services and Capital Markets (Optional)", "Marks": 100, "Type_of_Questions": "Subjective" },
    { "Paper": "International Taxation (Optional)", "Marks": 100, "Type_of_Questions": "Subjective" },
    { "Paper": "Economic Laws (Optional)", "Marks": 100, "Type_of_Questions": "Subjective" },
    { "Paper": "Global Financial Reporting Standards (Optional)", "Marks": 100, "Type_of_Questions": "Subjective" },
    { "Paper": "Multi-Disciplinary Case Study", "Marks": 100, "Type_of_Questions": "Subjective" }
  ];

  const passingCriteria = {
    "Minimum_Marks_Per_Subject": 40,
    "Total_Minimum_Marks_Per_Group": 150
  };

  const faqs = {
    "What_are_the_key_subjects_included_in_the_new_syllabus?": "The new syllabus includes mandatory subjects such as Financial Reporting, Strategic Financial Management, Advanced Auditing, Corporate and Economic Laws, and more.",
    "What_is_the_duration_of_the_CA_Final_2024_examination?": "Please contact our counselors for updated information.",
    "What_will_be_the_examination_mode?": "Please contact our counselors for updated information.",
    "What_will_be_the_marking_scheme_for_the_CA_Final_Exam?": "Please contact our counselors for updated information.",
    "Are_CA_final_classes_online_or_offline?": "Please contact our counselors for updated information.",
    "Is_CA_final_tough?": "Please contact our counselors for updated information.",
    "What_is_the_age_limit_for_CA?": "Please contact our counselors for updated information."
  };

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

  const demoVideos = [
    {
      title: "Financial Reporting Concepts",
      instructor: "Prof. Rajiv Kumar",
      thumbnail: "https://via.placeholder.com/600x400?text=Financial+Reporting",
      duration: "15:30",
      description: "Learn key concepts of Financial Reporting with Prof. Rajiv Kumar"
    },
    {
      title: "Advanced Auditing Principles",
      instructor: "CA Priti Agarwal",
      thumbnail: "https://via.placeholder.com/600x400?text=Advanced+Auditing",
      duration: "12:45",
      description: "Master Auditing concepts with CA Priti Agarwal"
    },
    {
      title: "Corporate Laws Explained",
      instructor: "Prof. Sanjay Verma",
      thumbnail: "https://via.placeholder.com/600x400?text=Corporate+Laws",
      duration: "18:20",
      description: "Understanding Corporate Laws with Prof. Sanjay Verma"
    },
    {
      title: "Strategic Financial Management",
      instructor: "CA Rahul Mehta",
      thumbnail: "https://via.placeholder.com/600x400?text=Financial+Management",
      duration: "20:15",
      description: "Deep dive into Strategic Financial Management concepts"
    },
    {
      title: "Cost Management Strategies",
      instructor: "CA Sneha Patel",
      thumbnail: "https://via.placeholder.com/600x400?text=Cost+Management",
      duration: "16:45",
      description: "Learn effective cost management techniques"
    },
    {
      title: "Professional Ethics",
      instructor: "Prof. Amit Singh",
      thumbnail: "https://via.placeholder.com/600x400?text=Professional+Ethics",
      duration: "14:30",
      description: "Understanding professional ethics in CA practice"
    },
    {
      title: "International Taxation",
      instructor: "CA Deepak Kumar",
      thumbnail: "https://via.placeholder.com/600x400?text=International+Taxation",
      duration: "22:10",
      description: "Comprehensive guide to international taxation"
    },
    {
      title: "Economic Laws Overview",
      instructor: "Prof. Neha Sharma",
      thumbnail: "https://via.placeholder.com/600x400?text=Economic+Laws",
      duration: "19:45",
      description: "Complete overview of economic laws"
    },
    {
      title: "Risk Management Essentials",
      instructor: "CA Rajesh Gupta",
      thumbnail: "https://via.placeholder.com/600x400?text=Risk+Management",
      duration: "17:30",
      description: "Essential concepts in risk management"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-5 font-sans text-gray-800">
      {/* Hero Section with Background Image */}
      <div className="relative rounded-xl overflow-hidden mb-12 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://via.placeholder.com/1600x900?text=CA+Intermediate+Course" 
            alt="CA Intermediate Course Background" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-85"></div>
        </div>
        <div className="relative z-10 py-24 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-white md:w-1/2">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">CA Intermediate Course</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">Take your first step towards becoming a Chartered Accountant with our comprehensive CA Intermediate program</p>
                <div className="flex flex-wrap gap-4">
                  <a href='/request'>
                    <button className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Request Callback
                    </button>
                  </a>
                  {/* <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Learn More
                  </button> */}
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

      {/* Navigation Tabs - Updated design */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-50 p-2 rounded-lg">
        {['overview', 'subjects', 'books', 'structure', 'images', 'faqs'].map((tab) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Program Details</h2>
              <div className="mb-4 flex items-start">
                <div className="bg-accent p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg text-primary mb-1">Location</h3>
                  <p>Hyderabad & India</p>
                </div>
              </div>
              <div className="mb-4 flex items-start">
                <div className="bg-accent p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg text-primary mb-1">Duration</h3>
                  <p>6-8 months intensive program</p>
                </div>
              </div>
              <p className="text-gray-700">Our program covers critical subjects including Financial Reporting, Strategic Financial Management, Advanced Auditing, and a range of specialized optional papers. With a focus on in-depth knowledge and professional ethics, our CA Final course is designed to ensure you are fully prepared for the highest level of CA exams.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Why Choose Lakshya?</h2>
              <p className="text-gray-700">Join us and secure your future as a successful Chartered Accountant. Our expert faculty and interactive sessions ensure a robust foundation for your CA Final journey. At Lakshya, we don't just teach; we empower you to excel. Choose the best – Choose Lakshya for your CA Final preparation. Hurry! Limited seats available. Your Success, Our Priority!</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Passing Criteria</h2>
              <div className="mb-5">
                <h3 className="text-lg mb-1 text-gray-600">Minimum Marks Per Subject</h3>
                <p className="text-3xl font-bold text-secondary">{passingCriteria.Minimum_Marks_Per_Subject}%</p>
              </div>
              <div>
                <h3 className="text-lg mb-1 text-gray-600">Total Minimum Marks Per Group</h3>
                <p className="text-3xl font-bold text-secondary">{passingCriteria.Total_Minimum_Marks_Per_Group} marks</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Join Face-to-Face Batches</h2>
              <p className="text-gray-700 mb-4">Join our face-to-face batches to immerse yourself in a comprehensive learning experience.</p>
              <a href="/request">
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded transition-all duration-300">Register Now</button>
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-lg p-6 shadow-md col-span-1 md:col-span-2 mt-6">
              <h2 className="text-2xl font-bold mb-6 relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <img src="https://via.placeholder.com/80?text=Trophy" alt="Success Rate" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">85%</p>
                  <p className="text-sm opacity-80">Success Rate</p>
                </div>
                <div className="text-center">
                  <img src="https://via.placeholder.com/80?text=Students" alt="Students Trained" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">5000+</p>
                  <p className="text-sm opacity-80">Students Trained</p>
                </div>
                <div className="text-center">
                  <img src="https://via.placeholder.com/80?text=Teacher" alt="Expert Faculty" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">25+</p>
                  <p className="text-sm opacity-80">Expert Faculty</p>
                </div>
                <div className="text-center">
                  <img src="https://via.placeholder.com/80?text=Award" alt="Rank Holders" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-sm opacity-80">Rank Holders</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Subjects Section */}
        {activeTab === 'subjects' && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-primary">CA Final Subjects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
              {Object.entries(subjects).map(([key, value]) => (
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-md" key={key}>
                  <h3 className="text-lg text-primary mb-2">{key.replace('_', ' ')}</h3>
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
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
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

        {/* Course Structure */}
        {activeTab === 'structure' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Course Structure</h2>
            <div className="overflow-x-auto mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left text-primary font-semibold">Paper</th>
                    <th className="py-4 px-6 text-left text-primary font-semibold">Marks</th>
                    <th className="py-4 px-6 text-left text-primary font-semibold">Type of Questions</th>
                  </tr>
                </thead>
                <tbody>
                  {courseStructure.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 border-b border-gray-100">
                      <td className="py-4 px-6">{item.Paper}</td>
                      <td className="py-4 px-6">{item.Marks}</td>
                      <td className="py-4 px-6">{item.Type_of_Questions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 012 0v4a1 1 0 01-.293.707l-2.828 2.829a1 1 0 01-1.415-1.415L9 9.586V6z" clipRule="evenodd" />
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

        {/* FAQs Section */}
        {activeTab === 'faqs' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-4">
              {Object.entries(faqs).map(([question, answer], index) => (
                <div className="rounded-lg overflow-hidden shadow-sm" key={index}>
                  <div 
                    className={`p-5 flex justify-between items-center cursor-pointer ${activeAccordion === index ? 'bg-gray-50' : 'bg-white'}`}
                    onClick={() => toggleAccordion(index)}>
                    <h3 className="text-base font-medium text-gray-800">{question.replace(/_/g, ' ')}</h3>
                    <span className="text-2xl text-primary">
                      {activeAccordion === index ? '−' : '+'}
                    </span>
                  </div>
                  {activeAccordion === index && (
                    <div className="p-5 bg-white border-t border-gray-100">
                      <p className="text-gray-700">{answer || "Please contact our counselors for updated information."}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Faculty Section */}
      <div className="my-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-3">Meet Our Expert Faculty</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Learn from the best minds in the industry with decades of experience in teaching and professional practice</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyMembers.map(faculty => (
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" key={faculty.id}>
              <div className="h-64 overflow-hidden">
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{faculty.name}</h3>
                <p className="text-gray-500 mb-2">{faculty.expertise}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {faculty.experience} of teaching experience
                </div>
              </div>
            </div>
          ))}
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
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

      {/* Demo Video Section */}
      <div className="my-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-3">Watch Our Demo Classes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Get a glimpse of our teaching methodology and expert faculty through our demo lectures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Show either first 3 videos or all videos based on showAllVideos state */}
          {(showAllVideos ? demoVideos : demoVideos.slice(0, 3)).map((video, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group">
                  <button className="bg-white/90 hover:bg-white text-primary rounded-full p-3 transition-transform hover:scale-110 group-hover:scale-110">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: {video.duration} mins</span>
                  <span className="text-sm font-medium text-primary">Free Preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Updated View More Videos CTA */}
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

export default CMA_inter;