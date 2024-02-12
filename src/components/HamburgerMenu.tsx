'use client';
import React, { useState } from 'react';
import { Drawer } from 'antd';
import Image from 'next/image';
import HamburgerIcon from '@/assets/hamburger_icon.svg';
import Link from 'next/link';
import { useI18n } from '@/locales/client';

interface CategoriesProps {
  categories: {
    id: number;
    name: string;
  }[];
}

const HamburgerMenu = ({ categories }: CategoriesProps) => {
  const [open, setOpen] = useState(false);
  const t = useI18n();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Image
        className='hover:cursor-pointer'
        onClick={showDrawer}
        src={HamburgerIcon}
        alt='hamburger icon'
        width={35}
        height={22}
      />
      <Drawer
        title={t('sections')}
        placement='left'
        closable={false}
        onClose={onClose}
        open={open}
        key='left'
      >
        <nav className='flex flex-col gap-10 '>
          {categories.map((item) => (
            <Link
              className='text-primary font-bold uppercase'
              key={item.id}
              href={`/categories/${item.id}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
