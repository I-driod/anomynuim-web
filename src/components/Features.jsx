import React from 'react';
import { Lock, Smartphone, Mic, Brain, Zap, Monitor, Wifi } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: Lock,
            title: t('features.privacy'),
            description: t('features.privacy_desc')
        },
        {
            icon: Smartphone,
            title: t('features.offline'),
            description: t('features.offline_desc')
        },
        {
            icon: Mic,
            title: t('features.voice', 'Voice Enabled'),
            description: t('features.voice_desc', 'Speak naturally and get instant responses.')
        },
        {
            icon: Brain,
            title: t('features.models', 'Multiple AI Models'),
            description: t('features.models_desc', 'Choose from 3 different AI models.')
        },
        {
            icon: Zap,
            title: t('features.speed'),
            description: t('features.speed_desc')
        },
        {
            icon: Monitor,
            title: t('features.web_connect', 'Web Connect (Premium)'),
            description: t('features.web_connect_desc', 'Connect your phone to your browser via hotspot or WiFi for offline AI power on your PC.'),
            isPremium: true
        }
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-zinc-950/50 transition-colors duration-300">
            <div className="container mx-auto px-4">
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

                            {feature.isPremium && (
                                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                    <Wifi className="w-3 h-3" />
                                    <span>Hotspot / WiFi Ready</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
