// app/blog/[slug]/page.js
import Link from 'next/link';

type BlogDetailParams = {
    params: { slug: string };
};

const blogPosts = [
    {
        subtitle: "Du lịch Châu Đốc",
        title: "Du lịch Châu Đốc: Bận Cần Biết Những Gì?",
        image: "https://annhientravels.com.vn/upload/product/z489485762248241114de7d62a24ceb41f4647e81b07cd-6598.jpg",
        slug: "du-lich-chau-doc-ban-can-biet-nhung-gi",
        date: "2025-03-22",
        content: `
            Châu Đốc là một điểm đến du lịch nổi tiếng ở miền Tây Nam Bộ, Việt Nam, với nhiều cảnh quan thiên nhiên tuyệt đẹp và văn hóa đặc sắc. Dưới đây là một số điều bạn cần biết trước khi lên kế hoạch cho chuyến đi của mình:

            ### 1. Thời điểm lý tưởng để du lịch Châu Đốc
            Thời gian lý tưởng nhất để đến Châu Đốc là từ tháng 8 đến tháng 11, khi thời tiết mát mẻ, dễ chịu và có nhiều lễ hội đặc sắc như lễ hội đua ghe ngo.

            ### 2. Những điểm tham quan không thể bỏ qua
            - **Rừng Tràm Trà Sư**: Một khu rừng ngập nước tuyệt đẹp, nơi bạn có thể chèo thuyền len lỏi giữa những con kênh xanh mát.
            - **Làng Chăm Châu Giang**: Tìm hiểu văn hóa của người Chăm, tham quan thánh đường Hồi giáo và các làng nghề truyền thống.
            - **Núi Cấm**: Một ngọn núi thiêng với không khí trong lành, cảnh quan hùng vĩ, và nhiều chùa chiền linh thiêng.

            ### 3. Ẩm thực đặc trưng
            Đừng quên thưởng thức các món đặc sản như bún cá Châu Đốc, bánh bò thốt nốt, và các món ăn đậm chất miền Tây.

            ### 4. Lưu ý khi du lịch
            - Mang theo kem chống muỗi vì khu vực này có nhiều muỗi, đặc biệt khi tham quan rừng tràm.
            - Chuẩn bị trang phục thoải mái, phù hợp với thời tiết và các hoạt động ngoài trời.
            - Tôn trọng văn hóa địa phương, đặc biệt khi tham quan các khu vực tâm linh.

            Châu Đốc chắc chắn sẽ mang đến cho bạn một hành trình đáng nhớ với những trải nghiệm đốc đáo. Hãy lên kế hoạch ngay hôm nay!
        `,
    },
    {
        subtitle: "11 Điểm Du Lịch",
        title: "11 Điểm Du Lịch Không Thể Bỏ Qua Ở Châu Đốc",
        image: "https://www.thuexehoangvu.com/image/catalog/content/diem-du-lich-chau-doc/khu-du-lich-nui-cam-chau-doc.jpg",
        slug: "11-diem-du-lich-khong-the-bo-qua-o-chau-doc",
        date: "2025-03-22",
        content: `
            Châu Đốc không chỉ nổi tiếng với thiên nhiên mà còn là nơi giao thoa văn hóa đốc đáo. Dưới đây là 11 điểm đến mà bạn không thể bỏ qua khi đến đây:

            ### 1. Chùa Bà Châu Đốc
            Ngôi chùa linh thiêng với kiến trúc đốc đáo, thu hút hàng ngàn du khách mỗi năm để cầu may mắn và bình an.

            ### 2. Rừng Tràm Trà Sư
            Một khu rừng ngập nước với hệ sinh thái đa dạng, nơi bạn có thể chèo thuyền ngắm cảnh và chụp ảnh.

            ### 3. Làng Chăm Châu Giang
            Khám phá văn hóa Chăm với những ngôi nhà sàn, thánh đường Hồi giáo và các sản phẩm thủ công mỹ nghệ.

            ### 4. Núi Cấm
            Ngọn núi cao nhất khu vực, nổi tiếng với khí hậu mát mẻ và cảnh quan tuyệt đẹp.

            ### 5. Núi Sam
            Nơi có nhiều ngôi chùa cổ kính, là điểm đến tâm linh nổi tiếng ở Châu Đốc.

            ### 6. Cánh Đồng Tà Pạ
            Một cánh đồng lúa rộng lớn với khung cảnh yên bình, đặc biệt đẹp vào mùa lúa chín.

            ### 7. Làng Nổi Châu Đốc
            Trải nghiệm cuộc sống trên sông đốc đáo của người dân địa phương.

            ### 8. Miếu Bà Chúa Xứ
            Một địa điểm tâm linh quan trọng, thu hút đông đảo du khách đến cầu nguyện.

            ### 9. Chợ Châu Đốc
            Nơi bạn có thể mua sắm đặc sản địa phương và thưởng thức các món ăn đường phố.

            ### 10. Cầu Cồn Tiên
            Cây cầu với kiến trúc đẹp, là điểm check-in lý tưởng cho du khách.

            ### 11. Làng Bè Long Châu
            Một khu vực nuôi cá bè nổi tiếng, nơi bạn có thể tìm hiểu về nghề nuôi cá truyền thống.

            Hãy chuẩn bị lịch trình để khám phá hết những điểm đến tuyệt vời này tại Châu Đốc!
        `,
    },
    {
        subtitle: "Miền Ba Chùa Xứ",
        title: "Miền Ba Chùa Xứ: Bạn Đã Thật Sự Hiểu ‘Hành Hương’",
        image: "https://datviettour.com.vn/uploads/images/mien-nam/an-giang/hinh-danh-thang/chua-phat-lon-800px.jpg",
        slug: "mien-ba-chua-xu-ban-da-that-su-hieu-hanh-huong",
        date: "2025-03-22",
        content: `
            Hành hương đến miền Ba Chùa Xứ không chỉ là một chuyến đi tâm linh mà còn là hành trình khám phá văn hóa và lịch sử đặc sắc của vùng đất này. Dưới đây là những điều bạn cần biết:

            ### 1. Ý nghĩa của hành hương
            Hành hương là một truyền thống lâu đời của người dân miền Tây, đặc biệt tại khu vực Ba Chùa Xứ (Châu Đốc, Hà Tiên, Rạch Giá). Đây là dịp để cầu bình an, may mắn và bày tỏ lòng thành kính.

            ### 2. Những ngôi chùa nổi tiếng
            - **Chùa Bà Châu Đốc**: Ngôi chùa linh thiêng nhất khu vực, thu hút hàng ngàn người đến cầu nguyện mỗi năm.
            - **Chùa Vĩnh Nghiêm**: Một ngôi chùa với kiến trúc đốc đáo, nằm ở trung tâm Châu Đốc.
            - **Chùa Hang (Hà Tiên)**: Ngôi chùa nằm trong hang động, mang vẻ đẹp huyền bí và yên bình.

            ### 3. Trải nghiệm hành hương
            - Tham gia các lễ hội truyền thống như lễ hội Chùa Bà vào tháng Giêng âm lịch.
            - Thưởng thức các món chay đặc trưng tại các quán ăn gần chùa.
            - Tìm hiểu về lịch sử và ý nghĩa của từng ngôi chùa qua các câu chuyện kể của người dân địa phương.

            ### 4. Lưu ý khi hành hương
            - Mặc trang phục lịch sự, kín đáo khi tham quan các ngôi chùa.
            - Giữ gìn sự yên tĩnh và tôn nghiêm tại các khu vực tâm linh.
            - Chuẩn bị sức khỏe tốt vì một số ngôi chùa nằm ở vị trí cao hoặc khó di chuyển.

            Hành hương đến miền Ba Chùa Xứ sẽ mang lại cho bạn những phút giây thanh tịnh và ý nghĩa. Hãy chuẩn bị tâm thế để trải nghiệm hành trình đặc biệt này!
        `,
    },
];

async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) {
        return (
            <section className="p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Bài viết không tồn tại</h2>
                <p className="text-center text-gray-600">
                    Xin lỗi, chúng tôi không tìm thấy bài viết bạn yêu cầu.{' '}
                    <Link href="/blog" className="text-blue-500 hover:underline">
                        Quay lại danh sách bài viết
                    </Link>
                </p>
            </section>
        );
    }

    return (
        <section className="p-4 max-w-4xl mx-auto">
            {/* Tiêu đề bài viết */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">Đăng ngày: {post.date}</p>

            {/* Hình ảnh chính */}
            <div className="mb-8">
                <img
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                />
            </div>

            {/* Nội dung bài viết */}
            <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />

            {/* Nút quay lại */}
            <div className="mt-8 text-center">
                <Link href="/blog" className="text-blue-500 hover:underline">
                    Quay lại danh sách bài viết
                </Link>
            </div>
        </section>
    );
};

export default BlogDetail;