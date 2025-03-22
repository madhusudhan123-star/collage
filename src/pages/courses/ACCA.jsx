import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';

// Replace relative imports with public URLs
const acca = '/assets/course/acca.jpg';

const ACCA = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };
  
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  
  const sections = [
    {
      title: "Applied Knowledge",
      papers: [
        "Business and Technology (BT)",
        "Management Accounting (MA)",
        "Financial Accounting (FA)"
      ]
    },
    {
      title: "Applied Skills",
      papers: [
        "Corporate and Business Law (LW)",
        "Performance Management (PM)",
        "Taxation (TX)",
        "Financial Reporting (FR)",
        "Audit and Assurance (AA)",
        "Financial Management (FM)"
      ]
    },
    {
      title: "Strategic Professional",
      papers: [
        "Strategic Business Leader (SBL)",
        "Strategic Business Reporting (SBR)",
        "Advanced Financial Management (AFM)",
        "Advanced Performance Management (APM)",
        "Advanced Taxation (ATX)",
        "Advanced Audit and Assurance (AAA)"
      ]
    }
  ];

  const exemptionsData = [
    {
      "Qualifications": "High School",
      "Number of exams": 13,
      "No of exemptions": "None",
      "Duration to complete": "Three year"
    },
    {
      "Qualifications": "B.Com",
      "Number of exams": 9,
      "No of exemptions": "BT, MA, FA, LW & TX",
      "Duration to complete": "Less than Three Years"
    },
    {
      "Qualifications": "IPCC (both)",
      "Number of exams": 8,
      "No of exemptions": "BT, MA, FA, TX & AA",
      "Duration to complete": "Two years"
    },
    {
      "Qualifications": "B.Com + IPCC",
      "Number of exams": 7,
      "No of exemptions": "BT, MA, FA, LW, TX & AA",
      "Duration to complete": "One year"
    },
    {
      "Qualifications": "CA (after 2003)",
      "Number of exams": 4,
      "No of exemptions": "BT, MA, FA, LW, PM, TX, FR, AA & FM",
      "Duration to complete": "One year"
    }
  ];

  const images = {
    hero: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/ACCA_logo.svg/1200px-ACCA_logo.svg.png",
    global: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3", 
    career: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3",
    study: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3",
    exam: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3",
    training: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
  };

  return (
    <div className="bg-gray-50">

      {/* Compact Hero Section */}
      <div className="bg-red-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">ACCA Online Course</h1>
              <p className="text-base mb-4">Association of Chartered Certified Accountants</p>
              <a href='/enroll'>
                <button className="bg-white text-red-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Apply Now
                </button>
              </a>
            </div>
            <div className="md:w-1/4">
              <img src={images.logo} alt="ACCA Logo" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Brief Introduction Section */}
      <section id="overview" className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold mb-2">Association of Chartered Certified Accountants</h2>
            <p className="text-lg text-gray-600 italic">Global Professional Accountant Qualification (1-3 Years)</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-3 mb-4">
              <div className="bg-gray-50 p-3 rounded text-center">
                <span className="block text-xl">🌍</span>
                <span className="text-sm">Recognized in 180+ Countries</span>
              </div>
              <div className="bg-gray-50 p-3 rounded text-center">
                <span className="block text-xl">💼</span>
                <span className="text-sm">High Salary Potential</span>
              </div>
              <div className="bg-gray-50 p-3 rounded text-center">
                <span className="block text-xl">📊</span>
                <span className="text-sm">In-Demand Job Roles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure as Accordion */}
      <section id="structure" className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Course Structure</h2>
          
          <div className="max-w-3xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="mb-2 border rounded-lg overflow-hidden">
                <button 
                  className="w-full bg-white p-3 text-left font-semibold flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-red-800">{section.title}</span>
                  <span>{openAccordion === index ? '−' : '+'}</span>
                </button>
                
                {openAccordion === index && (
                  <div className="p-3 bg-white border-t">
                    <ul className="space-y-1">
                      {section.papers.map((paper, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="mr-2">•</span>
                          {paper}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Duration as Compact Section */}
      <section id="eligibility" className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Eligibility & Duration</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2 text-lg">Eligibility</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><b>After 10th:</b> Start with Foundation in Accountancy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><b>After 12th:</b> Direct enrollment in ACCA Qualification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><b>Graduates:</b> Eligible for multiple exemptions</span>
                  </li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2 text-lg">Duration</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><b>Applied Knowledge:</b> 6-12 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><b>Applied Skills:</b> 12-18 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><b>Professional Level:</b> 12-24 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><b>With exemptions:</b> Duration reduced significantly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collapsible Exemptions Table */}
      <section id="exemptions" className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <button 
              className="w-full bg-white p-3 mb-2 text-left font-bold flex justify-between items-center rounded-lg"
              onClick={() => toggleSection(0)}
            >
              <span>ACCA Course Exemptions</span>
              <span>{openSection === 0 ? '−' : '+'}</span>
            </button>
            
            {openSection === 0 && (
              <div className="overflow-x-auto bg-white p-3 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      {Object.keys(exemptionsData[0]).map((header, index) => (
                        <th key={index} className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {exemptionsData.map((row, index) => (
                      <tr key={index}>
                        {Object.values(row).map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-3 py-2 whitespace-nowrap text-xs">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tabbed Interface for Career Information */}
      <section id="career" className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Career Prospects</h2>
            
            <Tab.Group>
              <Tab.List className="flex rounded-lg bg-gray-100 p-1 mb-4">
                {['Roles', 'Salary', 'Employers'].map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      `w-full py-2 text-sm font-medium leading-5 text-center rounded-lg
                      ${selected ? 'bg-red-800 text-white' : 'text-gray-700 hover:bg-gray-200'}`
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="bg-white rounded-lg p-4 border">
                <Tab.Panel>
                  <h3 className="font-bold mb-3">Top ACCA Career Paths</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Financial Analyst",
                      "Management Accountant",
                      "Financial Controller",
                      "Audit Manager",
                      "Tax Consultant",
                      "Business Consultant",
                      "Chief Financial Officer",
                      "Risk Analyst"
                    ].map((role, idx) => (
                      <div key={idx} className="bg-gray-50 p-2 rounded text-sm">
                        {role}
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <h3 className="font-bold mb-3">Salary Packages</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Entry-Level (0-2 years):</span>
                      <span className="font-bold">₹4-6 LPA</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mid-Level (3-5 years):</span>
                      <span className="font-bold">₹8-12 LPA</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Senior-Level (7-10+ years):</span>
                      <span className="font-bold">₹20+ LPA</span>
                    </li>
                  </ul>
                </Tab.Panel>
                <Tab.Panel>
                  <h3 className="font-bold mb-3">Top Employers</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Big 4 Firms: PwC, EY, Deloitte, KPMG</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Multinational Corporations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Financial Institutions & Banks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Consulting Firms</span>
                    </li>
                  </ul>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>

      {/* Why Lakshya - Compact Version */}
      <section id="why-lakshya" className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Why Lakshya for ACCA</h2>
            
            <div className="grid md:grid-cols-2 gap-2">
              {[
                "Approved Learning Partner (ALP)",
                "Experienced Faculty",
                "Comprehensive Study Materials",
                "Flexible Learning Options",
                "Personalized Mentorship",
                "On-Demand CBEs",
                "Career Assistance",
                "High Success Rate"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center p-2 bg-white rounded text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>
            
            <form className="grid md:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-lg">
              <input type="text" placeholder="Name" className="p-2 border rounded" />
              <input type="tel" placeholder="Phone" className="p-2 border rounded" />
              <input type="email" placeholder="Email" className="p-2 border rounded" />
              <select className="p-2 border rounded">
                <option value="">Select Level</option>
                <option>Applied Knowledge</option>
                <option>Applied Skills</option>
                <option>Strategic Professional</option>
              </select>
              <button type="submit" className="md:col-span-2 bg-red-800 text-white py-2 rounded hover:bg-red-700 transition">
                Request Information
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <a href="/enroll" className="bg-red-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition flex items-center">
          <span>Apply Now</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ACCA;
