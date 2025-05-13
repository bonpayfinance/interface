import { Button, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRootStore } from 'src/store/root';

import { Link } from '../components/primitives/Link';
import { NavItems } from './components/NavItems';
import LogoIcon from './logo';
import { MobileMenu } from './MobileMenu';
import { SettingsMenu } from './SettingsMenu';
import WalletWidget from './WalletWidget';

export function AppHeader() {
  const { breakpoints } = useTheme();
  const md = useMediaQuery(breakpoints.down('md'));

  const [mobileDrawerOpen, setMobileDrawerOpen] = useRootStore((state) => [
    state.mobileDrawerOpen,
    state.setMobileDrawerOpen,
  ]);

  const [walletWidgetOpen, setWalletWidgetOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // localStorage.setItem('testnetsEnabled', 'true');
    if (mobileDrawerOpen && !md) {
      setMobileDrawerOpen(false);
    }
    if (walletWidgetOpen) {
      setWalletWidgetOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [md]);

  const headerHeight = 48;

  const toggleWalletWigit = (state: boolean) => {
    if (md) setMobileDrawerOpen(state);
    setWalletWidgetOpen(state);
  };

  const toggleMobileMenu = (state: boolean) => {
    if (md) setMobileDrawerOpen(state);
    setMobileMenuOpen(state);
  };

  return (
    <Box
      component="header"
      sx={(theme) => ({
        height: { md: '100vh', xs: '64px' },
        position: { md: 'fixed', xs: 'relative' },
        top: 0,
        left: 0,
        width: { xs: '100%', md: 240 },
        zIndex: theme.zIndex.appBar,
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        alignItems: 'center',
        justifyContent: { xs: 'space-between', md: 'flex-start' },
        px: 2,
        py: { xs: 1, md: 3 },
        overflow: 'hidden',
        backgroundColor: '#000',
      })}
    >
      {/* Noise Overlay */}
      <Box
        component="img"
        src="/noise_effect.webp"
        alt="noise"
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.9,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          mb: { md: 4 },
          mt: { xs: 0, md: 2, lg: 4 },
        }}
      >
        {/* Logo */}
        <Box
          component={Link}
          href="/"
          aria-label="Go to homepage"
          onClick={() => setMobileMenuOpen(false)}
          sx={{
            transition: 'opacity 0.3s',
            '&:hover': { opacity: 0.8 },
          }}
        >
          <LogoIcon />
        </Box>

        {/* App Title Button */}
        <Button
          variant="contained"
          size="small"
          color="primary"
          disableElevation
          sx={{
            textTransform: 'uppercase',
            fontWeight: 600,
            fontSize: '0.75rem',
            px: 2,
            py: 0.5,
            backgroundColor: '#9669ED',
            '&:hover': { backgroundColor: '#7e50d8' },
          }}
        >
          Eden Finance
        </Button>
      </Box>

      {/* Navigation */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: 1 }}>
        <NavItems />
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      {!mobileMenuOpen && (
        <WalletWidget
          open={walletWidgetOpen}
          setOpen={toggleWalletWigit}
          headerHeight={headerHeight}
        />
      )}

      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <SettingsMenu />
      </Box>

      {!walletWidgetOpen && (
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <MobileMenu
            open={mobileMenuOpen}
            setOpen={toggleMobileMenu}
            headerHeight={headerHeight}
          />
        </Box>
      )}
    </Box>

    // </HideOnScroll>
  );
}
