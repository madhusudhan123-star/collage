import React, { useState, useRef } from 'react';
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
    // {
    //     id: 6,
    //     question: "Can I do CA course online?",
    //     answer: "Yes. You can attend CA Online Classes or also avail to the best CA Pendrive Classes."
    // },
    // {
    //     id: 7,
    //     question: "Can I complete CA Foundation in 3 months?",
    //     answer: "The last 2-3 months are crucial for your Exam preparation. In this time span you have to solve RTPs, and MTPs, and devote time to self-revision. Basically, CA Foundation requires a 6-7 month time duration for preparation. You can opt the best CA Foundation online classes and CA Foundation Pendrive Classes are available."
    // },
    // {
    //     id: 8,
    //     question: "Can you pass CA Inter without coaching?",
    //     answer: "You can pass your CA Inter Exam without coming down for offline classes. Just by sitting at home, you can choose one preference like CA Inter Online classes or CA Inter Pendrive."
    // },
    // {
    //     id: 9,
    //     question: "Can I complete CA in 2 years?",
    //     answer: "The entire time required to become a CA typically ranges from 4.5 to 5 years, including the necessary educational qualifications, practical training, and examination process."
    // },
    // {
    //     id: 10,
    //     question: "How to clear CA in 1st attempt?",
    //     answer: "To prepare for exams: 1. Consider the exam pattern and syllabus. 2. Create a suitable timetable. 3. And prioritize foundation studies. 4. Stay away from the virtual world and revise at least three times. To succeed, prioritize time management, have a strong understanding of theory, and take handwritten notes."
    // }
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

    return (
        <div>
            {/* Hero Section with Video Background */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0">
                    <video
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-4519-large.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Overlay to darken video and make text more readable */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>

                {/* Hero Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
                    <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white`}>
                        <span>Welcome to Lakshya Edu</span>
                        <br />
                        <span className={`mt-3 block text-[${theme.primary}] `}>Your Path to Success!</span>
                    </h1>

                    <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 max-w-3xl">
                        Excellence in education for CA, CMA, and professional courses
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            to="/courses"
                            className={`px-8 py-3 bg-[${theme.primary}] text-white font-semibold rounded-md shadow-lg hover:bg-[${theme.darkPrimary}] transform hover:-translate-y-1 transition-all duration-300`}
                        >
                            Explore Courses
                        </Link>
                        <Link
                            to="/about"
                            className={`px-8 py-3 bg-white text-[${theme.primary}] font-semibold rounded-md shadow-lg hover:bg-[${theme.accent}] transform hover:-translate-y-1 transition-all duration-300`}
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Scrolling indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <svg
                            className={`w-10 h-10 text-[${theme.secondary}]`}
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
            {/* Second Section with content */}
            <section>
                <div className='h-screen'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className={`font mt-10 font-bold text-9xl text-center text-[${theme.primary}]`}>At Lakshya Edu</h1>
                        <p className={`font mt-10 font-thin text-xl w-1/2 text-center text-[${theme.primary}]`}>We believe education is more than just learning—it's about building a future. With expert faculty, a student-first approach, and career-focused programs, we help you achieve your dreams in Commerce, Accounting, and Management.</p>
                    </div>
                    <div className='flex justify-around mt-10 items-center'>
                        <div>
                            <h1
                                className="font mt-10 font-bold text-9xl text-center text-transparent"
                                style={{ WebkitTextStroke: `2px ${theme.primary}` }}
                            >
                                Our
                                <a href="#" className={`text-[${theme.primary}]`}> students</a>
                            </h1>
                        </div>
                        <div className={`w-1/3 font-thin text-[${theme.primary}] text-xl`}>
                            <p>Whether you aim to become a Chartered Accountant (CA), a Certified Management Accountant (CMA), or an ACCA professional, or</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Third Section with side-by-side content and image */}
            <section className={`py-20 bg-[${theme.background}]`}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Content side */}
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <h2 className={`text-4xl font-bold mb-6 text-[${theme.primary}]`}>
                                CA (Chartered Accountant) Coaching
                            </h2>
                            {/* <p className="text-lg mb-8 text-gray-700">
                                At Institute of Science & Nutrition, we believe in providing a
                                comprehensive educational experience that goes beyond textbooks.
                                Our approach combines rigorous academic training with practical
                                skills development, ensuring our students are well-prepared for
                                their professional journeys.
                            </p> */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <span className={`mr-2 text-[${theme.secondary}] font-bold text-xl`}>✓</span>
                                    <span>CA Foundation, CA Intermediate & CA Final</span>
                                </li>
                                <li className="flex items-start">
                                    <span className={`mr-2 text-[${theme.secondary}] font-bold text-xl`}>✓</span>
                                    <span>Covers Accounting, Taxation, Law, Costing & Auditing</span>
                                </li>
                                <li className="flex items-start">
                                    <span className={`mr-2 text-[${theme.secondary}] font-bold text-xl`}>✓</span>
                                    <span>Exam-oriented coaching with conceptual clarity</span>
                                </li>
                            </ul>
                            <Link
                                to="/about"
                                className={`inline-block px-6 py-3 rounded-md bg-[${theme.primary}] text-white font-medium hover:bg-[${theme.darkPrimary}] transition duration-300`}
                            >
                                Learn More About Our Approach
                            </Link>
                        </div>

                        {/* Image side */}
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <div className="relative">
                                <div className={`absolute -top-6 -left-6 w-64 h-64 rounded-full bg-[${theme.secondary}] opacity-20 z-0`}></div>
                                <img
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Students in classroom"
                                    className="w-full h-auto rounded-lg shadow-xl relative z-10"
                                />
                                <div className={`absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-[${theme.primary}] opacity-20 z-0`}></div>
                            </div>
                        </div>
                    </div>

                    {/* Centered Dropdown Button */}
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={toggleMoreContent}
                            className={`group flex items-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[${theme.primary}] text-[${theme.primary}] font-bold shadow-lg hover:bg-[${theme.primary}] hover:text-white transition-all duration-300`}
                        >
                            <span>{showMoreContent ? 'Show Less' : 'Discover More About Our Programs'}</span>
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
                    <div className={`mt-8 transition-all font duration-500 ease-in-out overflow-hidden ${showMoreContent ? 'max-h-[400vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <div className="flex flex-col lg:flex-row gap-10 items-center">
                                {/* Content Side */}
                                <div className="lg:w-1/2">
                                    <h3 className={`text-3xl font-bold mb-4 text-[${theme.primary}]`}>CMA (Cost & Management Accounting) Coaching</h3>
                                    {/* <p className="text-gray-700 mb-6">
                                        Our teaching methodology is rooted in the belief that effective learning comes from
                                        a combination of theoretical knowledge and practical application. We employ a multi-faceted
                                        approach that caters to different learning styles.
                                    </p> */}
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">CMA Foundation, Intermediate & Final</h4>
                                                {/* <p className="text-gray-600">Engage in dynamic classroom sessions that encourage discussion and critical thinking.</p> */}
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Focused training on Costing, Financial Management, and Law</h4>
                                                {/* <p className="text-gray-600">Learn through real-world cases that bridge theory and practical application.</p> */}
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Mock exams and real-time practice sessions</h4>
                                                {/* <p className="text-gray-600">Receive guidance from industry professionals who provide insights beyond the curriculum.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="lg:w-1/2">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                                            alt="Students collaborating"
                                            className="w-full h-auto rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <div className="flex flex-col lg:flex-row gap-10 items-center">
                                {/* Image Side */}
                                <div className="lg:w-1/2">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                                            alt="Students collaborating"
                                            className="w-full h-auto rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:w-1/2">
                                    <h3 className={`text-3xl font-bold mb-4 text-[${theme.primary}]`}>ACCA (Association of Chartered Certified Accountants)</h3>
                                    {/* <p className="text-gray-700 mb-6">
                                        Our teaching methodology is rooted in the belief that effective learning comes from
                                        a combination of theoretical knowledge and practical application. We employ a multi-faceted
                                        approach that caters to different learning styles.
                                    </p> */}
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">F1 to F9 & Strategic Level Papers</h4>
                                                {/* <p className="text-gray-600">Engage in dynamic classroom sessions that encourage discussion and critical thinking.</p> */}
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Internationally recognized qualification with practical application</h4>
                                                {/* <p className="text-gray-600">Learn through real-world cases that bridge theory and practical application.</p> */}
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Global career opportunities in finance and accounting</h4>
                                                {/* <p className="text-gray-600">Receive guidance from industry professionals who provide insights beyond the curriculum.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <div className="flex flex-col lg:flex-row gap-10 items-center">
                                {/* Content Side */}
                                <div className="lg:w-1/2">
                                    <h3 className={`text-3xl font-bold mb-4 text-[${theme.primary}]`}>BBA & B.Com Coaching</h3>
                                    {/* <p className="text-gray-700 mb-6">
                                        Our teaching methodology is rooted in the belief that effective learning comes from
                                        a combination of theoretical knowledge and practical application. We employ a multi-faceted
                                        approach that caters to different learning styles.
                                    </p> */}
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Covers Business Management, Economics, and Accounting</h4>
                                                {/* <p className="text-gray-600">Engage in dynamic classroom sessions that encourage discussion and critical thinking.</p> */}
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">University exam-focused coaching with real-world applications</h4>
                                                {/* <p className="text-gray-600">Learn through real-world cases that bridge theory and practical application.</p> */}
                                            </div>
                                        </div>
                                        {/* <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Mentorship Programs</h4>
                                                <p className="text-gray-600">Receive guidance from industry professionals who provide insights beyond the curriculum.</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="lg:w-1/2">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                                            alt="Students collaborating"
                                            className="w-full h-auto rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <div className="flex flex-col lg:flex-row gap-10 items-center">
                                {/* Image Side */}
                                <div className="lg:w-1/2">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                                            alt="Students collaborating"
                                            className="w-full h-auto rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:w-1/2">
                                    <h3 className={`text-3xl font-bold mb-4 text-[${theme.primary}]`}>Intermediate (MEC & CEC) Coaching</h3>
                                    {/* <p className="text-gray-700 mb-6">
                                        Our teaching methodology is rooted in the belief that effective learning comes from
                                        a combination of theoretical knowledge and practical application. We employ a multi-faceted
                                        approach that caters to different learning styles.
                                    </p> */}
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Foundation courses for commerce & business students</h4>
                                                {/* <p className="text-gray-600">Engage in dynamic classroom sessions that encourage discussion and critical thinking.</p> */}
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Board exam preparation with in-depth subject training</h4>
                                                {/* <p className="text-gray-600">Learn through real-world cases that bridge theory and practical application.</p> */}
                                            </div>
                                        </div>
                                        {/* <div className="flex items-start">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[${theme.secondary}] flex items-center justify-center mr-4`}>
                                                <span className="font-bold">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Mentorship Programs</h4>
                                                <p className="text-gray-600">Receive guidance from industry professionals who provide insights beyond the curriculum.</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fourth Section with video slider */}
            <section className={`py-20 bg-[${theme.accent}]`}>
                <div className="container mx-auto px-4">
                    <h2 className={`text-4xl font-bold text-center mb-12 text-[${theme.primary}]`}>
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
                                        className={`w-20 h-20 rounded-full bg-[${theme.primary}] bg-opacity-90 flex items-center justify-center transform transition-transform hover:scale-110`}
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
                                        className={`flex cursor-pointer rounded-lg overflow-hidden shadow-md ${currentVideo === index ? `ring-2 ring-[${theme.primary}]` : 'hover:bg-gray-100'}`}
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
                                                <svg className={`w-8 h-8 ${currentVideo === index ? `text-[${theme.secondary}]` : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Video Info */}
                                        <div className={`w-2/3 p-4 ${currentVideo === index ? `bg-[${theme.background}]` : 'bg-white'}`}>
                                            <h4 className={`font-bold ${currentVideo === index ? `text-[${theme.primary}]` : 'text-gray-800'}`}>{video.title}</h4>
                                            <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* More Videos Button */}
                                <Link
                                    to="/videos"
                                    className={`mt-4 text-center py-3 bg-white border border-[${theme.primary}] text-[${theme.primary}] rounded-lg hover:bg-[${theme.primary}] hover:text-white transition-colors`}
                                >
                                    View All Videos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Images slide section */}
            <section className={`py-16 bg-[${theme.background}]`}>
                <div className="container mx-auto px-4">
                    <h2 className={`text-4xl font-bold text-center mb-12 text-[${theme.primary}]`}>
                        Our Campus Gallery
                    </h2>

                    <ImageSlider />
                </div>
            </section>

            {/* Dropdown FAQ section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className={`text-3xl font-bold text-center mb-12 text-[${theme.primary}]`}>
                        Frequently Asked Questions
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        {faqItems.map((item) => (
                            <div
                                key={item.id}
                                className={`mb-4 border rounded-lg overflow-hidden transition-all duration-300 ${openItem === item.id ? `border-[${theme.primary}] shadow-md` : 'border-gray-200'}`}
                            >
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className={`w-full text-left p-5 flex items-center justify-between font-medium text-lg ${openItem === item.id ? `bg-[${theme.background}] text-[${theme.primary}]` : 'bg-white'}`}
                                >
                                    {item.question}
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-300 ${openItem === item.id ? 'transform rotate-180' : ''}`}
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
                            className={`inline-block px-6 py-2 text-[${theme.primary}] border border-[${theme.primary}] rounded-md hover:bg-[${theme.primary}] hover:text-white transition duration-300`}
                        >
                            View All FAQs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;