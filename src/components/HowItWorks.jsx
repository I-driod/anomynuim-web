import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, Send, ShieldCheck, Download, Monitor, Smartphone, Hammer } from 'lucide-react';

const HowItWorks = () => {
    const { t } = useTranslation();

    const steps = [
        {
            icon: Download,
            title: t('how_it_works.step1_title'),
            desc: t('how_it_works.step1_desc')
        },
        {
            icon: Cpu,
            title: t('how_it_works.step2_title'),
            desc: t('how_it_works.step2_desc')
        },
        {
            icon: Send,
            title: t('how_it_works.step3_title'),
            desc: t('how_it_works.step3_desc')
        },
        {
            icon: ShieldCheck,
            title: t('how_it_works.step4_title'),
            desc: t('how_it_works.step4_desc')
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-black transition-colors duration-300" id="tech-specs">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white transition-colors leading-tight px-4">{t('how_it_works.title')}</h2>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 mb-16 md:mb-24">
                    {steps.map((step, idx) => (
                        <div key={idx} className="text-center group px-4">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                <step.icon className="w-7 h-7 md:w-8 md:h-8" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-zinc-900/50 rounded-3xl p-6 md:p-12 border border-gray-200 dark:border-white/5 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                        <Hammer className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('tech_specs.title')}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('tech_specs.inference_engine')}</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t('tech_specs.backend_desc')}</p>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                                <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                                <div>
                                    <h5 className="font-bold text-sm text-gray-900 dark:text-white">{t('tech_specs.hardware_title')} (Mac)</h5>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t('tech_specs.mac_req')}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                                <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                                <div>
                                    <h5 className="font-bold text-sm text-gray-900 dark:text-white">{t('tech_specs.hardware_title')} (iOS)</h5>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t('tech_specs.ios_req')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 bg-white dark:bg-zinc-800/50 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">{t('pricing.benefits_title')}</h4>
                                <ul className="space-y-3">
                                    {(t('pricing.benefits', { returnObjects: true }) || []).map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/5 flex justify-between items-center">
                                    <span className="font-bold text-gray-900 dark:text-white">{t('pricing.lifetime_unlock')}</span>
                                    <span className="text-xl md:text-2xl font-black text-blue-600 dark:text-blue-400">{t('pricing.price')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
