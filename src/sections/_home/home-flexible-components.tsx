import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import { m } from 'framer-motion';
import { useState, useEffect } from 'react';

import Tab from '@mui/material/Tab';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import Badge from '@mui/material/Badge';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import AvatarGroup from '@mui/material/AvatarGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const rowStyles: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: { xs: 3, md: 5 },
  justifyContent: 'center',
};

const variants: Variants = varFade('inUp', { distance: 24 });

// ----------------------------------------------------------------------

export function HomeFlexibleComponents({ sx, ...other }: BoxProps) {
  const [tab, setTab] = useState('angular');
  const [rating, setRating] = useState<number | null>(5);
  const [toggleButton, setToggleButton] = useState('search');
  const [circularProgress, setCircularProgress] = useState(0);
  const [categorySelect, setCategorySelect] = useState('clothes');

  useEffect(() => {
    const timer = setInterval(() => {
      setCircularProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderSummary = () => (
    <>
      <m.div variants={variants}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Interface Starter Kit
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Flexible components
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
          Pre-set components are easy to customize and use. We collected most popular elements.
          Menu, sliders, buttons, inputs etc. are all here. Just dive in!
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Button
          component={RouterLink}
          href={paths.components}
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify width={16} icon="carbon:chevron-right" />}
        >
          Browse components
        </Button>
      </m.div>
    </>
  );

  const renderRow1 = () => (
    <>
      <Button
        size="large"
        variant="contained"
        color="primary"
        startIcon={<Iconify icon="mingcute:add-line" />}
      >
        Add to cart
      </Button>

      <Fab variant="extended" color="inherit" aria-label="upload">
        <Iconify width={24} icon="solar:upload-square-outline" />
        Upload
      </Fab>

      <Fab color="info" aria-label="media">
        <Iconify width={22} icon="solar:play-outline" />
      </Fab>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          typography: 'caption',
          justifyContent: 'center',
        }}
      >
        <CircularProgress
          size={56}
          thickness={3}
          color="warning"
          variant="determinate"
          aria-label="Progress"
          value={circularProgress}
        />
        <Box
          component="span"
          sx={{ position: 'absolute' }}
        >{`${Math.round(circularProgress)}%`}</Box>
      </Box>
    </>
  );

  const renderRow2 = () => (
    <>
      <Tabs
        value={tab}
        onChange={(event, newValue) => setTab(newValue)}
        sx={{ [`& .${tabsClasses.flexContainer}`]: { gap: 3 } }}
      >
        <Tab value="angular" label="Angular" />
        <Tab value="react" label="React" />
        <Tab value="vue" label="Vue" />
      </Tabs>

      <ToggleButtonGroup
        exclusive
        color="primary"
        value={toggleButton}
        onChange={(event, newAlignment) => {
          if (newAlignment !== null) {
            setToggleButton(newAlignment);
          }
        }}
        aria-label="actions"
      >
        <ToggleButton value="share" aria-label="share">
          <Iconify icon="solar:share-outline" />
        </ToggleButton>
        <ToggleButton value="search" aria-label="search">
          <Iconify icon="carbon:search" />
        </ToggleButton>
        <ToggleButton disabled value="email" aria-label="email">
          <Iconify icon="solar:letter-outline" />
        </ToggleButton>
      </ToggleButtonGroup>

      <Chip
        variant="soft"
        color="primary"
        label="Pamela"
        onDelete={() => {}}
        avatar={<Avatar alt="Pamela">P</Avatar>}
      />
    </>
  );

  const renderRow3 = () => (
    <>
      <Avatar alt="Remy Sharp" src={_mock.image.avatar(4)} sx={{ width: 64, height: 64 }} />

      <AvatarGroup max={4}>
        {Array.from({ length: 8 }, (_, index) => (
          <Avatar key={index} alt={_mock.fullName(index)} src={_mock.image.avatar(index)} />
        ))}
      </AvatarGroup>

      <Tooltip title="Tooltip" placement="top" arrow>
        <Button color="inherit" variant="outlined">
          Hover me
        </Button>
      </Tooltip>

      <Rating value={rating} onChange={(event, newValue) => setRating(newValue)} />
    </>
  );

  const renderRow4 = () => (
    <>
      <Slider
        size="small"
        defaultValue={72}
        valueLabelDisplay="on"
        aria-label="Demo slider"
        sx={{ width: 1, minWidth: 240, maxWidth: 0.44 }}
      />

      <Alert
        severity="success"
        action={
          <IconButton color="inherit" size="small" aria-label="close" onClick={() => {}}>
            <Iconify icon="mingcute:close-line" />
          </IconButton>
        }
        sx={{ width: 1, minWidth: 240, maxWidth: 0.44 }}
      >
        This is a <strong>success</strong> alert
      </Alert>
    </>
  );

  const renderRow5 = () => (
    <>
      <Card sx={{ maxWidth: 320 }}>
        <CardHeader
          title="Jayvion Simon"
          subheader="California, United States"
          avatar={
            <Badge variant="online" badgeContent="">
              <Avatar
                alt={_mock.fullName(0)}
                src={_mock.image.avatar(0)}
                sx={{ width: 48, height: 48 }}
              />
            </Badge>
          }
          slotProps={{
            title: { typography: 'subtitle2', sx: { mb: 0.25 } },
            subheader: { typography: 'caption' },
          }}
          sx={{ p: 2 }}
        />

        <Image
          alt="Cover"
          src={_mock.image.cover(20)}
          ratio="4/3"
          sx={{ p: 1, borderRadius: 1.5 }}
        />

        <Typography variant="body2" sx={{ color: 'text.secondary', pt: 2, px: 2 }}>
          Phasellus dolor. Fusce egestas elit eget lorem. Quisque id odio.
        </Typography>

        <Box
          sx={{
            px: 2,
            py: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Checkbox
            defaultChecked
            color="error"
            size="small"
            icon={<Iconify icon="solar:heart-outline" />}
            checkedIcon={<Iconify icon="solar:heart-bold" />}
            slotProps={{
              input: {
                id: 'favorite-checkbox',
                'aria-label': 'Favorite checkbox',
              },
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton aria-label="Share">
            <Iconify icon="solar:share-outline" />
          </IconButton>
          <IconButton aria-label="Comment">
            <Iconify icon="solar:chat-line-outline" />
          </IconButton>
        </Box>
      </Card>

      <Box
        sx={{
          gap: 2.5,
          display: 'flex',
          flex: '1 1 auto',
          maxWidth: { lg: 220 },
          flexDirection: 'column',
        }}
      >
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              slotProps={{
                input: { id: 'demo-switch' },
              }}
            />
          }
          label="Switch"
        />

        <FormControlLabel
          control={
            <Checkbox
              slotProps={{
                input: { id: 'demo-checkbox' },
              }}
            />
          }
          label="Checkbox"
        />

        <FormControlLabel
          value="Radio"
          control={
            <Radio
              defaultChecked
              slotProps={{
                input: { id: 'demo-radio' },
              }}
            />
          }
          label="Radio button"
        />

        <TextField label="Full name" defaultValue="Pamela Mclellan" />

        <TextField
          select
          label="Category"
          value={categorySelect}
          onChange={(event) => setCategorySelect(event.target.value)}
          slotProps={{ select: { native: true } }}
        >
          {[
            { value: 'clothes', label: 'Clothes' },
            { value: 'footwear', label: 'Footwear' },
            { value: 'jean', label: 'Jean' },
          ].map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Box>
    </>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 5, md: 3 }} sx={{ justifyContent: { md: 'space-between' } }}>
          <Grid
            sx={{ pt: { md: 10 }, textAlign: { xs: 'center', md: 'left' } }}
            size={{ xs: 12, md: 4 }}
          >
            {renderSummary()}
          </Grid>

          <Grid
            component={m.div}
            variants={variants}
            size={{ xs: 12, md: 7 }}
            sx={(theme) => ({
              gap: 5,
              borderRadius: 3,
              display: 'flex',
              p: { xs: 3, sm: 5 },
              alignItems: 'center',
              flexDirection: 'column',
              border: `dashed 1px ${theme.vars.palette.divider}`,
            })}
          >
            <Box sx={rowStyles}>{renderRow1()}</Box>
            <Box sx={rowStyles}>{renderRow2()}</Box>
            <Box sx={rowStyles}>{renderRow3()}</Box>
            <Box sx={rowStyles}>{renderRow4()}</Box>
            <Box sx={rowStyles}>{renderRow5()}</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
