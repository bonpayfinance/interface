import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'black',
        position: 'relative',
      }}
    >
      <AppHeader />

      {/* Main content wrapper */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          minHeight: '100vh',
          width: '100%',
          ml: { md: '240px' },
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src="/noise_effect.webp"
          alt="noise effect"
          sx={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100%',
            minHeight: '100vh',
            zIndex: 50,
            pointerEvents: 'none',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            minHeight: '100%',
            pt: 3,
            px: { xs: 2, md: 4 },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
          <AppFooter />
        </Box>
      </Box>
    </Box>
  );
}
