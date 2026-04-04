import React from 'react';
import { Shield, Mic, Brain, Zap, Globe, Search, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: Shield,
            title: t('features.privacy'),
            description: t('features.privacy_desc')
        },
        {
            icon: Search,
            title: t('features.research_hub'),
            description: t('features.research_hub_desc'),
            isPremium: true
        },
        {
            icon: Mic,
            title: t('features.voice'),
            description: t('features.voice_desc')
        },
        {
            icon: Database,
            title: t('features.privacy'),
            description: t('features.privacy_desc')
        },
        {
            icon: Zap,
            title: t('features.speed'),
            description: t('features.speed_desc')
        },
        {
            icon: Globe,
            title: t('features.global'),
            description: t('features.global_desc')
        }
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-zinc-950/50 transition-colors duration-300" id="features">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">{t('features.title')}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl bg-white dark:bg-white/5 border transition-all shadow-sm dark:shadow-none hover:shadow-md relative overflow-hidden group ${feature.isPremium
                                    ? 'border-blue-500/50 dark:border-blue-400/50 bg-blue-50/30 dark:bg-blue-900/10 ring-1 ring-blue-500/20'
                                    : 'border-gray-200 dark:border-white/5 hover:border-blue-500/20 dark:hover:border-white/10'
                                }`}
                        >
                            {feature.isPremium && (
                                <div className="absolute top-0 right-0">
                                    <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                        Premium
                                    </div>
                                </div>
                            )}

                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.isPremium
                                    ? 'bg-blue-600/20 text-blue-600 dark:text-blue-400'
                                    : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                }`}>
                                <feature.icon className="w-6 h-6" />
                            </div>

                            <h3 className={`text-xl font-bold mb-3 transition-colors ${feature.isPremium
                                    ? 'text-blue-700 dark:text-blue-300'
                                    : 'text-gray-900 dark:text-white'
                                }`}>
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
