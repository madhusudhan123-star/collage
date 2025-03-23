import { useState, useEffect, useRef } from 'react';
import banner1 from '../assets/home/banner1.jpg';
import banner2 from '../assets/home/banner2.jpg';
import banner3 from '../assets/home/banner3.jpg';
import banner4 from '../assets/home/banner4.jpg';

const ImageSlider = ({ images, height = '80vh', autoPlay = true, showArrows = true, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);

    // Use provided images or fallback to default gallery images
    const galleryImages = images || [
        {
            id: 1,
            src: banner1,
            alt: "Campus Main Building",
            title: "Modern Campus Architecture",
            description: "Our main campus building features state-of-the-art facilities"
        },
        {
            id: 2,
            src: banner2,
            alt: "Library Resources",
            title: "Extensive Library Collection",
            description: "Access to thousands of books, journals, and digital resources"
        },
        {
            id: 3,
            src: banner3,
            alt: "Research Lab",
            title: "Advanced Research Facilities",
            description: "Equipped with the latest technology for practical learning"
        },
        {
            id: 4,
            src: banner4,
            alt: "Student Commons",
            title: "Collaborative Spaces",
            description: "Areas designed to foster teamwork and community"
        }
    ];

    // Handle slide navigation
    const goToSlide = (index) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(index);

        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
        }, 300); // Reduced from 600 to 300
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % galleryImages.length;
        goToSlide(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        goToSlide(newIndex);
    };

    // Auto-slide functionality
    useEffect(() => {
        if (!autoPlay || paused) return;

        timerRef.current = setTimeout(() => {
            nextSlide();
        }, interval);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [currentIndex, paused, autoPlay, interval]);

    // Current image
    const currentImage = galleryImages[currentIndex];

    return (
        <div
            className="relative z-10"
            style={{ height }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Main Slider Container */}
            <div className="relative h-full overflow-hidden">
                {/* Current Slide */}
                <div
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out z-20"
                    style={{ opacity: isTransitioning ? 0 : 1 }}
                >
                    <div className="relative h-full">
                        <img
                            src={currentImage.src}
                            alt={currentImage.alt || "Slider image"}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Custom Navigation Controls */}
            {showArrows && (
                <div className="flex justify-between absolute top-1/2 left-4 right-4 -mt-6 z-30">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center group"
                        disabled={isTransitioning}
                    >
                        <svg
                            className="w-6 h-6 text-white group-hover:scale-125 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center group"
                        disabled={isTransitioning}
                    >
                        <svg
                            className="w-6 h-6 text-white group-hover:scale-125 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
