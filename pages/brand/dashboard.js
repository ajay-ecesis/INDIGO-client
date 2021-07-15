

import BrandRoute from '../../pagecomponents/routes/BrandRoute'
import Head from 'next/head'
import HomeTop from '../../pagecomponents/brands/HomeTop';
import HomeTopMobile from '../../pagecomponents/brands/HomeTopMobile';
import CategorySection from '../../pagecomponents/brands/CategorySection';
import LatestSearches from '../../pagecomponents/brands/LatestSearches';
import RecommendedSuppliers from '../../pagecomponents/brands/RecommendedSuppliers';
import ArtisanalSection from '../../pagecomponents/brands/ArtisanalSection';
import NewInSection from '../../pagecomponents/brands/NewInSection';
import EcoSection from '../../pagecomponents/brands/EcoSection';
import Footer from '../../pagecomponents/Footer';
import StickyBottom from '../../pagecomponents/brands/StickyBottom';

const Dashboard = () => {
    return (
        <BrandRoute>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Indigo | Brand-Dashboard</title>
            </Head>
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
        </BrandRoute>
    )
}

export default Dashboard
