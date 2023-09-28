'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ComponentProps, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './link-indicator.module.css';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

const LinkIndicator = ({ href, ...rest }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href && pathname !== '/';
  return (
    <Link
      aria-current={isActive}
      className={`${styles.link_item} ${isActive ? styles.active_link : ''}`}
      href={href}
      {...rest}
    />
  );
};

export default LinkIndicator;
