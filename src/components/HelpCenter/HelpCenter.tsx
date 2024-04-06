"use client";

import { useTranslations } from 'next-intl'

import Link from 'next/link'

import { InfoSvg, SettingSvg } from '../../../public/assets/svg/landingPageSvgs'

const HelpCenter = () => {
  const t = useTranslations();

  return (
    <div className='bg-white py-8 global-padding hidden lg:flex items-center justify-between text-asphalt text-sm'>
      <div className='flex flex-col gap-2'>
        <p className='text-primary text-xl font-bold'>{t("Always here to help you")}</p>
        <p>{t("Contact us through any of the following support channels:")}</p>
      </div>

      <div className='flex items-center gap-6'>
        <div className='flex items-center gap-4'>
          <div className='p-3 flex items-center justify-center bg-primary rounded-full'>
            <InfoSvg />
          </div>
          <div className='flex flex-col '>
            <p>{t("Help Center")}</p>
            <Link href="mailto:help.samvalley.com" className='text-base font-bold hover:underline'>help.samvalley.com</Link>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='p-3 flex items-center justify-center bg-primary rounded-full'>
            <SettingSvg />
          </div>
          <div className='flex flex-col'>
            <p>{t("Email support")}</p>
            <Link href="mailto:help.samvalley.com" className='text-base font-bold hover:underline'>help.samvalley.com</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter