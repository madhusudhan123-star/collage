import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Degree = () => {
  const [activeTab, setActiveTab] = useState('BBA');

  const courses = [
    {
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 from any stream",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3",
      features: [
        "Industry-oriented curriculum",
        "Experienced faculty",
        "Practical exposure",
        "Placement assistance"
      ]
    },
    {
      title: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 from any stream",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3",
      features: [
        "Comprehensive business education",
        "Professional development",
        "Industry connections",
        "Modern facilities"
      ]
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      course: "BBA",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "The program exceeded my expectations. The practical knowledge gained here has been invaluable."
    },
    {
      name: "Jane Smith",
      course: "B.Com",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Outstanding faculty and excellent placement opportunities. I'm glad I chose this college."
    }
  ];

  const programHighlights = [
    {
      title: "Academic Excellence",
      points: [
        "NAAC Accredited Institution",
        "State-of-the-art Labs",
        "Digital Library Access",
        "Smart Classrooms"
      ]
    },
    {
      title: "Career Development",
      points: [
        "Personality Development Sessions",
        "Communication Skills Training",
        "Industry Exposure",
        "Internship Opportunities"
      ]
    }
  ];

  const feeStructure = [
    {
      course: "BBA",
      tuitionFee: "₹80,000/year",
      totalFee: "₹2,40,000",
      scholarships: "Available for merit students"
    },
    {
      course: "B.Com",
      tuitionFee: "₹70,000/year",
      totalFee: "₹2,10,000",
      scholarships: "Available for merit students"
    }
  ];

  const admissionSteps = [
    "Online Application Submission",
    "Document Verification",
    "Entrance Test (if applicable)",
    "Personal Interview",
    "Fee Payment & Enrollment"
  ];

  const placements = {
    companies: ["Deloitte", "EY", "KPMG", "TCS", "Infosys"],
    highlights: [
      "100% Placement Assistance",
      "Average Package: 5-7 LPA",
      "Highest Package: 12 LPA",
      "500+ Recruiting Partners"
    ]
  };

  const salaryData = {
  "BBA": [
    {
      "Job Profile": "HR Manager",
      "Average Salary / Annum": "INR 708,407 per year"
    },
    {
      "Job Profile": "Business Development Manager",
      "Average Salary / Annum": "INR 599,128 per year"
    },
    {
      "Job Profile": "Executive Assistant",
      "Average Salary / Annum": "INR 301,621 per year"
    },
    {
      "Job Profile": "Financial Analyst",
      "Average Salary / Annum": "INR 411,138 per year"
    },
    {
      "Job Profile": "Operations Manager",
      "Average Salary / Annum": "INR 773,066 per year"
    },
    {
      "Job Profile": "Finance Manager",
      "Average Salary / Annum": "INR 993,219 per year"
    },
    {
      "Job Profile": "Marketing Executive",
      "Average Salary / Annum": "INR 275,000 per year"
    }
  ],
  "BCA": [
    {
      "Job Profile": "Software Developer",
      "Average Salary / Annum": "INR 493,576 per year"
    },
    {
      "Job Profile": "Web Developer",
      "Average Salary / Annum": "INR 309,759 per year"
    },
    {
      "Job Profile": "System Analyst",
      "Average Salary / Annum": "INR 612,717 per year"
    },
    {
      "Job Profile": "Database Administrator",
      "Average Salary / Annum": "INR 507,782 per year"
    },
    {
      "Job Profile": "Network Administrator",
      "Average Salary / Annum": "INR 353,474 per year"
    },
    {
      "Job Profile": "Technical Support Specialist",
      "Average Salary / Annum": "INR 285,000 per year"
    },
    {
      "Job Profile": "Cyber Security Analyst",
      "Average Salary / Annum": "INR 602,654 per year"
    }
  ]
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] flex items-center justify-center" 
           style={{
             backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3")',
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4">
            Best Degree Colleges in Hyderabad
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl">
            Empowering futures with quality education and excellence
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* College Introduction Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Best Degree Colleges in Hyderabad for BBA & BCA</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Lakshya College of Commerce & Management - Your Launchpad to Success!
                  Established in 2021 as a subsidiary of Lakshya Educational College, we have earned the title 
                  of Best Commerce College in South India through our commitment to excellence.
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Why Choose Lakshya?</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Ranked among the best degree colleges in Hyderabad</li>
                    <li>Perfect blend of traditional education and modern innovation</li>
                    <li>Focus on career-driven learning with real-world applications</li>
                  </ul>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
                alt="Campus" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Program Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programHighlights.map((program) => (
              <div key={program.title} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-red-600">{program.title}</h3>
                <ul className="space-y-2">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-center">
                      <span className="mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Courses Section with Images */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Degree Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={course.title} 
                className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-red-600">{course.title}</h3>
                  <div className="mb-4">
                    <p className="text-gray-700"><span className="font-semibold">Duration:</span> {course.duration}</p>
                    <p className="text-gray-700"><span className="font-semibold">Eligibility:</span> {course.eligibility}</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-600">
                    {course.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/enroll">
                    <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Fee Structure</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Course</th>
                  <th className="py-3 px-6 text-left">Tuition Fee</th>
                  <th className="py-3 px-6 text-left">Total Fee</th>
                  <th className="py-3 px-6 text-left">Scholarships</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee) => (
                  <tr key={fee.course} className="border-b">
                    <td className="py-4 px-6">{fee.course}</td>
                    <td className="py-4 px-6">{fee.tuitionFee}</td>
                    <td className="py-4 px-6">{fee.totalFee}</td>
                    <td className="py-4 px-6">{fee.scholarships}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Admission Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Admission Process</h2>
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="flex flex-col space-y-6">
              {admissionSteps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <span className="text-lg">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Salary Insights Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Career & Salary Insights</h2>
          
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-6">
            {Object.keys(salaryData).map((course) => (
              <button
                key={course}
                onClick={() => setActiveTab(course)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === course 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {course}
              </button>
            ))}
          </div>

          {/* Salary Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Profile
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Average Salary / Annum
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {salaryData[activeTab].map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item["Job Profile"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item["Average Salary / Annum"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Placements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Placements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Top Recruiters</h3>
              <div className="flex flex-wrap gap-4">
                {placements.companies.map((company) => (
                  <span key={company} className="px-4 py-2 bg-gray-100 rounded-full">
                    {company}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Placement Highlights</h3>
              <ul className="space-y-2">
                {placements.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Traditional Day Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Traditional Day Celebration</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">A Celebration of Culture & Heritage</h3>
                <p className="text-gray-700 mb-4">
                  Our Traditional Day brings students together to honor India's rich cultural diversity 
                  through traditional attire, regional language introductions, and cultural activities.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Why It Matters:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Celebrates cultural heritage from different regions</li>
                    <li>Encourages unity in diversity</li>
                    <li>Creates lasting memories and college spirit</li>
                  </ul>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad" 
                alt="Traditional Day" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Guest Lecture Section */}
        <section className="mb-16">
          <div className="bg-gray-100 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Expert Guest Lectures</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290" 
                alt="Guest Lecture" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-4">Learning from Industry Leaders</h3>
                <p className="text-gray-700 mb-4">
                  We regularly host distinguished experts like Wing Commander G. Srinivasu (Retd.) 
                  for insights on cybersecurity, leadership, and national security.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Key Discussion Areas:</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Cybersecurity fundamentals</li>
                    <li>Career opportunities in national security</li>
                    <li>Leadership in challenging environments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4"/>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90">Join us and build a successful career with our comprehensive degree programs.</p>
          <Link to="/enroll">
            <button className="bg-white text-red-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-300">
              Enroll Now
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Degree