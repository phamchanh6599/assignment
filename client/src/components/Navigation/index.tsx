'use client';

import Button, { ButtonProps } from '@mui/material/Button';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { usePathname } from 'next/navigation';

const NAVIGATION = [
  {
    name: 'shop',
    url: '/shop',
  },
  {
    name: 'recipes',
    url: '/recipes',
    children: [
      {
        name: 'categories',
        url: '/recipes/categories',
      },
      {
        name: 'collections',
        url: '/recipes/collections',
      },
      {
        name: 'resources',
        url: '/recipes/resources',
      },
    ],
  },
  {
    name: 'learn',
    url: '/learn',
  },
  {
    name: 'about',
    url: '/about-us',
  },
  {
    name: 'blog',
    url: '/blog',
  },
];

const NavigationButton = styled(Button)<ButtonProps>(() => ({
  color: '#000',
  fontWeight: 'bold',
}));

const Navigation = () => {
  const pathname = usePathname();
  const childNavigation = NAVIGATION.find(
    (navigate) => navigate.url === pathname
  )?.children;

  const _renderChildNavigation = () => {
    return childNavigation?.map((navigate) => {
      return (
        <NavigationButton
          key={navigate.name}
          href={navigate.url}
          sx={{
            fontSize: '12px',
          }}>
          {navigate.name}
        </NavigationButton>
      );
    });
  };

  const _renderNavigation = () => {
    return NAVIGATION.map((navigate) => {
      const isActive = pathname === navigate.url;

      return (
        <NavigationButton
          key={navigate.name}
          href={navigate.url}
          sx={{
            borderRadius: 0,
            borderBottom: isActive ? '3px solid #f74877' : 'none',
          }}>
          {navigate.name}
        </NavigationButton>
      );
    });
  };

  return (
    <Box>
      {/* Main Navigation  */}
      <Box
        sx={{
          display: 'flex',
          columnGap: '50px',
          padding: '20px 25px 20px 365px',
        }}>
        {_renderNavigation()}
      </Box>

      {/* Second Navigation  */}
      {childNavigation?.length ? (
        <Box
          sx={{
            display: 'flex',
            background: '#f0efe6',
            columnGap: '30px',
            padding: '10px 25px 10px 365px',
          }}>
          {_renderChildNavigation()}
        </Box>
      ) : null}
    </Box>
  );
};

export default Navigation;
