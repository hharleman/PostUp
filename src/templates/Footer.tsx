import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { AppConfig } from '@/utils/AppConfig';

import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="pb-16 pt-0">
      <CenteredFooter
        logo={<Logo />}
        name={AppConfig.name}
        iconList={(
          <>
            <li>
              <Link href="/">
                <Facebook className="size-5" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Twitter className="size-5" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Youtube className="size-5" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Linkedin className="size-5" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Instagram className="size-5" />
              </Link>
            </li>
          </>
        )}
        legalLinks={null}
      >
        <li>
          <Link href="/blog">{t('blog')}</Link>
        </li>
      </CenteredFooter>
    </Section>
  );
};
