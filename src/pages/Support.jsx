import React from 'react';
import { Mail } from 'lucide-react';

const Support = () => {
    return (
        <div className="pt-32 pb-20 px-4 min-h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 max-w-lg w-full">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact Support</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Need help or have any questions? Our support team is here to assist you.
                </p>

                <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Email us at</span>
                    <a
                        href="mailto:hello.godwin.david@gmail.com"
                        className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:underline break-all"
                    >
                        hello.godwin.david@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Support;
