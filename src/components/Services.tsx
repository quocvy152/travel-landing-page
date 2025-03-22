"use client";

const Services = () => {
    const services = [
        {
            title: "DỊCH VỤ THUÊ XE 4 CHỖ",
            description: "UY TÍN - GIÁ RẺ",
            contact: "Liên hệ: 0971.100.700",
            image: "https://kenh14cdn.com/203336854389633024/2024/5/11/photo-3-17154259145671023100598.jpg",
        },
        {
            title: "DỊCH VỤ THUÊ XE 7 CHỖ",
            description: "UY TÍN - GIÁ RẺ",
            contact: "Liên hệ: 0971.100.700",
            image: "https://cdn.dailyxe.com.vn/image/tong-quan-toyota-innova-2018-1-36200j.jpg?1523938227174",
        },
        {
            title: "DỊCH VỤ THUÊ XE 9 CHỖ LIMOUSINE",
            description: "UY TÍN - GIÁ RẺ",
            contact: "Liên hệ: 0971.100.700",
            image: "https://dongphongtransport.com/wp-content/uploads/2022/07/thue-xe-limousine-9-cho-ha-noi.jpg",
        },
        {
            title: "DỊCH VỤ THUÊ XE 16 CHỖ",
            description: "UY TÍN - GIÁ RẺ",
            contact: "Lien hệ: 0971.100.700",
            image: "https://xegaznga.com/wp-content/uploads/2023/06/xe-khach-16-cho-ford-transit-1.jpg",
        },
        {
            title: "DỊCH VỤ THUÊ XE 29 CHỖ",
            description: "UY TÍN - GIÁ RẺ",
            contact: "Liên hệ: 0971.100.700",
            image: "https://thuexehuydat.com/wp-content/uploads/2023/12/Xe-Universe-Haeco-29-cho%CC%82%CC%83.jpeg",
        },
        {
            title: "DỊCH VỤ THUÊ XE 45 CHỖ",
            description: "UY TÍN - GIÁ RẺ",
            contact: "Liên hệ: 0971.100.700",
            image: "https://xedatphuongnam.vn/upload/product/fdea4843b0d841839cbd07896e429f60-3610.jpeg",
        },
    ];

    return (
        <section id="services" className="p-8">
            <h2 className="text-3xl font-bold text-center text-black mb-8">LOẠI XE CHO THUÊ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-blue-500 rounded-lg overflow-hidden shadow-md"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-50 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-bold text-yellow-400 mb-2">{service.title}</h3>
                            <p className="text-white-700 font-bold">{service.description}</p>
                            <p className="text-white-600 font-bold">{service.contact}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;