import React from 'react';
import { motion } from 'framer-motion';

const ACCA = () => {
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
    hero: "https://www.accaglobal.com/content/dam/ACCA_Global/pro-quote/pro-quote-1920x1080.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/ACCA_logo.svg/800px-ACCA_logo.svg.png",
    global: "https://www.accaglobal.com/content/dam/ACCA_Global/Professional-Insights/global-smp-business/pi-global-smp-growth.jpg",
    career: "https://www.accaglobal.com/content/dam/ACCA_Global/Members/Member2020/images/Professional_insights_new.jpg",
    study: "https://www.accaglobal.com/content/dam/acca/global/images/memberquote/member-quote-2-16x9.jpg",
    exam: "https://www.accaglobal.com/content/dam/acca/global/images/qualifications/exams-calculator-16x9.jpg",
    training: "https://www.accaglobal.com/content/dam/acca/global/images/members/studying-desk-laptop-16x9.jpg"
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative bg-red-800 text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={images.hero}
            alt="ACCA Course"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">ACCA Online Course</h1>
              <p className="text-lg mb-6">Association of Chartered Certified Accountants</p>
              <a href='/enroll'>
              <button className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Appy Now
              </button>
              </a>
            </div>
            <div className="md:w-1/3">
              <img
                src={images.logo}
                alt="ACCA Logo"
                className="w-full max-w-[300px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Overview with Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={images.global}
                alt="Global Recognition"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-8">Global Recognition</h2>
              <div className="grid gap-6">
                <div className="border p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Duration</h3>
                  <p>3-4 years (flexible)</p>
                </div>
                <div className="border p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Mode of Study</h3>
                  <p>Online / Live Classes</p>
                </div>
                <div className="border p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Recognition</h3>
                  <p>180+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Course Structure</h2>
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4 text-red-800">{section.title}</h3>
                <ul className="space-y-2">
                  {section.papers.map((paper, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2">•</span>
                      {paper}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Prospects with Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Career Prospects</h2>
              <p className="text-gray-600 mb-8">
                ACCA qualification opens doors to diverse career opportunities across the globe
              </p>
              <img
                src={images.career}
                alt="Career Growth"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="grid gap-4">
              {[
                "Chief Financial Officer",
                "Financial Controller",
                "Management Accountant",
                "Financial Analyst",
                "Audit Manager",
                "Business Consultant"
              ].map((career, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  {career}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Expert Faculty with Global Experience",
              "Comprehensive Study Materials",
              "Regular Mock Tests",
              "24/7 Doubt Resolution",
              "Flexible Learning Schedule",
              "Placement Assistance"
            ].map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <svg className="w-6 h-6 text-red-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCA Course Exemptions & Scholarship */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">ACCA Course Exemptions & Scholarship</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(exemptionsData[0]).map((header, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {exemptionsData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {Object.values(row).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* New Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Study Support Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Study Support</h2>
              <p className="text-gray-600 mb-4">
                Get comprehensive study support through:
              </p>
              <ul className="space-y-3">
                {[
                  "Live Online Classes",
                  "Recorded Video Lectures",
                  "Practice Question Banks",
                  "One-to-One Mentoring",
                  "Study Materials & Resources"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-red-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={images.study}
                alt="Study Support"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Exam Preparation Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img
                src={images.exam}
                alt="Exam Preparation"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Exam Preparation</h2>
              <p className="text-gray-600 mb-4">
                Our comprehensive exam preparation includes:
              </p>
              <ul className="space-y-3">
                {[
                  "Regular Mock Tests",
                  "Previous Year Questions",
                  "Performance Analysis",
                  "Exam Techniques Workshop",
                  "Time Management Strategies"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-red-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Training Approach Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Training Approach</h2>
              <p className="text-gray-600 mb-4">
                Our training methodology focuses on:
              </p>
              <ul className="space-y-3">
                {[
                  "Practical Case Studies",
                  "Industry Expert Sessions",
                  "Hands-on Assignments",
                  "Interactive Learning",
                  "Regular Progress Tracking"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-red-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={images.training}
                alt="Training Approach"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your ACCA Journey?</h2>
          <p className="mb-6">Get in touch with our counselors for personalized guidance</p>
          <button className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ACCA;
