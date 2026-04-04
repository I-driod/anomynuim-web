import React from 'react';
import { useTranslation } from 'react-i18next';
import { Smartphone, Monitor, ShieldCheck, Zap, Download } from 'lucide-react';
import appleIcon from '../assets/apple_icon.png';
import modelSelection from '../assets/model_selection.png';

const DownloadCta = () => {
    const { t } = useTranslation();

    return (
        <section id="download" className="relative py-32 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 blur-[80px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 blur-[80px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 mb-8">
                            <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Get the App</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
                            {t('download_cta.title')}
                        </h2>

                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
                            {t('download_cta.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-center mb-12">
                            {/* App Store Button */}
                            <a
                                href="https://apps.apple.com/app/anonymium-ai/id6757937417"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-bold transition-all hover:translate-y-[-4px] hover:shadow-2xl dark:hover:shadow-white/10 w-full sm:w-auto overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                                <img src={appleIcon} alt="Apple Store" className="w-8 h-8 relative z-10 invert dark:invert-0" />
                                <div className="flex flex-col items-start relative z-10">
                                    <span className="text-[10px] uppercase tracking-tighter opacity-70">Download on the</span>
                                    <span className="text-xl">App Store</span>
                                </div>
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
                                <ShieldCheck className="w-5 h-5 text-green-500" />
                                <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">100% On-Device</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
                                <Zap className="w-5 h-5 text-blue-500" />
                                <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Local Speed</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                         <div className="relative z-10 transform lg:rotate-3 group hover:rotate-0 transition-transform duration-700">
                             <div className="bg-gray-100 dark:bg-zinc-800 p-2 rounded-[3rem] shadow-2xl border border-gray-200 dark:border-white/10">
                                <img 
                                    src={modelSelection} 
                                    alt="Model Selection Screen" 
                                    className="rounded-[2.5rem] w-full h-auto shadow-inner"
                                />
                             </div>
                         </div>
                         {/* Platform Icons */}
                         <div className="absolute -top-6 -right-6 w-16 h-16 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 z-20 group-hover:scale-110 transition-transform">
                            <Monitor className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                         </div>
                         <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-12 z-20 group-hover:scale-110 transition-transform">
                            <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadCta;
