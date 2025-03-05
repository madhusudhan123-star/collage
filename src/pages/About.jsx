import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const [activeTab, setActiveTab] = useState('mission');
    const [visibleStats, setVisibleStats] = useState(false);
    const [teamHover, setTeamHover] = useState(null);
    const statsRef = useRef(null);

    // Theme colors (matching Home page)
    const theme = {
        primary: '#A6192E',    // Deep Red
        secondary: '#FFD700',  // Gold
        accent: '#FAF3E0',     // Off-white
        background: '#ECECEC', // Soft Grey
        darkPrimary: '#8B1425', // Darker shade of primary
    };

    // Counter animation for statistics
    const [counters, setCounters] = useState({
        years: 0,
        students: 0,
        courses: 0,
        placements: 0
    });

    const targetCounters = {
        years: 25,
        students: 12000,
        courses: 35,
        placements: 95
    };

    // Team members data
    const teamMembers = [
        {
            id: 1,
            name: "Dr. Rajiv Sharma",
            role: "Director & Chief Academic Officer",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            bio: "Dr. Sharma holds a Ph.D in Finance from Delhi University with over 20 years of experience in accounting education. He has authored several books on advanced accounting principles and serves on the board of multiple educational institutions.",
            achievements: ["Published 15+ Research Papers", "Excellence in Teaching Award (2019)", "Chartered Accountant of the Year (2015)"]
        },
        {
            id: 2,
            name: "Prof. Meera Patel",
            role: "Head of CA Program",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            bio: "Prof. Patel specializes in Corporate Taxation and Financial Reporting. With 15 years of industry experience and 10 years in academia, she brings practical insights to the classroom. She previously worked with EY and KPMG.",
            achievements: ["FCA with All India Rank 5", "Authored 'Modern Approach to Corporate Taxation'", "Member, Accounting Standards Board"]
        },
        {
            id: 3,
            name: "CA Vikram Malhotra",
            role: "Head of Student Placements",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            bio: "CA Malhotra leads our placement division, leveraging his extensive network in the finance industry to create opportunities for students. He specializes in preparing students for interviews and professional challenges.",
            achievements: ["Placed 500+ students in Big 4 firms", "Corporate Relations Expert", "Former CFO of a listed company"]
        },
        {
            id: 4,
            name: "Dr. Aisha Khan",
            role: "Academic Coordinator & CMA Program Head",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
            bio: "Dr. Khan holds a doctorate in Management Accounting and specializes in strategic cost management. Her teaching approach combines theoretical foundations with case studies from her consulting experience.",
            achievements: ["Ph.D from London School of Economics", "Published in Harvard Business Review", "Lead researcher for cost optimization"]
        }
    ];

    // Timeline data
    const timeline = [
        {
            year: "1998",
            title: "Founding",
            description: "Established as a small institute with just 3 faculty members and 45 students."
        },
        {
            year: "2005",
            title: "Expansion",
            description: "Moved to our current campus and expanded programs to include CMA and professional diploma courses."
        },
        {
            year: "2010",
            title: "Recognition",
            description: "Received outstanding educational institute award from the Chamber of Commerce."
        },
        {
            year: "2015",
            title: "International Partnerships",
            description: "Established collaborations with international accounting bodies and universities."
        },
        {
            year: "2023",
            title: "Digital Transformation",
            description: "Launched comprehensive digital learning platforms and hybrid education models."
        }
    ];

    // Intersection observer to trigger counter animation when stats section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleStats(true);
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    // Counter animation effect
    useEffect(() => {
        if (!visibleStats) return;

        const duration = 2000; // 2 seconds for the animation
        const interval = 16; // ~60fps
        const steps = duration / interval;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = Math.min(currentStep / steps, 1);

            setCounters({
                years: Math.floor(progress * targetCounters.years),
                students: Math.floor(progress * targetCounters.students),
                courses: Math.floor(progress * targetCounters.courses),
                placements: Math.floor(progress * targetCounters.placements)
            });

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [visibleStats]);

    // New state for facilities section
    const [activeFacility, setActiveFacility] = useState('classrooms');

    // New state for program section
    const [expandedProgram, setExpandedProgram] = useState(null);

    // Facilities data
    const facilities = [
        {
            id: 'classrooms',
            title: 'Modern Classrooms',
            description: 'Technology-enabled learning spaces designed for interactive teaching with smart boards, audio-visual systems, and comfortable seating.',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            stats: [
                { label: 'Smart Classrooms', value: '24' },
                { label: 'Average Class Size', value: '35' },
                { label: 'Discussion Rooms', value: '12' }
            ]
        },
        {
            id: 'library',
            title: 'Comprehensive Library',
            description: 'Our extensive library houses over 50,000 volumes, digital databases, and quiet study areas for focused learning and research.',
            image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            stats: [
                { label: 'Books & Resources', value: '50,000+' },
                { label: 'Digital Databases', value: '15' },
                { label: 'Study Carrels', value: '75' }
            ]
        },
        {
            id: 'computer-labs',
            title: 'Advanced Computer Labs',
            description: 'State-of-the-art computing facilities with specialized software for accounting, taxation, financial modeling, and data analysis.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            stats: [
                { label: 'Computer Stations', value: '120' },
                { label: 'Professional Software', value: '25+' },
                { label: 'High-Speed Internet', value: '1 Gbps' }
            ]
        },
        {
            id: 'recreation',
            title: 'Recreation Facilities',
            description: 'We believe in holistic development. Our campus features sports courts, fitness center, and recreation areas for students to unwind and maintain physical well-being.',
            image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
            stats: [
                { label: 'Sports Courts', value: '4' },
                { label: 'Fitness Equipment', value: '30+' },
                { label: 'Recreation Areas', value: '3' }
            ]
        }
    ];

    // Academic programs data
    const programs = [
        {
            id: 1,
            title: 'Chartered Accountancy (CA)',
            icon: '📊',
            levels: [
                {
                    name: 'CA Foundation',
                    duration: '8-9 months',
                    highlights: [
                        'Principles of Accounting',
                        'Business Mathematics & Statistics',
                        'Business Law & Ethics',
                        'Business Economics & Environment'
                    ]
                },
                {
                    name: 'CA Intermediate',
                    duration: '1-1.5 years',
                    highlights: [
                        'Advanced Accounting',
                        'Corporate & Economic Laws',
                        'Cost Management',
                        'Taxation & Auditing'
                    ]
                },
                {
                    name: 'CA Final',
                    duration: '1-1.5 years',
                    highlights: [
                        'Financial Reporting',
                        'Strategic Financial Management',
                        'Advanced Auditing',
                        'Direct & Indirect Tax Laws'
                    ]
                }
            ],
            description: 'Our comprehensive CA program prepares students for all levels of the Chartered Accountancy examinations with expert faculty guidance, specialized study materials, and regular practice tests.'
        },
        {
            id: 2,
            title: 'Cost & Management Accountancy (CMA)',
            icon: '💼',
            levels: [
                {
                    name: 'CMA Foundation',
                    duration: '6 months',
                    highlights: [
                        'Fundamentals of Economics & Management',
                        'Financial Accounting',
                        'Business Mathematics & Statistics'
                    ]
                },
                {
                    name: 'CMA Intermediate',
                    duration: '1 year',
                    highlights: [
                        'Cost Accounting',
                        'Laws & Ethics',
                        'Direct & Indirect Taxation',
                        'Operations Management'
                    ]
                },
                {
                    name: 'CMA Final',
                    duration: '1 year',
                    highlights: [
                        'Corporate Financial Reporting',
                        'Strategic Cost Management',
                        'Strategic Performance Management',
                        'Corporate Laws & Compliance'
                    ]
                }
            ],
            description: 'The CMA program focuses on developing expertise in cost accounting, management accounting, and strategic financial management for careers in both industry and practice.'
        },
        {
            id: 3,
            title: 'Association of Chartered Certified Accountants (ACCA)',
            icon: '🌐',
            levels: [
                {
                    name: 'Knowledge Level',
                    duration: '6-12 months',
                    highlights: [
                        'Business and Technology',
                        'Management Accounting',
                        'Financial Accounting'
                    ]
                },
                {
                    name: 'Skills Level',
                    duration: '1 year',
                    highlights: [
                        'Corporate and Business Law',
                        'Performance Management',
                        'Taxation',
                        'Financial Reporting'
                    ]
                },
                {
                    name: 'Professional Level',
                    duration: '1 year',
                    highlights: [
                        'Advanced Financial Management',
                        'Advanced Performance Management',
                        'Advanced Taxation',
                        'Strategic Business Reporting'
                    ]
                }
            ],
            description: 'Our ACCA program offers global recognition and qualification with comprehensive coverage of international accounting standards and practices for a worldwide career.'
        }
    ];

    return (
        <div>
            {/* Hero Section with Parallax Effect */}
            <section className="relative overflow-hidden bg-gray-900 text-white">
                {/* Background Image with Parallax */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed"
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 py-32">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            About
                            <span style={{ color: theme.secondary }}> Our Institute</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-300">
                            Excellence in professional education since 1998. Discover our story, mission, and the people who make us a leading institute in accounting and finance education.
                        </p>

                        {/* Tabs for different sections */}
                        <div className="flex flex-wrap space-x-1 space-y-1 md:space-y-0 mb-8">
                            {['mission', 'vision', 'values', 'history'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-5 py-2 rounded-md capitalize transition-colors ${activeTab === tab
                                            ? `bg-[${theme.secondary}] text-[${theme.primary}] font-bold`
                                            : 'bg-white/10 hover:bg-white/20'
                                        }`}
                                    style={activeTab === tab ? { backgroundColor: theme.secondary, color: theme.primary } : {}}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-fadeIn">
                            {activeTab === 'mission' && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold" style={{ color: theme.secondary }}>Our Mission</h2>
                                    <p>
                                        We strive to provide world-class education in accounting, finance, and management that prepares students for professional excellence and leadership. Our mission is to develop skilled professionals who can navigate the complexities of the global financial landscape with integrity and expertise.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                                        <li>Deliver high-quality education that meets professional standards</li>
                                        <li>Foster critical thinking and analytical skills</li>
                                        <li>Promote ethical practices in business and finance</li>
                                        <li>Facilitate industry connections for practical learning</li>
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'vision' && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold" style={{ color: theme.secondary }}>Our Vision</h2>
                                    <p>
                                        To be recognized as the premier institute for professional accounting and finance education in the country, known for producing leaders who transform the industry through innovation, ethics, and excellence.
                                    </p>
                                    <div className="flex items-center justify-center my-6">
                                        <div className="h-40 w-0.5 bg-gradient-to-b from-transparent via-yellow-300 to-transparent"></div>
                                    </div>
                                    <p className="text-center italic">
                                        "Creating tomorrow's financial leaders today"
                                    </p>
                                </div>
                            )}

                            {activeTab === 'values' && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold" style={{ color: theme.secondary }}>Our Core Values</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded-lg">
                                            <h3 className="font-bold mb-2">Excellence</h3>
                                            <p>Pursuing the highest standards in education, research, and student outcomes</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-lg">
                                            <h3 className="font-bold mb-2">Integrity</h3>
                                            <p>Upholding ethical conduct and transparency in all our actions</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-lg">
                                            <h3 className="font-bold mb-2">Innovation</h3>
                                            <p>Embracing new ideas and approaches to stay ahead in a changing world</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-lg">
                                            <h3 className="font-bold mb-2">Community</h3>
                                            <p>Building meaningful relationships among students, faculty, and alumni</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'history' && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold" style={{ color: theme.secondary }}>Our Journey</h2>
                                    <div className="relative">
                                        {/* Timeline Line */}
                                        <div className="absolute left-3 top-5 bottom-5 w-0.5 bg-gray-400"></div>

                                        {/* Timeline Events */}
                                        <div className="space-y-8 relative">
                                            {timeline.map((event, index) => (
                                                <div key={index} className="ml-10 relative">
                                                    {/* Timeline Dot */}
                                                    <div
                                                        className="absolute -left-11 w-6 h-6 rounded-full border-4 border-gray-400 flex items-center justify-center"
                                                        style={{ backgroundColor: theme.secondary }}
                                                    >
                                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                                    </div>

                                                    {/* Event Content */}
                                                    <div>
                                                        <span className="text-sm text-gray-300 font-mono">{event.year}</span>
                                                        <h3 className="font-bold">{event.title}</h3>
                                                        <p className="text-gray-300">{event.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Statistics with Counter Animation */}
                <div
                    className="relative z-10 py-12 bg-black/30 backdrop-blur-sm border-t border-b border-white/10"
                    ref={statsRef}
                >
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center">
                            <div className="w-full md:w-1/4 p-4">
                                <div className="text-4xl font-bold mb-2" style={{ color: theme.secondary }}>
                                    {counters.years}+
                                </div>
                                <div className="uppercase tracking-wide">Years of Excellence</div>
                            </div>
                            <div className="w-full md:w-1/4 p-4">
                                <div className="text-4xl font-bold mb-2" style={{ color: theme.secondary }}>
                                    {counters.students.toLocaleString()}+
                                </div>
                                <div className="uppercase tracking-wide">Alumni Worldwide</div>
                            </div>
                            <div className="w-full md:w-1/4 p-4">
                                <div className="text-4xl font-bold mb-2" style={{ color: theme.secondary }}>
                                    {counters.courses}+
                                </div>
                                <div className="uppercase tracking-wide">Specialized Courses</div>
                            </div>
                            <div className="w-full md:w-1/4 p-4">
                                <div className="text-4xl font-bold mb-2" style={{ color: theme.secondary }}>
                                    {counters.placements}%
                                </div>
                                <div className="uppercase tracking-wide">Placement Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faculty/Team Section */}
            <section className="py-20" style={{ backgroundColor: theme.background }}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: theme.primary }}>
                            Meet Our Leadership
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our experienced and dedicated team of educators and professionals are committed to providing you with the best learning experience and guidance.
                        </p>
                    </div>

                    {/* Team Grid with Interactive Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="group relative perspective-1000"
                                onMouseEnter={() => setTeamHover(member.id)}
                                onMouseLeave={() => setTeamHover(null)}
                            >
                                {/* Card Front */}
                                <div
                                    className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out ${teamHover === member.id ? 'rotate-y-180 opacity-0' : 'opacity-100'
                                        }`}
                                >
                                    <div className="relative h-80">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-center"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-xl font-bold">{member.name}</h3>
                                            <p className="text-sm text-white/80">{member.role}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Back */}
                                <div
                                    className={`absolute inset-0 rounded-lg shadow-lg bg-white p-6 transition-all duration-500 ease-in-out ${teamHover === member.id ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-180'
                                        }`}
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: teamHover === member.id ? 'rotateY(0deg)' : 'rotateY(180deg)'
                                    }}
                                >
                                    <div>
                                        <h3 className="text-xl font-bold mb-2" style={{ color: theme.primary }}>{member.name}</h3>
                                        <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                                        <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                                        <div>
                                            <h4 className="font-semibold mb-2 text-sm" style={{ color: theme.primary }}>Key Achievements:</h4>
                                            <ul className="text-xs space-y-1">
                                                {member.achievements.map((achievement, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <svg className="w-3 h-3 mt-1 mr-1 flex-shrink-0" style={{ color: theme.secondary }} fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-gray-700">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-12">
                        <Link
                            to="/faculty"
                            className="inline-block px-8 py-3 rounded-md font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            style={{ backgroundColor: theme.primary }}
                        >
                            Meet Our Full Faculty Team
                        </Link>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: Campus Facilities */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: theme.primary }}>
                            Campus Facilities
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our modern campus provides students with all the resources they need to excel in their professional education journey.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Facility Navigation */}
                        <div className="lg:w-1/4">
                            <div className="sticky top-24 bg-white">
                                <h3 className="text-xl font-bold mb-6" style={{ color: theme.primary }}>Our Facilities</h3>
                                <ul className="space-y-2">
                                    {facilities.map(facility => (
                                        <li key={facility.id}>
                                            <button
                                                onClick={() => setActiveFacility(facility.id)}
                                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeFacility === facility.id
                                                        ? 'bg-opacity-100 text-white font-medium'
                                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                                    }`}
                                                style={activeFacility === facility.id ? { backgroundColor: theme.primary } : {}}
                                            >
                                                {facility.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 p-4 rounded-lg border-l-4" style={{ borderColor: theme.secondary, backgroundColor: theme.background }}>
                                    <p className="text-sm text-gray-600 italic">
                                        "Our campus is designed to provide an ideal environment for academic excellence and personal growth."
                                    </p>
                                    <p className="text-xs mt-2 font-medium" style={{ color: theme.primary }}>— Campus Director</p>
                                </div>
                            </div>
                        </div>

                        {/* Facility Details */}
                        <div className="lg:w-3/4">
                            {facilities.map(facility => (
                                <div
                                    key={facility.id}
                                    className={`transition-all duration-500 ${activeFacility === facility.id ? 'opacity-100' : 'hidden opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden rounded-xl mb-6">
                                        <img
                                            src={facility.image}
                                            alt={facility.title}
                                            className="w-full h-96 object-cover object-center hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
                                        {facility.title}
                                    </h3>

                                    <p className="text-gray-700 mb-8">{facility.description}</p>

                                    {/* Stats */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        {facility.stats.map((stat, index) => (
                                            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center shadow-sm border" style={{ borderColor: theme.background }}>
                                                <div className="text-2xl font-bold" style={{ color: theme.primary }}>{stat.value}</div>
                                                <div className="text-sm text-gray-600">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Call to action */}
                                    <div className="mt-6">
                                        <Link
                                            to="/campus-tour"
                                            className="inline-flex items-center text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-lg"
                                            style={{ backgroundColor: theme.primary }}
                                        >
                                            <span>Schedule a Campus Tour</span>
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: Academic Programs */}
            <section className="py-20" style={{ backgroundColor: theme.background }}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: theme.primary }}>
                            Our Academic Programs
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We offer comprehensive courses designed to prepare students for successful careers in finance, accounting, and management.
                        </p>
                    </div>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        {programs.map(program => (
                            <div
                                key={program.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
                            >
                                {/* Program Header */}
                                <div
                                    className={`px-6 py-5 flex justify-between items-center cursor-pointer ${expandedProgram === program.id ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                                    style={expandedProgram === program.id ? { backgroundColor: theme.accent } : {}}
                                >
                                    <div className="flex items-center">
                                        <span className="text-3xl mr-4">{program.icon}</span>
                                        <h3 className="font-bold text-xl" style={{ color: theme.primary }}>
                                            {program.title}
                                        </h3>
                                    </div>
                                    <button
                                        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                                        aria-label="Toggle program details"
                                    >
                                        <svg
                                            className={`w-6 h-6 transition-transform duration-300 ${expandedProgram === program.id ? 'transform rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ color: theme.primary }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Program Details (Expandable) */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ${expandedProgram === program.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6">
                                        <p className="text-gray-700 mb-6">{program.description}</p>

                                        {/* Program Levels */}
                                        <div className="relative">
                                            {/* Timeline Line */}
                                            <div className="absolute left-8 top-5 bottom-5 w-0.5" style={{ backgroundColor: theme.secondary, opacity: 0.3 }}></div>

                                            <div className="space-y-8">
                                                {program.levels.map((level, index) => (
                                                    <div key={index} className="flex">
                                                        {/* Timeline Circle */}
                                                        <div
                                                            className="relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 mt-2"
                                                            style={{ backgroundColor: theme.primary }}
                                                        >
                                                            <span className="text-white font-bold">{index + 1}</span>
                                                        </div>

                                                        {/* Level Content */}
                                                        <div className="ml-6">
                                                            <h4 className="text-lg font-bold" style={{ color: theme.primary }}>{level.name}</h4>
                                                            <p className="text-sm text-gray-500 mb-2">Duration: {level.duration}</p>

                                                            <h5 className="font-medium mt-3 mb-2" style={{ color: theme.darkPrimary }}>Key Subjects:</h5>
                                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                                {level.highlights.map((highlight, i) => (
                                                                    <li key={i} className="flex items-center text-gray-700">
                                                                        <span
                                                                            className="w-2 h-2 rounded-full mr-2"
                                                                            style={{ backgroundColor: theme.secondary }}
                                                                        ></span>
                                                                        {highlight}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="mt-8 text-center">
                                            <Link
                                                to={`/programs/${program.id}`}
                                                className="inline-block px-6 py-3 rounded-md text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                                style={{ backgroundColor: theme.primary }}
                                            >
                                                Explore {program.title} Program
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* General CTA Card */}
                    <div className="mt-16 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl relative">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                className="w-full h-full object-cover"
                                alt="Students collaborating"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-12 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Professional Journey Today</h3>
                            <p className="mb-6 max-w-lg">
                                Our admissions team is ready to guide you through the enrollment process and help you choose the right program for your career goals.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/admissions"
                                    className="px-6 py-3 rounded-md font-semibold bg-white hover:bg-opacity-90 transition-all duration-300"
                                    style={{ color: theme.primary }}
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-6 py-3 rounded-md bg-transparent border border-white text-white hover:bg-white/20 transition-all duration-300"
                                >
                                    Contact an Advisor
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;