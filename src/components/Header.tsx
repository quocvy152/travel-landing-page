"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-500 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <div>
                    <img
                        src="/images/ic_logo.png"
                        alt="Logo"
                        className="h-12 w-auto"
                    />
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-[#F5B041] md:bg-transparent p-4 md:p-0`}>
                    <li>
                        <Link href="/" className="block text-white font-bold hover:text-gray-200 py-2 md:py-0">
                            TRANG CHỦ
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="#about" className="block text-white font-bold hover:text-gray-200 py-2 md:py-0 flex items-center">
                            GIỚI THIỆU
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="#services" className="block text-white font-bold hover:text-gray-200 py-2 md:py-0 flex items-center">
                            THUÊ XE DU LỊCH
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="#services-purpose" className="block text-white font-bold hover:text-gray-200 py-2 md:py-0 flex items-center">
                            THUÊ XE THEO MỤC ĐÍCH
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#gallery" className="block text-white font-bold hover:text-gray-200 py-2 md:py-0">
                            ĐIỂM ĐẾN
                        </Link>
                    </li>
                    <li>
                        <Link href="#blogs" className="block text-white font-bold hover:text-gray-200 py-2 md:py-0">
                            TIN TỨC
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="block text-white font-bold hover:text-gray-200 py-2 md:py-0">
                            LIÊN HỆ
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;