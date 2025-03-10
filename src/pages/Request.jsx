import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

// Change to default export to match import in App.jsx
const Request = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Enhanced validation
    const errors = [];
    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.phone.trim()) errors.push("Phone number is required");
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }
    
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }
    
    setLoading(true);
    
    try {
      // Here you would add actual API call to submit the form
      // await axios.post('/api/request-call', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Your call request has been submitted successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 md:p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Request a Call</h1>
      <p className="text-center text-gray-600 mb-8">
        Fill out the form below and our team will get back to you at your preferred time.
      </p>
      
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-gray-700">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium text-gray-700">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email address"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 font-medium text-gray-700">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Your phone number"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
          <div className="flex flex-col flex-1">
            <label htmlFor="date" className="mb-2 font-medium text-gray-700">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex flex-col flex-1">
            <label htmlFor="time" className="mb-2 font-medium text-gray-700">Preferred Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you'd like to discuss"
            rows={4}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className={`py-3 px-4 rounded-md text-white font-medium transition duration-200 mt-2
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? 'Submitting...' : 'Request Call'}
        </button>
      </form>
    </div>
  );
};

// Change to default export
export default Request;
