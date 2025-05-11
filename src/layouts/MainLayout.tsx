import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

// import { FeedbackModal } from 'src/layouts/FeedbackDialog';
// import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader'; // Sidebar now
// import TopBarNotify from './TopBarNotify';

export function MainLayout({ children }: { children: ReactNode }) {
  // const APP_BANNER_VERSION = '1.0.0';

  return (
    <>
      <Box sx={{ height: '100vh', maxWidth: '100vw', position: 'relative' }}>
        <Box
          component="img"
          src="/noise_effect.webp"
          alt="noise effect"
          sx={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 50,
            pointerEvents: 'none',
            objectFit: 'cover',
          }}
        />
        <AppHeader />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
            pt: 3,
            position: 'relative',
            bgcolor: 'black',
            pl: 10,
          }}
        >
          {children}
        </Box>

        {/* <AppFooter /> */}
      </Box>
    </>
  );
}
