// import { HomeIcon } from '@heroicons/react/outline';
// import { Trans } from '@lingui/macro';
import {
  Button,
  // SvgIcon,
  // Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useEffect, useState } from 'react';
// import { ContentWithTooltip } from 'src/components/ContentWithTooltip';
import { useRootStore } from 'src/store/root';

// import { ENABLE_TESTNET } from 'src/utils/marketsAndNetworksConfig';
import { Link } from '../components/primitives/Link';
// import { uiConfig } from '../uiConfig';
import { NavItems } from './components/NavItems';
import { MobileMenu } from './MobileMenu';
import { SettingsMenu } from './SettingsMenu';
import WalletWidget from './WalletWidget';

export function AppHeader() {
  const { breakpoints } = useTheme();
  const md = useMediaQuery(breakpoints.down('md'));
  // const sm = useMediaQuery(breakpoints.down('sm'));

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

  // const disableTestnet = () => {
  //   localStorage.setItem('testnetsEnabled', 'false');
  //   // Set window.location to trigger a page reload when navigating to the the dashboard
  //   window.location.href = '/';
  // };

  // const testnetTooltip = (
  //   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 1 }}>
  //     <Typography variant="subheader1">
  //       <Trans>Testnet mode is ON</Trans>
  //     </Typography>
  //     <Typography variant="description">
  //       <Trans>The app is running in testnet mode. Learn how it works in</Trans>{' '}
  //       <Link
  //         href="https://docs.eden.finance/faq/testing-aave"
  //         style={{ fontSize: '14px', fontWeight: 400, textDecoration: 'underline' }}
  //       >
  //         FAQ.
  //       </Link>
  //     </Typography>
  //     <Button variant="outlined" sx={{ mt: '12px' }} onClick={disableTestnet}>
  //       <Trans>Disable testnet</Trans>
  //     </Button>
  //   </Box>
  // );

  return (
    // <HideOnScroll>
    // <Box
    //   component="header"
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   sx={(theme) => ({
    //     height: {
    //       md: '100vh',
    //       sm: '3',
    //     }, // Full height of the viewport
    //     position: {
    //       md: 'fixed',
    //     }, // Fixed positioning
    //     top: 0,
    //     left: 0,
    //     display: 'flex',
    //     width: { sm: '100vw', md: 240 }, // Sidebar width
    //     // border: '1px dashed grey',
    //     transition: theme.transitions.create('top'),
    //     zIndex: theme.zIndex.appBar,
    //     bgcolor: { sm: '#0D131A', md: '#1D2833' },
    //     // borderColor: 'divider',

    //     padding: {
    //       xs: mobileMenuOpen || walletWidgetOpen ? '8px 20px' : '8px 8px 8px 20px',
    //       xsm: '8px 20px',
    //       md: '20px ',
    //     },
    //     alignItems: { sm: 'center', md: 'start', lg: 'start', xsm: 'center', xs: 'center' },
    //     // alignItems:'center',
    //     flexDirection: {
    //       sm: 'row',
    //       md: 'column',
    //     },
    //     // boxShadow: 'inset 0px -1px 0px rgba(242, 243, 247, 0.16)',
    //   })}
    // >
    //   <Box
    //     component={Link}
    //     href="/"
    //     aria-label="Go to homepage"
    //     sx={{
    //       lineHeight: 0,
    //       // mr: 3,
    //       transition: '0.3s ease all',
    //       '&:hover': { opacity: 0.7 },
    //     }}
    //     onClick={() => setMobileMenuOpen(false)}
    //   >
    //     {/* <img src={uiConfig.appLogo} alt="AAVE" width={72} height={20} /> */}
    //   </Box>
    //   <Box sx={{ mr: sm ? 1 : 3 }}>
    //     {
    //       // <ContentWithTooltip tooltipContent={testnetTooltip} offset={[0, -4]} withoutHover>
    //       <Button
    //         variant="surface"
    //         size="small"
    //         color="primary"
    //         sx={{
    //           backgroundColor: '#9669ED',
    //           '&:hover, &.Mui-focusVisible': { backgroundColor: '#9669ED' },
    //         }}
    //       >
    //         EDEN FINANCE
    //         {/* <SvgIcon sx={{ marginLeft: '2px', fontSize: '16px' }}>
    //           <HomeIcon />
    //         </SvgIcon> */}
    //       </Button>
    //       // </ContentWithTooltip>
    //     }
    //   </Box>

    //   <Box sx={{ display: { xs: 'none', md: 'flex' }, mt: 10 }}>
    //     <NavItems />
    //   </Box>

    //   <Box sx={{ flexGrow: 1 }} />

    //   {!mobileMenuOpen && (
    //     <WalletWidget
    //       open={walletWidgetOpen}
    //       setOpen={toggleWalletWigit}
    //       headerHeight={headerHeight}
    //     />
    //   )}

    //   <Box sx={{ display: { xs: 'none', md: 'block' } }}>
    //     <SettingsMenu />
    //   </Box>

    //   {!walletWidgetOpen && (
    //     <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
    //       <MobileMenu
    //         open={mobileMenuOpen}
    //         setOpen={toggleMobileMenu}
    //         headerHeight={headerHeight}
    //       />
    //     </Box>
    //   )}
    // </Box>
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

      {/* Logo */}
      <Box
        component={Link}
        href="/"
        aria-label="Go to homepage"
        onClick={() => setMobileMenuOpen(false)}
        sx={{
          mb: { md: 4 },
          transition: 'opacity 0.3s',
          '&:hover': { opacity: 0.8 },
        }}
      >
        {/* <Box component="img" src="/logo.svg" alt="Logo" sx={{ height: 32 }} /> */}
      </Box>

      {/* App Title Button */}
      <Button
        variant="contained"
        size="small"
        color="primary"
        disableElevation
        sx={{
          mb: { md: 4 },
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
