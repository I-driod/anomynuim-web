import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">Anonymium AI</h3>
                <p className="text-gray-500 dark:text-gray-500 mb-8">Your privacy, your AI.</p>
                <div className="text-sm text-gray-400 dark:text-gray-600">
                    &copy; 2026 Anonymium AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
