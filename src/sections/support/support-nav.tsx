import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Tab, { tabClasses } from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  topic: string;
  onClose: () => void;
  data: {
    title: string;
    icon: string;
  }[];
  onChangeTopic: (event: React.SyntheticEvent, newValue: string) => void;
};

export function SupportNav({ topic, data, onChangeTopic, open, onClose }: Props) {
  const renderItems = () => (
    <Tabs
      value={topic}
      onChange={onChangeTopic}
      orientation="vertical"
      sx={{ [`& .${tabsClasses.flexContainer}`]: { gap: 0 } }}
    >
      {data.map((item) => (
        <Tab
          key={item.title}
          value={item.title}
          label={item.title}
          icon={
            <Box component="img" alt={item.title} src={item.icon} sx={{ width: 28, height: 28 }} />
          }
          sx={{
            gap: 1,
            typography: 'body2',
            justifyContent: 'flex-start',
            [`& .${tabClasses.selected}`]: {
              typography: 'subtitle2',
              fontWeight: 'fontWeightBold',
            },
          }}
        />
      ))}
    </Tabs>
  );

  const renderInfo = () => (
    <>
      <Typography component="h6" variant="h6" sx={{ mb: 1 }}>
        Do you still need help?
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        Always support whenever you need (24/7).
      </Typography>

      <SupportButton>
        <Iconify width={24} icon="solar:letter-outline" />
        Email
      </SupportButton>

      <SupportButton>
        <Iconify width={24} icon="solar:chat-line-outline" />
        Chat now
      </SupportButton>

      <SupportButton>
        <Iconify width={24} icon="solar:smartphone-outline" />
        Call
        <Box component="span" sx={{ ml: -1, color: 'primary.main' }}>
          552-917-1454
        </Box>
      </SupportButton>
    </>
  );

  return (
    <>
      <Box
        sx={(theme) => ({
          width: 280,
          flexShrink: 0,
          flexDirection: 'column',
          display: { xs: 'none', md: 'flex' },
          borderRight: `solid 1px ${theme.vars.palette.divider}`,
        })}
      >
        {renderItems()}
        <Box sx={{ mt: 3, pr: 5 }}>{renderInfo()}</Box>
      </Box>

      <Drawer
        open={open}
        onClose={onClose}
        slotProps={{
          paper: { sx: { width: 280 } },
        }}
      >
        <Scrollbar>
          <Box sx={{ pt: 2, pl: 2 }}>{renderItems()}</Box>

          <Box sx={{ p: 2.5 }}>{renderInfo()}</Box>
        </Scrollbar>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

const SupportButton = styled(ButtonBase)(({ theme }) => ({
  ...theme.typography.subtitle2,
  width: '100%',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  justifyContent: 'flex-start',
  padding: theme.spacing(1.5, 2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.vars.palette.divider}`,
}));
