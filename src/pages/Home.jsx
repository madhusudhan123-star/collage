import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import ca from '../assets/home/CA.jpg';
import cma from '../assets/home/CMA.jpg';
import acca from '../assets/home/ACCA.jpg';
import inter from '../assets/home/intermediate.jpg';
import graduation from '../assets/home/graduation.jpg';


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
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const testimonialContainerRef = useRef(null);
    const videoTestimonialContainerRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const videoScrollIntervalRef = useRef(null);
    const scrollAmountRef = useRef(0);
    const videoScrollAmountRef = useRef(0);
    const scrollSpeedRef = useRef(0.5); // pixels per frame
    const [isVideoAutoScrolling, setIsVideoAutoScrolling] = useState(true);

    const [currentSlide, setCurrentSlide] = useState(0);
  
  // Course data - 9 cards total (original 3 + 6 new ones)
  const courses = [
    {
      id: 1,
      title: "CA (Chartered Accountant)",
      image: ca, // This will need to be replaced with the actual import
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
      image: cma,
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
      image: acca,
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
        image: graduation,
        color: "#A6192E",
        features: [
        "Comprehensive Management Education",
        "Specialization in Accounting & Finance",
        "Industry Exposure & Practical Training"
        ],
        link: "/courses/degree",
        buttonText: "Explore BBA Program"
    },
    // {
    //     id: 5,
    //     title: "B.com",
    //     image: graduation,
    //     color: "#A6192E",
    //     features: [
    //     "Core Commerce Curriculum",
    //     "Specialization in Accounting & Finance",
    //     "Insights into Corporate Laws & Governance"
    //     ],
    //     link: "/courses/bcom",
    //     buttonText: "Explore B.com Program"
    // },
    {
        id: 6,
        title: "Intermediate (MEC & CEC)",
        image: inter,
        color: "#A6192E",
        features: [
        "Focused Intermediate Level Preparation",
        "Emphasis on Management & Commerce Studies",
        "Bridge to Professional Certifications"
        ],
        link: "/courses/mec",
        buttonText: "Explore Intermediate Program"
    },
    // {
    //   id: 7,
    //   title: "CMA-US (Certified Management Accountant)",
    //   image: "cma-us",
    //   color: "#A6192E",
    //   features: [
    //     "Part 1 & 2 Exam Preparation",
    //     "Financial Planning & Analysis",
    //     "Strategic Management & Decision Making"
    //   ],
    //   link: "/courses/cma-us",
    //   buttonText: "Explore CMA-US Program"
    // },
    // {
    //   id: 8,
    //   title: "IFRS Certification",
    //   image: "ifrs",
    //   color: "#A6192E",
    //   features: [
    //     "International Financial Reporting Standards",
    //     "Financial Statement Preparation & Analysis",
    //     "Compliance & Regulatory Requirements"
    //   ],
    //   link: "/courses/ifrs",
    //   buttonText: "Explore IFRS Program"
    // },
    // {
    //   id: 9,
    //   title: "GST Certification",
    //   image: "gst",
    //   color: "#A6192E",
    //   features: [
    //     "Comprehensive GST Framework",
    //     "Return Filing & Compliance",
    //     "Input Tax Credit & E-Way Bill"
    //   ],
    //   link: "/courses/gst",
    //   buttonText: "Explore GST Program"
    // }
  ];

  // Calculate total number of slides
    const totalSlides = Math.ceil(courses.length / 3);

  // Get current visible courses
  const visibleCourses = courses.slice(currentSlide * 3, currentSlide * 3 + 3);


    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
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
                <div className="relative h-full">
                    <ImageSlider autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false} />
                    {/* Overlay to darken images and make text more readable */}
                    {/* <div className="absolute inset-0 bg-black opacity-40 z-20"></div> */}
                </div>

                {/* Hero Content */}
                
            </section>

            {/* Two Section with Course Cards */}
            <section className="py-20 bg-[#ECECEC]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">Our Professional Courses</h2>
                    {/* <div className="flex space-x-2">
                    <button 
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                    </div> */}
                </div>
                
                {/* Slider Indicator */}
                <div className="flex justify-center mb-8">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`mx-1 w-3 h-3 rounded-full transition-all ${
                        currentSlide === index ? 'bg-[#A6192E] w-6' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                    ))}
                </div>
                
                {/* Course Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleCourses.map((course) => (
                    <div 
                        key={course.id}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="relative">
                        <img
                            src={`${course.image}`} 
                            alt={`${course.title} Course`}
                            className="w-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                        />
                        </div>
                        <div className="p-6 relative">
                        <h3 className="text-2xl font-bold mb-3 mt-2 text-[#A6192E]">{course.title}</h3>
                        <ul className="mb-4">
                            {course.features.map((feature, index) => (
                            <li key={index} className="flex items-start mb-2">
                                <span className="flex-shrink-0 mr-2 text-[#FFD700] text-lg">✓</span>
                                <span className="text-gray-700">{feature}</span>
                            </li>
                            ))}
                        </ul>
                        <Link
                            to={course.link}
                            className="relative overflow-hidden w-full block text-center px-4 py-3 rounded-lg font-semibold bg-[#A6192E] text-white shadow-md hover:shadow-xl transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/20 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
                        >
                            <span className="relative text-white z-10">{course.buttonText}</span>
                        </Link>
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            {/* Three Section with content and images */}
            <section className="py-20 bg-[#FAF3E0]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[#A6192E]">
                        Experience Our Institute
                    </h2>

                    <div className="space-y-12">
                        {/* First Content Block */}
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-1/2">
                                <h3 className="text-3xl font-bold text-[#A6192E] mb-4">Concept-Based Teaching</h3>
                                <p className="text-gray-700 mb-6">We simplify complex topics with real-world examples</p>
                            </div>
                            <div className="lg:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Campus Tour"
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Second Content Block */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                            <div className="lg:w-1/2">
                                <h3 className="text-3xl font-bold text-[#A6192E] mb-4">Personalized Mentorship</h3>
                                <p className="text-gray-700 mb-6">Every student receives dedicated guidance.</p>
                            </div>
                            <div className="lg:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Student Testimonials"
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Third Content Block */}
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-1/2">
                                <h3 className="text-3xl font-bold text-[#A6192E] mb-4">Proven Success Strategies</h3>
                                <p className="text-gray-700 mb-6">Mock tests, industry insights, and result-driven methods.</p>
                            </div>
                            <div className="lg:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Faculty Insights"
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Fourth Content Block */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                            <div className="lg:w-1/2">
                                <h3 className="text-3xl font-bold text-[#A6192E] mb-4">Career-Focused Learning</h3>
                                <p className="text-gray-700 mb-6"> Practical knowledge that goes beyond textbooks.</p>
                            </div>
                            <div className="lg:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Placement Success Stories"
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-[#A6192E]">
                        Student <span className="relative inline-block">Testimonials</span>
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