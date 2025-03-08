import React, { useState, useEffect, useRef } from 'react';

// Gallery images data
const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        alt: "Campus Main Building",
        title: "Modern Campus Architecture",
        description: "Our main campus building features state-of-the-art facilities"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1486&q=80",
        alt: "Library Resources",
        title: "Extensive Library Collection",
        description: "Access to thousands of books, journals, and digital resources"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
        alt: "Research Lab",
        title: "Advanced Research Facilities",
        description: "Equipped with the latest technology for practical learning"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        alt: "Student Commons",
        title: "Collaborative Spaces",
        description: "Areas designed to foster teamwork and community"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1592066575517-58df903152f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
        alt: "Auditorium",
        title: "Modern Auditorium",
        description: "Host to guest lectures and campus events"
    }
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);

    // Colors
    const primary = '#A6192E';
    const secondary = '#FFD700';

    // Handle slide navigation
    const goToSlide = (index) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(index);

        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
        }, 600);
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
        if (paused) return;

        timerRef.current = setTimeout(() => {
            nextSlide();
        }, 5000);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [currentIndex, paused]);

    // Determine which slides to show (current, previous, next)
    const currentImage = galleryImages[currentIndex];
    const prevImage = galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length];
    const nextImage = galleryImages[(currentIndex + 1) % galleryImages.length];

    return (
        <div
            className="relative z-[1px] overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Main Slider Container */}
            <div className="relative h-[600px] overflow-hidden rounded-xl">
                {/* Current Slide */}
                <div
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out z-20"
                    style={{ opacity: isTransitioning ? 0 : 1 }}
                >
                    <div className="relative h-full">
                        <img
                            src={currentImage.src}
                            alt={currentImage.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Side Preview Images */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-40 h-40 opacity-30 blur-sm z-10 transition-all duration-500 group-hover:opacity-60 group-hover:-left-10">
                    <img
                        src={prevImage.src}
                        alt="Previous slide"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-40 h-40 opacity-30 blur-sm z-10 transition-all duration-500 group-hover:opacity-60 group-hover:-right-10">
                    <img
                        src={nextImage.src}
                        alt="Next slide"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Custom Navigation Controls */}
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

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6">
                {galleryImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`mx-2 transition-all duration-300 ${index === currentIndex
                            ? `w-8 h-2 bg-[${primary}]`
                            : `w-2 h-2 bg-gray-400 hover:bg-[${secondary}]`
                            } rounded-full`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-300 mt-4 rounded overflow-hidden">
                <div
                    className={`h-full bg-[${primary}] transition-all duration-300 ease-linear`}
                    style={{
                        width: `${(currentIndex / (galleryImages.length - 1)) * 100}%`,
                    }}
                />
            </div>

            {/* Thumbnails */}
            <div className="mt-6 flex justify-center overflow-x-auto pb-4 space-x-3">
                {galleryImages.map((image, index) => (
                    <div
                        key={image.id}
                        className={`relative cursor-pointer transition-all duration-300 ${currentIndex === index ? 'ring-2 ring-offset-2' : 'opacity-60 hover:opacity-100'
                            }`}
                        style={{
                            ringColor: primary,
                        }}
                        onClick={() => goToSlide(index)}
                    >
                        <img
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            className="h-16 w-24 object-cover rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
