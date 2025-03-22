import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className="bg-gray-200 p-8 text-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Information */}
                <div>
                    <h2 className="font-bold text-lg">DỊCH VỤ DU LỊCH THANH NHÂN</h2>
                    <p>Địa chỉ: đường 781, ấp Xóm Ruộng, xã Trí Bình, huyện Châu Thành, tỉnh Tây Ninh</p>
                    <p>Điện thoại: 0903.383.234</p>
                    <p>Website: dulichthanhnhan.vn</p>
                </div>

                {/* Additional Information */}
                <div>
                    <h2 className="font-bold text-lg text-blue-600">Thông tin khác</h2>
                    <ul className="hover-list">
                        <li><a href="#">Câu hỏi thường gặp</a></li>
                        <li><a href="#">Chính sách bảo mật</a></li>
                        <li><a href="#">Chính sách hủy dịch vụ và hoàn tiền</a></li>
                        <li><a href="#">Điều khoản dịch vụ</a></li>
                        <li><a href="#">Hình Thức Đặt Xe – Thuê Xe</a></li>
                        <li><a href="#">Phương thức thanh toán</a></li>
                    </ul>
                </div>

                {/* Google Map */}
                <div>
                    <h2 className="font-bold text-lg text-blue-600">Địa chỉ trên Google Map</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d272.8678406625168!2d106.01889774061698!3d11.299185391248447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1742568789379!5m2!1svi!2s"
                        width="100%"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Social Media and Payment Methods */}
            <div className="container mx-auto mt-8 flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                    <span>Kết nối với chúng tôi</span>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/profile.php?id=100025938533548">
                            <img src="/images/ic_facebook.png" alt="Facebook" className="h-10" />
                        </a>
                        <a href="#">
                            <img src="/images/ic_tiktok.png" alt="TikTok" className="h-10" />
                        </a>
                        <a href="#">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png" alt="Zalo" className="h-10" />
                        </a>
                    </div>
                </div>
                {/* <div className="flex space-x-4">
                    <span>Chấp nhận thanh toán</span>
                    <img src="/path/to/visa.png" alt="Visa" className="h-8" />
                    <img src="/path/to/mastercard.png" alt="MasterCard" className="h-8" />
                </div> */}
                {/* <div>
                    <span>Chứng nhận</span>
                    <img src="/path/to/dmca.png" alt="DMCA" className="h-8" />
                </div> */}
            </div>

            <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
                <a href="tel:0971100700" className="bg-red-500 p-3 rounded-full shadow-lg">
                    <img src="/images/ic_phone.png" alt="Phone" className={`h-6 w-6 ${styles.rotateAnimation}`} />
                </a>
                <a href="https://zalo.me" className="bg-blue-500 p-3 rounded-full shadow-lg">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png" alt="Zalo" className={`h-6 w-6 ${styles.rotateAnimation}`} />
                </a>
            </div>
        </footer>
    );
};

export default Footer; 