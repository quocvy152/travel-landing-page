"use client";

import ArrowBackIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/KeyboardArrowRight';
import { useEffect, useState } from 'react';

const images = [
    'https://baotayninh.vn/image/fckeditor/upload/2024/20240105/images/images1089892_1.webp',
    'https://file3.qdnd.vn/data/images/0/2023/03/28/tranthaiphuong/dulich10.jpg?dpi=150&quality=100&w=870',
    'https://psvtravel.com.vn/wp-content/uploads/2023/03/5_08414823012023.png',
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 8 seconds

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <section 
            className="relative h-150 bg-center" 
            style={{ 
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="px-8 py-6 rounded-lg">
                    <h1 className="text-white text-4xl md:text-5xl font-semibold italic tracking-wide" style={{ fontFamily: 'YourCustomFont, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        Chào mừng bạn đến
                        <span className="block mt-2 text-yellow-400">
                            Dịch vụ du lịch Thanh Nhân
                        </span>
                    </h1>
                </div>
            </div>
            <button 
                onClick={goToPrevious} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 bg-opacity-70 p-2 rounded-full cursor-pointer hover:bg-opacity-90 z-20"
            >
                <ArrowBackIcon style={{ color: 'white' }} />
            </button>
            <button 
                onClick={goToNext} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 bg-opacity-70 p-2 rounded-full cursor-pointer hover:bg-opacity-90 z-20"
            >
                <ArrowForwardIcon style={{ color: 'white' }} />
            </button>
        </section>
    );
};

export default Banner; 