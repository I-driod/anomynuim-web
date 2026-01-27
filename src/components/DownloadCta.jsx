import React from 'react';

const DownloadCta = () => {
    return (
        <section id="download" className="py-24 bg-gray-50 dark:bg-gradient-to-t dark:from-zinc-900 dark:to-black text-center transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Private AI?</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Download Anonymium AI today and take control of your conversations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.3 0 2.55.87 3.35.87.8 0 2.31-1.09 3.8-1.09 1.3.01 2.94.62 3.83 1.93-3.69 1.83-3.06 6.3 0 7.85zm-2.07-12c.56-1.03 1.54-1.84 2.89-1.3-.92 2.9-3.5 2.06-2.89 1.3z" /></svg>
                        Download for iOS
                    </button>
                    <button className="flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm w-full sm:w-auto justify-center">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L3.84,2.15L6.05,2.66Z" /></svg>
                        Download for Android
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DownloadCta;
