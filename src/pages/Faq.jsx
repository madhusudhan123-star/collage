import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Theme colors to match the Navbar component
const theme = {
    primary: '#A6192E',    // Deep Red
    secondary: '#FFD700',  // Gold
    accent: '#FAF3E0',     // Off-white
    background: '#ECECEC', // Soft Grey
    darkPrimary: '#8B1425', // Darker shade of primary for hover states
    lightSecondary: '#FFF0A3', // Lighter shade of gold for hover effects
}

// FAQ data organized by categories
const faqData = [
    {
        id: 1,
        category: 'courses',
        question: 'What courses does Lakshya Edu offer?',
        answer: 'We offer CA Foundation, CMA, ACCA, BBA, B.Com, and Intermediate (MEC & CEC) coaching with expert faculty and structured learning programs. Each course is designed to provide comprehensive preparation for professional success.'
    },
    {
        id: 2,
        category: 'online',
        question: 'Do you provide online classes?',
        answer: 'Yes! We offer CA Foundation online classes and CMA online classes across India. Our online platform features live interactive sessions, recorded lectures, and digital study materials, allowing you to learn effectively from anywhere.'
    },
    {
        id: 3,
        category: 'courses',
        question: 'Is Lakshya Edu the best CA coaching institute in Hyderabad?',
        answer: 'We are recognized as one of the leading CA, CMA & ACCA institutes in Hyderabad, known for our experienced faculty, comprehensive study materials, and consistently high student success rates in professional examinations.'
    },
    {
        id: 4,
        category: 'faculty',
        question: 'How is the faculty at Lakshya Edu?',
        answer: 'Our faculty consists of experienced professionals and subject matter experts with extensive teaching experience. They focus on concept-based learning and provide personalized attention to ensure student success.'
    },
    {
        id: 5,
        category: 'facilities',
        question: 'What makes Lakshya Edu different from other coaching institutes?',
        answer: 'Our concept-based teaching approach, personalized mentorship programs, career-focused guidance, and blend of theoretical and practical learning sets us apart. We also offer flexible learning options and comprehensive study materials.'
    },
    {
        id: 6,
        category: 'registration',
        question: 'Can I take a demo class before enrolling?',
        answer: 'Yes, we provide free demo classes for all our courses. This allows you to experience our teaching methods, interact with faculty, and make an informed decision before enrolling.'
    },
    {
        id: 7,
        category: 'courses',
        question: 'Can working professionals join your courses?',
        answer: 'Yes, we offer flexible timing options including weekend batches and evening classes specifically designed for working professionals. Our online learning platform also allows you to study at your own pace.'
    },
    {
        id: 8,
        category: 'books',
        question: 'Do you provide study materials?',
        answer: 'Yes, all enrolled students receive comprehensive, exam-oriented study materials designed by our expert faculty. These include course notes, practice questions, case studies, and regular updates based on curriculum changes.'
    },
    {
        id: 9,
        category: 'exams',
        question: 'Do you conduct mock tests?',
        answer: 'Yes, we regularly conduct mock tests that simulate actual exam conditions. These include subject-wise tests, sectional tests, and full-length mock exams, followed by detailed performance analysis and improvement strategies.'
    },
    {
        id: 10,
        category: 'placements',
        question: 'Do you provide placement assistance?',
        answer: 'Yes, we offer comprehensive placement support including career counseling, interview preparation, resume building, and campus recruitment drives. Our strong industry connections help students secure promising career opportunities.'
    },
    {
        id: 11,
        category: 'fees',
        question: 'Do you offer scholarships?',
        answer: 'Yes! We provide merit-based scholarships for high-achieving students. These scholarships can significantly reduce the course fees and are awarded based on academic performance and entrance test results.'
    },
    {
        id: 12,
        category: 'courses',
        question: 'What is the success rate of students?',
        answer: 'Our students consistently achieve excellent results in professional exams, with many securing top ranks. Our structured learning approach, regular assessments, and personalized attention contribute to our high success rate.'
    },
    {
        id: 13,
        category: 'registration',
        question: 'How do I enroll in a course?',
        answer: 'You can enroll by visiting our institute, through our website, or by contacting our admissions team. We\'ll guide you through the process, help you choose the right program, and explain the fee structure and class schedules.'
    },
    {
        id: 14,
        category: 'online',
        question: 'Can I switch between offline and online classes?',
        answer: 'Yes, we offer flexible learning options allowing you to switch between offline and online modes based on your convenience. This hybrid model ensures continuous learning regardless of your circumstances.'
    },
    {
        id: 15,
        category: 'faculty',
        question: 'Do you conduct doubt-clearing sessions?',
        answer: 'Yes! We have dedicated doubt-solving sessions where students can clarify their concepts with faculty members. These sessions can be attended both offline and online, ensuring comprehensive understanding of the subject matter.'
    }
];

// FAQ categories for filtering
const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'courses', name: 'Courses' },
    { id: 'registration', name: 'Registration' },
    { id: 'fees', name: 'Fees & Payment' },
    { id: 'exams', name: 'Exams & Testing' },
    { id: 'faculty', name: 'Faculty' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'books', name: 'Books & Materials' },
    { id: 'online', name: 'Online Classes' },
    { id: 'placements', name: 'Placements' },
];

const Faq = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeQuestion, setActiveQuestion] = useState(null);

    // Filter FAQs based on search query and selected category
    const filteredFaqs = useMemo(() => {
        return faqData.filter(faq => {
            const matchesSearch =
                faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    // Toggle FAQ answer visibility
    const toggleQuestion = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    // Reset filters when component unmounts
    useEffect(() => {
        return () => {
            setSearchQuery('');
            setActiveCategory('all');
            setActiveQuestion(null);
        };
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className={`bg-[${theme.primary}] text-white py-16`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                        <p className="text-lg sm:text-xl mb-8">Find answers to the most common questions about our courses, admissions, and more.</p>

                        {/* Search Box */}
                        <div className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search for questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg"
                            />
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filters */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category.id
                                    ? `bg-[${theme.primary}] text-white shadow-md`
                                    : `bg-[${theme.background}] text-gray-700 hover:bg-[${theme.lightSecondary}]`
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto">
                    {filteredFaqs.length === 0 ? (
                        <div className="text-center py-12">
                            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8c0-1.636.493-3.234 1.404-4.596" />
                            </svg>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">No questions found</h3>
                            <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                                className={`mt-6 px-4 py-2 bg-[${theme.primary}] text-white rounded hover:bg-[${theme.darkPrimary}] transition`}
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {filteredFaqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className={`border rounded-lg overflow-hidden transition-all duration-300 ${activeQuestion === faq.id
                                            ? `border-[${theme.primary}] shadow-md`
                                            : 'border-gray-200'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleQuestion(faq.id)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                    >
                                        <h3 className={`text-xl font-semibold ${activeQuestion === faq.id ? `text-[${theme.primary}]` : 'text-gray-800'}`}>
                                            {faq.question}
                                        </h3>
                                        <span className={`${activeQuestion === faq.id ? `text-[${theme.primary}]` : 'text-gray-500'}`}>
                                            {activeQuestion === faq.id ? (
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                                </svg>
                                            ) : (
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>

                                    {activeQuestion === faq.id && (
                                        <div className={`px-6 pb-6 text-gray-600 bg-[${theme.accent}] bg-opacity-30 animate-fadeIn`}>
                                            <p className="leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Still Have Questions Section */}
            <div className={`bg-[${theme.background}] py-16 mt-16`}>
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Can't find the answer you're looking for? Please contact our friendly team.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact"
                            className={`px-8 py-3 bg-[${theme.primary}] text-white rounded-lg shadow-md hover:bg-[${theme.darkPrimary}] transition-colors`}
                        >
                            Contact Us
                        </Link>
                        <a
                            href="tel:+919876543210"
                            className={`px-8 py-3 bg-white text-[${theme.primary}] border border-[${theme.primary}] rounded-lg shadow-md hover:bg-[${theme.accent}] transition-colors`}
                        >
                            Call Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Feedback Section */}
            <div className="container mx-auto px-4 max-w-4xl py-16">
                <div className={`bg-[${theme.accent}] rounded-lg p-8 text-center`}>
                    <h2 className="text-2xl font-bold mb-6">Was This FAQ Helpful?</h2>
                    <p className="text-gray-600 mb-6">
                        Help us improve our FAQ section by providing feedback.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className={`px-6 py-2 bg-[${theme.secondary}] text-[${theme.primary}] rounded-lg font-medium hover:bg-[${theme.lightSecondary}] transition`}>
                            Yes, it was helpful
                        </button>
                        <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition">
                            No, I need more help
                        </button>
                    </div>
                </div>
            </div>

            {/* Add some CSS for animations */}
            <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default Faq;