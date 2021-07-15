import HomeTop from '../pagecomponents/brands/HomeTop';
import HomeTopMobile from '../pagecomponents/brands/HomeTopMobile';
import CategorySection from '../pagecomponents/brands/CategorySection';
import LatestSearches from '../pagecomponents/brands/LatestSearches';
import RecommendedSuppliers from '../pagecomponents/brands/RecommendedSuppliers';
import ArtisanalSection from '../pagecomponents/brands/ArtisanalSection';
import NewInSection from '../pagecomponents/brands/NewInSection';
import EcoSection from '../pagecomponents/brands/EcoSection';
import Footer from '../pagecomponents/Footer';
import StickyBottom from '../pagecomponents/brands/StickyBottom';

const dashboard = () => {
    return (
        <main id="dashboard">
            <HomeTopMobile />
            <HomeTop />
            <CategorySection />
            <LatestSearches />
            <RecommendedSuppliers />
            <ArtisanalSection />
            <NewInSection />
            <EcoSection />
            <Footer />
            <StickyBottom /> 
        </main>
    )
}

export default dashboard
