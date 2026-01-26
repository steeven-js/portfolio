import type { IReviewItemProp } from 'src/types/review';

import { Fragment } from 'react';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { TravelReviewItem } from './travel-review-item';

// ----------------------------------------------------------------------

type Props = {
  reviews: IReviewItemProp[];
};

export function TravelReviewList({ reviews }: Props) {
  const renderReplyComments = (
    comments: IReviewItemProp['replyComment'],
    users: IReviewItemProp['users']
  ) =>
    comments.map((replyItem) => {
      const userReply = users.find((user) => user.id === replyItem.userId);

      return (
        <TravelReviewItem
          key={replyItem.id}
          tagUser={replyItem.tagUser}
          createdAt={replyItem.createdAt}
          message={replyItem.message}
          name={userReply?.name}
          avatarUrl={userReply?.avatarUrl}
          hasReply
        />
      );
    });

  return (
    <>
      {reviews.map((review) => (
        <Fragment key={review.id}>
          <TravelReviewItem
            name={review.name}
            avatarUrl={review.avatarUrl}
            createdAt={review.createdAt}
            message={review.message}
            rating={review.rating}
            helpful={review.helpful}
          />

          {!!review.replyComment.length && renderReplyComments(review.replyComment, review.users)}
        </Fragment>
      ))}

      <Pagination
        count={10}
        sx={{
          mt: 5,
          mb: 10,
          [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
        }}
      />
    </>
  );
}
