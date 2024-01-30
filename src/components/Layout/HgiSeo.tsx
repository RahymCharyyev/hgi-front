'use client';
import { useI18n } from '@/locales/client';
import { DefaultSeo } from 'next-seo';
import React from 'react';

const HgiSeo = () => {
  const t = useI18n();
  return (
    <DefaultSeo
      useAppDir={true}
      title={(t('universityName'), t('siteName'))}
      description={t('heroTitle')}
      themeColor='#ffffff'
      additionalLinkTags={[
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-icon-180x180.png',
        },
        {
          rel: 'android-chrome',
          href: '/android-icon-192x192.png',
          sizes: '192x192',
        },
      ]}
    />
  );
};

export default HgiSeo;
