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
        question: 'What courses do you offer?',
        answer: 'We offer a comprehensive range of professional courses including CA (Foundation, Inter, and Final), CMA (Foundation, Inter, and Final), ACCA, and various degree programs. Each course is designed with industry-relevant curriculum to prepare you for a successful career in finance and accounting.'
    },
    {
        id: 2,
        category: 'courses',
        question: 'How long does it take to complete the CA course?',
        answer: 'The CA course is structured in three levels: Foundation (8 months), Intermediate (1.5-2 years), and Final (1.5-2 years). The total duration may vary from 3.5 to 5 years depending on your exam success and article training schedule.'
    },
    {
        id: 3,
        category: 'registration',
        question: 'What is the registration process for new students?',
        answer: 'Registration is a simple process. You can register online through our website by filling out the application form or visit our campus in person. You\'ll need to provide academic details, personal information, and make the course fee payment. Our administrative staff will guide you through the entire process.'
    },
    {
        id: 4,
        category: 'fees',
        question: 'What are the payment options for course fees?',
        answer: 'We offer various payment options including lump sum payment with a discount, installment plans, education loans through our partner banks, and scholarship options for meritorious students. You can pay using credit/debit cards, net banking, UPI, or cash at our campus.'
    },
    {
        id: 5,
        category: 'exams',
        question: 'How are the test series structured?',
        answer: 'Our test series follows a progressive difficulty pattern. It includes subject-wise tests, sectional tests, and full-length mock exams that mirror the actual exam pattern. Each test is followed by comprehensive performance analysis and personalized feedback to help improve your weak areas.'
    },
    {
        id: 6,
        category: 'exams',
        question: 'When are the CA exams conducted?',
        answer: 'The Institute of Chartered Accountants of India (ICAI) conducts CA exams twice a year - in May and November. Foundation exams are held in June and December, while Intermediate and Final exams are conducted in May and November.'
    },
    {
        id: 7,
        category: 'faculty',
        question: 'Who are the faculty members at Lakshya Edu?',
        answer: 'Our faculty comprises experienced professionals, including practicing CAs, CMAs, and industry experts with extensive teaching experience. Many of our faculty members have over 10+ years of experience and are known for their ability to simplify complex concepts and provide practical insights.'
    },
    {
        id: 8,
        category: 'facilities',
        question: 'What facilities are available at your campus?',
        answer: 'Our campus features modern air-conditioned classrooms, a well-stocked library with the latest editions of study materials, computer labs with high-speed internet, discussion rooms for group studies, a cafeteria offering nutritious meals, and dedicated quiet zones for focused self-study.'
    },
    {
        id: 9,
        category: 'books',
        question: 'Do you provide study materials and books?',
        answer: 'Yes, we provide comprehensive study materials prepared by our expert faculty. These include concise notes, practice questions, case studies, and revision kits. We also have an extensive library with the latest editions of reference books, journals, and online resources.'
    },
    {
        id: 10,
        category: 'online',
        question: 'Do you offer online classes?',
        answer: 'Yes, we offer flexible learning options including live online classes, recorded sessions, and a hybrid model where you can attend both physical and virtual classes. Our online platform provides interactive learning experiences, regular assessments, and personalized feedback.'
    },
    {
        id: 11,
        category: 'placements',
        question: 'Do you provide placement assistance?',
        answer: 'Absolutely! We have a dedicated placement cell that organizes campus drives, prepares students for interviews, and maintains strong relationships with top companies and firms. Our alumni network also helps current students with internship and job opportunities.'
    },
    {
        id: 12,
        category: 'registration',
        question: 'What documents are required for admission?',
        answer: 'For admission, you\'ll need to submit your academic certificates, identity proof (Aadhar, passport, etc.), address proof, passport-sized photographs, and course-specific eligibility documents. For professional courses like CA, you\'ll also need to show your registration with the respective institute.'
    },
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