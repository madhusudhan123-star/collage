import React, { useState } from 'react';
import { CheckCircle, BookOpen } from "lucide-react";

const CA_found = () => {
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
      title: "DEMO LEC : 01 || CA FOUNDATION ACCOUNTS || BY CA CMA GOPINADH SIR ( AIR 23 )",
      instructor: "Lakshya Faculty",
      thumbnail: "https://img.youtube.com/vi/q5M6edvT170/maxresdefault.jpg",
      videoUrl: "https://youtu.be/q5M6edvT170",
    },
    {
      title: "DEMO LEC : 01 || CA FOUNDATION LAW || BY CA DHAMODHAR SIR",
      instructor: "Prof. Rajiv Kumar",
      thumbnail: "https://img.youtube.com/vi/fy54UHOBu4g/maxresdefault.jpg",
      videoUrl: "https://youtu.be/fy54UHOBu4g",
    },
    {
      title: "DEMO LEC : 01 || CA FOUNDATION QT || BY GANESH SIR M.Sc",
      instructor: "CA Sneha Patel",
      thumbnail: "https://img.youtube.com/vi/iPRSJ4fudHM/maxresdefault.jpg",
      videoUrl: "https://youtu.be/iPRSJ4fudHM",
    },
    {
      title: "DEMO LEC : 01 || CA FOUNDATION ECONOMICS || BY CA RAJESH NANDA SIR",
      instructor: "CMA Priti Agarwal",
      thumbnail: "https://img.youtube.com/vi/7qez3diSEkA/maxresdefault.jpg",
      videoUrl: "https://youtu.be/7qez3diSEkA",
    }
  ];


  return (
    <div className="max-w-7xl mx-auto p-5 font-sans text-gray-800">
      {/* Hero Section with Background Image */}
      <div className="relative rounded-lg overflow-hidden mb-8 shadow-lg">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="CA Foundation Course Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-50"></div>
        </div>
        <div className="relative z-10 py-20 px-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best CA Foundation institute in india</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Welcome to Lakshya - Your Gateway to success in CA Foundation.</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">OverView</h2>
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
              <p className="text-gray-700">The CA Foundation exam is the first step toward becoming a Chartered Accountant, testing students on fundamental concepts in accounting, law, mathematics, and economics. Completing this level is mandatory before moving to the next stage of the CA journey.</p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Conducted twice a year, offering flexibility for aspirants.</li>
                <li>Open to students who meet the eligibility criteria and register on time.</li>
                <li>Candidates must clear this level before progressing to the next stage.</li>
                <li>To qualify, students need at least 40% in each subject and an overall score of 50%.</li>
                <li>The exam consists of multiple-choice and descriptive questions, with a penalty of 0.25 marks for incorrect answers in objective-type sections.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Why Choose Lakshya Edu for CA Foundation Institute in Hyderabad?</h2>
              <p className="text-gray-700">At Lakshya Edu, we are committed to helping aspiring Chartered Accountants achieve their dreams with the best CA coaching classes in Hyderabad.</p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Comprehensive Syllabus Coverage: Complete preparation for all CA Foundation subjects as per ICAI guidelines.</li>
                <li>Expert Faculty & Mentoring: Learn from experienced CA professionals with personalized guidance.</li>
                <li>Regular Revision & Mock Tests: Practice with previous exam papers, mock tests, and study hours to improve accuracy and speed.</li>
                <li>Flexible Study Plans: Weekend and weekday offline classes to suit different learning preferences.</li>
                <li>Top-Ranked CA Coaching Institute: Proven success with high pass rates and top-ranking students.</li>
              </ul>
              <p>Our structured approach includes organized study plans, revision strategies, and continuous exam support, ensuring students achieve top scores in the CA Foundation exam.
              Start your journey towards becoming a Chartered Accountant with Lakshya Edu – Hyderabad’s leading CA coaching institute.</p>

            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">CA Foundation Exam</h2>
              <table className="w-full border-collapse border border-red-500">
                <tbody>
                  {[
                    ["Exam Name", "Chartered Accountancy (CA) exam"],
                    ["Conducted By", "ICAI (Institute of Chartered Accountants of India)"],
                    ["Mode of Exam", "Pen & Paper / Computer-Based"],
                    ["Total Papers", "Four (Accounting, Business Laws, Math, Economics)"],
                    ["Exam Frequency", "May, September, November"],
                    ["Difficulty Level", "Moderate to Tough"],
                    ["Attempt Limit", "No restriction, multiple attempts allowed"],
                  ].map(([label, value], index) => (
                    <tr key={index} className="border-b border-red-400">
                      <td className="p-3 font-semibold text-red-700 bg-red-200">{label}</td>
                      <td className="p-3 text-gray-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">CA Foundation Exam Pattern</h2>
              <table className="w-full border-collapse border border-red-500">
                <tbody>
                  {[
                    ["Exam Name", "CA Foundation (Previously known as CPT - Common Proficiency Test)"],
                    ["Conducting Body", "The Institute of Chartered Accountants of India (ICAI)"],
                    ["Mode of Exam", "Offline"],
                    ["Frequency", "Conducted twice a year"],
                    ["Exam Level", "National-Level Exam"],
                    ["Difficulty Level", "Easy to Moderate"],
                    ["Total Marks", "400 Marks (Each paper carries 100 marks)"],
                    ["Medium of Exam", "English / Hindi (Except for Section B of Paper 2, which is in English only)"],
                  ].map(([label, value], index) => (
                    <tr key={index} className="border-b border-red-400">
                      <td className="p-3 font-semibold text-red-700 bg-red-200">{label}</td>
                      <td className="p-3 text-gray-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Join Face-to-Face Batches</h2>
              <table className="w-[90vw] border-collapse border border-red-500">
                <thead>
                  <tr className="bg-red-600 text-white">
                    {["Paper", "Subject", "Duration", "Type", "Marking Scheme"].map((header, index) => (
                      <th key={index} className="p-3 border border-red-500">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Paper 1", "Accounting", "3 Hours", "Subjective", "No Negative Marking"],
                    ["Paper 2", "Business Laws", "3 Hours", "Subjective", "No Negative Marking"],
                    ["Paper 3", 
                      "Quantitative Aptitude:\n• Part A: Business Mathematics\n• Part B: Logical Reasoning\n• Part C: Statistics", 
                      "2 Hours", "Objective", "0.25 marks deducted per wrong answer"],
                    ["Paper 4", "Business Economics", "2 Hours", "Objective", "0.25 marks deducted per wrong answer"],
                  ].map(([paper, subject, duration, type, marking], index) => (
                    <tr key={index} className="border-b border-red-400">
                      <td className="p-3 font-semibold text-red-700 bg-red-200">{paper}</td>
                      <td className="p-3 text-gray-800 whitespace-pre-line">{subject}</td>
                      <td className="p-3 text-gray-800">{duration}</td>
                      <td className="p-3 text-gray-800">{type}</td>
                      <td className="p-3 text-gray-800">{marking}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-lg p-6 shadow-md col-span-1 md:col-span-2 mt-6">
              <h2 className="text-2xl font-bold mb-6 relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Preparation Tips for Success: Follow these tips to Boost your preparation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="">
                  <img src="data:image/jpeg;base64,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" alt="Success Rate" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">Understand the Syllabus Thoroughly</p>
                  <p className="text-sm opacity-80">Review the full syllabus and identify key topics.Focus on high-weightage topics to optimize study time.</p>
                </div>
                <div className="">
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSERUTExMVFhUXGBkWGBgWFxgYGxsXGBcYFxUYFxUdICggGBomGxgXIjIhJSkrLy4uFx8zODMsNygtLisBCgoKDg0OGxAQGy8lICYvLS0yNTItLy8yLTItLS0tLzAvKy0tLS8vLS0tLy8tLS0vLS0tLS0tLS0tLS0tLS0tLf/AABEIAKYBMAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEAQAAEDAgQDBgQEBAQFBQAAAAEAAhEDIQQSMUEFUXEGEyJhgZEyobHBQlLR8GJy4fEjJDOCBxRDkrIVU4Oi0v/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQIDBgEH/8QAOhEAAgEDAQUGBQMCBgMBAQAAAAECAwQRIQUSMUFRE2FxgbHwIpGhwdEGMuEUIxUzNEJS8SRysmIW/9oADAMBAAIRAxEAPwC7VUdiEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAeID1AEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAAJXqWTGUlFZZNpYGBLzHlutih1Is67ekSEAtZLXAkYjBOY2XQDMZZ8QtIzN/D0N164tcTXCtGbxH58vLqae7MTFk3XjJ72sN/czqYrE2BAEAQBAEAQBAEAQF9wnhVKtQ/xGlpzOArNIaWwAYdOreQMidhYqZR3ez+LgUd/OcLhODw8L7/ADK/inBq2H8Th3lLUVKYsBzey5b1EjzGiwnb84am+32nF/DV0fXl/HoQGuBEi4UfBaJprKPA8EkAgkXI3AOhjktjozUVPGhHV3SdV0s4kjJaiSEAQBAEAQBAEAQBAEAQBAEAQBAEAQBASMA4hxI/KVsp8SPcftRPbEkudADS4uImzQXGBvYaLY2kssia8EtXp8yurYwsaHMDqLHTFRwms+Ne7GjBcXBGvxFQ51WllfCuvN+HT3qT4UlOW7J77XJftXj196FpWwFOlQYGNJL3BxLjJJLJJdtaeQ+6n0aEIwWPEpLi9rSqSWcY006JmOHwFSs0gAC8Zjpblz6LbUg5RwjTbV40qm/LvNPG+HCgWNBJJbJJ5zFhsFFq01DCLmzuXXUpNY1K1aSYEAQBAEAQBAEAQF/QpZuG1LFwbUzEAwYblJI6a+iyrQ3rZ6Z1Kqvh3kU3jK/Jh2Z4kRUNPO8UwwVA6RYsytex1ODDTMkjSxtMmba1Y1LeCj/tST8uqK25tY0Jz3p/G3ndxph80+ffwx0IvEaDHVqpD6bBnAYCQ1ri4FwAd8I0OtjOq0ulKpOW7yLJX1G1o0u1eFLQ5PtBhclYlwdTqNaDmEg2HLceYj1VnaNqmosoNpOMrmUovpqvA38HxlR8h4BESKjdHXggjn7aaKNfUKcVvR0fQstkXlac+ym8rHEs1WHRBAEAQBAEAQBAEAQBAEAQBAEAQBAEBso1MpJ8iPdZxeDVVg5pJEzg9XNXbmM+F9v/AI3bLZSblPuIl3GNOg8cdPVFxxClR8D68S3MWg3cZy3DN/hFzYLdVjTypT5cCstXXe9Ci8Zxnyzz8+Rrdi++qUoaAzMJDrkzAuemwW2LykyPODhJx6G7jUGlXdVaclPw0WixL8sAt5uL3ZQPLzW6jGM6sXF5a49Fweq7lqaLl7tvKCf7k08cddML3qQO1AINIO+IUxO99773UK7/AH6F3sdNUmn3ehRvdAkzA5CfkFqpUJ1OC06ku5vqNDST16c/fiO+YG5swjY6z05q0pWtOCy9Wc1dbUr1nhPdXRfdmqhiA+YEC0TuDN/LRQbulCDTjzLrZN1VrwkqjzjGvj1NyhluEAQBAEAQG/C4x9MjKbAh0SYkb20PTpos4VJR4GivbU6y+NefM6XguKwjy4BncVHxMOIv/A7Rt9rT5rfQ7KLbisNlVe29xhbz3kuHVeJCr4GnVqYllRuYZ2a2MgOuCIg9PottGbjUk0RtoW9Ova0oTWVr9iiwtAvqOww/zFFjyxzKo8dNubIX03j8PkPVu6spYxvPRnJ28qkarpU3vRTw0+KWcZXd7wQuGcMqtYSxgcGiC2bmXEywmx6EjVVN/fUYuMajxvcHy0xxxrz4rJ09hGpb1HJx4aNc9emfTTxN9GsHSBqDBaRDgeTmm4Ufdaw+T4Pin4M6OnXp1oNwf5XiuRZ1cCDdh/2lZuCZphWlHjqQXtIMEQVqawS4yUllHi8MggCAIAgCAIAgCAIAgCAIAgPHGBJQGrC187ZLHsP5XgAwQHNMAmJBB53WU47rwaqVWNRZRnhMQ6nUztMOEwYB1Bbv5Fb4PCRCrxUm0zBlQueXOJJNySZJ01KwqcDbbJJ4RZcMqnvqUmwe3pYryE25LJ7WowjSm4rVpltxXidHvM7GipUEAOJORpGhDdCfP5qRFrfborV8ehTKxhD+7cvdX1+XtlBxHF1XHO45+YJi38Ow6KVTtNd6pqaK+1Fu9nbrdXXm/wAfPJXYjiogZAb7kdNBub/3Uve6FTjLyyre6S7zdvZ223zPRYmRZcIFjYCzdDOx1/ekKuvv9vmdDsLhPy+5YKAX4QBAEAQBAZUWB1SmCJBqMBHPxBbaP7/mQdpPFvLy9UWuJ4H/AO04OP5CdeWV2/r7r1xjLVe/ftFfb7RqU/hqa+v8+9SNw/Hmi5wczMDAcDIcCJiDzvukJum9Swq0qd3TTi/D/ovuG06D6jq1KM7hDgLOjMCczdDp8QlTY1t+OMlBU2f/AE9XtHHDemVwf8/UreztRgY8OiSRlEgEw1xIb528+irXZ07mDU1w580W+06rpzjjv+x5UoUMWAdKgFiPDUb0P4h5XHMKq7K7sW3Re9DmuPzj91r4EKNSFR54S6/z9noaRh6rDD4e3ao3wnf4mbHS7TfkFYWu0KNzovhl04ryf2f1JNOVRPdnr3/lfj5Im0MDSqMJquLXF4a2oNvACA4aEaqb/RqunJNqS5r8czGtfytpx6MruJ8Hq0LuEs2e249fy+qhTdSjpVWnVcPPp6Fnb3dKv+169PfEgLYmmsokhAEAQBAEAQBAEAQBAEBobXJqFgpvIaAXVLZBOjZJknoDEhZ7nw7xoddKr2WHnryK/tNLqJptaXZgS4AkeBl3XBG8D1KQk4yTRsnBTi4s3cExTarXvboX6Ezl8LAG9AIA8oWLk3xMaNNU47pJ7oknYStu+kjU6LlJvkbmMAWtyb4m+MIx4GSxMyox2OfTrQ02IEg6an2KtrJ4p+Zyu2Vm48l9zTXxbnm5EQTew02G+v8AbRSm8lQlg0R8Ovpc/h0G33vZeHp678Q89DraNTt+sXQE3A1crTEE+EeETEz4n6WGpUG8WXFeP2LzZE3GM91Zbxj6/Tqb+D4t1Rrg4guY9zCQC0GDax8voodWG61jg1kubKvKrTblxTa4YJ61EsIAgCAIDFzgNTFxF4vtB5rKKk38JhU3HHE8YfUs8HxZzYDwXNG4gPg630d6x1WdOUUt3GPfQqrnZmXvUn5P7P8APzIFarme91yC6ZM8hzSrje0Jez4ShQSksPX1PGOIIIJBGhFj7rXkmNJrDLzs5RDmVLAlrmOEgGCA7K6+kGLqVbNpPBT7WWXDPf8AYhVXMeYqtNGr+caE7Ej7/NevD46MqCXxV7g6tFXM0PJDXNh7T3kEAiM1O9pEi1ztoqUbff7WEcTWj7+Wq+5Z2VGsqiU9YtZXdpnj9mSeE0O+w1QnVr5t5MANunT0U6yqYZG2vRw0u7JYYHGVKIa2qM1F1g/WAbAHy6+kqZUpxnnHHoVNOpKnjPDqa+I9m6VUF9BwadwLsJ12+H09lS1bDdeaXwvpyfly8i+ttqSWk/iXXn/Jxy1F8eoAgCAIAgCAIAgCAIeN4Kenx94imWCHVAMzZECYhwmCORG8K6rWMIQe7yz9DibLb1avcQc0tWlw5N4x9eJ5xDEFza4aDma3L/tB8UDnBPyUWnbKHZ1G9H7R1E7hydSC5e2b+A0m9y14bDnAAm9w0uymNN9ei03qSrNL3obbTWmn74lkopKCAIDn+M/6w6N+pVrZ/wCX5nK7Z/1HkvuYTfUaakfw7DY8vTVSuRUnkaW1jQ3OkTy8vqF6D0/iFx4hbXlq7X97rwEnWg+8QyRFriTpudLqJOKVxB8cs6f9Px3p6rRNefHPjg97MvcaTnOMk1HX3i2p3Wq/x2uFyRb3vw3CcOWmEtEvRYLlQDI8QFfiuL02aeI+Wn/cp1LZ9Wer0XvkV1fadGnpH4n3cPn/ANkKjxapVdlZDQBLiBmgDeTbyHMrdcW9vaU9+o89MvGX749FqQobQuLie5T08s4+ZLdw6u4g96Qwxcy03dHwj9VnZyp1aW+6Si/n5kG/vKlCsqXaN6Z009CBxTh1ai9rMQ7KHfC9xOQmLCToT5281LVSEY70I69y1/nwWvcaHUnPSUn5s18E4o81hS1Yc1yZ+EHQ/uxUS8owdLtMYen17iy2ZdVXUVKTytfaLbHcVbTeGRLtSJi3lzWqz2bO4g55wuXib9pbahZVFT3XJ8Xywvu+76knC4ptQS09RuOoUa4tatu8TXnyZNs7+hdx3qT8VzXivvwJVGq5hDmktI0IMFR02tUS5RUliSyi3p8Up1hkxDR/O0fNzRp1b7KRGsnpMqbjZnOl8vw/ybeN4CGvrMe19N5cQRsX1GuiPe4jS4KwqU8Zkno/uzda18yVKSaksfRNe/oSux2Npta+m5wa5zpE72AsdJ8lst5pLDNO06M5NTispI6I+Ci6dmuN76SbgqZKWPiKRYUdSPwplLKX0jAcJLQRE3EgbaFZTm5RWTGlGKeYnzsKnO1PUAQBAEAQBAEAQBAYvcAJJgea9SbeEYylGKzJ4RyleiRUFIOaX5mwQZEkBzSTGlwumnUhKm5PgfMKNtWhcxpR/cmsdMnS1qjWVCHRmiCRcGCbT+vNc43Ld3M6ZPpLjGTUmuXtEg1muY0g2Ay8oI0HsQtZlTaTa8zf/wAvLA9pzAidNlCp3ilPdawexqqRoU02hAc/xn/WHRv1KtbP/L8zldsf6nyX3MAb6keHlJ+Ee37sFK5FUAyY089uWp5/pusZTjBZkzZSozqy3YLPvmSsPhC6YEAmfL23UCpeN6R09S/ttkQjh1NX05fybeKYIf8AL1Iucsz0uY9AtNCeKqb6ltKO7D4dMFf2KnJWGweI/wCwT9lI2h+6Ph9zyhKUk3J5Ohq1A0FzjAChQhKclGPFmypUjTi5SeiOY4rxYvto3ZvPzcr+2s40lni+v4OZvL+dZ4Wken5KtrH1DYE/QKTUqwprMngh06VSq8QWSw/5urhKD4aJqOb4tcuWT6/vmqe4pUb6tCbbxDOnXgX2y7WVKq41MPKz9vudtwfE95SpOrtBNVjXeF1mzebweW9vNS5xcY4gc5Vp0v6yak29Wlnx4eXpyM+NUG4hrKVR/fU2g5SRDmk5bZxYkAdb3Sjlake6quCW6+Zz2G7OMpPmm9xIvcib2j6rTd9rJNLVfUstmXttvRdTMJdXwf48/mVfajh1Qv71oLmhoBI1ETcgfZS9kXdKNPsZPDyzLb9hWqVO3gsxwlpx+XQg8LxrpkHxN35jzVxWowqRcJrRnM0a9S3qKrTeGveH3M7PDVg9gcNx/cLiq9F0ajpvkfS7S5jc0Y1Y818uq8mbVpJJk2oQC0EwdRNjGkhe55Hjim841MV4eltw/j1Sm3I//EpkQWuN4NiA7XTb6LdCtKOj1RAudn0qyfJ++KLns7RpZy6jVOQgzSfZzddPzCTrfqpMJ5/a9On4Oe/w+drJ72ccunvx1OPCgHYHqAIAgCAIAgCAIAgInEsMajMoIBkG6l2VxGhV35LOhV7XsZ3tt2MGk8p693gc9wxv+aa0/hc+erWnT3VxfV1UtnKPd9Wjj9j2sqG04058U2tO5S/B0OIweYyDErncn0Fxye4fB5TJM/Tr1TIUMGGAx7qDix128uXm39FTVaOuOZA1pvdZcd0yoM1NwPl/TYrbRu5Q+GoSoViM9hGohWMJxmsxeTemnwKfiuBe54e24sCN7H5qxta8YrdkUe1LGrVn2sNdMY5/yaaVAk2mdI9IMn3WyrdpaR1ItrsiU/iq6Lpz8+hYUMEB8V/LZV8puTyzoqdGFNYisEsLA2mrFszU3NmJaRPUQsoS3ZJmM9YsrezuAdRa8FzXBzg4Rr8IBn2HzUi5rRqtNLgR7V5iyfxLgeKxNInDtkMlzgTGYgCGt5uuTH9Fv2fKMZNvwIO15PdjFPvOSwOCdUMvBF4IiDIsRG0Gyn3d4qS3Y8fQrrKydd78v2+p1ODwDWASB02H6qinOU3mTyzpKdKMFiKwjnu0jS2q4ateA7KdOX1bqr2wanQSa4ZXv5nF7WrVrLaLq0pY3kn9sNc+BC4Z2gxVbuaNBoy0gGuBFiM34ydLWAbe09M6jUKbcvp9Cznb0KlZy/dv66+GuF9+J2eKxYZUc0gw0mC2JFoIvr11sFBpXmXuzIl1siUaW/Rl8K13X9vw/mZsAdLgAJ1jU/zHUrRVvJS0hp6lhY7Bp00pXD330/2ry5+ncML8Df5R9AotX98vF+pcWX+mp/8ArH0RQ8b4c1lQVWwM0hwHPmB9V0GyLqdSLpS1xwf2/Byv6jsqdJxrQ03nhrv45/Pl1JvA8R4Q3aTHWTIVbtX/AFMvL0Lj9P6WMF3y/wDplsq0uzYMO4jNlMfvZaXcUlPcclkx345xkrsTjyyuyiaFc5v+oKZ7tuphzz0+YW6DhKO8pL5rJoldQVVU8PXny+ZuxmMZSYX1HBrRqSsoxcnhG6pUjTjvTeEbcNiAQ19NwIN2uafmHBeapnqcZx6pmS8MggCAIAgCAIAgCAIDXXcQ0kar08fA49tOuMSXtblGZxzEtIMjkHAieh6KxlcQdBU+45mGzq0b93HLLa4c88dc8zrcHULmy7+6rmdLFtrU3rwyK/HYqh8L6jQ4edx1C2/4fWrRTUH3PBX3F3aJuM6iTXfqisw/EG54p1JcBMtkW9QoVzsy4oQ36scR8V6ZyQKV5RqTcKcsvuz+C5o8fcPC9rX/ACP6ctlAjQ/3J4SJXbuLxzPKGLphzqha8gwC0AZZA5zr5ctZUyVatKgt1cH+7j5fz8sGuFVwrNuXHGn0z78ySziNAn4XifX7qL29dcyYrlli3Bs1k9F476pjgjb2rIVRmUkFWdOoqkVJG9PKyQsbhy6CPZbE8Hkk2a8FhH52zAAIAjWJ0WxtSa+prkt1Oa48WfU+CVRkyBobl0A5c76mZVjuKOiOUdWVSTlLicNxp7X1sxa0VRma8C3jaYMj1F9wQVFu4KMk1zLrZM3KEk+TIihluV3GWUyzxtk3gixHQ/ZSLetUpy+B/ggbQtKFxTarRz0fNeD9opuCvpU3EDXM0AmJAhpd5atdcaxupNedSeN/RfTiV1nSt6bap6vhrxxjh4Zzw000LLHOl1Q3IJMGCAZuIJF9VGisVET63+mlpyPcOHT4Zn96rSTFnOhOdWFKmC8gQAOsDYblbFCVab3VxMaaVCjGMnwSXjhYOa4rjy+Xx5NHKfuussbWNCklzerOA2teSu7l9I6Jevm39iZwakWNph2szfmTK57aM1UrynHh+EdrsuzqW9pBTWHxa6ZeTsuEYB1QkimXAe09dFTXMK847tFPXp+SRcV401hywXj+G1wP9P2LT8pVU9kXC13fqvyQVc0X/u9Tk/8A1WuxxDtQYIc2D66ELCVrDg1hmalnU2YvB0OIUjTqNgiHWO40P8Q8ivaNzWspqUXldH708jCrDtobjZy/AHUsNXq4P4aubNlDXQfDOYGIEiCuoqVFXpxrQ4NGvZUuzlKlN650+R0ijF2EAQBAEAQBAEAQBAEBiaY5D2Q8wZIelRxzjbaHhbDqkabN83forOw2dK4+OWkfXw/JTbU2vC0W5DWfp4/g4s4g1qji4ySC4nzF9OS6eG7TioQWiOLnv15udR6vUn9k2O7x9Q2bkc2eRMHTcCFVbVmpxVJaybzjuLnYsexcq89IJNZ73j5nT8J4P3NGkHk13WzOY5zmkkkk+K8CQPS6gSsqVSSnKPJLHh7+RGqX8qadKElze9q/Jfk6PgrcPSqPZWtTqDU3AdYX3Atrcc1lG2jQi4w4N5MKN268l2j1Sx/P/RXcf4W2niHNpEFgDXAzM5hNjuqe+tYp5gsacDo7CMqsJNvOH9iuzDmqrsan/Fkrcl0LDhJY52UmL7eeit9m2zqZjLTn6GFzeO0oKSWW3jXw/gsOI4PuyI+E/XdSbq37JrHBmezb53MWpfuXoQwYuoqeCyaTWGX3AeJODySZI6CW7i3op9vVdTKkc9tG0hQ3Z01hcGY9uOz7qwGNwl6rR42D/qNHlu9ukakW2AUqKhNdnU4cu4hUq9Sk9+m/5OL4Zx9lVzWFpa90xFwYBJvqLBRbnZ8qUXNPKXzLq02pCvJU2sSfmtNSyxNBjx4wCAZvsRuoMW09CynCMl8RV4mthmkHNmLTMNg7EQTpF+eyl07WvJPTCfUi1J0FJPOq6EqvxWgBBcHeQBP9FjCzrt5SwbKlei1iTyVeL7StaIptA/m//I/VSqezv+b+X5NE73lBHN47iz6hkkk8z9hoFYwpxprEFghynKbzJlngKoIa43iJ6jf7qfWpyqUXGL1a9/M5O1uKdtfqrUWYqT++vlx8jouAYXvsZSa7/TzAk7RE6+ZELl5RxLclofRbm4ToOrTeVjKfjzPsGLD2UndwxpeG+BpOVs7Dy+XUaqQlg5Jtt5ZXYTAVawzYs2zeGk3wtgRBqtDnZnTPhzObpaboeFD23FN1ZkAF2UhxG8Gw84k+6gXdKEmm0XOzIqUJKXcVvCcJ3eaq4w3LAnlqT8lzF+4b3Z09ffAk1IxjLQ5fEVM2OdVynLzjbJlHrouks3GNhGGdf5yV9GjP+uVTHw9fLHqXbTIlYF+eoAgCAIAgCAIAgCAIAgI+PxPd03v/ACifXYe63W9HtqsafVke7rqhRlV6L/o+b4hz6j4u57jJ8yV2dSUKNPHCKR86pqpcVc/ulJ/U6fg/ZgBsvJzERI2n8o+5XO1trVHP+3ol9fE6612FSjT/ALusn9PD+Szr0G0KTWgWkC21iRHstFnUcq7nLVnu2KKhZqnBYWV9Ms3YfiQDB4msDPikSXC0EGwE+at6kobu83g5OFtKcsJZfvi+Rb4bH0MRTkZSQQJBBAO+eCYjoosYy65RvqOm57kYuE13rHq9PUwoMZFt78v7f1WU6MJrDRppXdzay3oy+6f58TSXtJIBnf8AZ30VRcUVTejydtsy/ndQzODi8J9zTzqufL+We5eSzs6ypVU3weg2taO5tmo8Vqu/HL3zLjjtQCm2dS4D5FTr9f2vP8lNsOWLh/8Aq/VFQqY6wx4bjXGp4adQRmgltnBrsroI0vzibESFtg5QkpIiXHZVoSpyf8HZ8PxTmXAMHVpt/Yqyc4tHL7kotor+L9kMHiqwxDHGhXuSRAa4kES9u7r6gg85Xsq0pUnSzozZRSpVo1sar7rBxvbrgNWmxlM1qbnZs4Dc2bKGuEkaBsnWfdR6GaEnLjoWla9VaCUVz5nNY/s9xGgyauFqAR8TQHgeZLCY9YVrGrGXM0RnF8yiZ3j7NzO6SfkFlKSjxeDaot8EWOD7N4h/4Mg5vt/9dVFne0o8HnwN8LWpLlg6PhnZelThzz3jvOzR0Cr617Oei0XvmTKdrCOr1ZUccwrqFYub8DzI5XuWnofkui2ZcxrUVHnHR/ZnE7asZULhzx8MnlefFe+RI4Pxs03Atifyu0PRbbmzp1tZcVwZDtL+tbJwWsHxX46Pv+aZ22H7eVMhAs6LZiCAdtRp6qlr29Wjq1ldV70OmsFaXrShUw+cWsPyecPy80aK/bTEFt3tjyEeljdRN9l89k23HX5/wVlTiT8QWkgAtJAyzoY1UerLLMadtGhJqGdepnWqEAtJMTMbeyo3RbqPC1NEoy3mjLAUzJcd7BWkYqEVFEynHCJq9NoQBAEAQBAEAQBAEAQBAVXagxhan+3/AM2qw2W//Kh5+jKnbizY1PL/AOkUXZLDsdUcT8QAt5bx6xKs9ub6jHH7fuU36aVNynn9325/ydkucOvIPFsPnaBnDTNs2hMGykW9Ts5ZxkgbQtlXpqO9h50zzOE4twSrVbUrOqnI1jjTpgTdrYi+gLh6qbO4Se77RRUdnTlBzaWNfPB72UHdV2ObmaalBjjMzm/FrtLXR1WEpzUHJPVM2U7ahOtGnOOYyj9eqfFcOR3VHG5pD/pANhd3MrVWuakklw0JOz9k2tKcpNbzTws648uveSWnxn+UfUqM/wBi8X9i3X+ol/6x9ZFrwzByc7rNFxO8b9Apdlb78t98F6lbta/VODowfxPj3L8shcarGu9jG7uDW/dymX+lNR5tlPsZ/wB6dTlGPq1+CxfgGMrMYSSHyb7ZYtbU3+qi0LSMk5PXBLu9s1oqMYpJvn/B5juINoitk8OSqKZ/FY0qdQEAi3+oeei2uikljmQv6uVR/Fy95IJxjnic5I1mbR9FglnQzcklk1Vagb8RAnmvJ/A8SMqKddZprJw+L7UvpY6qXNzUmtdTYwtEOMNMut4xnbaZjNaFvpwjKJpqznTnh5R1H/DXtfjDReKtV1bI8NHe+I5SxpEv+I7mSTqvKqw9D2k245Z39JmGxwPh7utqYievJ4+fRR50oz8Sdb3lSjonldPfA5niGBfReWPF9QdiNiFCnBxeGdDRrRqw3okZYG014ig17S14DmnYrZTqTpy3oPDNVWjCtBwqLKZy3FOzLmy6j4h+U/EOh3+vVdDabZjL4a2j68v498Dkr/8AT04Znb6rpz8uvr4lOzGOpyHzA1mxEK4lKG4550xk52NGbqKCWJZx0eSfhKweJhzZvDteUxPkqTsKN3Fzt9GtMcvfhodPR2vc2ElSu/jT5rivTPnr3suuzdcuNUR4WkAOk3JJBlu1gL+ao6yak0+K0Oitrn+ozJcNMeDLtzQdQtJLPUAQBAEAQBAEAQBAEAQBAEBB41hDVoVKY1It1BkfMKRaVVSrRm+BEvqDr286a4taeK1R88wmLdTcCCWuaddx5ELsZKFWG7NZTPnkJVKFTfpvEl79o7Dh3ahjgBVGU/mF2n01HzVDc7GnHWi8rpz/AAzqrP8AUVKa3bhbr68V+V9SVi2trkFlRrmwQWhw3j1G9vNVrp1aP7oteK9otnOjdfsmmuif41NOD4QQWmC2CZmDIuI+hsvKtdyya7axVJJrR6+fH3oYu7HUy9poB7IBGSmS3NJ/E4eL5rDtpYwzbUtqMJKpwwsF8Oy1e3w3ub/DpY8z0WMpp4IlK7px3s9cllheG0MPd7+8fyGnt+q8y2sEerettuGmdO/TPy4/yS+L1v8ABLtAYnoV0FHdp01ngkc7UjOrPdjq2znOF1C6uHC2UGPYj3VZUrSrVd/GnBHRRtoWtq6SfxaN/PHy5I3cXxxp1WPaczgCANb8iBe8/JT7SUWpRbKK+pT+Gph468jKk81HOqVKfdl8ZxOcEwG53tgkDKGi3I+aVYSa3YvT3wZoo16Kfx8eT5eDXQ04pjn1HgEPGY+IWbrE7zZaqdLdWIokV7lZzJ++7uJlVzQIIny1/st1WVOMf7nAgWVO5qVs2ye91XLxfD58eh8x/wCImJiuyQAAywG3jcCT7BaLdQSbjwLu+debiqzTkk1p4+/wdJ2GwTWYYPa8u7055iI8Ibl1MwQb/JQ7mq+000wXGzrODt/jWc/9HUYau5jmvaYc0yP3ySnW3tHxNF3Yukt6Gq9DrO17Gvw7KuhBbHR40949l7cLMcjZdRqq48mvQ45Qi/CAIDmu17GOytdTBLvxXBgHSR91aWMXOnKLk93py8Sp2gqcZxqNLK58/ftFLx3BGiS6lUFRoyhr2nd0R4XQ4XMXGqnWzdvbOC0m/q28ehzs5ULy4hPezFJtroks+OH3kbA4hzaDarSQ8YjK5wJk03MbIPMAn6Krozc6uKmuGm8+LR0FaCp0X2XwtppY0w8ZO14FXzMLSZLT8nX+sqRteioVVOPBr0/jBH/T1ec6EqdTjF89dJa+uSzVSdAEAQBAEAQBAEAQBAEAQBAEBzvaDs2KxNSnDam42d+h81aWW0pUVuT1j9UUm0djxuH2lPSX0f8AJx2KwVWiYe1zfPb30V/RuadXWEvfgcpcWdag8VItenzNIrFSN9kTcR9L4If8vS/kbPXKFxl3/nz8X6n0aw0tqa//ACvQvcHiqjAMjRkDH1Hu38OjWiLuP23WEKalFtlVf70q7XJY9CTxLFk0/EQLjf5TusUsMhqLk8R1KF+MGjAXHy09162TKOz6k/3aL6l9giK1E03csp+xH72V+4KdNJ8GighUlRrNrjGT+jOaNA0qxY/8oA87m/QqtvMQhCmuWvzLrYyqVa9a5qcJPCXTGq8sNGFV/dP8IEEXneZkTqPRaKFXs1vYyTNpWSu5qnvNYTfdnK4rmSKOObOYvDGgHM10knlDp+StKNWNX9r8jkb2yrW2e1jnPCS4enHxIruPd457aQIDTlLjFzvlH3Wm4udxLc5/QnbM2N20pdvlKOmFzfj+PmjbhsYNDrz59fNVU5OTyzsaFOnRgqcFhL38zje13De/x1Jn56dUD+ZveOb84U+lU3KWfApK9Dtbnd6730yXP/Do/wCQp+Tqn/m4/dRrr/MZabNf/jrzOke8ASSAPNaIRlJ4isslVqtKnByqtKPfobeL8Wq1aAa58slpAytGmmgBUyvlRwyg2e06yceGDRQfLQfJQjo1wNi8PQgKTtRRJYxzWlxBiwmBE6dQFPsayhJqTST69St2nR7Wlu4bzpp0ZXYbCvc1jogsqgOBGmW5PUG0L24rQ3XGDypa8c41+5E2fYKlipzWnBJ478Yzg5ngmaqO50bappfMXU268oA+a0Uqkacsv3qn9iXWg6iwvecr7naYLDvpuJIO2x85Uq/vIXCjuprGePfg07Osalq5bzTzjhnlk6TDYV1QtyiznBgJsMxuBPOFXKLZYV7qlRxvviW9TspiAJHdu8g4z8wB81tdvMjLadBvGq8v5KN7C0kEEEGCDsRqtLWCwTTWUeLw9CAIAgCAIAgCAIAgCAIDF7AbEA9V6eNZK+twOg7Wm30AW+N3Xjwm/mRZ2FtN5lBfInUaQY2BoFo1bJKSiiCzjjg17fw1GjLBILHB2Zrp5EWI8wujp7PhTjHTLzr79D5zdbcq3NSpn4Y4e7ju9X17jZhKdTL3dQkhsERGU+irL6pRqqNSD+J8V9/fE6PYtnc2tWpRrR+Faxku/l4eng0TQI0VcdKZU8Q6mczdR7HyKvLGup0+zfFehxu2rOVGv28f2y49z/niWmWnimB4s9vyPI8ws7m3VVY5mrZ9/K3nlap8V75lNxzDOpOG4LdY3m4+nuquvQ7FJN8TobS8/qqjmo4SWPm1j7nP46h3jMhMTv0v9ljRm4NyXT8GV9RjWjCnLg5fZkrBcPJvABOrgIn03WqUiXTpY1eM9ccS1o4drdNeZWGSQkkUHF3kY7Dua0+BtUEwSBmaIvoOXqt8MdlJeBBrZ/qabS/5cu40dnKtSg2rSe2G9499MjL8LnSARJg76KXC37WUZcufIpbrais6VSknieu7jDx48cddTeKnePiSTe5vCtYRjH4YrBxlarUrS36sm33vJb0mscA0kyABEnYR0XPV2+0l4v1Ppmz6cP6ak0tdyPoiXTYAABstBPRkh6EBpxhAY4kwAJWutDeg0eN4WTRXqMoUqlR3w+Kq6P4hmIA5ry21pxNccQi34nKdg+GNcx1VzjmDgwAQIygOJPOc0R5LfPXQwhTUtWdwsSQdFhKVGvhqdKqajMji8GmYk+IXME7qZCEZ00mcztGG9Xlnu9DCvwHBR8VeofOq8e5svXb02QewRU8Sq5qz3HUuKjVf3s6u0/yI+BGWskhAEAQBAEAQBAEAQBAEAQBAacW6Kbzyafot1vHeqxXevUi3s+ztqk1yjJ/RlbxBrWtpmwJETzAA91fWVWUriqm9E/ucJtq2px2dazjH4nFZfdup+r4ljgamZgPp7WVPf01TuJJcOPzOu2FcSr2FOU+OMfJ49DeoZbnhC9TaeUYzhGcXGSymZ0a7mCGuIA2BXTUJdpTjJ8cHzy9p9hXnCOUk3g14/Huyy85gJI02aTr6KLtCmpRgussfMsNjXMqUqs+OIN464Obbj75oGswRb2Cf0dHGFkrv8dvXJSbTw8pY0XFY0w8a9SYON+Q+a1f4dT/5MnL9U3POnH6mD+NnaPY/qsls+iuLZqn+pryX7YxXk39/sQ6/EXO1M+w+ikQoUoftiVtfaV5X0qVHjotF9MEYvc63yC2SkkstkOnSc5bsFl9ETcBhnBwO+wCgVL9RfwLJ0tn+nJVI5uHu9EsZ8+XkvmXGGwzg4OMb26qrnPek31Ovt6PZU4w6JL5LBNWBvCAwqPygk7IeN4KLjGKc9rWWDXOAP1iV60aKrclgzq4kVSW3OSGmdJABEehasKFKUKevV464Me0Tm49PkQeFYQ0u8B/FUc8dHRA6rbkySwdLhZyjNr9tlizdHgT6PEjTEFhcP4dR6brfTrbqwyvurHtJb8WYV+0NoZTM/wAX6DVZuv0RHhs55+J/IgYRrpc52rjN+e58lGk8ltThurC4ElYmwIAgCAIAgCAIAgCAIAgCAICFxasW05AmSAZ0gzIPXT1UyxgpVdeWvmQr9/2WsaPR+D4ldif8R+HtYg28pb9grS3/ALPbSb14/Rs5fa1ONaVrRisJ/DjuzFehO4WMpfT1DTY9f6R81D2hJVIU6vBtP6FlsOEretcW2cxjJNPxX4S8ywVWdGEBrqUWu1C9PGk+JqrYJrgRe/n+qzjVkmnnhqR6tpTqQlDGN5NZXHUqKvAnD4XAjpCsY7RXOJy1T9LTT/t1F5r8P7Gk8Iqcln/iFPozR/8AzN1/yj9fwG8IqfsLF7QjyiZx/S9Z/uqJeCb/AASKXBTv8zH0Wme0Jvgkiwo/pm3jrUbl9F9NfqTqHDAP6D7qHOrKbzJ5Ly3s6NBYpxS8PzzJtOkG6BYElLBmvD0IAgMXNBEHRAQ38P5O9wvcmG4ZUcA0GTf0+vNMhQSJLaTRoAPQLwywjND0IAgCAIAgCAIAgCAIAgCAIAgCAIAgPHNBEG4K9TaeUeNJrDKfFua2vSA0aHW+ytqE5VLetKXHCOZ2jGNO/tVHgm/U28NxANSpNiXCAeUWj3UW6qKdOmlyWCw2dRlTrV5T/wB0srwLRQi3CAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAICuxfDMzg4GCCSPKdeoWyNRxTXUj1beM2nzWqM6OBggk6bBYZNqiTl4ZhAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB//Z" alt="Students Trained" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">Start Early & Plan Strategically</p>
                  <p className="text-sm opacity-80">Begin early to ensure sufficient time for revisions and practice.Create a structured study plan to cover each subject systematically.</p>
                </div>
                <div className="">
                  <img src="data:image/jpeg;base64,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" alt="Expert Faculty" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">Refer to the Right Study Material</p>
                  <p className="text-sm opacity-80">Use official ICAI study materials, available on their website.Complement your preparation with recommended reference books.</p>
                </div>
                <div className="">
                  <img src="data:image/jpeg;base64,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" alt="Rank Holders" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">Practice with Mock Tests & Past Papers</p>
                  <p className="text-sm opacity-80">Solve mock tests and past exam papers to get familiar with the exam format.Time yourself during practice sessions to improve speed and accuracy.Attempt official ICAI mock tests to assess readiness.</p>
                </div>
                <div className="">
                  <img src="data:image/png;base64,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" alt="Rank Holders" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">Revise & Strengthen Core Concepts</p>
                  <p className="text-sm opacity-80">Regularly revise essential topics to strengthen your understanding.</p>
                </div>
              </div>
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
            {/* <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-xl overflow-hidden shadow-lg">
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
            </div> */}
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

      <div className="my-16 px-6 md:px-12 lg:px-24">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-red-700 mb-3">
            CA Foundation Eligibility & Exam Preparation Guide
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Eligibility Criteria: Before enrolling in the CA Foundation course, candidates must meet the following requirements.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Eligibility Criteria */}
          <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-600">
            <h3 className="text-xl font-semibold text-red-700 flex items-center gap-2">
              <BookOpen className="text-red-600 w-6 h-6" />
              Educational Qualification
            </h3>
            <p className="text-gray-800 mt-2">
              Must have completed 12th grade (or an equivalent course) from a recognized board.
            </p>

            <h3 className="text-xl font-semibold text-red-700 flex items-center gap-2 mt-4">
              <CheckCircle className="text-red-600 w-6 h-6" />
              Minimum Marks Requirement
            </h3>
            <ul className="text-gray-800 mt-2 list-disc list-inside">
              <li><span className="font-semibold">Commerce Students:</span> At least 50% in 12th grade.</li>
              <li><span className="font-semibold">Non-Commerce Students:</span> At least 60% in 12th grade.</li>
            </ul>

            <p className="text-gray-800 mt-4">
              <span className="font-semibold">No Age Limit:</span> There is no age restriction for registering in the CA Foundation course.
            </p>
          </div>

          {/* Right Side - Exam Requirements */}
          <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-600">
            <h3 className="text-xl font-semibold text-red-700 flex items-center gap-2">
              <CheckCircle className="text-red-600 w-6 h-6" />
              Requirements for Clearing the CA Foundation Exam
            </h3>
            <ul className="text-gray-800 mt-2 list-disc list-inside">
              <li>
                <span className="font-semibold">Minimum Passing Marks:</span> Obtain at least 40% in each paper and 50% aggregate across all subjects in a single attempt.
              </li>
              <li>
                <span className="font-semibold">Exam Attempts:</span> Multiple attempts are allowed until the exam is cleared.
              </li>
              <li>
                <span className="font-semibold">Negative Marking:</span> 0.25 marks will be deducted for each incorrect answer in objective-type papers.
              </li>
            </ul>
          </div>
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

      {/* Demovido */}
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
                  <a 
                    href={video.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-primary rounded-full p-3 transition-transform hover:scale-110 group-hover:scale-110"
                    aria-label={`Play ${video.title}`}
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">Watch on YouTube</span>
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

export default CA_found;