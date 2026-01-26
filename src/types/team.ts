import type { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ITeamMemberProps = {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  socialLinks?: ISocialLinks;
};
