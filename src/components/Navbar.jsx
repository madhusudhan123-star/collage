import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';
import logo from '../assets/logo-removebg.png';
import { mainNavigation } from '../data/navigationData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  // Theme colors for consistent styling
  const theme = {
    primary: '#A6192E',    // Deep Red
    secondary: '#FFD700',  // Gold
    accent: '#FAF3E0',     // Off-white
    background: '#ECECEC', // Soft Grey
    darkPrimary: '#8B1425', // Darker shade of primary
    lightSecondary: '#FFF0A3', // Lighter shade of gold
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle mobile menu body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Clear timeout when component unmounts
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Animation for mobile menu
  const menuAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? 'translateY(0%)' : 'translateY(-100%)',
    config: { tension: 280, friction: 24 }
  });

  // Check if path is active
  const isActive = (path) => location.pathname === path;
  
  // Check if a dropdown item contains the active path
  const containsActive = (items) => {
    if (!items) return false;
    return items.some(item => 
      isActive(item.path) || 
      (item.dropdownItems && containsActive(item.dropdownItems))
    );
  };

  // Increase delay time for smoother transitions
  const HOVER_DELAY = 400;

  // Controlled handling of dropdown hover with delay
  const handleDropdownMouseEnter = (id) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(id);
  };

  const handleDropdownMouseLeave = (e) => {
    // Check if we're moving to a submenu
    const relatedTarget = e.relatedTarget;
    const isMovingToSubmenu = relatedTarget && (
      relatedTarget.closest('.dropdown-menu') || 
      relatedTarget.closest('.submenu')
    );
    
    if (!isMovingToSubmenu) {
      closeTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }, 100);
    }
  };

  // Toggle dropdown state (for click)
  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    } else {
      setActiveDropdown(id);
      setActiveSubmenu(null);
    }
  };

  // Controlled handling of submenu hover
  const handleSubmenuMouseEnter = (id) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveSubmenu(id);
  };

  const handleSubmenuMouseLeave = (e) => {
    // Check if we're moving back to the main dropdown
    const relatedTarget = e.relatedTarget;
    const isMovingToDropdown = relatedTarget && relatedTarget.closest('.dropdown-menu');
    
    if (!isMovingToDropdown) {
      closeTimeoutRef.current = setTimeout(() => {
        setActiveSubmenu(null);
      }, 100);
    }
  };

  // Toggle submenu state (for click)
  const toggleSubmenu = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  return (
    <nav className="bg-white relative z-50" ref={navRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Lakshya Edu Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {mainNavigation.map(item => (
              <div key={item.id} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button 
                      className="px-3 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors"
                      style={{ 
                        color: activeDropdown === item.id || containsActive(item.dropdownItems) 
                          ? theme.primary 
                          : 'inherit',
                        fontWeight: activeDropdown === item.id || containsActive(item.dropdownItems) 
                          ? 'bold' 
                          : 'normal'
                      }}
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={activeDropdown === item.id}
                      onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {item.label}
                      <svg 
                        className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Desktop Dropdown Menu with hover buffer */}
                    {activeDropdown === item.id && (
                      <div 
                        className="absolute left-0 top-full z-50 dropdown-menu" 
                        onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        {/* Invisible buffer zone to prevent gaps */}
                        <div className="h-2 w-full"></div>
                        
                        <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 w-56">
                          {item.dropdownItems && item.dropdownItems.map(subItem => (
                            <div key={subItem.id} className="relative">
                              {subItem.dropdownItems ? (
                                <>
                                  <div 
                                    className="relative group"
                                    onMouseEnter={() => handleSubmenuMouseEnter(subItem.id)}
                                    onMouseLeave={handleSubmenuMouseLeave}
                                  >
                                    <button
                                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                                      onClick={(e) => toggleSubmenu(e, subItem.id)}
                                    >
                                      {subItem.label}
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                      </svg>
                                    </button>
                                    
                                    {activeSubmenu === subItem.id && (
                                      <div 
                                        className="absolute left-full top-0 z-50 submenu"
                                        onMouseEnter={() => handleSubmenuMouseEnter(subItem.id)}
                                        onMouseLeave={handleSubmenuMouseLeave}
                                      >
                                        {/* Buffer on the left side to connect menus */}
                                        <div className="w-2 h-full absolute -left-2"></div>
                                        
                                        <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 w-56">
                                          {subItem.dropdownItems.map(childItem => (
                                            <Link
                                              key={childItem.id}
                                              to={childItem.path}
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                              onClick={() => {
                                                setActiveDropdown(null);
                                                setActiveSubmenu(null);
                                              }}
                                            >
                                              {childItem.label}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </>
                              ) : (
                                <Link
                                  to={subItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  style={{ 
                                    color: isActive(subItem.path) ? theme.primary : 'inherit',
                                    fontWeight: isActive(subItem.path) ? 'bold' : 'normal'
                                  }}
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setActiveSubmenu(null);
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={item.path}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    style={{ 
                      color: isActive(item.path) ? theme.primary : 'inherit',
                      fontWeight: isActive(item.path) ? 'bold' : 'normal'
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <animated.div 
          style={menuAnimation} 
          className="md:hidden bg-white fixed inset-0 z-40 overflow-y-auto pt-20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainNavigation.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
                      style={{ 
                        backgroundColor: activeDropdown === item.id ? theme.background : '',
                        color: activeDropdown === item.id ? theme.primary : ''
                      }}
                      onClick={() => toggleDropdown(item.id)}
                    >
                      {item.label}
                      <svg 
                        className={`ml-1 w-5 h-5 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {activeDropdown === item.id && (
                      <div className="pl-4 pr-2 py-2 space-y-1">
                        {item.dropdownItems.map(subItem => (
                          <div key={subItem.id}>
                            {subItem.dropdownItems ? (
                              <>
                                <button
                                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
                                  style={{ 
                                    backgroundColor: activeSubmenu === subItem.id ? theme.background : '',
                                    color: activeSubmenu === subItem.id ? theme.primary : ''
                                  }}
                                  onClick={(e) => toggleSubmenu(e, subItem.id)}
                                >
                                  {subItem.label}
                                  <svg 
                                    className={`ml-1 w-5 h-5 transition-transform ${activeSubmenu === subItem.id ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>
                                
                                {/* Mobile Submenu */}
                                {activeSubmenu === subItem.id && (
                                  <div className="pl-4 pr-2 py-2 space-y-1">
                                    {subItem.dropdownItems.map(childItem => (
                                      <Link
                                        key={childItem.id}
                                        to={childItem.path}
                                        className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {childItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={subItem.path}
                                className="block px-3 py-2 border-l-2 rounded-md text-base font-medium"
                                style={{ 
                                  borderColor: isActive(subItem.path) ? theme.secondary : 'transparent',
                                  color: isActive(subItem.path) ? theme.primary : ''
                                }}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-base font-medium"
                    style={{ 
                      backgroundColor: isActive(item.path) ? theme.background : '',
                      color: isActive(item.path) ? theme.primary : ''
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Footer for mobile menu */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex justify-center space-x-6 px-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c3.38 0 3.784.013 5.11.074 1.235.056 1.91.262 2.356.55.598.23 1.025.546 1.472.996.45.45.766.877.996 1.476.29.446.494 1.12.55 2.356.06 1.326.074 1.73.074 5.108 0 3.38-.014 3.784-.074 5.108-.056 1.236-.262 1.91-.55 2.356-.23.6-.546 1.026-.996 1.476-.45.45-.878.767-1.476.997-.446.29-1.12.494-2.356.55-1.326.06-1.73.073-5.108.073-3.38 0-3.784-.013-5.108-.074-1.236-.056-1.91-.262-2.356-.55-.6-.23-1.026-.546-1.476-.996-.45-.45-.766-.878-.997-1.476-.29-.446-.493-1.12-.55-2.356-.06-1.326-.073-1.73-.073-5.108 0-3.378.014-3.784.074-5.108.056-1.236.262-1.91.55-2.356.23-.6.546-1.026.996-1.476.45-.45.878-.766 1.476-.997.446-.29 1.12-.494 2.356-.55 1.326-.06 1.73-.073 5.108-.073zm0 2.224c-3.294 0-3.688.014-4.988.072-1.204.055-1.858.257-2.292.423-.578.224-.99.492-1.422.924-.43.432-.7.844-.924 1.422-.166.434-.368 1.088-.423 2.292-.058 1.3-.072 1.694-.072 4.988 0 3.294.014 3.688.072 4.988.055 1.204.257 1.858.423 2.292.224.578.492.99.924 1.422.432.43.844.7 1.422.924.434.166 1.088.368 2.292.423 1.3.06 1.694.073 4.988.073 3.294 0 3.688-.014 4.988-.073 1.204-.055 1.858-.257 2.292-.423.578-.224.99-.492 1.422-.924.43-.432.7-.844.924-1.422.166-.434.368-1.088.423-2.292.06-1.3.073-1.694.073-4.988 0-3.294-.013-3.688-.073-4.988-.055-1.204-.257-1.858-.423-2.292-.224-.578-.492-.99-.924-1.422-.432-.432-.844-.7-1.422-.924-.434-.166-1.088-.368-2.292-.423-1.3-.058-1.694-.072-4.988-.072zm0 3.783c3.44 0 6.23 2.79 6.23 6.23s-2.79 6.23-6.23 6.23-6.23-2.79-6.23-6.23 2.79-6.23 6.23-6.23zm0 10.288c2.24 0 4.06-1.82 4.06-4.06s-1.82-4.06-4.06-4.06-4.06 1.82-4.06 4.06 1.82 4.06 4.06 4.06z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>

            <div className="mt-4 px-4 text-center">
              <Link
                to="/contact"
                className="block py-2 px-4 rounded font-medium text-white shadow-md"
                style={{ backgroundColor: theme.primary }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </animated.div>
      )}
    </nav>
  );
};

export default Navbar;
