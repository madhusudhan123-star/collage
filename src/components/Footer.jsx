import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mainNavigation } from '../data/navigationData';
import logo from '../assets/logo-removebg.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    // Theme colors matching Home page
    const theme = {
        primary: '#A6192E',    // Deep Red
        secondary: '#FFD700',  // Gold
        accent: '#FAF3E0',     // Off-white
        background: '#ECECEC', // Soft Grey
        darkPrimary: '#8B1425', // Darker shade of primary
        lightSecondary: '#FFF0A3', // Lighter shade of gold
    };

    // Social media links
    const socialLinks = [
        {
            name: "Facebook",
            url: "https://facebook.com",
            icon: <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
        },
        {
            name: "Twitter",
            url: "https://twitter.com",
            icon: <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
        },
        {
            name: "Instagram",
            url: "https://instagram.com",
            icon: <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com",
            icon: <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
        },
        {
            name: "YouTube",
            url: "https://youtube.com",
            icon: <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => {
                setSubscribed(false);
            }, 3000);
        }
    };

    // A flattened version of navigation for the footer
    const footerNavLinks = mainNavigation.map(item => {
        return {
            id: item.id,
            label: item.label,
            path: item.path,
            hasDropdown: item.hasDropdown
        };
    });

    // Get a simplified list of courses from navigation data
    const getCoursesList = () => {
        const coursesItem = mainNavigation.find(item => item.id === 'courses');
        if (coursesItem && coursesItem.dropdownItems) {
            return coursesItem.dropdownItems.map(item => ({
                id: item.id,
                label: item.label,
                path: item.path
            }));
        }
        return [];
    };

    return (
        <footer style={{ backgroundColor: theme.primary }} className="text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo and info */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <img src={logo} alt="Lakshya Edu Logo" className="h-16 bg-white p-2 rounded-md" />
                        </Link>
                        <p className="text-sm mb-6">
                            Empowering future professionals through excellent education in accounting and finance.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                                    style={{ backgroundColor: theme.secondary, color: theme.primary }}
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerNavLinks.filter(item => !item.hasDropdown).map(item => (
                                <li key={item.id}>
                                    <Link 
                                        to={item.path} 
                                        className="text-sm hover:text-yellow-300 transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Courses */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Our Courses</h3>
                        <ul className="space-y-2">
                            {getCoursesList().map(course => (
                                <li key={course.id}>
                                    <Link 
                                        to={course.path} 
                                        className="text-sm hover:text-yellow-300 transition-colors duration-200"
                                    >
                                        {course.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Subscribe */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Contact Us</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm">123 Education Street, Knowledge City, 302001</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-sm">+91 8886664725/+91 8886664724</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm">info@lakshyaedu.co.in</span>
                            </div>
                        </div>
                        
                        {/* <div className="mt-6">
                            <h4 className="text-md font-semibold mb-3">Subscribe for Updates</h4>
                            <form onSubmit={handleSubmit} className="flex">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    className="px-3 py-2 text-sm rounded-l bg-white/20 border-none text-white placeholder-white/70 focus:outline-none flex-grow"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-3 py-2 rounded-r text-sm font-medium"
                                    style={{ backgroundColor: theme.secondary, color: theme.primary }}
                                >
                                    Go
                                </button>
                            </form>
                            {subscribed && (
                                <div className="mt-2 text-xs text-green-300">
                                    Thank you for subscribing!
                                </div>
                            )}
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Footer Bottom / Copyright */}
            <div style={{ backgroundColor: theme.darkPrimary }} className="py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-white/70">
                            &copy; {new Date().getFullYear()} Institute of Science & Nutrition. All rights reserved.
                        </p>

                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <Link to="/privacy-policy" className="text-xs text-white/70 hover:text-white">Privacy Policy</Link>
                            {/* <Link to="/terms-of-use" className="text-xs text-white/70 hover:text-white">Terms of Use</Link>
                            <Link to="/sitemap" className="text-xs text-white/70 hover:text-white">Sitemap</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
