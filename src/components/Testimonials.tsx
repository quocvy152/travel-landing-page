"use client";

import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
    const [testimonials] = useState([
        { id: 1, text: "Đi xe mình rất quan tâm vấn đề chuyên xe và thái độ của tài xế. Ngợi xe mệt mà tài xế chạy an toàn, vui vẻ thì không có gì để phàn nàn cả. 5 sao cho dịch vụ thuê xe Thanh Nhân.", name: "Anh Nam", location: "Quận Tân Bình", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbF9MQqPpVTx4VesFawrboYBKB4SqpTvmCVA&s", rating: 5 },
        { id: 2, text: "Xe mới, tài xế vui vẻ tính tình, chuyên nghiệp. Đi du lịch tiện lắm nên mình sẽ dùng dịch vụ thuê xe của lịch Thanh Nhân.", name: "Anh Hoàng", location: "Quận Gò Vấp", image: "https://st3.depositphotos.com/10313122/14449/i/450/depositphotos_144492381-stock-photo-happy-handsome-caucasian-man.jpg", rating: 5 },
        { id: 3, text: "Rất ưng ý dịch vụ thuê xe Thanh Nhân là xe rất sạch trong, giá dịch vụ thuê xe tương đối rẻ so với thị trường. Sẽ ứng hộ Thanh Nhân nhiều trong thời gian tới.", name: "Chị Nhung", location: "Quận Thủ Đức", image: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=", rating: 5 },
        { id: 4, text: "Rất chuyên nghiệp và đáng tin cậy!", name: "Chị Mai", location: "Quận 1", image: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg", rating: 5 },
        { id: 5, text: "Thật là một khoảng thời gian tuyệt vời!", name: "Anh Khoa", location: "Quận 2", image: "https://previews.123rf.com/images/shotsstudio/shotsstudio1505/shotsstudio150500055/40062787-front-view-of-caucasian-man-real-people-portrait.jpg", rating: 5 },
        { id: 6, text: "Rất hài lòng với dịch vụ!", name: "Chị Lan", location: "Quận 3", image: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-01.jpg", rating: 5 }
    ]);

    return (
        <section className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">ĐÁNH GIÁ DỊCH VỤ THUÊ XE TỪ KHÁCH HÀNG</h2>
            <Carousel
                autoPlay
                interval={5000}
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                showIndicators={true}
                centerMode={true}
                centerSlidePercentage={33.33}
                className="max-w-6xl mx-auto"
            >
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="text-center p-4">
                        <div className="relative w-24 h-24 mx-auto mb-2">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex justify-center mb-2">
                            {[...Array(testimonial.rating)].map((_, index) => (
                                <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                                </svg>
                            ))}
                        </div>
                        <blockquote className="text-sm text-gray-700 mb-2" style={{ lineHeight: '1.5' }}>
                            {testimonial.text}
                        </blockquote>
                        <p className="text-gray-600 font-semibold">{testimonial.name} / {testimonial.location}</p>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default Testimonials;