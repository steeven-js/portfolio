import type { ICourseLessonProp } from 'src/types/course';

import { useState, useCallback } from 'react';
import { useBoolean } from 'minimal-shared/hooks';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { ElearningCourseDetailsLessonItem } from './elearning-course-details-lesson-item';
import { ElearningCourseDetailsLessonsDialog } from './elearning-course-details-lessons-dialog';

// ----------------------------------------------------------------------

type Props = {
  lessons: ICourseLessonProp[];
};

export function ElearningCourseDetailsLessonList({ lessons }: Props) {
  const { value: playing, onTrue: onPlay, onFalse: onPause } = useBoolean();

  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedLesson, setSelectedLesson] = useState<ICourseLessonProp | null>(null);

  const handleSelectedLesson = useCallback(
    (lesson: ICourseLessonProp) => {
      if (lesson.unLocked) {
        setSelectedLesson(lesson);
        onPlay();
      }
    },
    [onPlay]
  );

  const handleClose = useCallback(() => {
    setSelectedLesson(null);
    onPause();
  }, [onPause]);

  const handleExpandedLesson = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  const renderList = () => (
    <>
      {lessons.map((lesson) => (
        <ElearningCourseDetailsLessonItem
          key={lesson.id}
          lesson={lesson}
          expanded={expanded === lesson.id}
          onExpanded={handleExpandedLesson(lesson.id)}
          selected={selectedLesson?.id === lesson.id}
          onSelected={() => handleSelectedLesson(lesson)}
        />
      ))}

      <Divider />
    </>
  );

  return (
    <>
      <div>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Lessons
        </Typography>

        {renderList()}
      </div>

      <ElearningCourseDetailsLessonsDialog
        lessons={lessons}
        playing={playing}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onPause}
        onClose={handleClose}
        selectedLesson={selectedLesson}
        onSelectedLesson={(lesson) => handleSelectedLesson(lesson)}
      />
    </>
  );
}
