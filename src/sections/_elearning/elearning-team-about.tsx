import type { BoxProps } from '@mui/material/Box';
import type { ITeamMemberProps } from 'src/types/team';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { MemberItem } from './elearning-team';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  members: ITeamMemberProps[];
};

export function ElearningTeamAbout({ members, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 5, md: 10 } }}>
          Our teachers
        </Typography>

        <Box
          sx={{
            display: 'grid',
            columnGap: 3,
            rowGap: { xs: 4, md: 5 },

            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {members.map((member) => (
            <MemberItem key={member.id} item={member} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
