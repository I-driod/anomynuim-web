import React from 'react';
import { useTranslation } from 'react-i18next';
import { Smartphone, Download, CheckCircle2 } from 'lucide-react';
import appleIcon from '../assets/apple_icon.png';
import playStoreIcon from '../assets/play_store_icon.png';

const DownloadCta = () => {
    const { t } = useTranslation();

    return (
        <section id="download" className="relative py-32 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 blur-[80px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-emerald-500/5 dark:bg-emerald-500/10 blur-[80px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-50/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[3rem] p-8 md:p-16 text-center transform hover:scale-[1.01] transition-all duration-500 shadow-2xl dark:shadow-none">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 mb-8">
                            <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Get the App</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
                            {t('download_cta.title', 'Ready to Experience Private AI?')}
                        </h2>

                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            {t('download_cta.subtitle', 'Download Anonymium AI today and take control of your conversations. Your data, your rules.')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            {/* App Store Button */}
                            <a
                                href="https://apps.apple.com/ng/app/anonymium-ai/id6757937417"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl font-bold transition-all hover:translate-y-[-4px] hover:shadow-2xl dark:hover:shadow-white/10 w-full sm:w-auto overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                                <img src={appleIcon} alt="Apple Store" className="w-7 h-7 relative z-10 invert dark:invert-0" />
                                <div className="flex flex-col items-start relative z-10">
                                    <span className="text-[10px] uppercase tracking-tighter opacity-70">Download on the</span>
                                    <span className="text-lg">App Store</span>
                                </div>
                            </a>

                            {/* Play Store Button (Placeholder) */}
                            <div className="group relative flex items-center gap-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-500 px-10 py-4 rounded-2xl font-bold w-full sm:w-auto cursor-not-allowed">
                                <img src={playStoreIcon} alt="Play Store" className="w-7 h-7 grayscale opacity-50" />
                                <div className="flex flex-col items-start">
                                    <span className="text-[10px] uppercase tracking-tighter opacity-70">Get it on</span>
                                    <span className="text-lg">Google Play</span>
                                </div>
                                <div className="absolute -top-3 -right-3 bg-gray-200 dark:bg-zinc-800 text-[10px] text-gray-500 px-2 py-1 rounded-md border border-gray-300 dark:border-white/10 font-bold uppercase whitespace-nowrap">
                                    Coming Soon
                                </div>
                            </div>
                        </div>

                        {/* Social Proof / Trust Indicators */}
                        <div className="mt-16 pt-16 border-t border-gray-200 dark:border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <div className="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-500">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>No Cloud Required</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-500">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>100% Free to Use</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-500">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Private by Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadCta;
