import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Models from '../components/Models';
import Privacy from '../components/Privacy';
import HowItWorks from '../components/HowItWorks';
import DownloadCta from '../components/DownloadCta';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/download') {
            const element = document.getElementById('download');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

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
