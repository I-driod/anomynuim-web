import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
    const { t } = useTranslation();

    const steps = [
        {
            num: "01",
            title: t('how_it_works.step1_title'),
            desc: t('how_it_works.step1_desc')
        },
        {
            num: "02",
            title: t('how_it_works.step2_title'),
            desc: t('how_it_works.step2_desc')
        },
        {
            num: "03",
            title: t('how_it_works.step3_title'),
            desc: t('how_it_works.step3_desc')
        },
        {
            num: "04",
            title: t('how_it_works.step4_title'),
            desc: t('how_it_works.step4_desc')
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white transition-colors">{t('how_it_works.title')}</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-white/5 hover:bg-white dark:hover:bg-zinc-900 transition-colors shadow-sm dark:shadow-none hover:shadow-md">
                            <span className="text-6xl font-bold text-gray-200 dark:text-white/5 absolute top-4 right-4 transition-colors">{step.num}</span>
                            <div className="relative z-10 pt-8">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
