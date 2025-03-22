const Gallery = () => {
    return (
        <section id="gallery" className="p-8">
            <h2 className="text-2xl font-bold text-black">Địa điểm du lịch</h2>
            <div className="grid grid-cols-3 gap-4">
                {/* Add images here */}
                <img src="https://puluongexcursions.com/wp-content/uploads/2023/03/vinh-ha-long-01.jpg" alt="Trip 1" className="w-full h-64 object-cover" />
                <img src="https://phuquocxanh.com/vi/wp-content/uploads/2024/05/sunworld-ba-den.jpg" alt="Trip 2" className="w-full h-64 object-cover" />
                <img src="https://ticotravel.com.vn/wp-content/uploads/2022/08/top-30-dia-diem-du-lich-Viet-Nam-1.jpg" alt="Trip 3" className="w-full h-64 object-cover" />
            </div>
        </section>
    );
};

export default Gallery; 