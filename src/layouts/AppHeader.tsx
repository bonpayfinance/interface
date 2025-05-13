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
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileDrawerOpen, setMobileDrawerOpen] = useRootStore((state) => [
    state.mobileDrawerOpen,
    state.setMobileDrawerOpen,
  ]);

  const [walletWidgetOpen, setWalletWidgetOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileDrawerOpen && !md) setMobileDrawerOpen(false);
    if (walletWidgetOpen) setWalletWidgetOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [md]);

  const toggleWalletWidget = (state: boolean) => {
    if (md) setMobileDrawerOpen(state);
    setWalletWidgetOpen(state);
  };

  const toggleMobileMenu = (state: boolean) => {
    if (md) setMobileDrawerOpen(state);
    setMobileMenuOpen(state);
  };

  const headerHeight = 64;

  return (
    <Box
      component="header"
      sx={{
        height: { md: '100vh', xs: `${headerHeight}px` },
        width: { xs: '100%', md: 260 },
        position: { md: 'fixed', xs: 'relative' },
        top: 0,
        left: 0,
        zIndex: theme.zIndex.appBar,
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        alignItems: 'center',
        justifyContent: { xs: 'space-between', md: 'flex-start' },
        px: 2,
        py: { xs: 1, md: 3 },
        backgroundColor:
          theme.palette.mode === 'dark' ? 'rgba(18, 18, 20, 0.85)' : 'rgba(255, 255, 255, 0.75)',
        boxShadow:
          theme.palette.mode === 'dark' ? '0 0 20px rgba(0,0,0,0.6)' : '0 0 12px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
        borderRight: { md: `1px solid ${theme.palette.divider}` },
        overflowY: { md: 'auto', xs: 'hidden' },
        transition: 'all 0.3s ease-in-out',
      }}
    >
      {/* Noise Overlay */}
      <Box
        component="img"
        src="/noise_effect.webp"
        alt="noise"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.08,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      {/* Logo & Title */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.2,
          mb: { md: 4 },
          mt: { xs: 0, md: 1 },
        }}
      >
        <Box
          component={Link}
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          sx={{ '&:hover': { opacity: 0.7 }, transition: 'opacity 0.3s ease' }}
        >
          <LogoIcon />
        </Box>

        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
            fontSize: '0.7rem',
            px: 1.6,
            py: 0.3,
            borderRadius: 2,
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: '#fff',
            },
          }}
        >
          Eden Finance
        </Button>
      </Box>

      {/* Navigation Items (Desktop) */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: 1.2,
          width: '100%',
        }}
      >
        <NavItems />
      </Box>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Wallet Widget */}
      {!mobileMenuOpen && (
        <WalletWidget
          open={walletWidgetOpen}
          setOpen={toggleWalletWidget}
          headerHeight={headerHeight}
        />
      )}

      {/* Settings (Desktop Only) */}
      <Box sx={{ display: { xs: 'none', md: 'block' }, mt: 2 }}>
        <SettingsMenu />
      </Box>

      {/* Mobile Menu */}
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
  );
}
