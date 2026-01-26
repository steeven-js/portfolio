import { useBoolean } from 'minimal-shared/hooks';
import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _faqsSupport } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

import { SupportNav } from '../support-nav';
import { SupportHero } from '../support-hero';
import { SupportContent } from '../support-content';

// ----------------------------------------------------------------------

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/support/${name}`;

const TOPICS = [
  {
    title: 'Account',
    icon: iconPath('ic-account.svg'),
    content: <SupportContent contents={_faqsSupport.slice(0, 6)} />,
  },
  {
    title: 'Payment',
    icon: iconPath('ic-payment.svg'),
    content: <SupportContent contents={_faqsSupport.slice(0, 5)} />,
  },
  {
    title: 'Delivery',
    icon: iconPath('ic-delivery.svg'),
    content: <SupportContent contents={_faqsSupport.slice(0, 4)} />,
  },
  {
    title: 'Product',
    icon: iconPath('ic-package.svg'),
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Return & refund',
    icon: iconPath('ic-refund.svg'),
    content: <SupportContent contents={_faqsSupport.slice(0, 6)} />,
  },
  {
    title: 'Assurances',
    icon: iconPath('ic-assurances.svg'),
    content: <SupportContent contents={_faqsSupport.slice(0, 7)} />,
  },
];

// ----------------------------------------------------------------------

export function SupportView() {
  const [topic, setTopic] = useState('Payment');

  const openNavMobile = useBoolean();

  const handleChangeTopic = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTopic(newValue);
  }, []);

  useEffect(() => {
    if (openNavMobile.value) {
      openNavMobile.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  return (
    <>
      <SupportHero />
      <Box
        sx={(theme) => ({
          px: 2,
          py: 1.5,
          display: { md: 'none' },
          borderBottom: `solid 1px ${theme.vars.palette.divider}`,
        })}
      >
        <IconButton onClick={openNavMobile.onTrue}>
          <Iconify icon="carbon:menu" />
        </IconButton>
      </Box>

      <Container component="section" sx={{ pb: { xs: 10, md: 15 } }}>
        <Typography variant="h3" sx={{ my: { xs: 3, md: 10 } }}>
          Frequently asked questions
        </Typography>

        <Box sx={{ gap: 10, display: 'flex' }}>
          <SupportNav
            data={TOPICS}
            topic={topic}
            open={openNavMobile.value}
            onChangeTopic={handleChangeTopic}
            onClose={openNavMobile.onFalse}
          />

          {TOPICS.map((item) => item.title === topic && <div key={item.title}>{item.content}</div>)}
        </Box>
      </Container>
    </>
  );
}
