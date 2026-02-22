import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">{t('nav.title')}</h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">{t('about.title')}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                        {t('about.description')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
