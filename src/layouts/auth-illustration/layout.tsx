import type { Breakpoint } from '@mui/material/styles';
import type { MainSectionProps } from '../core/main-section';
import type { AuthIllustrationContentProps } from './content';
import type { AuthIllustrationSectionProps } from './section';
import type { HeaderSectionProps } from '../core/header-section';
import type { LayoutSectionProps } from '../core/layout-section';

import { merge } from 'es-toolkit';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Logo } from 'src/components/logo';

import { langs } from '../langs-config';
import { MainSection } from '../core/main-section';
import { AuthIllustrationContent } from './content';
import { AuthIllustrationSection } from './section';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { SettingsButton } from '../components/settings-button';
import { LanguagePopover } from '../components/language-popover';

// ----------------------------------------------------------------------

type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>;

export type AuthIllustrationLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
  slotProps?: {
    header?: HeaderSectionProps;
    main?: MainSectionProps;
    content?: AuthIllustrationContentProps;
    section?: AuthIllustrationSectionProps;
  };
};

export function AuthIllustrationLayout({
  sx,
  cssVars,
  children,
  slotProps,
  layoutQuery = 'md',
}: AuthIllustrationLayoutProps) {
  const renderHeader = () => {
    const headerSlotProps: HeaderSectionProps['slotProps'] = { container: { maxWidth: false } };

    const headerSlots: HeaderSectionProps['slots'] = {
      topArea: (
        <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
          This is an info Alert.
        </Alert>
      ),
      leftArea: (
        <>
          {/** @slot Logo */}
          <Logo />
        </>
      ),
      rightArea: (
        <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
          {/** @slot Help link */}
          <Link
            component={RouterLink}
            href={paths.support}
            color="inherit"
            sx={{ typography: 'subtitle2' }}
          >
            Need help?
          </Link>

          {/** @slot Language popover */}
          <LanguagePopover data={langs} />

          {/** @slot Settings button */}
          <SettingsButton />
        </Box>
      ),
    };

    return (
      <HeaderSection
        disableElevation
        layoutQuery={layoutQuery}
        {...slotProps?.header}
        slots={{ ...headerSlots, ...slotProps?.header?.slots }}
        slotProps={merge(headerSlotProps, slotProps?.header?.slotProps ?? {})}
        sx={slotProps?.header?.sx}
      />
    );
  };

  const renderFooter = () => null;

  const renderMain = () => (
    <MainSection
      {...slotProps?.main}
      sx={[
        (theme) => ({
          pt: 3,
          pb: 10,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          [theme.breakpoints.up(layoutQuery)]: {
            pt: 5,
            gap: 10,
          },
        }),
        ...(Array.isArray(slotProps?.main?.sx) ? slotProps.main.sx : [slotProps?.main?.sx]),
      ]}
    >
      <AuthIllustrationSection layoutQuery={layoutQuery} {...slotProps?.section} />
      <AuthIllustrationContent layoutQuery={layoutQuery} {...slotProps?.content}>
        {children}
      </AuthIllustrationContent>
    </MainSection>
  );

  return (
    <LayoutSection
      /** **************************************
       * @Header
       *************************************** */
      headerSection={renderHeader()}
      /** **************************************
       * @Footer
       *************************************** */
      footerSection={renderFooter()}
      /** **************************************
       * @Styles
       *************************************** */
      cssVars={{ '--layout-auth-content-width': '380px', ...cssVars }}
      sx={sx}
    >
      <Container>{renderMain()}</Container>
    </LayoutSection>
  );
}
