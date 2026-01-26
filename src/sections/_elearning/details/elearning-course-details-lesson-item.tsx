import type { ICourseLessonProp } from 'src/types/course';

import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type LessonItemProps = {
  lesson: ICourseLessonProp;
  expanded: boolean;
  selected: boolean;
  onSelected: () => void;
  onExpanded: (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

export function ElearningCourseDetailsLessonItem({
  lesson,
  expanded,
  selected,
  onSelected,
  onExpanded,
}: LessonItemProps) {
  const playIcon = selected ? 'solar:pause-circle-outline' : 'solar:play-outline';

  return (
    <Accordion
      expanded={expanded}
      onChange={onExpanded}
      disabled={!lesson.unLocked}
      disableGutters
      sx={{ py: 0.5 }}
    >
      <AccordionSummary
        expandIcon={<Iconify width={16} icon="carbon:chevron-right" />}
        slotProps={{
          expandIconWrapper: {
            sx: {
              alignSelf: 'center',
              [`&.${accordionSummaryClasses.expanded}`]: {
                transform: 'rotate(90deg)',
              },
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', width: 1 }}>
          <Iconify
            width={22}
            icon={!lesson.unLocked ? 'solar:lock-password-outline' : playIcon}
            onClick={onSelected}
            sx={{ mr: 2 }}
          />
          <Box component="span" sx={{ flexGrow: 1, typography: 'subtitle1' }}>
            {lesson.title}
          </Box>
          <Box component="span" sx={{ typography: 'body2' }}>
            {lesson.duration}m
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ color: 'text.secondary' }}>{lesson.description}</AccordionDetails>
    </Accordion>
  );
}
