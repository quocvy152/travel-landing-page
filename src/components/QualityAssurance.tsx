"use client";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const QualityAssurance = () => {
    const assurances = [
        {
            number: "01",
            icon: (
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
            ),
            title: "Xe Đời Mới, Hiện Đại",
            description: "Đội 2019 – 2022. Kiểu dáng đẹp, không gian xe rộng rãi. Trang bị các tính năng an toàn tiên tiến nhất.",
        },
        {
            number: "02",
            icon: (
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            ),
            title: "Tài Xế Cứng Tay Lái",
            description: "Tác phong chuyên nghiệp. Luôn đúng giờ, đúng hành trình. Vui vẻ, thân thiện, có m hiều kinh nghiệm đảm nhiệm.",
        },
        {
            number: "03",
            icon: (
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
            ),
            title: "Đưa Đón Tận Nơi",
            description: "Hoàng Vũ thực hiện đưa đón / trả khách linh hoạt theo lộ trình thực tế hoặc theo yêu cầu của khách hàng.",
        },
        {
            number: "04",
            icon: (
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM12 14c-2.761 0-5-1.343-5-3V8h10v3c0 1.657-2.239 3-5 3z"></path>
                </svg>
            ),
            title: "Hỗ Trợ 24/7",
            description: "Đội ngũ hỗ trợ luôn sẵn sàng 24/7 để giải đáp thắc mắc và hỗ trợ khách hàng mọi lúc, mọi nơi.",
        },
        {
            number: "05",
            icon: (
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2v2c0 1.104.896 2 2 2s2-.896 2-2v-2zm4 0c0-1.104-.896-2-2-2s-2 .896-2 2v2c0 1.104.896 2 2 2s2-.896 2-2v-2zm-8 0c0-1.104-.896-2-2-2s-2 .896-2 2v2c0 1.104.896 2 2 2s2-.896 2-2v-2zM12 3v2m-6 0v2m12-2v2"></path>
                </svg>
            ),
            title: "Bảo Dưỡng Định Kỳ",
            description: "Tất cả xe đều được bảo dưỡng định kỳ, đảm bảo vận hành an toàn và êm ái trên mọi hành trình.",
        },
        {
            number: "06",
            icon: (
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "Đúng Giờ, Đúng Lịch",
            description: "Cam kết đúng giờ khởi hành và đến nơi, không để khách hàng phải chờ đợi lâu.",
        },
        {
            number: "07",
            icon: (
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
            ),
            title: "Giá Cả Minh Bạch",
            description: "Báo giá rõ ràng, không phí ẩn, đảm bảo khách hàng nhận được dịch vụ tốt nhất với chi phí hợp lý.",
        },
        {
            number: "08",
            icon: (
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "Đảm Bảo An Toàn",
            description: "Mọi chuyến đi đều được kiểm tra kỹ lưỡng, đảm bảo an toàn tuyệt đối cho hành khách.",
        },
    ];

    return (
        <section className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
                Cam kết <span className="text-blue-500">Chất lượng dịch vụ</span>
            </h2>
            <Carousel
                autoPlay
                interval={3000}
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                showIndicators={true}
                centerMode={true}
                centerSlidePercentage={33.33}
                className="max-w-6xl mx-auto relative"
            >
                {assurances.map((assurance, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center min-h-[300px] flex flex-col justify-between">
                            <div>
                                <div className="text-4xl font-bold text-blue-200 mb-4">{assurance.number}</div>
                                <div className="flex justify-center mb-4">{assurance.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-600">{assurance.title}</h3>
                                <p className="text-gray-600">{assurance.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default QualityAssurance;