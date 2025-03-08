import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

// Theme colors
const theme = {
    primary: '#A6192E',    // Deep Red
    secondary: '#FFD700',  // Gold
    accent: '#FAF3E0',     // Off-white
    background: '#ECECEC', // Soft Grey
    darkPrimary: '#8B1425', // Darker shade of primary
    lightSecondary: '#FFF0A3', // Lighter shade of gold
};

// Dropdown items data
// const faqItems = [
//     {
//         id: 1,
//         question: "What professional courses do you offer?",
//         answer: "A student who wants to pursue CA or CMA he/she can start the course after completion of their intermediate (i.e 12 th ) or During their Degree"
//     },
//     {
//         id: 2,
//         question: "How are your placement services structured?",
//         answer: "Our placement cell maintains strong connections with leading companies across industries. We provide career counseling, resume building workshops, interview preparation sessions, and campus recruitment drives. Our placement record consistently shows high success rates with students securing positions in top firms."
//     },
//     {
//         id: 3,
//         question: "What is your teaching methodology?",
//         answer: "We employ a blend of traditional and modern teaching approaches. Our methodology includes interactive classroom sessions, case studies, practical assignments, industry projects, and digital learning resources. We focus on concept clarity, practical application, and exam preparation techniques."
//     },
//     {
//         id: 4,
//         question: "What facilities are available on campus?",
//         answer: "Our campus features state-of-the-art classrooms, a comprehensive library with digital resources, computer labs with latest software, discussion rooms for group studies, cafeteria, sports facilities, and dedicated spaces for extracurricular activities. All facilities are designed to provide a conducive learning environment."
//     }
// ];
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


// Video slider data
const videoData = [
    {
        id: 1,
        title: "Campus Tour",
        description: "Take a virtual tour around our state-of-the-art campus facilities",
        thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-university-campus-with-students-walking-around-4519-large.mp4"
    },
    {
        id: 2,
        title: "Student Testimonials",
        description: "Hear what our successful alumni have to say about their experience",
        thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-group-of-college-students-working-together-4330-large.mp4"
    },
    {
        id: 3,
        title: "Faculty Insights",
        description: "Our professors share their teaching philosophy and approach",
        thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-teacher-talking-in-a-classroom-with-a-student-6057-large.mp4"
    },
    {
        id: 4,
        title: "Placement Success Stories",
        description: "Discover how our students land top positions in leading companies",
        thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-team-meeting-in-an-office-4814-large.mp4"
    }
];

const Home = () => {
    const [openItem, setOpenItem] = useState(null);
    const [showMoreContent, setShowMoreContent] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const testimonialContainerRef = useRef(null);
    const videoTestimonialContainerRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const videoScrollIntervalRef = useRef(null);
    const scrollAmountRef = useRef(0);
    const videoScrollAmountRef = useRef(0);
    const scrollSpeedRef = useRef(0.5); // pixels per frame
    const [isVideoAutoScrolling, setIsVideoAutoScrolling] = useState(true);

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    const toggleMoreContent = () => {
        setShowMoreContent(!showMoreContent);
    };

    const handleVideoNav = (index) => {
        setCurrentVideo(index);
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
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

    // Auto-scrolling effect for video testimonials
    useEffect(() => {
        const videoContainer = videoTestimonialContainerRef.current;
        if (!videoContainer) return;

        const handleScroll = () => {
            if (isVideoAutoScrolling) {
                videoScrollAmountRef.current += scrollSpeedRef.current;
                
                // Reset if we've scrolled to the bottom
                if (videoScrollAmountRef.current >= videoContainer.scrollHeight - videoContainer.clientHeight) {
                    videoScrollAmountRef.current = 0;
                }
                
                videoContainer.scrollTop = videoScrollAmountRef.current;
            }
        };

        const startAnimation = () => {
            videoScrollIntervalRef.current = requestAnimationFrame(startAnimation);
            handleScroll();
        };

        if (isVideoAutoScrolling) {
            startAnimation();
        }

        return () => {
            if (videoScrollIntervalRef.current) {
                cancelAnimationFrame(videoScrollIntervalRef.current);
            }
        };
    }, [isVideoAutoScrolling]);

    // Pause auto-scroll for video testimonials when hovering
    const handleVideoMouseEnter = () => {
        setIsVideoAutoScrolling(false);
    };

    const handleVideoMouseLeave = () => {
        setIsVideoAutoScrolling(true);
        // Reset the scroll position to avoid jumps
        if (videoTestimonialContainerRef.current) {
            videoScrollAmountRef.current = videoTestimonialContainerRef.current.scrollTop;
        }
    };

    return (
        <div>
            {/* Hero Section with Image Slider Background */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Image Slider Background */}
                <div className="absolute inset-0">
                    <ImageSlider autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false} />
                    {/* Overlay to darken images and make text more readable */}
                    <div className="absolute inset-0 bg-black opacity-40 z-20"></div>
                </div>

                {/* Hero Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                        <span>Welcome to Lakshya Edu</span>
                        <br />
                        <span className="mt-3 block text-[#A6192E]">Your Path to Success!</span>
                    </h1>

                    <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 max-w-3xl">
                        Excellence in education for CA, CMA, and professional courses
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            to="/courses"
                            className="px-8 py-3 bg-[#A6192E] text-white font-semibold rounded-md shadow-lg hover:bg-[#8B1425] transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Explore Courses
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-3 bg-white text-[#A6192E] font-semibold rounded-md shadow-lg hover:bg-[#FAF3E0] transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Scrolling indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <svg
                            className="w-10 h-10 text-[#FFD700]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Third Section with Course Cards */}
            <section className="py-20 bg-[#ECECEC]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#A6192E]">
                        Explore Our <span className="relative inline-block">
                            Courses
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#FFD700] rounded-full"></span>
                        </span>
                    </h2>

                    {/* Course Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* CA Course Card */}
                        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#A6192E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="CA Course"
                                    className="w-full h-52 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 bg-[#FFD700] text-gray-800 font-medium rounded-full shadow-lg flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <span>Popular</span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>
                            <div className="p-6 relative">
                                <div className="absolute -top-12 left-6 w-12 h-12 rounded-full bg-[#A6192E] shadow-lg flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 mt-2 text-[#A6192E]">CA (Chartered Accountant)</h3>
                                <ul className="mb-6 space-y-3">
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mr-2 text-[#FFD700] text-lg">✓</span>
                                        <span className="text-gray-700">Foundation, Intermediate & Final Levels</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mr-2 text-[#FFD700] text-lg">✓</span>
                                        <span className="text-gray-700">Accounting, Taxation, Auditing & Law</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mr-2 text-[#FFD700] text-lg">✓</span>
                                        <span className="text-gray-700">Expert Faculty with Industry Experience</span>
                                    </li>
                                </ul>
                                <Link
                                    to="/courses/ca"
                                    className="relative overflow-hidden w-full block text-center px-4 py-3 rounded-lg font-semibold bg-[#A6192E] text-white shadow-md hover:shadow-xl transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/20 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
                                >
                                    <span className="relative text-black z-10">Explore CA Program</span>
                                </Link>
                            </div>
                        </div>

                        {/* CMA Course Card */}
                        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#A6192E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="CMA Course"
                                    className="w-full h-52 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>
                            <div className="p-6 relative">
                                <div className="absolute -top-12 left-6 w-12 h-12 rounded-full bg-[#A6192E] shadow-lg flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 mt-2 text-[#A6192E]">CMA (Cost & Management)</h3>
                                <ul className="mb-6 space-y-3">
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mr-2 text-[#FFD700] text-lg">✓</span>
                                        <span className="text-gray-700">Foundation, Intermediate & Final Levels</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mr-2 text-[#FFD700] text-lg">✓</span>
                                        <span className="text-gray-700">Costing, Financial Management & Strategy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mr-2 text-[#FFD700] text-lg">✓</span>
                                        <span className="text-gray-700">Real-time Practice & Mock Exams</span>
                                    </li>
                                </ul>
                                <Link
                                    to="/courses/cma"
                                    className="relative overflow-hidden w-full block text-center px-4 py-3 rounded-lg font-semibold bg-[#A6192E] text-white shadow-md hover:shadow-xl transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/20 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
                                >
                                    <span className="relative text-black z-10">Explore CMA Program</span>
                                </Link>
                            </div>
                        </div>

                        {/* ACCA Course Card */}
                        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="ACCA Course"
                                    className="w-full h-52 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 bg-[#A6192E] text-white font-medium rounded-full shadow-lg flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                                    </svg>
                                    <span>International</span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>
                            <div className="p-6 relative">
                                <div className="absolute -top-12 left-6 w-12 h-12 rounded-full bg-[#FFD700] shadow-lg flex items-center justify-center text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 mt-2 text-[#A6192E]">ACCA Certification</h3>
                                <ul className="mb-6 space-y-3">
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mr-2 text-[#FFD700] text-lg">✓</span>
                                        <span className="text-gray-700">F1 to F9 & Strategic Level Papers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mr-2 text-[#FFD700] text-lg">✓</span>
                                        <span className="text-gray-700">Globally Recognized Qualification</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mr-2 text-[#FFD700] text-lg">✓</span>
                                        <span className="text-gray-700">International Career Opportunities</span>
                                    </li>
                                </ul>
                                <Link
                                    to="/courses/acca"
                                    className="relative overflow-hidden w-full block text-center px-4 py-3 rounded-lg font-semibold bg-[#A6192E] text-white shadow-md hover:shadow-xl transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/20 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
                                >
                                    <span className="relative text-black z-10">Explore ACCA Program</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Centered Dropdown Button */}
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={toggleMoreContent}
                            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[#A6192E] text-[#A6192E] font-bold shadow-lg hover:bg-[#A6192E] hover:text-white transition-all duration-300"
                        >
                            <span>{showMoreContent ? 'Show Less' : 'Discover More Programs'}</span>
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${showMoreContent ? 'transform rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Expandable Content Area */}
                    <div className={`mt-12 transition-all duration-500 ease-in-out overflow-hidden ${showMoreContent ? 'max-h-[400vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* BBA & B.Com Card */}
                            <div className="group relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="flex flex-col md:flex-row h-full">
                                    <div className="md:w-2/5 relative overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                                            alt="BBA & B.Com"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t md:from-black/50 md:to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 md:bottom-auto md:left-auto md:top-4 md:right-4 px-3 py-1 bg-[#FFD700] text-gray-800 font-medium rounded-full shadow-lg">
                                            Undergraduate
                                        </div>
                                    </div>
                                    <div className="md:w-3/5 p-6 flex flex-col justify-center relative">
                                        <div className="hidden md:block absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#A6192E] rotate-45"></div>
                                        <div className="relative">
                                            <h3 className="text-2xl font-bold mb-4 text-[#A6192E]">BBA & B.Com Coaching</h3>
                                            <div className="space-y-3 mb-6">
                                                <p className="flex items-start">
                                                    <span className="flex-shrink-0 mr-2 text-[#FFD700] font-bold text-xl">✓</span>
                                                    <span className="text-gray-700">Business Management, Economics & Accounting</span>
                                                </p>
                                                <p className="flex items-start">
                                                    <span className="flex-shrink-0 mr-2 text-[#FFD700] font-bold text-xl">✓</span>
                                                    <span className="text-gray-700">University exam-focused coaching</span>
                                                </p>
                                                <p className="flex items-start">
                                                    <span className="flex-shrink-0 mr-2 text-[#FFD700] font-bold text-xl">✓</span>
                                                    <span className="text-gray-700">Real-world business applications</span>
                                                </p>
                                            </div>
                                            <Link
                                                to="/courses/bba-bcom"
                                                className="inline-block px-6 py-3 rounded-lg bg-[#A6192E] text-white font-medium hover:bg-[#8B1425] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Intermediate Card */}
                            <div className="group relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="flex flex-col md:flex-row h-full">
                                    <div className="md:w-2/5 relative overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                                            alt="Intermediate Coaching"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t md:from-black/50 md:to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 md:bottom-auto md:left-auto md:top-4 md:right-4 px-3 py-1 bg-[#A6192E] text-white font-medium rounded-full shadow-lg">
                                            Foundation
                                        </div>
                                    </div>
                                    <div className="md:w-3/5 p-6 flex flex-col justify-center relative">
                                        <div className="hidden md:block absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#A6192E] rotate-45"></div>
                                        <div className="relative">
                                            <h3 className="text-2xl font-bold mb-4 text-[#A6192E]">Intermediate (MEC & CEC)</h3>
                                            <div className="space-y-3 mb-6">
                                                <p className="flex items-start">
                                                    <span className="flex-shrink-0 mr-2 text-[#FFD700] font-bold text-xl">✓</span>
                                                    <span className="text-gray-700">Foundation courses for commerce & business</span>
                                                </p>
                                                <p className="flex items-start">
                                                    <span className="flex-shrink-0 mr-2 text-[#FFD700] font-bold text-xl">✓</span>
                                                    <span className="text-gray-700">Board exam preparation with in-depth training</span>
                                                </p>
                                                <p className="flex items-start">
                                                    <span className="flex-shrink-0 mr-2 text-[#FFD700] font-bold text-xl">✓</span>
                                                    <span className="text-gray-700">Subject expertise & conceptual clarity</span>
                                                </p>
                                            </div>
                                            <Link
                                                to="/courses/intermediate"
                                                className="inline-block px-6 py-3 rounded-lg bg-[#A6192E] text-white font-medium hover:bg-[#8B1425] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fourth Section with video slider */}
            <section className="py-20 bg-[#FAF3E0]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[#A6192E]">
                        Experience Our Institute
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        {/* Main Video Display */}
                        <div className="w-full lg:w-3/5 relative rounded-xl overflow-hidden shadow-2xl">
                            {/* Video Overlay when not playing */}
                            {!isPlaying && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                                    <button
                                        onClick={handlePlayPause}
                                        className="w-20 h-20 rounded-full bg-[#A6192E] bg-opacity-90 flex items-center justify-center transform transition-transform hover:scale-110"
                                    >
                                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            )}

                            {/* Video Element */}
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover aspect-video"
                                src={videoData[currentVideo].videoUrl}
                                poster={videoData[currentVideo].thumbnail}
                                onEnded={() => setIsPlaying(false)}
                                controls={isPlaying}
                            />

                            {/* Video Info */}
                            <div className={`absolute bottom-0 left-0 right-0 p-6 ${isPlaying ? 'bg-transparent' : 'bg-gradient-to-t from-black to-transparent'}`}>
                                <h3 className="text-2xl font-bold text-white mb-2">{videoData[currentVideo].title}</h3>
                                {!isPlaying && (
                                    <p className="text-white text-opacity-90">{videoData[currentVideo].description}</p>
                                )}
                            </div>
                        </div>
                        {/* Video Thumbnails */}
                        <div className="w-full lg:w-2/5">
                            <div className="flex flex-col space-y-4">
                                {videoData.map((video, index) => (
                                    <div
                                        key={video.id}
                                        className={`flex cursor-pointer rounded-lg overflow-hidden shadow-md ${currentVideo === index ? 'ring-2 ring-[#A6192E]' : 'hover:bg-gray-100'}`}
                                        onClick={() => handleVideoNav(index)}
                                    >
                                        {/* Thumbnail */}
                                        <div className="w-1/3 relative">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-24 object-cover"
                                            />
                                            <div className={`absolute inset-0 flex items-center justify-center ${currentVideo === index ? 'bg-black bg-opacity-60' : 'bg-black bg-opacity-30'}`}>
                                                <svg className={`w-8 h-8 ${currentVideo === index ? 'text-[#FFD700]' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Video Info */}
                                        <div className={`w-2/3 p-4 ${currentVideo === index ? 'bg-[#ECECEC]' : 'bg-white'}`}>
                                            <h4 className={`font-bold ${currentVideo === index ? 'text-[#A6192E]' : 'text-gray-800'}`}>{video.title}</h4>
                                            <p className="text-sm text-gray-600">{video.description}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* More Videos Button */}
                                <Link
                                    to="/videos"
                                    className="mt-4 text-center py-3 bg-white border border-[#A6192E] text-[#A6192E] rounded-lg hover:bg-[#A6192E] hover:text-white transition-colors"
                                >
                                    View All Videos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Images slide section */}
            <section className="py-16 bg-[#ECECEC]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[#A6192E]">
                        Our Campus Gallery
                    </h2>

                    <ImageSlider />
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-[#A6192E]">
                        Student <span className="relative inline-block">
                            Testimonials
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#FFD700] rounded-full"></span>
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Video Testimonials */}
                        <div className="relative">
                            {/* Video Testimonial Controls */}
                            <div className="absolute -top-12 right-4 flex items-center space-x-2 z-10">
                                <button 
                                    onClick={() => setIsVideoAutoScrolling(!isVideoAutoScrolling)}
                                    className={`p-2 rounded-full transition-colors ${isVideoAutoScrolling ? 'bg-[#A6192E] text-white' : 'bg-gray-200 text-gray-600'}`}
                                    title={isVideoAutoScrolling ? "Pause Video Scrolling" : "Play Video Scrolling"}
                                >
                                    {isVideoAutoScrolling ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            
                            <div 
                                ref={videoTestimonialContainerRef}
                                onMouseEnter={handleVideoMouseEnter}
                                onMouseLeave={handleVideoMouseLeave}
                                className="space-y-6 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 transition-all duration-300"
                            >
                                {/* Main Video */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <video
                                        className="w-full aspect-video object-cover"
                                        poster="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3"
                                        controls
                                    >
                                        <source src="/path/to/testimonial-video.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                {/* Additional Video Testimonials */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <video
                                        className="w-full aspect-video object-cover"
                                        poster="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
                                        controls
                                    >
                                        <source src="/path/to/testimonial-video-2.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <video
                                        className="w-full aspect-video object-cover"
                                        poster="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                                        controls
                                    >
                                        <source src="/path/to/testimonial-video-3.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            
                            {/* Gradient overlay to indicate more content */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                        </div>
                        
                        {/* Text Testimonials */}
                        <div className="relative">
                            {/* Testimonial Controls */}
                            <div className="absolute -top-12 right-4 flex items-center space-x-2 z-10">
                                <button 
                                    onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                                    className={`p-2 rounded-full transition-colors ${isAutoScrolling ? 'bg-[#A6192E] text-white' : 'bg-gray-200 text-gray-600'}`}
                                    title={isAutoScrolling ? "Pause" : "Play"}
                                >
                                    {isAutoScrolling ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            
                            <div 
                                ref={testimonialContainerRef}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="space-y-8 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 transition-all duration-300"
                            >
                                {/* Additional Testimonials */}
                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Priya M</h4>
                                            {/* <p className="text-sm text-[#A6192E]">CA Foundation Topper</p> */}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        The online CA classes are a lifesaver! I was worried about studying from home, but the interactive sessions, doubt-solving support, and recorded lectures made learning super easy 
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Ravi Kumar</h4>
                                            {/* <p className="text-sm text-[#A6192E]">CA Foundation Topper</p> */}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        Lakshya Edu made CA Foundation so much easier for me! The faculty explains concepts in a way that just clicks, and the mock tests helped me prepare confidently. I cleared my exam on the first attempt!
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Anirudh S</h4>
                                            {/* <p className="text-sm text-[#A6192E]">CA Foundation Topper</p> */}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        I used to struggle with Cost Accounting, but the way they teach here is amazing. They give real-world examples that make concepts easy to understand. I finally feel confident in my CMA preparation!
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Meera Desai</h4>
                                            <p className="text-sm text-[#A6192E]">CMA Final Student</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        "The study material and mock tests provided by Lakshya are comprehensive and well-structured. The personal mentoring sessions have been instrumental in my preparation."
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Sneha R</h4>
                                            {/* <p className="text-sm text-[#A6192E]">ACCA Advanced Level</p> */}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        The best part about Lakshya Edu? The faculty actually cares about your progress. They take time to clear every doubt, and the personalized guidance really makes a difference
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Vikram T</h4>
                                            {/* <p className="text-sm text-[#A6192E]">B.Com Graduate</p> */}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        I joined Lakshya Edu for CA coaching, and I can say it’s the best decision I made. The structured study plans and regular practice tests helped me stay on track
                                    </p>
                                </div>
                                                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Megha P</h4>
                                            {/* <p className="text-sm text-[#A6192E]">B.Com Graduate</p> */}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        I was so nervous about my CMA exams, but the mock tests and revision classes here helped me improve my scores. The support from mentors is incredible!
                                    </p>
                                </div>
                                                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Rahul V</h4>
                                            {/* <p className="text-sm text-[#A6192E]">B.Com Graduate</p> */}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        I had joined another institute before, but Lakshya Edu is on another level! The teachers are so friendly and explain everything in detail. I finally feel ready for my ACCA exams.
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Shreya D</h4>
                                            {/* <p className="text-sm text-[#A6192E]">B.Com Graduate</p> */}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        The B. Com coaching classes are so well-structured. They cover everything in depth, and the study materials are super helpful. I feel much more prepared for my exams now!
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Kavya S</h4>
                                            {/* <p className="text-sm text-[#A6192E]">B.Com Graduate</p> */}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        I work part-time, so I needed flexible learning options. Their online classes and recorded lectures made it easy for me to manage my studies and job together
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                                            alt="Student testimonial"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Aditya P</h4>
                                            {/* <p className="text-sm text-[#A6192E]">B.Com Graduate</p> */}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        The teachers explain everything so well, and the support from the team keeps you motivated throughout the journey!
                                    </p>
                                </div>
                            </div>
                            
                            {/* Gradient overlay to indicate more content */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dropdown FAQ section */}
            <section className="py-16" >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#A6192E]">
                        Frequently Asked Questions
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        {faqItems.map((item) => (
                            <div
                                key={item.id}
                                className={`mb-4 border rounded-lg overflow-hidden transition-all duration-300 ${openItem === item.id ? 'border-[#A6192E] shadow-md' : 'border-gray-200'}`}
                            >
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className={`w-full text-left p-5 flex items-center justify-between font-medium text-lg ${openItem === item.id ? 'bg-[#ECECEC] text-[#A6192E]' : 'bg-white'}`}
                                >
                                    {item.question}
                                    <svg
                                        className={`w-5 h-5 transition-rm duration-300 ${openItem === item.id ? 'transform rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openItem === item.id ? 'max-h-96' : 'max-h-0'}`}
                                >
                                    <div className="p-5 border-t border-gray-200">
                                        <p className="text-gray-700">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/faq"
                            className="inline-block px-6 py-2 text-[#A6192E] border border-[#A6192E] rounded-md hover:bg-[#A6192E] hover:text-white transition duration-300"
                        >
                            View All FAQs
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;