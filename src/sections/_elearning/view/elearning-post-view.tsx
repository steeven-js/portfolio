import { useState, useCallback } from 'react';
import { usePopover } from 'minimal-shared/hooks';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { _socials, _coursePosts } from 'src/_mock';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { Markdown } from 'src/components/markdown';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { PostTags } from '../../blog/post-tags';
import { PostAuthor } from '../../blog/post-author';
import { ElearningNewsletter } from '../elearning-newsletter';
import { PrevNextButton } from '../../blog/post-prev-and-next';
import { ElearningLatestPosts } from '../posts/elearning-latest-posts';

// ----------------------------------------------------------------------

const post = _coursePosts[0];
const prevPost = _coursePosts[1];
const nextPost = _coursePosts[2];
const latestPosts = _coursePosts.slice(3, 6);

export function ElearningPostView() {
  const openSocial = usePopover();

  const [favorite, setFavorite] = useState(post.favorited);

  const handleChangeFavorite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  }, []);

  const renderHead = () => (
    <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 10 } }}>
      <Typography variant="body2" sx={{ color: 'text.disabled' }}>
        {post.duration}
      </Typography>

      <Typography variant="h2" component="h1" sx={{ my: 3 }}>
        {post.title}
      </Typography>

      <Typography variant="h5" component="p">
        {post.description}
      </Typography>
    </Box>
  );

  const renderSocials = () => (
    <Box sx={{ gap: 1.5, display: 'flex' }}>
      <Box component="span" sx={{ lineHeight: '30px', typography: 'subtitle2' }}>
        Share:
      </Box>

      <Box
        sx={{
          gap: 1,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {_socials.map((social) => (
          <Button
            key={social.value}
            size="small"
            variant="outlined"
            startIcon={
              <>
                {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
                {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
                {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
                {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
              </>
            }
          >
            {social.label}
          </Button>
        ))}
      </Box>
    </Box>
  );

  const renderMenuSocials = () => (
    <Popover
      open={openSocial.open}
      anchorEl={openSocial.anchorEl}
      onClose={openSocial.onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      slotProps={{ paper: { sx: { width: 220 } } }}
    >
      {_socials.map((social) => (
        <MenuItem key={social.value} onClick={() => openSocial.onClose()} sx={{ gap: 1 }}>
          {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
          {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
          {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
          {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
          Share via {social.label}
        </MenuItem>
      ))}
    </Popover>
  );

  const renderToolbar = () => (
    <Box
      sx={[
        (theme) => ({
          py: 3,
          my: 5,
          display: 'flex',
          alignItems: 'center',
          borderTop: `solid 1px ${theme.vars.palette.divider}`,
          borderBottom: `solid 1px ${theme.vars.palette.divider}`,
        }),
      ]}
    >
      <Avatar src={post.author.avatarUrl} sx={{ mr: 2, width: 48, height: 48 }} />

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{post.author.name}</Typography>
        <Typography variant="caption" sx={{ mt: 0.5, display: 'block', color: 'text.secondary' }}>
          {fDate(post.createdAt)}
        </Typography>
      </Box>

      <IconButton onClick={openSocial.onOpen} color={openSocial.open ? 'primary' : 'default'}>
        <Iconify icon="solar:share-outline" />
      </IconButton>
      <Checkbox
        color="error"
        checked={favorite}
        onChange={handleChangeFavorite}
        icon={<Iconify icon="solar:heart-outline" />}
        checkedIcon={<Iconify icon="solar:heart-bold" />}
        slotProps={{
          input: {
            id: 'favorite-checkbox',
            'aria-label': 'Favorite checkbox',
          },
        }}
      />
    </Box>
  );

  const renderVideo = () => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
      }}
    >
      <Fab color="primary" sx={{ zIndex: 9, position: 'absolute' }}>
        <Iconify width={22} icon="solar:play-outline" />
      </Fab>

      <Image
        alt="Post banner"
        src={post.heroUrl}
        ratio={{ xs: '16/9', md: '21/9' }}
        sx={{ borderRadius: 2 }}
        slotProps={{
          overlay: {
            sx: (theme) => ({
              backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
            }),
          },
        }}
      />
    </Box>
  );

  const renderPrevNextButtons = () => (
    <Box
      sx={{
        gap: 3,
        pt: 5,
        pb: { xs: 5, md: 10 },
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
      }}
    >
      <PrevNextButton title={prevPost?.title} coverUrl={prevPost?.coverUrl} href="#" />
      <PrevNextButton isNext title={nextPost?.title} coverUrl={nextPost?.coverUrl} href="#" />
    </Box>
  );

  return (
    <>
      <Divider />

      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.eLearning.posts },
            { name: post.title },
          ]}
          sx={{ my: { xs: 3, md: 5 } }}
        />

        {renderVideo()}

        <Grid container spacing={3} sx={{ justifyContent: { md: 'center' } }}>
          <Grid size={{ xs: 12, md: 8 }}>
            {renderHead()}

            {renderToolbar()}

            <Markdown content={post.content} firstLetter />

            <Box
              sx={{
                mt: 5,
                gap: 3,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {!!post.tags.length && <PostTags tags={post.tags} />}
              {renderSocials()}
            </Box>

            <Divider sx={{ mt: 10 }} />

            <PostAuthor author={post.author} />

            <Divider />

            {renderPrevNextButtons()}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <ElearningLatestPosts posts={latestPosts} />

      <ElearningNewsletter />

      {renderMenuSocials()}
    </>
  );
}
