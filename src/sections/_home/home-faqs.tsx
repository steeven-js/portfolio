import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { TrianglePattern } from 'src/assets/illustrations/components/shape-pattern';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: 'How can I get the update?',
    answer: (
      <Typography>
        You will get 12 months of free
        <Link
          href="https://support.mui.com/hc/en-us/articles/360008775240-How-do-I-get-access-to-an-item-I-purchased"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 0.5 }}
        >
          updates
        </Link>
        with the purchase. Please renew your license to get updates after that.
      </Typography>
    ),
  },
  {
    question: 'Which license is right for you?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li> All licenses do not apply to open source.</li>
        <li> One licenses / one end product (3 licenses / 3 products...).</li>
        <li>
          <strong>Standard / Plus</strong> license used in free products (Internal management...).
        </li>
        <li>
          <strong>Extended</strong> license used in charge products, collect fees from users
          (SAAS...).
        </li>
        <li>
          Learn more about the
          <Link
            href="https://zone-docs.vercel.app/package"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mx: 0.5 }}
          >
            package & license
          </Link>
        </li>
      </Box>
    ),
  },
  {
    question: 'How long is my license valid for?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li> The license is lifetime.</li>
        <li> You get 12 months of free updates.</li>
      </Box>
    ),
  },
  {
    question: 'Which platforms will the template support?',
    answer: (
      <Typography>
        {`The components in MUI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge. We don't support Internet Explorer 11. `}
        Learn more about the
        <Link
          href="https://mui.com/material-ui/getting-started/supported-platforms/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 0.5 }}
        >
          supported platforms
        </Link>
      </Typography>
    ),
  },
  {
    question: 'For what kind of projects is the Standard license intended?',
    answer: (
      <Typography>
        The Standard license is designed for internal applications in which staff will access the
        application. An example could be the back-office dashboard of a public-facing e-commerce
        website in which staff would sign in and manage inventory, customers, etc.
      </Typography>
    ),
  },
  {
    question: 'Do you have a free demo to review the code before purchasing?',
    answer: (
      <Typography>
        Yes, you can check out our
        <Link
          href="https://mui.com/store/items/minimal-dashboard-free/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 0.5 }}
        >
          open source
        </Link>
        dashboard template which should give you an overview of the code quality and folder
        structure. Keep in mind that some aspects may differ from this paid version.
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

export function HomeFAQs({ sx, ...other }: BoxProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  const renderList = () => (
    <Box sx={{ my: { xs: 5, md: 10 } }}>
      {FAQs.map((item) => (
        <Accordion
          key={item.question}
          expanded={expanded === item.question}
          onChange={handleChangeExpanded(item.question)}
          disableGutters
          sx={{ py: 0.5 }}
        >
          <AccordionSummary>
            <Box component="span" sx={{ typography: 'h6' }}>
              {item.question}
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ color: 'text.secondary' }}>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
      <Divider />
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          position: 'relative',
          py: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ md: 3 }} sx={{ justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <m.div variants={variants}>
              <Typography variant="h2" sx={{ textAlign: 'center' }}>
                Frequently asked questions
              </Typography>
            </m.div>

            <m.div variants={variants}>{renderList()}</m.div>

            <Box
              sx={(theme) => ({
                gap: 3,
                display: 'flex',
                borderRadius: 3,
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                px: { xs: 3, md: 5 },
                py: { xs: 6, md: 8 },
                border: `dashed 1px ${theme.vars.palette.divider}`,
              })}
            >
              <m.div variants={variants}>
                <Typography component="h6" variant="h3">
                  Still have questions?
                </Typography>
              </m.div>

              <m.div variants={variants}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Please describe your case to receive the most accurate advice.
                </Typography>
              </m.div>

              <m.div variants={variants}>
                <Button
                  size="large"
                  color="inherit"
                  variant="contained"
                  href="mailto:support@minimals.cc?subject=[Feedback] from Customer"
                >
                  Contact us
                </Button>
              </m.div>
            </Box>
          </Grid>
        </Grid>

        <TrianglePattern
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            width: 600,
            height: 600,
            maxWidth: 1,
          }}
        />
      </Container>
    </Box>
  );
}
