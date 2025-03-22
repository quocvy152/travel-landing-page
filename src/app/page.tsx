import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner';
import Blog from '@/components/Blog';
import Gallery from '@/components/Gallery';
import QualityAssurance from '@/components/QualityAssurance';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Services />
            <QualityAssurance />
            <Gallery />
            <Testimonials />
            <Blog />
        </div>
    );
};

export default Home; 