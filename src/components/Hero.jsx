import React from 'react';
import { Download, Shield, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import appHomeScreen from '../assets/app_home_screen.png';
import appChatScreen from '../assets/app_chat_screen.png';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 text-center z-10 relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-8 backdrop-blur-sm transition-colors">
                    <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('features.privacy')}</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white transition-colors">
                    {t('hero.title')}
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors">
                    {t('hero.subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <a
                        href="https://apps.apple.com/ng/app/anonymium-ai/id6757937417"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full font-semibold hover:opacity-80 transition-all w-full sm:w-auto justify-center shadow-lg dark:shadow-none"
                    >
                        <Smartphone className="w-5 h-5" />
                        Download for iOS
                    </a>
                </div>

                <div className="relative w-full max-w-6xl mx-auto flex justify-center items-end h-[500px] md:h-[600px] mt-10">
                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 dark:bg-blue-500/10 blur-[100px] z-0" />

                    {/* Phone 1: Home/Setup Screen (Left, slightly back) */}
                    <div className="relative z-10 w-[240px] md:w-[300px] transform -rotate-6 translate-x-10 md:translate-x-16 translate-y-10 shadow-2xl rounded-[3rem] border-8 border-gray-900 overflow-hidden bg-black">
                        <img src={appHomeScreen} alt="Anonymium AI Home Screen" className="w-full h-auto" />
                    </div>

                    {/* Phone 2: Chat Screen (Right, front) */}
                    <div className="relative z-20 w-[250px] md:w-[310px] transform rotate-3 -translate-x-10 md:-translate-x-16 -translate-y-4 shadow-2xl rounded-[3rem] border-8 border-gray-900 overflow-hidden bg-black">
                        <img src={appChatScreen} alt="Anonymium AI Chat Screen" className="w-full h-auto" />
                    </div>
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
