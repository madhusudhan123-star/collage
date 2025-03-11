import React, { useState } from 'react'

const Enroll = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    education: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-8 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">College Enrollment Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Course:</label>
          <select 
            name="course" 
            value={formData.course} 
            onChange={handleChange} 
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          >
            <option value="">Select Course</option>
            <option value="computer-science">Computer Science</option>
            <option value="business">Business</option>
            <option value="engineering">Engineering</option>
            <option value="arts">Arts</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Gender:</label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none min-h-[100px]"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Previous Education:</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none min-h-[100px]"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-red-600 text-white py-4 px-4 rounded-md text-lg font-medium hover:bg-red-700 transition-colors duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  )
}

export default Enroll