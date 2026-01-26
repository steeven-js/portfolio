import { useState, useCallback } from 'react';
import { usePopover } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { _socials, _marketingPosts } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { Markdown } from 'src/components/markdown';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { PostTags } from '../../blog/post-tags';
import { PostAuthor } from '../../blog/post-author';
import { MarketingNewsletter } from '../marketing-newsletter';
import { MarketingLatestPosts } from '../posts/marketing-latest-posts';
import { MarketingLandingFreeSEO } from '../landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

const post = _marketingPosts[0];
const latestPosts = _marketingPosts.slice(0, 4);

export function MarketingPostView() {
  const openSocial = usePopover();

  const [favorite, setFavorite] = useState(post.favorited);

  const handleChangeFavorite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  }, []);

  const renderImage = () => (
    <Box
      component="img"
      alt={post.title}
      src={post.heroUrl}
      sx={{ aspectRatio: '21/9', objectFit: 'cover' }}
    />
  );

  const renderHead = () => (
    <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 10 } }}>
      <Typography variant="body2" sx={{ color: 'text.disabled' }}>
        {post.duration}
      </Typography>
      <Typography component="h1" variant="h2" sx={{ my: 3 }}>
        {post.title}
      </Typography>
      <Typography component="p" variant="h5">
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

  return (
    <>
      {renderImage()}

      <Container component="section">
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.marketing.posts },
            { name: post.title },
          ]}
        />
      </Container>

      <Divider />

      <Container component="section">
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
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <MarketingLatestPosts posts={latestPosts} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />

      {renderMenuSocials()}
    </>
  );
}
