import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import ca from '../assets/home/CA.jpg';
import cma from '../assets/home/CMA.jpg';
import acca from '../assets/home/ACCA.jpg';
import inter from '../assets/home/intermediate.jpg';
import graduation from '../assets/home/graduation.jpg';
import banner1 from '../assets/home/banner1.jpg';
import banner2 from '../assets/home/banner2.jpg';
import banner3 from '../assets/home/banner3.jpg';
import banner4 from '../assets/home/banner4.jpg';

const faqItems = [
    {
        id: 1,
        question: "I am a Class XII student who wishes to become CA/ CMA. When can I register for the Foundation course?",
        answer: "A student who wants to pursue CA or CMA he/she can start the course after completion of their intermediate (i.e 12 th ) or During their Degree"
    },
    {
        id: 2,
        question: "Can I give CA Final exam without an Articleship?",
        answer: "Articleship is Mandatory for 2 years."
    },
    {
        id: 3,
        question: "Which group is to be written first?",
        answer: "It’s up to you based on your preparation level."
    },
    {
        id: 4,
        question: "How many papers are there for CA Inter? And how are the exams conducted?",
        answer: "There are 8 papers and all the examinations are conducted online"
    },
    {
        id: 5,
        question: "There are lot of institutes offering CA, why should I choose Lakshya Edu?",
        answer: "We are the only institute that provides coaching for all levels along with study hours and examinations till the final Exam."
    },
];

const Home = () => {
    const [openItem, setOpenItem] = useState(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const testimonialContainerRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const scrollAmountRef = useRef(0);
    const scrollSpeedRef = useRef(0.5); // pixels per frame
    const [currentSlide, setCurrentSlide] = useState(0);
  
    // Course data
    const courses = [
        {
            id: 1,
            title: "CA (Chartered Accountant)",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            color: "#A6192E",
            features: [
                "Foundation, Intermediate & Final Levels",
                "Accounting, Taxation, Auditing & Law",
                "Expert Faculty with Industry Experience"
            ],
            link: "/ca",
            buttonText: "Explore CA Program"
        },
        {
            id: 2,
            title: "CMA (Cost & Management)",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            color: "#A6192E",
            features: [
                "Foundation, Intermediate & Final Levels",
                "Costing, Financial Management & Strategy",
                "Real-time Practice & Mock Exams"
            ],
            link: "/cma",
            buttonText: "Explore CMA Program"
        },
        {
            id: 3,
            title: "ACCA Certification",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            color: "#A6192E",
            features: [
                "F1 to F9 & Strategic Level Papers",
                "Globally Recognized Qualification",
                "International Career Opportunities"
            ],
            link: "/courses/acca",
            buttonText: "Explore ACCA Program"
        },
        {
            id: 4,
            title: "BBA/B.com",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            color: "#A6192E",
            features: [
                "Comprehensive Management Education",
                "Specialization in Accounting & Finance",
                "Industry Exposure & Practical Training"
            ],
            link: "/courses/degree",
            buttonText: "Explore Degree Programs"
        },
        {
            id: 6,
            title: "Intermediate (MEC & CEC)",
            image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            color: "#A6192E",
            features: [
                "Focused Intermediate Level Preparation",
                "Emphasis on Management & Commerce Studies",
                "Bridge to Professional Certifications"
            ],
            link: "/courses/mec",
            buttonText: "Explore Intermediate Program"
        }
    ];

    // Calculate total number of slides
    const totalSlides = Math.ceil(courses.length / 3);

    // Get current visible courses
    const visibleCourses = courses.slice(currentSlide * 3, currentSlide * 3 + 3);

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    // Next and previous slide handlers
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    // Auto-scrolling effect for testimonials
    useEffect(() => {
        const testimonialContainer = testimonialContainerRef.current;
        if (!testimonialContainer) return;

        const handleScroll = () => {
            if (isAutoScrolling) {
                scrollAmountRef.current += scrollSpeedRef.current;
                
                // Reset if we've scrolled to the bottom
                if (scrollAmountRef.current >= testimonialContainer.scrollHeight - testimonialContainer.clientHeight) {
                    scrollAmountRef.current = 0;
                }
                
                testimonialContainer.scrollTop = scrollAmountRef.current;
            }
        };

        const startAnimation = () => {
            scrollIntervalRef.current = requestAnimationFrame(startAnimation);
            handleScroll();
        };

        if (isAutoScrolling) {
            startAnimation();
        }

        return () => {
            if (scrollIntervalRef.current) {
                cancelAnimationFrame(scrollIntervalRef.current);
            }
        };
    }, [isAutoScrolling]);

    // Pause auto-scroll when hovering over testimonials
    const handleMouseEnter = () => {
        setIsAutoScrolling(false);
    };

    const handleMouseLeave = () => {
        setIsAutoScrolling(true);
        // Reset the scroll position to avoid jumps when auto-scrolling resumes
        if (testimonialContainerRef.current) {
            scrollAmountRef.current = testimonialContainerRef.current.scrollTop;
        }
    };

    return (
        <div>
            {/* Hero Section with Banner Images */}
            <section className="relative w-full overflow-hidden">
                <ImageSlider 
                    images={[
                        { id: 1, src: banner1, alt: "CA Program" },
                        { id: 2, src: banner2, alt: "CMA Program" },
                        { id: 3, src: banner3, alt: "ACCA Program" },
                        { id: 4, src: banner4, alt: "Intermediate Program" },
                        // { id: 5, src: graduation, alt: "Graduation Program" }
                    ]}
                    height="80vh"
                    autoPlay={true}
                    showArrows={true}
                    interval={5000}
                />
            </section>

            {/* Educational Excellence Section - Redesigned without question mark */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Educational Excellence</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="text-[#A6192E] mb-4 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Academic Excellence</h3>
                            <p className="text-gray-600 text-center">Comprehensive curriculum designed by industry experts with focus on conceptual clarity and practical application</p>
                        </div>
                        
                        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="text-[#A6192E] mb-4 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Mentorship Program</h3>
                            <p className="text-gray-600 text-center">Personalized guidance from faculty mentors who track your progress and provide targeted support throughout your journey</p>
                        </div>
                        
                        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="text-[#A6192E] mb-4 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Career Development</h3>
                            <p className="text-gray-600 text-center">Comprehensive placement assistance with industry connections, interview preparation, and career counseling services</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="text-[#A6192E] mb-4 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Research-Based Learning</h3>
                            <p className="text-gray-600 text-center">Access to extensive digital libraries, case studies, and industry research to develop analytical and problem-solving skills</p>
                        </div>
                        
                        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="text-[#A6192E] mb-4 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Exam Success Strategies</h3>
                            <p className="text-gray-600 text-center">Structured revision programs, mock tests, and proven exam techniques that consistently deliver high pass rates</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Lakshya Edu Section */}
            <section className="py-20 bg-[#f8f9fa]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">About Lakshya Edu</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Established in 2005, Lakshya Educational Institute has grown to become one of the premier destinations for finance and accounting education in the region. Our focus on academic excellence and student success has made us the preferred choice for aspiring finance professionals.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                At Lakshya, we believe in providing more than just exam preparation. Our holistic approach to education ensures that students develop both technical knowledge and the practical skills needed to excel in their careers.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="h-5 w-5 text-[#A6192E]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-gray-600">
                                        <span className="font-semibold text-gray-800">Our Mission:</span> To empower students with knowledge, skills, and values needed to excel in the fields of finance and accounting.
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="h-5 w-5 text-[#A6192E]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-gray-600">
                                        <span className="font-semibold text-gray-800">Our Vision:</span> To be recognized globally as a center of excellence in professional finance education.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Link to="/about" className="inline-flex items-center text-[#A6192E] font-medium hover:underline">
                                    Learn more about our journey
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                    alt="Lakshya Educational Institute Campus" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                    <p className="text-white text-lg font-semibold">Our Main Campus</p>
                                    <p className="text-white/80 text-sm">Modern facilities designed for optimal learning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Facilities Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">State-of-the-Art Campus Facilities</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our campus is designed to provide students with everything they need for a comprehensive learning experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src="data:image/jpeg;base64,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" 
                                    alt="Modern Library" 
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Library</h3>
                                <p className="text-gray-600">
                                    Our library houses an extensive collection of books, journals, and digital resources for finance, accounting, and business research.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                    alt="Tech-Enabled Classrooms" 
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tech-Enabled Classrooms</h3>
                                <p className="text-gray-600">
                                    Smart classrooms equipped with modern teaching aids and technology to facilitate interactive learning experiences.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                    alt="Study Areas" 
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dedicated Study Areas</h3>
                                <p className="text-gray-600">
                                    Quiet and focused spaces where students can study effectively, with access to high-speed internet and academic resources.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src="https://media.istockphoto.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=0&k=20&c=kFR__hBLIM-0PW6k4lSqAQJGo-ukLu-bbsOQk_V6edA=" 
                                    alt="Computer Labs" 
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Computer Labs</h3>
                                <p className="text-gray-600">
                                    State-of-the-art computer facilities with specialized software for accounting, taxation, and financial analysis.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src="data:image/jpeg;base64,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" 
                                    alt="Student Lounge" 
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Lounge</h3>
                                <p className="text-gray-600">
                                    Relaxation areas where students can unwind, collaborate on projects, and build lasting professional networks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link 
                            to="/campus" 
                            className="inline-flex items-center px-6 py-3 bg-[#A6192E] text-white font-semibold rounded-lg hover:bg-[#8a1425] transition-all duration-300"
                        >
                            Take a Virtual Campus Tour
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Course Cards Section */}
            <section className="py-16 bg-[#ECECEC]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Professional Courses</h2>
                    
                    {/* Course Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleCourses.map((course) => (
                        <div 
                            key={course.id}
                            className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={course.image} 
                                    alt={`${course.title} Course`}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                <h3 className="absolute bottom-0 left-0 w-full p-4 text-xl font-bold text-white bg-gradient-to-t from-black/60 to-transparent">
                                    {course.title}
                                </h3>
                            </div>
                            <div className="p-5">
                                <ul className="mb-5 space-y-2">
                                    {course.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="flex-shrink-0 mr-2 text-[#A6192E]">•</span>
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </li>
                                    ))}
                                </ul>
                                <Link
                                    to={course.link}
                                    className="block w-full text-center px-4 py-2 rounded font-medium bg-[#A6192E] text-white hover:bg-[#8a1425] transition-colors duration-300"
                                >
                                    {course.buttonText}
                                </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${
                                    currentSlide === index ? 'bg-[#A6192E] w-5' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    <div className="flex justify-center mt-8">
                        <Link
                            to="/courses"
                            className="px-6 py-2 border border-[#A6192E] text-[#A6192E] rounded hover:bg-[#A6192E] hover:text-white transition-colors duration-300"
                        >
                            View All Courses
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Redesigned */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
                        What Our Students Say
                    </h2>

                    <div className="relative">
                        {/* Featured Testimonial */}
                        <div className="mb-16 text-center">
                            <div className="inline-block mb-6">
                                <svg className="h-12 w-12 text-[#A6192E] opacity-30" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                            </div>
                            <p className="text-xl text-gray-700 italic max-w-4xl mx-auto mb-6 leading-relaxed">
                                The faculty at Lakshya Edu doesn't just teach concepts—they ensure you understand them thoroughly. Their personalized guidance and continuous support made all the difference in my CA journey. The structured approach to complex topics and regular practice tests helped me clear my exams with confidence.
                            </p>
                            <div>
                                <div className="font-semibold text-gray-900">Ravi Kumar</div>
                                <div className="text-[#A6192E] text-sm">CA Foundation Rank Holder</div>
                            </div>
                        </div>
                        
                        {/* Testimonial Grid - 3 columns */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="testimonial-card">
                                <p className="mb-4 text-gray-700 italic relative pl-6">
                                    <span className="absolute left-0 top-0 text-2xl text-[#A6192E]">"</span>
                                    The online CA classes are a lifesaver! The interactive sessions and doubt-solving support made learning super easy.
                                    <span className="text-2xl text-[#A6192E]">"</span>
                                </p>
                                <div className="border-t border-gray-200 pt-3 mt-3">
                                    <div className="font-semibold text-gray-900">Priya M</div>
                                    <div className="text-gray-500 text-sm">CA Student</div>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <p className="mb-4 text-gray-700 italic relative pl-6">
                                    <span className="absolute left-0 top-0 text-2xl text-[#A6192E]">"</span>
                                    I used to struggle with Cost Accounting, but their real-world examples made complex concepts easy to understand.
                                    <span className="text-2xl text-[#A6192E]">"</span>
                                </p>
                                <div className="border-t border-gray-200 pt-3 mt-3">
                                    <div className="font-semibold text-gray-900">Anirudh S</div>
                                    <div className="text-gray-500 text-sm">CMA Student</div>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <p className="mb-4 text-gray-700 italic relative pl-6">
                                    <span className="absolute left-0 top-0 text-2xl text-[#A6192E]">"</span>
                                    The study material and mentoring sessions have been instrumental in my preparation for the final exams.
                                    <span className="text-2xl text-[#A6192E]">"</span>
                                </p>
                                <div className="border-t border-gray-200 pt-3 mt-3">
                                    <div className="font-semibold text-gray-900">Meera D</div>
                                    <div className="text-gray-500 text-sm">CMA Final</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Testimonial Bottom Row - 2 columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="testimonial-card">
                                <p className="mb-4 text-gray-700 italic relative pl-6">
                                    <span className="absolute left-0 top-0 text-2xl text-[#A6192E]">"</span>
                                    The faculty actually cares about your progress. They take time to clear every doubt, and the personalized guidance makes a difference.
                                    <span className="text-2xl text-[#A6192E]">"</span>
                                </p>
                                <div className="border-t border-gray-200 pt-3 mt-3">
                                    <div className="font-semibold text-gray-900">Sneha R</div>
                                    <div className="text-gray-500 text-sm">ACCA Student</div>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <p className="mb-4 text-gray-700 italic relative pl-6">
                                    <span className="absolute left-0 top-0 text-2xl text-[#A6192E]">"</span>
                                    The structured study plans and regular practice tests helped me stay on track throughout my preparation journey.
                                    <span className="text-2xl text-[#A6192E]">"</span>
                                </p>
                                <div className="border-t border-gray-200 pt-3 mt-3">
                                    <div className="font-semibold text-gray-900">Vikram T</div>
                                    <div className="text-gray-500 text-sm">CA Inter</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Call to Action */}
                        <div className="text-center mt-12">
                            <Link to="/testimonials" className="inline-flex items-center text-[#A6192E] font-medium hover:underline">
                                Read more success stories
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-[#A6192E] text-4xl font-bold mb-2">15+</div>
                            <div className="text-gray-600">Years of Excellence</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-[#A6192E] text-4xl font-bold mb-2">95%</div>
                            <div className="text-gray-600">Success Rate</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-[#A6192E] text-4xl font-bold mb-2">50+</div>
                            <div className="text-gray-600">Expert Faculty</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-[#A6192E] text-4xl font-bold mb-2">10,000+</div>
                            <div className="text-gray-600">Successful Students</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Frequently Asked Questions
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        {faqItems.map((item) => (
                            <div
                                key={item.id}
                                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full text-left p-4 flex items-center justify-between font-medium"
                                >
                                    <span>{item.question}</span>
                                    <svg
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openItem === item.id ? 'transform rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openItem === item.id ? 'max-h-40' : 'max-h-0'}`}
                                >
                                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                                        <p className="text-gray-600">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            to="/faq"
                            className="inline-block px-6 py-2 text-[#A6192E] border border-[#A6192E] rounded hover:bg-[#A6192E] hover:text-white transition-colors duration-300"
                        >
                            View All FAQs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-[#A6192E] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Professional Journey?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Join Lakshya Edu today and take the first step toward a successful career in finance and accounting.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/courses" className="px-8 py-3 bg-white text-[#A6192E] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
                            Explore Programs
                        </Link>
                        <Link to="/contact" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#A6192E] transition-all duration-300">
                            Contact an Advisor
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;