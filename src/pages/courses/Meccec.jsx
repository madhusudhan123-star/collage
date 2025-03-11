import React from 'react'
import { Link } from 'react-router-dom'

const Meccec = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-8 mb-8 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="/images/hero-bg.jpg" 
                        alt="College Campus" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-4">MEC/CEC Courses in Hyderabad</h1>
                    <p className="text-xl mb-6">Excellence in Commerce & Economics Education</p>
                    <Link to="/enroll" className="bg-white text-red-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                        Enroll Now
                    </Link>
                </div>
            </div>

            {/* Course Overview */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                    <img 
                        src="/images/mec-course.jpg" 
                        alt="MEC Course" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">MEC Course Details</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                            Mathematics
                        </li>
                        <li className="flex items-center">
                            <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                            Economics
                        </li>
                        <li className="flex items-center">
                            <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                            Commerce
                        </li>
                    </ul>
                </div>
                <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                    <img 
                        src="/images/cec-course.jpg" 
                        alt="CEC Course" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">CEC Course Details</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                            Civics
                        </li>
                        <li className="flex items-center">
                            <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                            Economics
                        </li>
                        <li className="flex items-center">
                            <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                            Commerce
                        </li>
                    </ul>
                </div>
            </div>

            {/* Features */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Program?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <img 
                            src="/images/faculty.jpg" 
                            alt="Experienced Faculty" 
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2">Experienced Faculty</h3>
                        <p className="text-gray-600">Learn from industry experts with years of teaching experience</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <img 
                            src="/images/facilities.jpg" 
                            alt="Modern Facilities" 
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2">Modern Facilities</h3>
                        <p className="text-gray-600">State-of-the-art classrooms and learning resources</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <img 
                            src="/images/career.jpg" 
                            alt="Career Support" 
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2">Career Support</h3>
                        <p className="text-gray-600">Dedicated placement assistance and career guidance</p>
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Benefits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-4">Academic Benefits</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                                Comprehensive study material
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                                Regular mock tests
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                                Doubt clearing sessions
                            </li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-4">Career Benefits</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                                Industry exposure
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                                Placement assistance
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                                Personality development
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-red-600 text-white p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
                <p className="mb-6">Join our MEC/CEC courses and build a strong foundation for your career</p>
                <Link to="/enroll" className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block">
                    Apply Now
                </Link>
            </div>
        </div>
    )
}

export default Meccec