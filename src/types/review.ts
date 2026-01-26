import type { DateInput } from 'src/utils/format-time';

// ----------------------------------------------------------------------

type IReviewUsers = {
  id: string;
  name: string;
  avatarUrl: string;
};

type IReviewReplyComment = {
  id: string;
  userId: string;
  message: string;
  tagUser?: string;
  createdAt: DateInput;
};

export type IReviewItemProp = {
  id: string;
  name: string;
  rating: number;
  message: string;
  helpful: number;
  avatarUrl: string;
  createdAt: DateInput;
  users: IReviewUsers[];
  replyComment: IReviewReplyComment[];
};
