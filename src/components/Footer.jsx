import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="py-20 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-black mb-3 text-gray-900 dark:text-white tracking-tighter transition-colors">
                            {t('nav.title')}
                        </h3>
                        <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">{t('footer.tagline')}</p>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link to="/support" className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                            {t('nav.support')}
                        </Link>
                        <Link to="/privacy-policy" className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                            {t('nav.privacy')}
                        </Link>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm font-medium text-gray-400 dark:text-gray-600">
                        {t('footer.rights')}
                    </div>

                    <a
                        href="https://www.flaticon.com/free-icons/app"
                        title="app icons"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-gray-300 dark:text-gray-700 hover:text-gray-500 transition-colors uppercase tracking-widest font-bold"
                    >
                        App icons by Freepik - Flaticon
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
