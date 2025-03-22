"use client";

import Link from 'next/link';

const Blog = () => {
    const blogPosts = [
        {
            subtitle: "Du lịch Châu Đốc",
            title: "Du lịch Châu Đốc: Bận Cần Biết Những Gì?",
            image: "https://annhientravels.com.vn/upload/product/z489485762248241114de7d62a24ceb41f4647e81b07cd-6598.jpg",
            slug: "/blog/du-lich-chau-doc-ban-can-biet-nhung-gi",
        },
        {
            subtitle: "11 Điểm Du Lịch",
            title: "11 Điểm Du Lịch Không Thể Bỏ Qua Ở Châu Đốc",
            image: "https://www.thuexehoangvu.com/image/catalog/content/diem-du-lich-chau-doc/khu-du-lich-nui-cam-chau-doc.jpg",
            slug: "/blog/11-diem-du-lich-khong-the-bo-qua-o-chau-doc",
        },
        {
            subtitle: "Miền Ba Chùa Xứ",
            title: "Miền Ba Chùa Xứ: Bạn Đã Thật Sự Hiểu ‘Hành Hương’",
            image: "https://datviettour.com.vn/uploads/images/mien-nam/an-giang/hinh-danh-thang/chua-phat-lon-800px.jpg",
            slug: "/blog/mien-ba-chua-xu-ban-da-that-su-hieu-hanh-huong",
        },
    ];

    return (
        <section id="blogs" className="p-8 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
                Cập nhật <span className="text-blue-500">Tin tức Mới nhất</span>
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <Link key={index} href={post.slug} className="group">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="p-4">
                                <h4 className="text-blue-500 text-sm font-semibold mb-2">{post.subtitle}</h4>
                                <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Blog;