import React from 'react';

const models = [
    {
        name: "DeepSeek R1 Distill Qwen 1.5B",
        tag: "Advanced Reasoning",
        desc: "State-of-the-art reasoning capabilities with chain-of-thought processing. Perfect for complex problem-solving and detailed explanations.",
        stats: { memory: "~1.25 GB", context: "2,048 tokens" },
        bestFor: "Complex reasoning, step-by-step problem solving"
    },
    {
        name: "Qwen 2.5 1.5B Instruct",
        tag: "Balanced Performance",
        desc: "Perfect balance of performance and efficiency for everyday tasks. Great all-around model for general conversations.",
        stats: { memory: "~1.3 GB", context: "4,096 tokens" },
        bestFor: "General conversations, everyday tasks"
    },
    {
        name: "Gemma 3 1B",
        tag: "Google AI",
        desc: "Google's efficient model optimized for mobile devices. Reliable performance with excellent response quality.",
        stats: { memory: "~1.1 GB", context: "4,096 tokens" },
        bestFor: "Quick responses, general assistance"
    },
    {
        name: "Llama 3.2 1B Instruct",
        tag: "Meta AI - Extended Context",
        desc: "Meta's powerful model with extended context window. Handles longer conversations and remembers more context.",
        stats: { memory: "~1.1 GB", context: "8,193 tokens" },
        bestFor: "Long conversations, detailed discussions"
    },
    {
        name: "Qwen 2.5 0.5B Instruct",
        tag: "Ultra Light",
        desc: "Smallest model for older devices with limited resources. Still powerful while being incredibly efficient.",
        stats: { memory: "~500 MB", context: "4,096 tokens" },
        bestFor: "Older devices, maximum battery life"
    }
];

const Models = () => {
    return (
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">Choose Your Intelligence</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors">Five powerful models packed into one app.</p>
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
