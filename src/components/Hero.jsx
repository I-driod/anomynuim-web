import React from 'react';
import { Download, Shield, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 text-center z-10 relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-8 backdrop-blur-sm transition-colors">
                    <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">100% On-Device Privacy</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white transition-colors">
                    Your <span className="text-gradient">Private AI</span> Assistant
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors">
                    Experience the power of AI that runs entirely on your device. Private, secure, and always available—no internet required.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <button className="flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full font-semibold hover:opacity-80 transition-all w-full sm:w-auto justify-center shadow-lg dark:shadow-none">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.3 0 2.55.87 3.35.87.8 0 2.31-1.09 3.8-1.09 1.3.01 2.94.62 3.83 1.93-3.69 1.83-3.06 6.3 0 7.85zm-2.07-12c.56-1.03 1.54-1.84 2.89-1.3-.92 2.9-3.5 2.06-2.89 1.3z" /></svg>
                        Download for iOS
                    </button>
                    <button className="flex items-center gap-3 bg-white dark:bg-white/10 text-black dark:text-white border border-gray-200 dark:border-white/20 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-white/20 transition-colors backdrop-blur-sm w-full sm:w-auto justify-center">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L3.84,2.15L6.05,2.66Z" /></svg>
                        Download for Android
                    </button>
                </div>

                <div className="relative w-full max-w-5xl mx-auto aspect-video bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center overflow-hidden transition-colors shadow-2xl dark:shadow-none">
                    {/* Placeholder for Main Image */}
                    <div className="text-gray-500 dark:text-gray-600 text-lg font-medium flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center">
                            <Zap className="w-10 h-10 text-yellow-500" />
                        </div>
                        <span>Main App Showcase Image</span>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] z-[-1]" />
                </div>
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-50 dark:opacity-100 transition-opacity">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[120px]" />
            </div>
        </section>
    );
};

export default Hero;
