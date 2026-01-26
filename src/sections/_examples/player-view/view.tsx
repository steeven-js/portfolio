import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { Player, PlayerDialog } from 'src/components/player';

import { ComponentBox, ComponentLayout } from '../layout';

// ----------------------------------------------------------------------

const VIDEO_URL = _mock.video(0);

export function PlayerView() {
  const openVideo = useBoolean();

  return (
    <ComponentLayout
      heroProps={{
        heading: 'Player',
        links: [{ name: 'Components', href: paths.components }, { name: 'Player' }],
        moreLinks: ['https://www.npmjs.com/package/react-player'],
      }}
    >
      <Box
        sx={{
          gap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <ComponentBox title="Player">
          <Player
            controls
            src={VIDEO_URL}
            slotProps={{
              wrapper: { sx: { aspectRatio: '4/3' } },
            }}
          />
        </ComponentBox>

        <ComponentBox title="With dialog" sx={{ height: 1 }}>
          <Fab color="primary" variant="extended" onClick={openVideo.onTrue}>
            <Iconify icon="solar:play-outline" />
            Open with Dialog
          </Fab>
          <PlayerDialog
            src={VIDEO_URL}
            playing={openVideo.value}
            open={openVideo.value}
            onClose={openVideo.onFalse}
          />
        </ComponentBox>
      </Box>
    </ComponentLayout>
  );
}
