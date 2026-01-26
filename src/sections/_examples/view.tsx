import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';
import { varTap, varFade, varHover, transitionTap, MotionContainer } from 'src/components/animate';

import { ComponentLayout } from './layout';
import { allComponents } from './layout/nav-config-components';

// ----------------------------------------------------------------------

export function ComponentsView() {
  const renderMuiComponents = () => (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        MUI components
      </Typography>
      <Link href="https://mui.com/components/" target="_blank" rel="noopener noreferrer">
        https://mui.com/components/
      </Link>
    </>
  );

  const renderExtraComponents = () => (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Extra components
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5 }}>
        Some custom components / use 3rd party dependencies.
      </Typography>

      <List
        disablePadding
        sx={{
          gap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
          },
        }}
      >
        {allComponents.map((item) => (
          <ListItem key={item.name} disableGutters disablePadding>
            <Box
              component={RouterLink}
              href={item.href}
              sx={[
                (theme) => ({
                  width: 1,
                  color: 'inherit',
                  borderRadius: 1.25,
                  overflow: 'hidden',
                  textAlign: 'center',
                  position: 'relative',
                  textDecoration: 'none',
                  border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                }),
              ]}
            >
              <Box
                sx={[
                  (theme) => ({
                    overflow: 'hidden',
                    bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.06),
                    transition: theme.transitions.create('background-color', {
                      duration: theme.transitions.duration.shortest,
                      easing: theme.transitions.easing.sharp,
                    }),
                    '&:hover': {
                      bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                    },
                    ...theme.applyStyles('dark', {
                      bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
                    }),
                  }),
                ]}
              >
                <m.div whileTap={varTap(0.98)} whileHover={varHover()} transition={transitionTap()}>
                  <Image alt={item.name} src={item.icon} ratio="1/1" disablePlaceholder />
                </m.div>
              </Box>

              <Typography variant="subtitle2" sx={{ p: 2 }}>
                {item.name}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <ComponentLayout
      heroProps={{
        sx: { py: 15 },
        overrideContent: (
          <MotionContainer sx={{ textAlign: 'center' }}>
            <m.div variants={varFade('inUp', { distance: 24 })}>
              <Typography variant="h3" component="h1">
                Components
              </Typography>
            </m.div>

            <m.div variants={varFade('inUp', { distance: 24 })}>
              <Typography sx={{ color: 'text.secondary', mt: 3 }}>
                With huge resource pack making deployment easy and expanding more effectively
              </Typography>
            </m.div>
          </MotionContainer>
        ),
      }}
    >
      {renderMuiComponents()}

      <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

      {renderExtraComponents()}
    </ComponentLayout>
  );
}
