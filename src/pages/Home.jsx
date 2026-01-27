import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Models from '../components/Models';
import Privacy from '../components/Privacy';
import HowItWorks from '../components/HowItWorks';
import DownloadCta from '../components/DownloadCta';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Features />
            <Models />
            <Privacy />
            <HowItWorks />
            <DownloadCta />
        </>
    );
};

export default Home;
