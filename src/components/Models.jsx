import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, Zap, Code, Brain, Globe } from 'lucide-react';

const Models = () => {
    const { t } = useTranslation();

    const models = [
        {
            name: "Phi-4 Mini Instruct",
            tag: t('models.free_tag'),
            desc: t('models.phi4_desc'),
            stats: { size: "2.5GB", context: "4,096 Tokens" },
            icon: Cpu,
            color: "blue"
        },
        {
            name: "DeepSeek R1 7B",
            tag: t('models.pro_tag'),
            desc: t('models.deepseek_desc'),
            stats: { size: "4.3GB", context: "8,192 Tokens" },
            icon: Brain,
            color: "purple"
        },
        {
            name: "Open Hermes 2.5",
            tag: t('models.pro_tag'),
            desc: t('models.openhermes_desc'),
            stats: { size: "4.1GB", context: "4,096 Tokens" },
            icon: Globe,
            color: "cyan"
        },
        {
            name: "Qwen 3.5 4B",
            tag: t('models.pro_tag'),
            desc: t('models.qwen35_desc'),
            stats: { size: "2.8GB", context: "8,192 Tokens" },
            icon: Zap,
            color: "orange"
        },
        {
            name: "Qwen 2.5 Coder 3B",
            tag: t('models.pro_tag'),
            desc: t('models.qwen_coder_desc'),
            stats: { size: "1.1GB", context: "8,192 Tokens" },
            icon: Code,
            color: "green"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300" id="models">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">{t('models.title')}</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors max-w-2xl mx-auto">{t('models.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {models.map((model, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all group shadow-sm dark:shadow-none hover:shadow-md">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-xl bg-${model.color}-500/10 text-${model.color}-600 dark:text-${model.color}-400 transition-colors`}>
                                    <model.icon className="w-6 h-6" />
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                                    model.tag === t('models.free_tag') 
                                    ? 'bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400' 
                                    : 'bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400'
                                }`}>
                                    {model.tag}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">{model.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 min-h-[40px] transition-colors">{model.desc}</p>

                            <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-white/5 transition-colors">
                                <div className="flex justify-between text-xs">
                                    <span className="text-gray-500">Size</span>
                                    <span className="font-mono text-gray-700 dark:text-gray-300 transition-colors">{model.stats.size}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-gray-500">Context</span>
                                    <span className="font-mono text-gray-700 dark:text-gray-300 transition-colors">{model.stats.context}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Models;
