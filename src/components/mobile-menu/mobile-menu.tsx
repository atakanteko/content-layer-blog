import React from 'react';
import { Drawer } from 'antd';
import { useThemeContext } from '@/hooks/useThemeContext';
import Navigation from '../navigation/navigation';
import NavItems from '../navigation/nav-items';
import { usePathname } from 'next/navigation';
import Logo from '../navbar/logo';

const MobileMenu = () => {
  const themeCtx = useThemeContext();
  const pathname = usePathname();
  const [path, setPathName] = React.useState<string>(pathname);
  const ctx = useThemeContext();

  return (
    <Drawer
      title={<Logo />}
      placement="right"
      onClose={themeCtx.toggleMobileMenu}
      open={themeCtx.isMobileMenuOpen}
      className="custom-drawer"
      width="100%"
    >
      <NavItems />
    </Drawer>
  );
};

export default MobileMenu;
