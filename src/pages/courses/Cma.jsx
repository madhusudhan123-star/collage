import React from 'react'
import { Link } from 'react-router-dom'

const Cma = () => {
  const cmaLevels = [
    {
      id: 'foundation',
      title: 'CMA Foundation',
      path: '/courses/cma/cmafound',
      description: 'The entry-level program for aspiring Cost & Management Accountants. Build a strong foundation in accounting, economics, business laws, and mathematics.',
      duration: '6-8 months',
      eligibility: '10+2 or equivalent',
      image: 'https://img.freepik.com/free-photo/accounting-concept-close-up-business-woman-using-calculator-doing-finance-office_1150-14136.jpg'
    },
    {
      id: 'intermediate',
      title: 'CMA Intermediate',
      path: '/courses/cma/cmainter',
      description: 'The second level of the CMA program, focusing on advanced accounting, taxation, laws, cost accounting, and operations management.',
      duration: '8-10 months',
      eligibility: 'CMA Foundation qualified',
      image: 'https://img.freepik.com/free-photo/analysis-accounting-banking-business-finance-payment-concept_1421-77.jpg'
    },
    {
      id: 'final',
      title: 'CMA Final',
      path: '/courses/cma/cmafinal',
      description: 'The culminating level that focuses on advanced financial management, corporate reporting, strategic financial management, and cost management.',
      duration: '10-12 months',
      eligibility: 'CMA Intermediate qualified',
      image: 'https://img.freepik.com/free-photo/business-planning-accounting-concept_23-2148791708.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Cost & Management Accountant (CMA) Programs</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The CMA qualification is recognized globally, equipping you with expertise in financial management, 
          strategic planning, and cost accounting. Choose from our comprehensive programs tailored for each level.
        </p>
      </div>

      {/* CMA Levels Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cmaLevels.map((level) => (
          <div key={level.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <img 
              src={level.image} 
              alt={level.title} 
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{level.title}</h3>
              <p className="text-gray-600 mb-4">{level.description}</p>
              <div className="flex flex-col space-y-2 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm text-gray-700">Duration: {level.duration}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                  <span className="text-sm text-gray-700">Eligibility: {level.eligibility}</span>
                </div>
              </div>
              <Link to={level.path} className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-bold py-2 px-4 rounded transition-colors">
                Explore {level.title}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose CMA Section */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose CMA?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="bg-primary rounded-full p-2 mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Lucrative Career</h3>
              <p className="text-gray-600">CMA professionals are in high demand with competitive salary packages across industries.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary rounded-full p-2 mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Professional Recognition</h3>
              <p className="text-gray-600">Globally recognized qualification that adds significant value to your professional profile.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary rounded-full p-2 mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Diverse Career Options</h3>
              <p className="text-gray-600">Work across finance, consulting, manufacturing, IT, and more with specialized skills.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your CMA Journey?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join Lakshya - the leading institute for CMA preparation with expert faculty, comprehensive study materials, and proven success record.</p>
        <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors">Contact Us</a>
            <a href="/enroll" className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg border-2 border-primary transition-colors">Request Callback</a>
        </div>
      </div>
    </div>
  )
}

export default Cma