import React from 'react';
import { Lock, Smartphone, Mic, Brain, Zap, Gem } from 'lucide-react';

const features = [
    {
        icon: Lock,
        title: "100% Private",
        description: "All processing happens on your device. Your conversations never leave your phone, ensuring complete privacy and security."
    },
    {
        icon: Smartphone,
        title: "Offline First",
        description: "No internet connection required. Access powerful AI capabilities anywhere, anytime, even in airplane mode."
    },
    {
        icon: Mic,
        title: "Voice Enabled",
        description: "Speak naturally and get instant responses. Advanced on-device speech recognition makes conversations feel natural."
    },
    {
        icon: Brain,
        title: "Multiple AI Models",
        description: "Choose from 5 different AI models optimized for various tasks and device capabilities."
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized for mobile devices with efficient models that deliver quick responses without draining your battery."
    },
    {
        icon: Gem,
        title: "Free Forever",
        description: "No subscriptions, no hidden fees, no data collection. Just pure AI power at your fingertips."
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-zinc-950/50 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-blue-500/20 dark:hover:border-white/10 transition-all shadow-sm dark:shadow-none hover:shadow-md">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
