import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">{t('privacy_policy.title')}</h1>

                <div className="prose dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{t('privacy_policy.intro_title')}</h2>
                        <p>
                            {t('privacy_policy.intro_text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{t('privacy_policy.collection_title')}</h2>
                        <p>
                            {t('privacy_policy.collection_text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{t('privacy_policy.processing_title')}</h2>
                        <p>
                            {t('privacy_policy.processing_text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{t('privacy_policy.third_party_title')}</h2>
                        <p>
                            {t('privacy_policy.third_party_text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{t('privacy_policy.changes_title')}</h2>
                        <p>
                            {t('privacy_policy.changes_text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{t('privacy_policy.contact_title')}</h2>
                        <p>
                            {t('privacy_policy.contact_text')} <br />
                            <a href="mailto:hello.godwin.david@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">hello.godwin.david@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
