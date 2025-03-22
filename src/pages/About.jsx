import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    // Theme colors
    const theme = {
        primary: '#A6192E',    // Deep Red
        secondary: '#FFD700',  // Gold
    };

    // Key facts about the college
    const collegeStats = [
        { number: "25+", label: "Years of Excellence" },
        { number: "12,000+", label: "Alumni Worldwide" },
        { number: "35+", label: "Specialized Courses" },
        { number: "95%", label: "Placement Rate" }
    ];

    // Core programs
    const programs = [
        {
            title: "Chartered Accountancy (CA)",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            description: "Comprehensive CA program for all levels of chartered accountancy examinations."
        },
        {
            title: "Cost Management Accountancy (CMA)",
            image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            description: "Focused training on cost accounting and management accounting principles."
        },
        {
            title: "ACCA",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            description: "Globally recognized qualification covering international accounting standards."
        },
        {
            title: "B.Com & BBA",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            description: "Undergraduate programs with focus on commerce and business administration."
        }
    ];

    // Faculty members
    const facultyMembers = [
        {
            name: "Dr. Rajiv Sharma",
            role: "Director & Chief Academic Officer",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
        },
        {
            name: "Prof. Meera Patel",
            role: "Head of CA Program",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
        },
        {
            name: "CA Vikram Malhotra",
            role: "Head of Student Placements",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white">
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                ></div>
                
                <div className="relative container mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span style={{ color: theme.secondary }}>Lakshya Edu</span>
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        Excellence in professional education for over 25 years, preparing students for successful careers in accounting and finance.
                    </p>
                    <Link to="/enroll" className="inline-block px-6 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition">
                        Apply Now
                    </Link>
                </div>
            </section>

            {/* About Overview Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <img 
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                alt="College campus" 
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6" style={{ color: theme.primary }}>Our Journey</h2>
                            <p className="text-gray-700 mb-4">
                                Founded in 1997, Lakshya Edu has grown to become one of the premier institutions for professional accounting and finance education in India. We pride ourselves on our student-first approach, expert faculty, and career-focused programs.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Our mission is to provide world-class education that prepares students for professional excellence and leadership in the global financial landscape.
                            </p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                {collegeStats.map((stat, index) => (
                                    <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
                                        <div className="text-2xl font-bold" style={{ color: theme.primary }}>
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Programs Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.primary }}>
                        Our Academic Programs
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((program, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                                <img 
                                    src={program.image} 
                                    alt={program.title} 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-2" style={{ color: theme.primary }}>
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {program.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Campus Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.primary }}>
                        Our Campus
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-64">
                            <img 
                                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                alt="Modern Classrooms" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="font-bold text-lg">Modern Classrooms</h3>
                                <p className="text-sm">Technology-enabled learning spaces</p>
                            </div>
                        </div>
                        
                        <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-64">
                            <img 
                                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                alt="Library" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="font-bold text-lg">Comprehensive Library</h3>
                                <p className="text-sm">Over 50,000 books and digital resources</p>
                            </div>
                        </div>
                        
                        <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-64">
                            <img 
                                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80" 
                                alt="Recreation Facilities" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="font-bold text-lg">Recreation Facilities</h3>
                                <p className="text-sm">For holistic student development</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            
            {/* Faculty Section */}
            {/* <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.primary }}>
                        Our Faculty
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {facultyMembers.map((faculty, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md text-center">
                                <div className="h-64 overflow-hidden">
                                    <img 
                                        src={faculty.image} 
                                        alt={faculty.name} 
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-1" style={{ color: theme.primary }}>
                                        {faculty.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {faculty.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-8">
                        <Link to="/faculty" className="text-base font-medium inline-flex items-center" style={{ color: theme.primary }}>
                            View all faculty members
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
             */}


            {/* Contact CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Start Your Journey With Us</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        Our admissions team is ready to help you explore your options and find the perfect program for your career goals.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/enroll" className="px-6 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition">
                            Apply Now
                        </Link>
                        <Link to="/contact" className="px-6 py-3 bg-transparent border border-white rounded-md font-semibold hover:bg-white/10 transition">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;