import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';

import { PostTime } from '../../blog/post-time';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  post: IPostProps;
};

export function ElearningFeaturedPost({ post, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: 10,
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Image src={post.coverUrl} alt={post.title} ratio="4/3" sx={{ borderRadius: 2 }} />

          <Box
            sx={{
              gap: 1,
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              pl: { md: 8 },
              pb: { md: 5 },
              pt: { xs: 3, md: 5 },
              maxWidth: { md: 408 },
            }}
          >
            <PostTime createdAt={fDate(post.createdAt)} duration={post.duration} />

            <Link component={RouterLink} href={paths.eLearning.post} color="inherit" variant="h3">
              {post.title}
            </Link>

            <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>
              {post.description}
            </Typography>

            <Box
              sx={{
                gap: 1.5,
                pt: 1.5,
                display: 'flex',
                typography: 'body2',
                alignItems: 'center',
              }}
            >
              <Avatar src={post.author.avatarUrl} />
              {post.author.name}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
