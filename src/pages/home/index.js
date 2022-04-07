import Layout from '../../components/layout';

import HeroSection from './HeroSection';
import Services from './Services';
import EmbassyAddress from './EmbassyAddress';
import Gallery from './Gallery';
import NewsUpdates from './NewsUpdates';
import ViewNigeria from './ViewNigeria';
import Team from './Team';

const Index = () => {
    return (
        <Layout title="Home">
            <HeroSection/>
            <Services/>
            <EmbassyAddress/>
            <Gallery/>
            <NewsUpdates/>
            <Team />
            <ViewNigeria/>
        </Layout>
    );
};

export default Index;