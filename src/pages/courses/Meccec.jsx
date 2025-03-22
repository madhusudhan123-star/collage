import React from 'react'
import { Link } from 'react-router-dom'

const Meccec = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-8 mb-8 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt="College Campus" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">MEC & CEC Course</h1>
                        <p className="text-xl mb-2">Step in to your future</p>
                        <p className="text-2xl font-semibold mb-2">MEC & CEC Admissions Now open</p>
                        <p className="text-lg mb-4">Enroll today for brighter tomorrow</p>
                        <p className="text-lg mb-6">+918886664724  +918886664725</p>
                        <Link to="/enroll" className="bg-white text-red-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                            Enroll Now
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <img 
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                            alt="Students in classroom" 
                            className="rounded-lg shadow-lg max-h-64 object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Course Overview */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">MEC & CEC Courses in Hyderabad</h2>
                <div className="text-gray-700 space-y-4">
                    <p>Lakshya Education Institutions offers MEC and CEC courses in Hyderabad, designed to provide a strong foundation in commerce, finance, and business. Our programs blend theoretical knowledge with practical skills, preparing students for careers in accounting, finance, and management.</p>
                    <p>With experienced faculty and modern teaching methods, we ensure a quality learning experience. Our integrated programs include CA Foundation, CMA, and ACCA certifications, helping students gain the right skills for the financial sector.</p>
                    <p>Start your journey in commerce with Lakshya Education's MEC and CEC courses in Hyderabad. Choose Lakshya Education for MEC and CEC courses in Hyderabad, and take the first confident step toward achieving your career aspirations in commerce.</p>
                </div>
            </div>

            {/* Why Choose LAKSHYA */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Why LAKSHYA for MEC & CEC?</h2>
                <div className="grid md:grid-cols-1 gap-6">
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <div>
                                <span className="font-semibold">Expert Faculty</span> – Learn from experienced educators who provide in-depth subject knowledge and guidance.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <div>
                                <span className="font-semibold">Comprehensive Curriculum</span> – Well-structured courses covering commerce, economics, and finance with real-world applications.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <div>
                                <span className="font-semibold">Integrated Professional Courses</span> – Get a head start with CA Foundation, CMA, and ACCA alongside your MEC & CEC studies.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <div>
                                <span className="font-semibold">Practical Learning Approach</span> – Focus on skill development through case studies, projects, and industry-relevant insights.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <div>
                                <span className="font-semibold">Proven Track Record</span> – Join a trusted institution with a history of student success in commerce and finance careers.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* MEC & CEC Subjects */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">MEC & CEC Subjects</h2>
                
                {/* MEC Subjects */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-700 mb-4">MEC Subjects:</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-3 text-red-600">Mathematics</h4>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Calculus</li>
                                <li>• Algebra</li>
                                <li>• Statistics</li>
                                <li>• Probability</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-3 text-red-600">Economics</h4>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Microeconomics</li>
                                <li>• Macroeconomics</li>
                                <li>• Economic Theory</li>
                                <li>• Economic Development</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-3 text-red-600">Commerce</h4>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Business Studies</li>
                                <li>• Accountancy</li>
                                <li>• Finance</li>
                                <li>• Marketing</li>
                                <li>• Business Law</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* CEC Subjects */}
                <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-4">CEC Subjects:</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-3 text-red-600">Civics</h4>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Political Science</li>
                                <li>• Government</li>
                                <li>• Civics</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-3 text-red-600">Economics</h4>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Microeconomics</li>
                                <li>• Macroeconomics</li>
                                <li>• Economic Theory</li>
                                <li>• Economic Development</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-3 text-red-600">Commerce</h4>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Business Studies</li>
                                <li>• Accountancy</li>
                                <li>• Finance</li>
                                <li>• Marketing</li>
                                <li>• Business Law</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* About MEC & CEC */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">About MEC & CEC</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-red-600 mb-4">About MEC</h3>
                        <h4 className="font-semibold text-lg mb-2">MEC with CA Foundation Coaching in Hyderabad</h4>
                        <h5 className="font-semibold mb-2">Two-Year Integrated Program – MEC with CA Foundation Training</h5>
                        <p className="mb-3">The MEC + CA Foundation program is ideal for students aiming to build a career in Chartered Accountancy. The CA Foundation (formerly CPT) is the first step in the CA journey, and with thousands of students appearing for the exam every June and December, structured coaching is essential for success.</p>
                        <p className="mb-3">At Lakshya Education, we provide a well-balanced approach that helps students manage both their Intermediate Public Examination (IPE) and CA Foundation preparation effectively.</p>
                        
                        <h5 className="font-semibold mb-2">Program Highlights</h5>
                        <ul className="space-y-1 mb-3">
                            <li>• Post-IPE CA Foundation Coaching – Focused training for the June CA Foundation exam after IPE.</li>
                            <li>• Mock CA Foundation Tests – Regular assessments with feedback for continuous improvement.</li>
                            <li>• Expert Faculty – Senior professionals delivering quality education.</li>
                            <li>• Interactive Learning Environment – AC classrooms & small batch sizes for personalized attention.</li>
                            <li>• Comprehensive Study Materials – Multi-level practice sheets, chapter-wise assignments, and concept-based exercises.</li>
                            <li>• Technology-Enabled Learning – Tablets for digital assignments, practice tests, and interactive lessons.</li>
                            <li>• Application Support – Guidance for exam registration, documentation, and form filling.</li>
                            <li>• Interview & GD Training – Preparation for group discussions, micro presentations, and interviews if required.</li>
                        </ul>
                        
                        <h5 className="font-semibold mb-2">Learning Methodology – A Four-Stage Approach</h5>
                        <ul className="space-y-1 mb-3">
                            <li>• Objective-Based Learning – Conceptual sheets with multiple-choice and objective-type questions.</li>
                            <li>• Conceptual Understanding – Strong foundation with theory, problem-solving, and analytical reasoning.</li>
                            <li>• Practice Assignments – Topic-wise exercises to enhance application skills.</li>
                            <li>• Regular Testing & Performance Analysis – Mock exams with expert evaluation for continuous progress.</li>
                        </ul>
                        
                        <p className="mb-2">At Lakshya Education, we ensure that students receive the best training, resources, and mentorship to excel in their CA Foundation exam and build a successful career in finance.</p>
                        <p>Enroll today and take the first step toward becoming a Chartered Accountant.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-red-600 mb-4">About CEC</h3>
                        <h4 className="font-semibold text-lg mb-2">CEC with CLAT Coaching in Hyderabad</h4>
                        <h5 className="font-semibold mb-2">Two-Year Integrated Program – CEC with CLAT</h5>
                        <p className="mb-3">The CEC + CLAT program is designed for students aspiring to build a career in Law. This unique combination of Civics, Economics, and Commerce (CEC), along with CLAT coaching, prepares students for multiple national-level entrance exams, giving them a wide range of career choices.</p>
                        
                        <h5 className="font-semibold mb-2">What's Included in the Program?</h5>
                        <ul className="space-y-1 mb-3">
                            <li>• Comprehensive Preparation for Entrance Exams – Covers CLAT, LSAT, AILET, LAWCET, and more.</li>
                            <li>• Admission & Counseling Support – Guidance on application processing and selection for top law schools.</li>
                            <li>• Interview & GD Training – Individual coaching for group discussions, micro presentations, and personal interviews.</li>
                            <li>• Expanded Career Opportunities – Also prepares students for Hotel Management (NCHMCT-JEE, Manipal), Mass Communication (Christ, Symbiosis, Manipal), and Social Sciences & Liberal Arts (TISS, SSLA).</li>
                        </ul>
                        
                        <h5 className="font-semibold mb-2">Features of Our Training Program</h5>
                        <ul className="space-y-1 mb-3">
                            <li>• AC Classrooms & Small Batches – Personalized learning environment for better interaction.</li>
                            <li>• Expert Faculty – Experienced professionals providing quality education.</li>
                            <li>• Multi-Level Practice Materials – Classroom worksheets, assignments, and chapter-wise exercises.</li>
                            <li>• Tech-Enabled Learning – Tablets for digital assignments, tests, and e-learning modules.</li>
                            <li>• Full Application Support – Assistance with form filling, documentation, and admission guidance.</li>
                        </ul>
                        
                        <h5 className="font-semibold mb-2">Structured Learning Approach</h5>
                        <ul className="space-y-1 mb-3">
                            <li>• Concept-Based Learning – Focus on theory, core concepts, and problem-solving techniques.</li>
                            <li>• Objective Format Practice – Topic-wise MCQs and multiple-choice assessments.</li>
                            <li>• Assignments & Mock Tests – Regular practice sheets and performance analysis to track progress.</li>
                        </ul>
                        
                        <p className="mb-2">At Lakshya Education, we provide a holistic learning experience to help students achieve top scores in law entrance exams and secure admission to premier institutions.</p>
                        <p>Start your journey toward a successful career in law today!</p>
                    </div>
                </div>
            </div>

            {/* What We Provide */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">What We Provide?</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-center text-red-600 mb-6">Best Commerce College in South India</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-lg mb-4 text-red-600">MEC</h4>
                        <ul className="space-y-2">
                            <li>• MEC with CA Foundation</li>
                            <li>• MEC with CMA</li>
                            <li>• MEC with ACCA</li>
                            <li>• MEC with CIMA</li>
                            <li>• MEC Regular</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-lg mb-4 text-red-600">CEC</h4>
                        <ul className="space-y-2">
                            <li>• CEC with CA Foundation</li>
                            <li>• CEC with CLAT / CIVILS</li>
                            <li>• CEC IPMAT / CUET</li>
                            <li>• CEC Regular</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Future Scope */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Future Scope</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-red-600 mb-4">Future Scope for MEC with CA Foundation Coaching in Hyderabad</h3>
                        <p className="mb-3">The combination of MEC (Maths, Economics, and Commerce) with CA Foundation coaching is a strategic choice for students aiming to become Chartered Accountants. This program enhances financial and analytical skills, providing a strong conceptual foundation for excelling in the CA Foundation exam.</p>
                        <p>Hyderabad, a hub for top-tier coaching institutes and experienced mentors, offers structured training to help students master the fundamentals of accounting, taxation, and finance. With the growing demand for CAs in audit, taxation, corporate finance, and consultancy, this career path ensures long-term stability and growth opportunities in diverse industries.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-red-600 mb-4">Future Scope for CEC with CLAT Coaching in Hyderabad</h3>
                        <p className="mb-3">The combination of CEC (Civics, Economics, and Commerce) with CLAT coaching opens doors to prestigious law careers. This program strengthens students' legal aptitude, reasoning, and analytical skills, equipping them to crack CLAT and secure admission to top National Law Universities (NLUs).</p>
                        <p>Hyderabad, known for its renowned law coaching centers and expert faculty, provides focused training to help students excel in national-level law entrance exams. Graduates can explore diverse career paths, including corporate law, civil services, judiciary, and legal consultancy, ensuring a dynamic and rewarding professional journey.</p>
                    </div>
                </div>
            </div>

            {/* Course Overview - Original Content */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt="MEC Course - Mathematics, Economics, Commerce" 
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
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt="CEC Course - Civics, Economics, Commerce" 
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
                            src="https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                            alt="Experienced Faculty" 
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2">Experienced Faculty</h3>
                        <p className="text-gray-600">Learn from industry experts with years of teaching experience</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <img 
                            src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                            alt="Modern Facilities" 
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2">Modern Facilities</h3>
                        <p className="text-gray-600">State-of-the-art classrooms and learning resources</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <img 
                            src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
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