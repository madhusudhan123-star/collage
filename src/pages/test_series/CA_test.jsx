import React from 'react'

const CA_test = () => {
    // Product data
    const testSeriesData = {
        "test_series": [
            {
                "name": "CA Foundation",
                "products": [
                    {
                        "name": "All 4 Subjects",
                        "original_price": "₹3,999.00",
                        "current_price": "₹1,599.00"
                    },
                    {
                        "name": "Each Subject",
                        "original_price": "₹999.00",
                        "current_price": "₹449.00"
                    }
                ]
            },
            {
                "name": "CA Inter",
                "products": [
                    {
                        "name": "Each Group",
                        "original_price": "₹2,999.00",
                        "current_price": "₹1,199.00"
                    },
                    {
                        "name": "Each Subjects",
                        "original_price": "₹999.00",
                        "current_price": "₹449.00"
                    }
                ]
            },
            {
                "name": "CA Final",
                "products": [
                    {
                        "name": "Each Group",
                        "original_price": "₹3,999.00",
                        "current_price": "₹1,599.00"
                    },
                    {
                        "name": "Each Subjects",
                        "original_price": "₹999.00",
                        "current_price": "₹449.00"
                    }
                ]
            },
            {
                "name": "CMA Foundation",
                "products": [
                    {
                        "name": "All 4 Subjects",
                        "original_price": "₹2,999.00",
                        "current_price": "₹1,199.00"
                    },
                    {
                        "name": "Each Subject",
                        "original_price": "₹999.00",
                        "current_price": "₹449.00"
                    }
                ]
            },
            {
                "name": "CMA Inter",
                "products": [
                    {
                        "name": "All 4 Subjects",
                        "original_price": "₹3,999.00",
                        "current_price": "₹1,599.00"
                    },
                    {
                        "name": "Each Subject",
                        "original_price": "₹999.00",
                        "current_price": "₹449.00"
                    }
                ]
            },
            {
                "name": "CMA Final",
                "products": [
                    {
                        "name": "All 4 Subjects",
                        "original_price": "₹2,999.00",
                        "current_price": "₹1,199.00"
                    },
                    {
                        "name": "Each Subject",
                        "original_price": "₹999.00",
                        "current_price": "₹449.00"
                    }
                ]
            }
        ]
    };

    // Function to get appropriate image URL based on course type
    const getImageUrl = (seriesName) => {
        const type = seriesName.split(' ')[0]; // CA or CMA
        const level = seriesName.split(' ')[1]; // Foundation, Inter, Final
        
        if (type === 'CA') {
            if (level === 'Foundation') {
                return 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
            } else if (level === 'Inter') {
                return 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
            } else {
                return 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
            }
        } else {
            if (level === 'Foundation') {
                return 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
            } else if (level === 'Inter') {
                return 'https://images.unsplash.com/photo-1554224155-8947307188a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
            } else {
                return 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
            }
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section with Background Banner */}
            <div className="relative bg-cover bg-center h-auto" 
                 style={{backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80')"}}>
                
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            CA Final Test Series
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8">
                            Prepare effectively for your CA Final exams with our comprehensive test series designed by industry experts.
                        </p>
                        
                        {/* Key Benefits */}
                        <div className="grid md:grid-cols-2 gap-6 mt-10">
                            <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-md">
                                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Fast Valuation</h3>
                                <p className="text-gray-600">Get your answer sheets evaluated within 48 hours, providing quick feedback to improve your preparation.</p>
                            </div>
                            <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-md">
                                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Expert Evaluation</h3>
                                <p className="text-gray-600">Benefit from detailed assessment by CA professionals with years of experience in ICAI examination patterns.</p>
                            </div>
                        </div>
                        
                        {/* CTA Button */}
                        <a href='/enroll'>
                        <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg">
                            Enroll Now
                        </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Key Features Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
                        Key Features of Our Test Series
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {/* Feature 1: Fast Valuation */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex flex-col items-center text-center">
                            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Valuation within 48 hours</h3>
                            <p className="text-gray-600">Quick evaluation ensures you get timely feedback to improve your preparation strategy.</p>
                        </div>

                        {/* Feature 2: Detailed Solutions */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex flex-col items-center text-center">
                            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Detailed Solutions & Feedback</h3>
                            <p className="text-gray-600">Comprehensive solutions with personalized feedback to address your specific areas of improvement.</p>
                        </div>

                        {/* Feature 3: Exam-Oriented */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex flex-col items-center text-center">
                            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Exam-Oriented Question Papers</h3>
                            <p className="text-gray-600">Questions designed to match the actual exam pattern and difficulty level of ICAI examinations.</p>
                        </div>

                        {/* Feature 4: Flexible Selection */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex flex-col items-center text-center">
                            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Flexible Subject Selection</h3>
                            <p className="text-gray-600">Choose individual subjects or complete packages according to your preparation needs.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Test Series Details Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
                    Test Series Details
                </h2>

                {/* Subjects Table */}
                <div className="max-w-5xl mx-auto mb-12 md:mb-16">
                    <h3 className="text-xl font-semibold mb-4 md:mb-6 text-center text-gray-700">
                        CA Final Subjects Covered
                    </h3>
                    <div className="overflow-x-auto shadow-md rounded-xl border border-gray-200">
                        <table className="w-full bg-white divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider bg-gray-50 border-b">Group</th>
                                    <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider bg-gray-50 border-b">Subjects</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50 transition duration-150">
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap font-medium text-gray-800">Group 1</td>
                                    <td className="px-4 sm:px-6 py-4">
                                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                                            <li>Financial Reporting</li>
                                            <li>Strategic Financial Management</li>
                                            <li>Advanced Auditing and Professional Ethics</li>
                                            <li>Corporate and Economic Laws</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition duration-150">
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap font-medium text-gray-800">Group 2</td>
                                    <td className="px-4 sm:px-6 py-4">
                                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                                            <li>Strategic Cost Management and Performance Evaluation</li>
                                            <li>Elective Paper (Any one from the available options)</li>
                                            <li>Risk Management</li>
                                            <li>Direct Tax Laws & International Taxation</li>
                                            <li>Indirect Tax Laws</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pricing Table */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-xl font-semibold mb-4 md:mb-6 text-center text-gray-700">
                        Test Series Pricing
                    </h3>
                    <div className="overflow-x-auto shadow-md rounded-xl border border-gray-200">
                        <table className="w-full bg-white divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider bg-gray-50 border-b">Package</th>
                                    <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider bg-gray-50 border-b">Description</th>
                                    <th className="px-4 sm:px-6 py-3 text-right text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider bg-gray-50 border-b">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50 transition duration-150">
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap font-medium text-gray-800">Single Subject</td>
                                    <td className="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-700">Any one subject from Group 1 or Group 2</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-green-700 font-semibold">₹3,500</td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition duration-150">
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap font-medium text-gray-800">Group Package</td>
                                    <td className="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-700">All subjects from either Group 1 or Group 2</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-green-700 font-semibold">₹9,000</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition duration-150">
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap font-medium text-gray-800">Complete Package</td>
                                    <td className="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-700">All subjects from both Group 1 and Group 2</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-green-700 font-semibold">₹15,000</td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition duration-150">
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap font-medium text-gray-800">Advanced Package</td>
                                    <td className="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-700">Complete package + Personalized mentoring sessions</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-green-700 font-semibold">₹22,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-500 text-sm italic">
                            * All prices include taxes. Additional 5% discount for early registration.
                        </p>
                        <div className="mt-8 space-x-4">
                            <a href='/enroll'>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 font-medium transition duration-300">
                                Enroll Now
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* More Test Series Section */}
            <div className="bg-white py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3">
                        More Test Series
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        Explore our comprehensive test series for different courses to boost your exam preparation
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {testSeriesData.test_series.map((series, index) => (
                            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                                {/* Product Image */}
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={getImageUrl(series.name)} 
                                        alt={`${series.name} Test Series`} 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                                    />
                                </div>
                                
                                <div className="bg-blue-600 py-4 px-6">
                                    <h3 className="text-xl font-bold text-white">{series.name}</h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4 mb-6">
                                        {series.products.map((product, prodIndex) => (
                                            <li key={prodIndex} className="flex justify-between items-center">
                                                <span className="font-medium text-gray-800">{product.name}</span>
                                                <div className="text-right">
                                                    <span className="block text-gray-500 line-through text-sm">{product.original_price}</span>
                                                    <span className="block text-green-600 font-bold">{product.current_price}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex justify-center pt-2">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 font-medium transition duration-300 text-sm">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CA_test;