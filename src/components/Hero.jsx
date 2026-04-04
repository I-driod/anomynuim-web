import React from 'react';
import { Shield, Sparkles, Monitor, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import chatMacOS from '../assets/chat_macOS.png';
import chatScreen from '../assets/chat_screen.png';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative pt-32 pb-32 overflow-hidden bg-white dark:bg-black transition-all duration-500">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[140px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/[0.02] dark:bg-blue-500/[0.05] blur-[160px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 mb-8 backdrop-blur-sm transition-all hover:scale-105">
                        <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">{t('features.privacy')}</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-gray-900 dark:text-white leading-[1.1] transition-colors">
                        {t('hero.title')}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-colors font-medium">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="https://apps.apple.com/app/anonymium-ai/id6757937417"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-bold transition-all hover:translate-y-[-4px] hover:shadow-2xl dark:hover:shadow-white/20 active:translate-y-0 w-full sm:w-auto justify-center overflow-hidden"
                        >
                             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                            <Monitor className="w-6 h-6 relative z-10" />
                            <Smartphone className="w-6 h-6 relative z-10" />
                            <span className="relative z-10 text-lg">{t('download_cta.apple_btn')}</span>
                        </a>
                        
                        <button 
                            onClick={() => document.getElementById('tech-specs')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-white/5 border border-gray-200 dark:border-white/10 transition-all hover:translate-y-[-4px] active:translate-y-0 w-full sm:w-auto justify-center"
                        >
                            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            <span className="text-lg">{t('hero.learn_more')}</span>
                        </button>
                    </div>
                </div>

                {/* Main Visual Showcase */}
                <div className="relative max-w-6xl mx-auto flex flex-col items-center">
                    <div className="relative w-full flex flex-col md:flex-row items-center justify-center">
                        {/* MacBook Pro - Primary Image */}
                        <div className="relative z-10 w-full max-w-[900px] transition-all duration-1000 transform hover:scale-[1.02]">
                            <img 
                                src={chatMacOS} 
                                alt="Anonymium AI for macOS" 
                                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                                loading="eager"
                            />
                        </div>

                        {/* iPhone - Secondary Overlapping Image */}
                        <div className="relative md:absolute md:right-[5%] md:bottom-[-10%] z-20 w-[260px] md:w-[320px] transition-all duration-1000 transform hover:scale-110 hover:-rotate-1 md:rotate-2 mt-8 md:mt-0">
                            <img 
                                src={chatScreen} 
                                alt="Anonymium AI for iOS" 
                                className="w-full h-auto drop-shadow-xl dark:drop-shadow-2xl"
                                loading="eager"
                            />
                        </div>
                    </div>
                    
                    {/* Visual Floor / Shadow */}
                    <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/5 dark:bg-white/5 blur-3xl rounded-[100%] z-0 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
