import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animated, useSpring, useTrail } from '@react-spring/web';
import logo from '../assets/logo-removebg.png';
import { mainNavigation } from '../data/navigationData';

// Theme colors
const theme = {
  primary: '#A6192E',    // Deep Red
  secondary: '#FFD700',  // Gold
  accent: '#FAF3E0',     // Off-white
  background: '#ECECEC', // Soft Grey
  darkPrimary: '#8B1425', // Darker shade of primary for hover states
  lightSecondary: '#FFF0A3', // Lighter shade of gold for hover effects
}

// Custom scrollbar styles with theme colors
const scrollbarStyles = `
  /* Custom scrollbar styles */
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;  /* Increased width for better visibility */
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: ${theme.accent};
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: ${theme.primary};
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: ${theme.darkPrimary};
  }

  /* Thinner scrollbar for secondary panels */
  .thin-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  
  .thin-scrollbar::-webkit-scrollbar-thumb {
    background: ${theme.secondary};
  }
  
  .thin-scrollbar::-webkit-scrollbar-thumb:hover {
    background: ${theme.darkPrimary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);
  const [activeTertiaryItem, setActiveTertiaryItem] = useState(null); // New state for fourth level navigation
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));

    // Set the active section when dropdown is toggled
    const section = mainNavigation.find(item => item.id === id);
    setActiveSection(section);
    setActiveSubSection(null); // Clear active subsection when changing main section
  };

  // Function to handle navigation item click
  const handleNavItemClick = (item) => {
    if (item.hasDropdown) {
      toggleDropdown(item.id);
    } else {
      toggleMenu();
      setActiveSection(null);
      setActiveSubSection(null);
    }
  };

  // Function to handle second level navigation item click
  const handleSubNavItemClick = (item, event) => {
    if (item.hasDropdown || (item.dropdownItems && item.dropdownItems.length > 0)) {
      event.preventDefault();
      setActiveSubSection(item);
      setActiveTertiaryItem(null); // Reset fourth level when selecting a new tertiary item
    } else {
      toggleMenu();
    }
  };

  // New function to handle tertiary level navigation item click
  const handleTertiaryItemClick = (item, event) => {
    if (item.hasDropdown || (item.dropdownItems && item.dropdownItems.length > 0)) {
      event.preventDefault();
      setActiveTertiaryItem(item);
    } else {
      toggleMenu();
    }
  };

  // Add this effect to control body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Allow scrolling when menu is closed
      document.body.style.overflow = 'auto';
    }

    // Clean up function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Animation for menu container
  const menuAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
    height: isOpen ? 'auto' : 0,
    config: { tension: 280, friction: 24 },
    overflow: 'hidden',
  });

  // Animation for hamburger menu icon - enhanced to transform into X
  const iconAnimation = useSpring({
    // Rotate the entire button
    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
    // Additional animations for transforming into X
    config: { tension: 300, friction: 20 },
  });

  // Line animations for transforming hamburger to X
  const firstLineAnimation = useSpring({
    transform: isOpen ? 'translate(0px, 9px) rotate(45deg)' : 'translate(0px, 0px) rotate(0deg)',
    width: isOpen ? '16px' : '16px',
    config: { tension: 300, friction: 20 },
  });

  const secondLineAnimation = useSpring({
    opacity: isOpen ? 0 : 1,
    width: isOpen ? '0px' : '16px',
    config: { tension: 300, friction: 20 },
  });

  const thirdLineAnimation = useSpring({
    transform: isOpen ? 'translate(0px, -9px) rotate(-45deg)' : 'translate(0px, 0px) rotate(0deg)',
    width: isOpen ? '16px' : '16px',
    config: { tension: 300, friction: 20 },
  });

  // Staggered animation for menu items with rotation effect
  const trail = useTrail(mainNavigation.length, {
    config: { mass: 1, tension: 200, friction: 20 },
    opacity: isOpen ? 1 : 0,
    x: isOpen ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });

  // Check if path is active for highlighting current item
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Check if dropdown contains the current path
  const hasActivePath = (dropdownItems) => {
    if (!dropdownItems) return false;
    return dropdownItems.some(item => isActive(item.path));
  };

  // Animation for secondary section content
  const secondarySectionAnimation = useSpring({
    opacity: activeSection ? 1 : 0,
    transform: activeSection ? 'translateX(0)' : 'translateX(-20px)',
    config: { tension: 280, friction: 24 },
  });

  // Animation for tertiary section content
  const tertiarySectionAnimation = useSpring({
    opacity: activeSubSection ? 1 : 0,
    transform: activeSubSection ? 'translateX(0)' : 'translateX(-20px)',
    config: { tension: 280, friction: 24 },
  });

  // Animation for quaternary section content
  const quaternarySectionAnimation = useSpring({
    opacity: activeTertiaryItem ? 1 : 0,
    transform: activeTertiaryItem ? 'translateX(0)' : 'translateX(-20px)',
    config: { tension: 280, friction: 24 },
  });

  return (
    <nav className="bg-white shadow-md" ref={navRef}>
      {/* Add the style tag for custom scrollbars */}
      <style>{scrollbarStyles}</style>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="College Logo" className="w-auto h-16" />
            </Link>
          </div>

          {/* Center text */}
          <div className="flex-grow text-center">
            <h1 className={`font-medium relative -left-10 text-2xl font text-[${theme.primary}]`}>Lakshya Edu – Your Gateway to Professional Success!</h1>
          </div>

          {/* Menu button on the right - themed */}
          <div className="flex items-center">
            <animated.button
              onClick={toggleMenu}
              style={iconAnimation}
              className={`bg-[${theme.accent}] inline-flex items-center justify-center p-2 rounded-md text-[${theme.primary}] hover:text-[${theme.secondary}] hover:bg-[${theme.background}] focus:outline-none transition-all`}
              aria-expanded={isOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-between items-center py-1">
                <animated.span
                  style={firstLineAnimation}
                  className={`bg-current h-0.5 origin-center transition-all`}
                />
                <animated.span
                  style={secondLineAnimation}
                  className={`bg-current h-0.5 origin-center transition-all`}
                />
                <animated.span
                  style={thirdLineAnimation}
                  className={`bg-current h-0.5 origin-center transition-all`}
                />
              </div>
            </animated.button>
          </div>
        </div>
      </div>

      {/* Animated mobile menu - themed */}
      <animated.div style={menuAnimation} className={`bg-[${theme.accent}] h-screen shadow-inner`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* path one section */}
          <div className='h-[70vh] flex'>
            {/* minpath one section */}
            <div className={`${activeTertiaryItem ? 'w-1/5' : 'w-1/4'} overflow-y-auto custom-scrollbar bg-white`}>
              {trail.map((style, index) => {
                const item = mainNavigation[index];
                const isItemActive = !item.hasDropdown ? isActive(item.path || `/${item.id}`) : hasActivePath(item.dropdownItems);
                const isSelected = activeSection && activeSection.id === item.id;

                return (
                  <animated.div key={item.id} style={style} className="relative">
                    {item.hasDropdown ? (
                      <div className={`rounded-md overflow-hidden ${isSelected ? `bg-[${theme.background}]` : ''}`}>
                        <button
                          onClick={() => handleNavItemClick(item)}
                          className={`w-full text-left flex justify-between items-center px-4 py-3 rounded-md text-base font-medium transition-colors ${isSelected ? `bg-[${theme.background}] text-[${theme.primary}] font-bold` : `text-black hover:bg-[${theme.accent}]`
                            }`}
                        >
                          <span className="flex items-center text-5xl">
                            {item.icon && <span className="mr-2">{item.icon}</span>}
                            {item.label}
                          </span>
                        </button>
                      </div>
                    ) : (
                      <Link
                        to={item.path || `/${item.id}`}
                        className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${isItemActive ? `bg-[${theme.background}] text-[${theme.primary}]` : `text-black hover:bg-[${theme.accent}]`
                          }`}
                        onClick={() => handleNavItemClick(item)}
                      >
                        <span className="flex items-center text-5xl">
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </animated.div>
                );
              })}
            </div>

            {/* minpath two section - Shows content based on active section */}
            <div className={`${activeTertiaryItem ? 'w-1/5' : 'w-1/4'} h-full bg-[${theme.background}] p-4 overflow-y-auto thin-scrollbar`}>
              {activeSection && activeSection.hasDropdown && (
                <animated.div style={secondarySectionAnimation}>
                  <h2 className={`text-2xl font-bold mb-4 text-[${theme.primary}] border-b border-[${theme.secondary}] pb-2`}>
                    {activeSection.label}
                  </h2>
                  <div className="space-y-2">
                    {activeSection.dropdownItems && activeSection.dropdownItems.map((item) => {
                      const isSubItemActive = activeSubSection && activeSubSection.id === item.id;
                      const hasSubDropdown = item.hasDropdown || (item.dropdownItems && item.dropdownItems.length > 0);

                      return (
                        <Link
                          key={item.id}
                          to={item.path}
                          className={`block p-3 rounded-lg ${isSubItemActive
                            ? `bg-[${theme.secondary}] text-[${theme.primary}]`
                            : 'bg-white'
                            } shadow-sm hover:bg-[${theme.lightSecondary}] text-lg font-medium hover:text-[${theme.primary}] transition-all
                            ${hasSubDropdown ? 'flex justify-between items-center' : ''}`}
                          onClick={(e) => handleSubNavItemClick(item, e)}
                        >
                          {item.label}
                          {hasSubDropdown && (
                            <svg
                              className={`h-5 w-5 ${isSubItemActive ? `text-[${theme.primary}]` : 'text-gray-400'}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </animated.div>
              )}
            </div>

            {/* minpath three section */}
            <div className={`${activeTertiaryItem ? 'w-1/5' : 'w-2/4'} h-full overflow-y-auto thin-scrollbar p-4 bg-[${theme.accent}]`}>
              {activeSubSection && activeSubSection.dropdownItems && (
                <animated.div style={tertiarySectionAnimation}>
                  <div className="bg-white rounded-lg shadow-sm">
                    <h2 className={`text-3xl font-bold mb-4 text-[${theme.primary}] border-b border-[${theme.secondary}] pb-3`}>
                      {activeSubSection.label}
                    </h2>

                    <div className="space-y-4">
                      {activeSubSection.dropdownItems.map((item) => (
                        <div key={item.id} className={`p-4 rounded-lg hover:bg-[${theme.lightSecondary}] transition-colors ${activeTertiaryItem && activeTertiaryItem.id === item.id ? `bg-[${theme.secondary}]` : ''}`}>
                          <Link
                            to={item.path}
                            className="block"
                            onClick={(e) => handleTertiaryItemClick(item, e)}
                          >
                            <h3 className={`text-xl font-semibold text-[${theme.primary}] mb-2`}>{item.label}</h3>
                            {item.content && (
                              <p className="text-gray-600">{item.content}</p>
                            )}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </animated.div>
              )}
            </div>

            {/* minpath four section - Fixed scrolling issues */}
            {activeTertiaryItem && activeTertiaryItem.dropdownItems && (
              <div className={`w-2/5 h-full bg-white`}>
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
                    <h2 className={`text-3xl font-bold text-[${theme.primary}]`}>
                      {activeTertiaryItem.label} Details
                    </h2>
                  </div>

                  {/* Scrollable content area with visible scrollbar */}
                  <div
                    className="overflow-y-auto custom-scrollbar p-4"
                    style={{
                      height: 'calc(100% - 70px)', /* Fixed height calculation accounting for header */
                      maxHeight: 'calc(70vh - 70px)', /* Maximum height constraint */
                      overflowY: 'auto', /* Ensure scrolling is enabled */
                      display: 'block' /* Force block display to enable scrolling */
                    }}
                  >
                    <animated.div style={quaternarySectionAnimation}>
                      <div className="space-y-6">
                        {activeTertiaryItem.dropdownItems.map((item) => (
                          <div key={item.id} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <Link
                              to={item.path}
                              className="block"
                              onClick={toggleMenu}
                            >
                              <div className="flex items-center mb-3">
                                <div className={`w-12 h-12 rounded-full bg-[${theme.primary}] flex items-center justify-center mr-4`}>
                                  <span className="text-white font-bold">
                                    {item.label.charAt(0)}
                                  </span>
                                </div>
                                <h3 className={`text-2xl font-bold text-[${theme.primary}]`}>
                                  {item.label}
                                </h3>
                              </div>

                              {item.description && (
                                <p className="text-gray-600 mb-4">{item.description}</p>
                              )}

                              {/* Added content to ensure scrolling is visible for testing */}
                              <div className="mb-4 text-sm text-gray-500">
                                Learn more about our {item.label} options and how they can benefit your educational journey.
                              </div>

                              <div className={`mt-4 inline-block px-6 py-2 bg-[${theme.secondary}] text-[${theme.primary}] rounded-lg font-semibold hover:bg-[${theme.primary}] hover:text-white transition-colors`}>
                                Learn More
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </animated.div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* path two section */}
          <div className={`w-screen h-26 bg-[${theme.primary}] py-4`}>
            <div className="flex justify-center space-x-6">
              <a href="#" className={`text-[${theme.secondary}] hover:text-[${theme.accent}] transition-colors`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className={`text-[${theme.secondary}] hover:text-[${theme.accent}] transition-colors`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className={`text-[${theme.secondary}] hover:text-[${theme.accent}] transition-colors`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className={`text-[${theme.secondary}] hover:text-[${theme.accent}] transition-colors`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </nav>
  );
};

export default Navbar;
