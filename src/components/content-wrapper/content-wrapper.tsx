'use client';
import { usePathname } from 'next/navigation';

import React from 'react';

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [style, setStyle] = React.useState<string>('wrapper');

  React.useEffect(() => {
    if (pathname.includes('/blog')) {
      setStyle('wrapper-blog-article');
    } else {
      setStyle('wrapper');
    }
  }, [pathname]);

  return <div className={style}>{children}</div>;
};

export default ContentWrapper;
