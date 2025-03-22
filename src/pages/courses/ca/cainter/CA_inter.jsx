import React, { useState } from 'react';
import { BookOpen, Laptop, Users, FileText, ClipboardCheck, HelpCircle } from "lucide-react"; // Using Icons


const CA_inter = () => {
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
        title: "DEMO LEC : 01 || CA INTER PAPER 1 - ADVANCED ACCOUNTING || BY CA CMA GOPINADH SIR (AIR 23)",
        instructor: "Lakshya Faculty",
        thumbnail: "https://img.youtube.com/vi/Oj1CuJs0Z_o/maxresdefault.jpg",
        videoUrl: "https://youtu.be/Oj1CuJs0Z_o",
      },
      {
        title: "DEMO LEC : 02 || CA INTER PAPER 1 - ADVANCED ACCOUNTING || BY CA CMA GOPINADH SIR (AIR 23)",
        instructor: "Lakshya Faculty",
        thumbnail: "https://img.youtube.com/vi/ET9IoqWTpkE/maxresdefault.jpg",
        videoUrl: "https://youtu.be/ET9IoqWTpkE",
      },
      {
        title: "DEMO LEC : 03 || CA INTER PAPER 1 - ADVANCED ACCOUNTING || BY CA CMA GOPINADH SIR (AIR 23)",
        instructor: "Lakshya Faculty",
        thumbnail: "https://img.youtube.com/vi/--zihlDxM0I/maxresdefault.jpg",
        videoUrl: "https://youtu.be/--zihlDxM0I",
      },
      {
        title: "DEMO LEC : 01 || CA INTER PAPER 4 - COST AND MANAGEMENT ACCOUNTING || BY CA CMA SATYA SIR",
        instructor: "Lakshya Faculty",
        thumbnail: "https://img.youtube.com/vi/97SNpBbBVzA/maxresdefault.jpg",
        videoUrl: "https://youtu.be/97SNpBbBVzA",
      },
      {
        title: "DEMO LEC : 02 || CA INTER PAPER 4 - COST AND MANAGEMENT ACCOUNTING || BY CA CMA SATYA SIR",
        instructor: "Lakshya Faculty",
        thumbnail: "https://img.youtube.com/vi/7kKH44W3MKI/maxresdefault.jpg",
        videoUrl: "https://youtu.be/7kKH44W3MKI",
      },
      {
        title: "DEMO LEC : 03 || CA INTER PAPER 4 - COST AND MANAGEMENT ACCOUNTING || BY CA CMA SATYA SIR",
        instructor: "Lakshya Faculty",
        thumbnail: "https://img.youtube.com/vi/RC_gDD0DERw/maxresdefault.jpg",
        videoUrl: "https://youtu.be/RC_gDD0DERw",
      }
  ];


  return (
    <div className=" overflow-x-hidden mx-auto p-5 font-sans text-gray-800">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">OverView </h2>
              {/* <div className="mb-4 flex items-start">
                <div className="bg-accent p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg text-primary mb-1">Location</h3>
                  <p>Hyderabad & India</p>
                </div>
              </div> */}
              {/* <div className="mb-4 flex items-start">
                <div className="bg-accent p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg text-primary mb-1">Duration</h3>
                  <p>6-8 months intensive program</p>
                </div>
              </div> */}
              <p className="text-gray-700">Take your CA journey to the next level with Lakshya Edu’s CA Intermediate course—a perfect blend of conceptual learning and practical application. Whether you prefer online learning or Pendrive classes, we’ve got you covered with expert-led coaching and a structured curriculum designed to help you succeed.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">CA Inter Online & Pen drive Classes – Learn Anytime, Anywhere</h2>
              <p className="text-gray-700">Take your CA journey to the next level with Lakshya Edu’s CA Intermediate course—a perfect blend of conceptual learning and practical application. Whether you prefer online learning or Pendrive classes, we’ve got you covered with expert-led coaching and a structured curriculum designed to help you succeed.</p>
            </div>

            <div className="bg-white w-screen rounded-lg p-6 shadow-sm mb-6">
              <div className="my-16 px-6 md:px-12 lg:px-24">
                    {/* Section Heading */}
                    <div className="text-center mb-10">
                      <h2 className="text-3xl font-bold text-red-700 mb-3">
                        CA Inter Course Structure – Complete Details
                      </h2>
                      <p className="text-gray-700 max-w-2xl mx-auto">
                        The CA Intermediate (CA Inter) course is the second level in the Chartered Accountancy (CA) journey, conducted by ICAI (Institute of Chartered Accountants of India). 
                        It consists of two groups with a total of six papers. Each paper is 100 marks, with a combination of 70 marks descriptive questions and 30 marks MCQs (no negative marking).
                      </p>
                    </div>
                    {/* Course Structure Table */}
                    <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-600 overflow-x-auto">
                      <table className="w-full border-collapse text-left">
                        <thead>
                          <tr className="bg-red-200 text-red-700">
                            <th className="p-3">Group</th>
                            <th className="p-3">Paper No.</th>
                            <th className="p-3">Subject</th>
                            <th className="p-3">Total Marks</th>
                            <th className="p-3">Exam Pattern</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Group 1", "1", "Advanced Accounting", "100", "70 Marks Descriptive, 30 Marks MCQ (No Negative Marking)"],
                            ["Group 1", "2", "Corporate and Other Laws", "100", "70 Marks Descriptive, 30 Marks MCQ (No Negative Marking)"],
                            ["Group 1", "3", "Taxation", "100", "70 Marks Descriptive, 30 Marks MCQ (No Negative Marking)"],
                            ["Group 2", "4", "Cost and Management Accounting", "100", "70 Marks Descriptive, 30 Marks MCQ (No Negative Marking)"],
                            ["Group 2", "5", "Auditing and Ethics", "100", "70 Marks Descriptive, 30 Marks MCQ (No Negative Marking)"],
                            ["Group 2", "6", "Financial Management & Strategic Management", "100", "70 Marks Descriptive, 30 Marks MCQ (No Negative Marking)"],
                          ].map(([group, paperNo, subject, marks, pattern], index) => (
                            <tr key={index} className="border-b border-red-400">
                              <td className="p-3 font-semibold text-red-700">{group}</td>
                              <td className="p-3 text-gray-800">{paperNo}</td>
                              <td className="p-3 text-gray-800">{subject}</td>
                              <td className="p-3 text-gray-800">{marks}</td>
                              <td className="p-3 text-gray-800">{pattern}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-lg p-6 shadow-md col-span-1 md:col-span-2 mt-6">
              <h2 className="text-2xl font-bold mb-6 relative after:absolute after:content-[''] after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Why Choose CA Inter?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="">
                  <img src="data:image/png;base64,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" alt="Success Rate" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">Essential for CA Aspirants</p>
                  <p className="text-sm opacity-80">A crucial step toward becoming a Chartered Accountant</p>
                </div>
                <div className="">
                  <img src="data:image/jpeg;base64,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" alt="Students Trained" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">Covers Core Financial & Management Topics</p>
                  <p className="text-sm opacity-80">Develops expertise in Accounting, Taxation, Auditing, and Strategic Management</p>
                </div>
                <div className="">
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhISExMVFRUVFRcVGRcYFxgaFxUaFxYXFxcYFRcYHSggGB4lGxUVITEhJSkrLy4uFx8zODMtNygtLisBCgoKDg0OGBAQGy4lHiUrLjctLSsvKy0tLS0tNy0tLS0tLy0vLSstLS0tLSstLS0tLS0rLS0tLS0tLS0rLS0tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIFBgcEAwj/xABHEAACAQIDBQQGBgoBAQgDAAABAgMAEQQSIQUGMUFREyJhcQcygZGh0RQjUpKx8DNCQ1NicoLB4fEVoiQ0RGOTsrPCFhcl/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/EACoRAAIBBAEEAgEDBQAAAAAAAAABAgMREhNRBCExQWGRoSIycRQzYoHw/9oADAMBAAIRAxEAPwCkUUUVJ5sKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKK6Rs+b91J9xvlQmxzUV2rsjEHhh5j5ROf7V4zYKVLl43UDjmRhbzuKDF8HhRXTh9nzOMyRSOOqozD3gUSbOmUXaGUDqUYDXQakdaDF8HNRXWNlz/uJf8A03+Vc80LIbOrKeNmBBt1saBpoZRXTh9nTSDNHFI44XVGYe8Cn/8AFYjh2E1+H6N/lQYvg46K9cRhnQ2dGQkXsylSRwvYjhofdT8LgJZLmOKSQDQ5EZreeUGgs/Bz0V3vsTEgFjhpwACSTFIAABckkroLVwUDTXkKK6IsBK1isUjX1FkY38rDWnT7NnQZnhlVerRuBrw1ItQYvg5aKKKEBRRRQBT4eI8x+NMr0hOq+Y/GofgtH9yLAjmw48KSlgkGVdOQ/CiuVZHusmVuiiiuseDCiiigCiiigCiiigCiiigCiiigCiiigPXCy5XRrXysrW62IP8Aatv2NtkYmNZgrASBiELcLSOhLPwVe5ew48PPCxWtbiv/ANiw9yAo7XUnUntpCQBx4W1+OliN3opNSaH7V9JEUEk0HYyExyOjEMveKsQSPO3Sj0j4rNgGIdSGkj0uCSL5hwJ8Ovs4V67b29s+MzpN2bS5TdewJYsyXAz5Lc11v11rHlX4caF69ZxTi3e/4L3uTvckaQ4OVWVc7DtFb94xNmW2gJIGa+nhxq4bxNO+GcQxl5GaO0RtcLnU+V+6NPlrjGGgaRljRczOQqgcyTYCto2dhmSOPtGLukYUnxtqxHAEg2ue8Rfgb0J6acpxcX4GbY2wY0aeQsqqLEqc3fI9SC4HE3GY8g3AXFZbvPtr6VIjhCmVAli2YnvM1ybD7Xwq0eknCyOsc637BO6Vse6zH9IdTcNoLm1rAc6z80MPVVJZY+jQfR7tYFRhRE90DymRWAHHTOttdWUXJ041cJM4yXcDtL6g3IF7X11016dLg2Jq3o1wJWF5bXMz2GlyFi5jzdmH9Aq0y4IRtJLeTvMrnPbIlkEYCBVB1CjnrlvoCWobdDLWrmW757S7fED6tozEvYsGILFldyb2AH61vZU96PNqhlGByvmYyyKysBfuA5SCP4Treoz0h4UjEiexC4hQ4v8AaWyNw62Vv6+dHozUHHJflHKfA9wixt4E0NOLlGv/ALNSMWULdhYggqAb217o/hIGvXppasd2lu86Y36It+/IojPHuSHuN42U6/ymtMx+02ix0cAC/W4W6g2UZ1klYHnl7naX9Y6/rHj7y4FXlSdtZkRkDEWVVc6ixGa4GYAn94+gFgBt1qaq9uGdoiEcYS+RUUKqLq2VMqjMw7q8U+9Vf332oqYJ0IIM10S2v2WJYk/EZvZXphMd22MxUQ0WCOKO3IMGZpNF09Y5TqPUGtQnpVayYRRe15Te1tR2Y6ePwoTVnak2v+9GeUUUUOSFFFFAFPh4jzH40ynxnUeYqH4Jj5RYIG7q8OA/CiuGOcgAXPAdKK5lj3ViKooorqHhAooooAooooAooooAooooAooq+bG9HYnw8U/0nJnUMR2VwpPInOORFut6F4U5TdolDorQYvRwjHKMWWPUQDKNL6ky9ATUbt7cKWBS8Ui4hVUswVSrqBxYKScwHUH+9DI+nqJXsVA9a2rY+xBCkcUedwgY9oQNczFxa2n63Hh49cz3Y3e+l9qTIYxHk1EeckvnsLZlt6h1/Cp0ej5Qe7iiNL3MIFuB49r05jTShk6dTj+pRvf5J7bO5UOJlaYtOjSAXsFyDKqoMoKAkWUcSONdG/5P/H4gm/rRWDcvrU0ty5D5VRt4NgthEWVMS75pCpspQg5Sbnvk30NS+ydy/pGGhmfFy/Wgv2YQuFsxW9y/HT8aGbJvKKh3a5JTdvdyPDlZo0mmd41s1u6ocKWK5V0uDYG/C4rv3sw7lcASxib6XFGMjcM4cElDoTwGt9C2mpBr49G471sUwB5mHQ262k1tx/zpTcN6Nr95cUVF7BjDYE30sRLfjbXx0oSlNRxUPyjRXw143ikS6OCrIFvdTxUcAvS9yfI1mO8258MGIwkSO6jEM+YMQxjAK2tZQToWGoPDnTt3d1GxEMrPipEyTvDkUFwxQKSdXHXpyrp//W63sMS1rc4Boeh+s+HmTYa0FTKrFPD8luwGzuyiEMfaiNEMYa1mJOa78Dc5mLDS2vmKru6u7xixWIKSSSLGexyFdXzxJLdyWAWzEe1eOtcEPo3uWC4o931m7Hujhz7X2/kVF4LctpMTiMP2yjsArZ8hOcPYrZbgjRhz+dBKU7x/R/Hc0Hebdz6Th8kjMrq2dWC90EKwK96xCm4udB3RpcG9Y9GGxrocXZ2cl4goIC5csZLNoTxJGlMT0Xsx/wC8g+Ihvzta/afn3V7zeivL/wCMBNv3PDzPaUDjNzU8Pyjr9I2GEXYY8P8AXwyJGFAshs0kgvfXqDqanX2lGmGbHMwMeTtEAtrmPcS3I5rDQczrpWaTbo5MdHgu2XvrmMmSwWyO5BXNronXnUu3o9Rb/wDaz7INWtxsO04ChEZ1MpNR/PsmdwtjkQHEgu8uIF3vbKLSPrcC9zx1IvevT0ibGD4QzuzBsPfKABlbtGjUgjjpYag+dRcG4ZZAFxkoGuUFCF8LASa68xcceelU3b+zZ8NK0E5NxYg5iVYcmUnlofdQipNwpYuPb+SLNFXDd3c1MRh1nadlLFgEWPMe6SLliw006V47xbnHDw9vHIZEUgOCgUpc2B0Yg66HpcceQ1NE8crdiq0Vcd3NxfpUCYg4hY1Ytp2ea2VmX7YuTlJtbgK5N7d1Rg0jcTGQSMVH1eQd0Akg5jfj+bUDozUcrdis05OXnTacnLzqH4McfKO7tPAfn20VxS8TrzPWiuae3GUUUV0zw4UUUUAUUUUAUUUUAUUUUAVd/RyWkaaNpGyLGpsWbKBc3AF7DjVIq6ejBM08ym9uyBIFuUiWuToONDN0/wDcRYt/Bis2DGB7YfpdIcwW947ZraW4+v4+NWvZYut2XIoGdybkE272p/V4gE8hUXvRvPFgOxVozJ2mfRSAoyZQQb+se8OPuqh7xekCbExmJUESuLP3szMDxF7AKDwIt+Job86sKUpNvvwcO40cjYuNIpJES/aPkdlzJHdgGFxmBNl1+3WkYvExhux4yspmve/cV8nHrmLHS36MnlrVPRpghkmmP6zLEvM2XvOAOdy0f3anZN9MP25wl5riXsc1lEefNl1IfMFzc7X5ixsQKdPaFNNvyVP0kQyJNGGkdo3QMqFiUjZe44VeCnRSbD9eprZm8+Fh2bkWYjE9g6KoDgq5DAG9rZtRrfQcOdeu+2yTJhGYkdpATIByWP1ZEHQ+obfw66m5zChgqylSqNr2bNsCSSWHDByzAww3ZiSWPZjNfUljfrbj7TC7q7xRRYrHDGYhwBOTGHMjgZXlUhQLhbBl0+VWncxsmDwpt3mijsNe93VFx10trwHhrWPbz4R48TiM6OoaaUqWUjMO0bVSQMw8R1obFacoRhJF53O3kwUK4hpZcrNippVXK+qNkK3Kg6d31dNRryrr3Rx802GQszMWklJZmJt372zE3tY2sBy6Cwyate9GDAYIOdLSOAdddRbzNy2g104HShj6arKclF+kRzbWSDa00eImdMOIkUKS5QNkhcdwXy3s3LiT1qGxu2g+2O0w0rCOXEYdSVLKJFHZKQw0uLg6GvD0mYaQY6aQo4Vuz7xU5SeyXRWtblwueBqB2CbYrDH/AM+H/wCRaGKpUllh/kbFtFJmw0qQSZJcqqjBiipldSVXLqCQCOZN+V6qX0rHbOdZsZI88bhowqzlrOMrAkMNLBTqNfEVaMRjmignkRVBjid1z94llU6tbx5Cw199CXHYnariCR4oxEjSgBCF4onAXP6w8ONDarySatfL1wR28G8Jmxf0qFWgIVVUA6rZSpIIA4gn31o+7+JDRQSTOWLxxOVC3ZzlFi32rlWIJ6EDgb5hvHsRsHKIndWJRZLrcCzEi2viprUd04S0OGIChOxhu3X6tAbm9+I8B52oYumcnUll5I7dXZOPhnLTTmWPKy5DLJIC1+6WDWC2IJ43871xeluWMrhgSDKC5Fv3Z69e8otp18akd09tPi1kWVlVojZlAyqykkqQAPAg8fVB5mqv6TdlmPEDEAlo5+ZuQrqLFATytYjwJtwoXq2VB4918i+jnGyGV4SzNEIXfs8xC37SLX4npxOovV9ZonLwsFISNe0W1gyOpF7n1VNnXS5Fr34GqB6MIScVJcGxgYX1AuJIjbN42qT3s2l9G2nFKwDRGGMOANGTO17DmVYAjxUdaEUZ40U5eLnXuTgHw2LxOHJLIyLJG1rqyiQDMBwBu4B6EVVPSHM5x+IVnZgjAAFiQv1aXyg6DXpWtYTEq1mQI/dsHAsFV8rWDc1bKhtbkONZF6QB/wD0MTw4pw4axRnShHUwwpJLxcr1Oj4jzFNpycvOofg0Y+Ue0i6nTmaK6O0X8iiuae4I+iiiumeFCiiigCiiigCiiigCiiigCr5uzvph8PhoYXSYlM2bKEyNd3YXJcE+sOXKqHRQvTqSg7xNI2r6Q8PLh5oRDLd4njXMIwFLqRfRja2h06Vm5oooTVqyqNORo8fpBw/dzRzjKCAoWMhb+bi/Lp5cK45t9YHxSztHIwWBowSiZwxlVwwu5Gigi97941RKKF/6moaivpIwq3yxYjXiSIyW6ljn156aDXhVJh2vEMd9KyMsfatJkFiy5r8LkDib2vUJRQifUTna/o06D0jYZWzFMS5PrHuKSBwA75svHTqfZVa353njxvYdnGyCISA5ra5yp0sT9n41VqKEz6ico4vwOiaxB6EH3GtLHpEwwbNlxLW0XuxrlU8Qv1hs3j5edZlRQrTqyp/tLvvpvpDjMOsMcUiWlWS7ZeAV1toSSbtUJuhttcJOZWVmBjZO7a4JZWDWNgfU686g6KESqyc8/ZpcPpCwygFUxGa9ycsZvfx7QfH3V7j0h4Ug3GIvf7CX9/adf8WrLaKGX+rqFw2tvVC+PjxSRs6JEI7OFDXs4LAXIuM+l+JHLjUxDv8AYUEMY8QxB0uIwF6W+s4258fZWb0UKrqJptr2XLHb5q2PTFIjCPs1idCFuVBN8o1GndYeKipTa+/+Hkw88KRTXkjdAXCWuVIBNmPC9+FZzRQLqKnf5NA2Dv1BDhoYpEmZoxlIUJkIDG1u+L6EXuONR+/W90WNSFI43Xs2YnMFA7wAAUKT0NU+ihD6ibjg/Bd90t9I4IVinWRhGT2ZTKdGNyrZiLWN7EcjbkKrm9G01xOKmnQMFcqQGtfRFU3sTzUnieNRdFCsqspRUX4QUqmkpyDUedQ/BSPlHe2G/OlLXfHHoPIUVzLnurFeooorqHhAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAoopksqrbMwF+ptQJX7IfRRRQBT4uI8xTK9IPWXzH41D8Fo/uRYYIGyr3TwHMdPOipLCOOzT+VevQUVycj3WJSKKVBfhr5a0ZTXWyR4bXPhiUUCnBD0NLoa58P6G0U8ITwB91OMDfZb3GoyXI1z4f0eVFevYN9lvumlXDOeCMfJT8qZLka58P6PGivY4V/sN90/Kmdmeh91TkuRrnw/oZRTsp6H8/6pMtMkRrnw/oSinGM9DTlhY8FJ9hpkidc+H9HnRXoYW+yfcaTsj0PuNMkNc+H9DKKdkPCxvRl8OP8Aul0Nc+H9DaKULSlLaWN/nwpkhrnw/obRXr2LccrW8jzpmQ9D+f8AYpkhrnw/obRS5aUxnTQ68NOPlS6GufD+htFeiwseCk+w0GJvsn3GmSGufD+jzop/ZHjY+6kKUuhrnw/obRUzgN3JnGZ7RJ9p+J/lTifbYeNP2lLg8MrkDtShyXc3zPYMAqDS2vPp0F6q6i8I2qPQVaiyasuWV7F4gRrmP5PQdT4f7qJXPiMxKXWPKc3DJmYABiPWLHSx4WNtAaY8jYiYZ2RM1z3rBIlAuzEAdBwAudABwFS0Dx6JGSI1N1Des7WsZJBwzHWw4KDYcyZubkaK6em5JXZ7otgB0FqWn5DpofnTQKm6OThN+mJT4uI8x+NHZnoa9IYWJXunUjketQ2reSY053XZ/RPQBsq68h+FFMjbQeQ60VyrM90pE5DuZEo7rNTxuhH9pqsqm9LXV1x4ONsnyVQ7mQjXMRTE3aQcHP4/jVtyjpRlHSmuPAVSfJUV3YQG4c10f8AD+u2nhVmyjoKTsx0FRrhwTtnyVlthgtmzm/kK94djC/6Qg/yj5VOmFelI0HianXDgnbPlkLPsBmFu0uPAAVxPumg4s/58qtUakc70rKT09tNcF6IdSb9lTO6sdiM7a628fyTTo90Y9SWbiKsvZW1v4e/SvInkOFTrjwRnPkrx3WTQZmsOHvGvwr3i3bQC+cg3uPO1qnOoIt/mkzajwprjwNk+SJO6yH9c668PM/8A2NMbdVB+ubE3P59tWQV5E3B6Hh/mmuHA2T5K++6CHXOb3v7v90yPc2PS7MMt7e0W/CrJCh59aJBY8OI4e2muPAznyV1dz4swOdrj+1x86a+56E3zm5tp1y8KsFhfwp3a8+Y4U1w4Gc+SFi3XUplzm2mnlw1rwj3OiItmaw8T4fIVZhHrccONEqk+z301w4GyfJVm3OiDHvnj+ND7px6d46cPLX5mrIy/5pTEQL2prjwM5ckBFu0oOjmwv/1caad2l45ze96n3Qi1ItRrhwNk+SBj3VQ2XM3T32Hyrk26+H2eVAUSTkks51yXH6g4C1gL+dTm39qjBxGQEGQg9mOQ5Zz/AG99VLdncnE7UcYjEO8UDm4bLeSQdUuLKv8AE3sBBvWGai3ZI2KblFZSZDz7wtKTnkKxrcs9sx52VRzZiLAX+AJqJXdjaWLcZMJMFHqZlKRqDrftJMoLHiTx8BYAb5JsnDbNw+XCworgHvt3nYm18znU3t8AOlVs7dxEiBbnPqCbfxG1vZaoyUOyDjKp3fgrWwPRARlbG4lE6pF3mbXm7d1beAPnUJvpszC4ecxQKxQD1i12zc7GrnOs5FzIb9edRO0NkhwSxuevXzqud33LYWRSosWVtqXAPqnT3EVY9lfQpbAu0THir8Nej8D8KicbshlvYGo8wMKurFHfk0hd1UbvBnYgaZVLX0sNB+NULeXak+HlaARPhyo/aWLlSbgra6gG3EE89a7dg7enwhDRsRY3KXOSQdHXgbjS/Ectau3pFwUW0cEmIhH1iJ20R5lDftIm8QQdPtJ4mrpQfopJzj7MU+kP9tvvH50V4BqKyWMd2b6NpRD9qn3h869F2rH++T7y/wBzWJBaWwqmwvp+TcBteLnLH94fOl/5mH94n3hWHadKL02DUuTcBtqH7affFeq7Vg/fR/eFYTmppNNhOtcm7ybWhHCSM/1iuZ9pRHXtE++tYkD4UU2EazbBtCH97H95fnT12jENe1j961h96S9Ng1m5JtSIftUtf7Qol2jDc/Wx8ftLWGGkqdg1m5/8jCR+lj+8vzr0XGQWuZo7/wA6/OsJC0+1HUCpG5DacVrdrH95fnT22jD3R2ken8a1hYFKKjYW0/Juq7WisT2sYtw7y+6mvtSFj+ljH9S/OsMNItNhGr5N0/5CA/tYx/UNaY20IR+1jP8AUKw40i02DV8m6x7WiFrypb+YfOugbTg/fR/fHzrAyKGpsGr5N1O0oh+1j886/On/APKw2I7aO/D11+dYts7YOJn/AEOHlfxCG33jYfGrbsr0T46Sxk7OEfxHM3uX502PgjWvbL0mPh5zR2t9tfnToMZE7LGssZzdHW5sCx0vfgCfZXBs30PwLYzzPIeYUBF+fxqzYPc/B4dS0UAzICw4ZiQOTHgfEmpcnYi0V7Mg9Ie0MztmIuxKqvIAaC9uAArVsFvrBNGjwyRpHlW4JAePQdzs+II4a2HQ2rIMDsOXbGNkMMfZRZru7XIjXUDNrx42QHU3JPOp7eH0aphlkZCzBbWLWu2g71x5nTwNYmsY9zYz2T7Lt6LDvJvrhrm8qEDgikO3hcLw9tqou1995GNolEak2vxf5D41D4rYsnZiULoGMZPiAD+DCo99mSkXCGw1qqjEmV/BJpvHiFkSQys1jYgnukHiMo06VoGC2gkqK4tY/n2eWlZIymxGt66sDjpYj3WK34jkfMVaUF6KqTRqGIsRwFQWMwgJ0FcOA2+To2h+FdbY9bXvfwvVErEPucU+GAuKuvo5xObDzQnjDIGX+WUEkexkY/11RpsXcmpr0c48Lip4+TQE+1JEt8GNZI+SlT9pD4/cBTLIVkKqXYhRaygsbAeVFXubGx5m15n8aKzmrdmOEUgWlsaUCtc3rDb0tFFz0oQFqDReg6UJAGi1NzGjNSxA/Smm1JTSamwbFJpKKUVKIFWvSmWpwqpeI4ilWmg86eBQsNYUAU16UGhUldlbt4zFAGDDSyLf1gtk8e+1lPvq37I9D+Lk/TSxQeAzSN7QLKPvGuPdfeLCRQRxySPG65rkK9tXYizJfkedquOy9vxP3U2kfJisv/S5DCiIal6OnZvoawiayyyzeFxGvuXX41bdmbnYCCxjwsYP2iuZvvNc1C4bFYoax4rDyDoxkRj5Zyyj3VKQbaxSj63Csw+1Eyyf+234VdWKONQsKxACwsB0tR2XlUTFvThicrydk32ZVZPi4AqVgnRxdHRx/CQfwqysY5RkvKF7Ko3auzWmsjNlh/XUXzSWOi3vZV43FjfTlcGWI8KB5VJQ4MPBFGCEVEB1IUAAmwFzbibKB7BXPtfAJPGYy1ud/wDFS3vpD7ahq6sWTad0VQ7BwyYX6MzC1y2YkBix4tr7rdAKz7H4P6KzZgkycmX1gPEHQew1s0kCtxCnzUH+1ccuyIT+yhP9FvwqjpmSNVryfM+OlXtWIU28jXLjSXIKra3WvpKfdXDNxw0R8mYf3qNxe4OFb1YWT+WQEe5waizJdRM+fo8w/VPwrpOJNvVPuNbJP6OI/wBUyDzRT+DCuDEejtuTj2qw/AGliMkZPE+ZgHJReZC5j7BcX94qXixOGwspkw8kzhoclpVGYMWBa2QWy2Vbc+NW7EbhSjkD7fnauSTcyQcV+FSmUfcpL7eBJN249DRVr/8AwxvsH3Glq+RTEz4Hx+FJelY+dOUHyrGbFxLmm5h1prOPE+dPGa3IeyguLY/7/wAUhPj7q8ybnmfP/FPbTj8KC4tx/s0gPT4CkTXgPfrSZrm2p/CgHE9fnSZqcyW4/CmEigFpwFJXoBpRsmKEWlBoIoqCw7l7ac2gpF/P59gpGbl7aFhDx/PU0t9aTmPzzPypD86FQJ/v+BppUHiPzensPhrSKPz8P7ChD8npDipE9SR08FYge4G1SWE3pxkfqYh/b/ixqJakUULKTXguWH9J+0FFmZJB0db+HOu/D+kmIm8+Aizfajuje9az40hPP21NwptGzbO9IWEPq4jFQnoWWVfc9zU5Fv4BquKw8g6OjRsfaNPhXz+eX58P70oHS44c6ZMteL8o+h4vSXCNJI2842Vx/apXB7+4CTT6QEPRwV+JFvjXzMsjA6N7/b8q6I9quBqAanJlHTpv4Pq3C7QhlF45Y3H8Lq34GugqK+V8HtpOcIPjcg+wipSDeyZD9VLOnh2hI9xNqtkU0cM+kzEOlNMArAsN6RManFw4/iFj71tU7s/0tEECWNx4owb4Nb8aXKOlJGvHDDqR7aYcKeTmoPYu9KzgEB9de8F/sanIsWD1qxjsMbDycmB8xXk0Ev2UNd4ejPSxBGdhJ+6T4UVKZqKkH//Z" alt="Expert Faculty" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">Well-Structured Exam Pattern</p>
                  <p className="text-sm opacity-80">Balanced descriptive & MCQ format to test conceptual understanding and analytical skills.</p>
                </div>
                <div className="">
                  <img src="data:image/jpeg;base64,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" alt="Rank Holders" className="mx-auto mb-2" />
                  <p className="text-3xl font-bold">No Negative Marking</p>
                  <p className="text-sm opacity-80">Encourages better performance in the MCQ section.</p>
                </div>
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

      </div>

      {/* Faculty Section */}
      <div className="my-16 w-screen">
         <div className="my-16 px-6 md:px-12 lg:px-24">
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-red-700 mb-3">
              Why Choose Lakshya Edu for CA Inter?
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Comprehensive Course Coverage", description: "Covers both Group 1 & Group 2 subjects, including Advanced Accounting, Taxation, Corporate Laws, Auditing, and Financial Management." },
              { icon: Laptop, title: "Flexible Learning Options", description: "Choose between live online classes or Pen drive classes, allowing you to learn at your own pace, anytime, anywhere." },
              { icon: Users, title: "Expert Faculty", description: "Learn from experienced Chartered Accountants and industry professionals who guide you through complex topics with ease." },
              { icon: ClipboardCheck, title: "Balanced Exam Preparation", description: "Our curriculum includes descriptive & MCQ-based assessments to help you master exam techniques." },
              { icon: FileText, title: "Exclusive Study Material", description: "Get high-quality, color-coded study materials that simplify learning and revision." },
              { icon: HelpCircle, title: "Mock Tests & Doubt-Solving Sessions", description: "Regular practice tests, quizzes, and one-on-one mentoring to track progress and clear doubts." }
            ].map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-600 flex items-start">
                <Icon className="text-red-700 w-8 h-8 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-red-700">{title}</h3>
                  <p className="text-gray-700 mt-1">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-10">
            <p className="text-gray-800 font-medium text-lg">📞 Enroll now and take the next big step in your CA career!</p>
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
                  <span className="text-sm text-gray-500">Duration: {video.duration} mins</span>
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

export default CA_inter;