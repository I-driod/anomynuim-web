import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Privacy = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-500/10 rounded-2xl flex items-center justify-center mb-8">
                            <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">Your Privacy is Sacred</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors">
                            Unlike cloud-based AI assistants, Anonymium AI runs entirely on your device. We don't collect your data, track your conversations, or require an account. What you say stays with you—always.
                        </p>

                        <div className="space-y-4">
                            {[
                                "No Data Collection",
                                "No Account Required",
                                "No Internet Needed",
                                "100% On-Device Processing"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center transition-colors">
                                        <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                                    </div>
                                    <span className="font-medium text-gray-700 dark:text-gray-200 transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/5 overflow-hidden shadow-xl dark:shadow-none transition-colors">
                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 dark:bg-green-500/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl" />

                            <div className="relative z-10 space-y-6">
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 backdrop-blur-sm transition-colors">
                                    <div className="text-xs text-gray-500 mb-1">Cloud AI</div>
                                    <div className="text-sm text-gray-400 line-through">Sent to server...</div>
                                </div>
                                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 backdrop-blur-sm transition-colors">
                                    <div className="text-xs text-green-600 dark:text-green-400 mb-1">Anonymium AI</div>
                                    <div className="text-sm text-gray-900 dark:text-white font-medium">Processed locally on device.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
