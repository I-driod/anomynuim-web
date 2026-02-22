import React from 'react';
import { useTranslation } from 'react-i18next';

const Models = () => {
    const { t } = useTranslation();

    const models = [
        {
            name: "DeepSeek R1 Distill Qwen 1.5B",
            tag: t('models.tag_reasoning', "Advanced Reasoning"),
            desc: t('models.desc_deepseek', "State-of-the-art reasoning capabilities."),
            stats: { memory: "~1.25 GB", context: "2,048 tokens" },
            bestFor: t('models.best_reasoning', "Complex reasoning")
        },
        {
            name: "Qwen 2.5 1.5B Instruct",
            tag: t('models.tag_balanced', "Balanced Performance"),
            desc: t('models.desc_qwen', "Perfect balance of performance and efficiency."),
            stats: { memory: "~1.3 GB", context: "4,096 tokens" },
            bestFor: t('models.best_general', "General conversations")
        },
        {
            name: "Qwen 2.5 0.5B Instruct",
            tag: t('models.tag_light', "Ultra Light"),
            desc: t('models.desc_qwen_light', "Smallest model for older devices."),
            stats: { memory: "~500 MB", context: "4,096 tokens" },
            bestFor: t('models.best_battery', "Older devices")
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">{t('models.title')}</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors">{t('models.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {models.map((model, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all group shadow-sm dark:shadow-none hover:shadow-md">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold px-2 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full transition-colors">{model.tag}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">{model.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 min-h-[60px] transition-colors">{model.desc}</p>

                            <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-white/5 transition-colors">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Memory</span>
                                    <span className="font-mono text-gray-700 dark:text-gray-300 transition-colors">{model.stats.memory}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Context</span>
                                    <span className="font-mono text-gray-700 dark:text-gray-300 transition-colors">{model.stats.context}</span>
                                </div>
                                <div className="pt-2">
                                    <span className="text-xs text-gray-500 block mb-1">Best for</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors">{model.bestFor}</span>
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
