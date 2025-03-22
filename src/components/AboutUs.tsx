"use client";

const AboutUs = () => {
    return (
        <section id="about" className="p-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Phần nội dung văn bản */}
                <div className="md:w-1/2">
                    <h3 className="text-blue-600 text-4xl font-semibold mb-2">Về chúng tôi</h3>
                    <h2 className="text-3xl font-bold text-black mb-4">Thuê xe hợp đồng du lịch Thanh Nhân</h2>
                    <p className="text-gray-700 mb-6">
                        Thanh Nhân luôn cam kết mang đến hành trình{" "}
                        <span className="font-semibold">An toàn – Tiết kiệm – Thuận tiện – Nhanh chóng</span>{" "}
                        nhất với những đảm bảo uy tín về hệ thống xe, chất lượng dịch vụ cũng như sự chuyên nghiệp, tận tình của đội ngũ tài xế.
                    </p>
                    <ul className="space-y-4 mb-6">
                        <li className="flex items-center text-black">
                            <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0113.263 21H9.5a2 2 0 01-1.789-2.894l3.5-7A2 2 0 0114 10z"></path>
                            </svg>
                            Kinh nghiệm hơn 10 năm hoạt động.
                        </li>
                        <li className="flex items-center text-black">
                            <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            Đội ngũ tài xế giàu kinh nghiệm.
                        </li>
                        <li className="flex items-center text-black">
                            <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                            </svg>
                            Sở hữu hơn 50 đầu xe từ 04 – 45 chỗ.
                        </li>
                    </ul>
                    <p className="text-gray-700">
                        <span className="font-semibold">Hành trình cam kết:</span> An Toàn – Nhanh Chóng – Tiết Kiệm
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-center relative">
                    <div className="flex flex-wrap justify-center gap-4">
                        <img
                            src="https://vcdn1-vnexpress.vnecdn.net/2020/12/22/Toyota-01-mb-2072-1608609600.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=l6qwRKI5A4_M9I9KqBZuJg"
                            alt="Bus 1"
                            className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover"
                        />
                        <img
                            src="https://trieuhaotravel.vn/Uploads/files/nthtrang/WT/TRONG%20NUOC/MIEN%20TRUNG/banner_mien_bac_30_4.jpg_small.webp"
                            alt="Bus 2"
                            className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover"
                        />
                        <img
                            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/483582507_1708178260056775_3761774238938713888_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=37dIZqyQKlMQ7kNvgEmeX9V&_nc_oc=Adm_uVmSkIHOaW5w2HsS1VV7HpS6eVH9u4V836WH2-ShTxH0siyJtbKH_2YnrQqld8E&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=CYMJm2TpcONPJAYSsJz5WQ&oh=00_AYFvC3WjvyifAg5OvKEstn5MVcmLOysfIeomB4iHDBBNFg&oe=67E3EE88"
                            alt="Bus 3"
                            className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;