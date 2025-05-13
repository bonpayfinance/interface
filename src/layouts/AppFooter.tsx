import { Trans } from '@lingui/macro';
import { GitHub, Twitter } from '@mui/icons-material';
import { Box, SvgIcon, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'src/components/primitives/Link';
import { useRootStore } from 'src/store/root';

import DiscordIcon from '/public/icons/discord.svg';
import LensLogoIcon from '/public/icons/lens-logo.svg';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.muted,
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
  transition: 'color 0.2s ease',
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const FOOTER_ICONS = [
  {
    href: 'https://hey.xyz/u/aave',
    icon: <LensLogoIcon />,
    title: 'Lens',
  },
  {
    href: 'https://twitter.com/aave',
    icon: <Twitter />,
    title: 'Twitter',
  },
  {
    href: 'https://discord.com/invite/aave',
    icon: <DiscordIcon />,
    title: 'Discord',
  },
  {
    href: 'https://github.com/aave',
    icon: <GitHub />,
    title: 'GitHub',
  },
];

export function AppFooter() {
  const [setAnalyticsConfigOpen, setFeedbackOpen] = useRootStore((store) => [
    store.setAnalyticsConfigOpen,
    store.setFeedbackOpen,
  ]);

  const FOOTER_LINKS = [
    {
      href: 'https://www.eden-finance.xyz/term-of-use/',
      label: <Trans>Terms</Trans>,
      key: 'Terms',
    },
    {
      href: 'https://www.eden-finance.xyz/privacy-policy/',
      label: <Trans>Privacy</Trans>,
      key: 'Privacy',
    },
    {
      href: 'https://docs.eden-finance.xyz/hub/',
      label: <Trans>Docs</Trans>,
      key: 'Docs',
    },
    {
      href: 'https://docs.eden-finance.xyz/faq/',
      label: <Trans>FAQS</Trans>,
      key: 'FAQS',
    },
    {
      href: 'https://discord.com/invite/aave',
      label: <Trans>Send feedback</Trans>,
      key: 'Send feedback',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setFeedbackOpen(true);
      },
    },
    {
      href: '/',
      label: <Trans>Manage analytics</Trans>,
      key: 'Manage analytics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setAnalyticsConfigOpen(true);
      },
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
        backgroundColor: '#2D1E4F',
        color: '#fff',
      }}
    >
      {/* Watermark background */}
      <Typography
        sx={{
          position: 'absolute',
          bottom: -30,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: ['80px', '120px', '160px'],
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: '-0.05em',
          color: '#3A2A5E',
          opacity: 0.3,
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Eden Finance
      </Typography>

      {/* Footer content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Link list */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: ['center', 'center', 'flex-start'],
          }}
        >
          {FOOTER_LINKS.map((link) => (
            <StyledLink key={link.key} href={link.href} onClick={link.onClick}>
              <Typography variant="caption">{link.label}</Typography>
            </StyledLink>
          ))}
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {FOOTER_ICONS.map((icon) => (
            <StyledLink key={icon.title} href={icon.href}>
              <SvgIcon sx={{ fontSize: 20 }}>{icon.icon}</SvgIcon>
            </StyledLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
