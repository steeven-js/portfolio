import type { ICourseLessonProp } from 'src/types/course';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { Player } from 'src/components/player';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  playing: boolean;
  onPlay: () => void;
  onClose: () => void;
  onEnded: () => void;
  onPause: () => void;
  lessons: ICourseLessonProp[];
  selectedLesson: ICourseLessonProp | null;
  onSelectedLesson: (lesson: ICourseLessonProp) => void;
};

export function ElearningCourseDetailsLessonsDialog({
  lessons,
  playing,
  onPlay,
  onEnded,
  onPause,
  onClose,
  selectedLesson,
  onSelectedLesson,
}: Props) {
  const renderEmpty = () => (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: 'flex',
        typography: 'h6',
        alignItems: 'center',
        color: 'text.disabled',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: 'background.neutral',
      }}
    >
      No data
    </Box>
  );

  const renderVideo = () =>
    selectedLesson?.videoPath ? (
      <Player
        controls
        src={selectedLesson?.videoPath}
        playing={playing}
        onEnded={onEnded}
        onPlay={onPlay}
        onPause={onPause}
        slotProps={{
          wrapper: { sx: { width: 1, height: 1 } },
        }}
      />
    ) : (
      renderEmpty()
    );

  const renderList = () =>
    lessons?.map((lesson) => {
      const selected = selectedLesson?.id === lesson.id;
      const playIcon = selected ? 'solar:pause-circle-outline' : 'solar:play-outline';

      return (
        <ListItemButton
          key={lesson.id}
          selected={selected}
          disabled={!lesson.unLocked}
          onClick={() => onSelectedLesson(lesson)}
          sx={{ mb: 0.5, borderRadius: 1 }}
        >
          <Iconify
            width={24}
            icon={!lesson.unLocked ? 'solar:lock-password-outline' : playIcon}
            sx={{
              mr: 2,
              ...(selected && { color: 'primary.main' }),
              ...(!lesson.unLocked && { color: 'text.disabled' }),
            }}
          />

          <ListItemText
            primary={lesson.title}
            secondary={lesson.description}
            slotProps={{
              primary: {
                noWrap: true,
                sx: { typography: 'subtitle1', ...(selected && { color: 'primary.main' }) },
              },
              secondary: { noWrap: true },
            }}
          />
        </ListItemButton>
      );
    });

  return (
    <Dialog
      fullWidth
      maxWidth="xl"
      open={!!selectedLesson}
      aria-hidden={!selectedLesson}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: { overflow: 'hidden' },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          top: 8,
          left: 8,
          zIndex: 9,
          position: 'absolute',
        }}
      >
        <Iconify icon="mingcute:close-line" />
      </IconButton>

      <DialogContainer>
        <VideoContainer>{renderVideo()}</VideoContainer>
        <ListContainer>{renderList()}</ListContainer>
      </DialogContainer>
    </Dialog>
  );
}

// ----------------------------------------------------------------------

const DialogContainer = styled('div')(({ theme }) => ({
  '--list-width': '360px',
  '--aspect-ratio': '4/3',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const VideoContainer = styled('div')(({ theme }) => ({
  aspectRatio: 'var(--aspect-ratio)',
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% - var(--list-width))',
  },
}));

const ListContainer = styled('div')(({ theme }) => ({
  overflowY: 'scroll',
  aspectRatio: 'var(--aspect-ratio)',
  padding: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    top: 0,
    right: 0,
    height: '100%',
    position: 'absolute',
    aspectRatio: 'unset',
    width: 'var(--list-width)',
  },
}));
