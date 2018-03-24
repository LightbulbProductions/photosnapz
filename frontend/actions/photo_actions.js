import { hashHistory } from 'react-router';

import * as APIUtil from '../util/photo_api_util';
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const CLEAR_PHOTO = "CLEAR_PHOTO";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_FEED_LIKE = "RECEIVE_FEED_LIKE";
export const REMOVE_FEED_LIKE = "REMOVE_FEED_LIKE";
export const RECEIVE_FEED_COMMENT = "RECEIVE_FEED_COMMENT";
export const REMOVE_FEED_COMMENT = "REMOVE_FEED_COMMENT";
export const RECEIVE_PROFILE_LIKE = "RECEIVE_PROFILE_LIKE";
export const REMOVE_PROFILE_LIKE = "REMOVE_PROFILE_LIKE";
export const RECEIVE_PROFILE_COMMENT = "RECEIVE_PROFILE_COMMENT";
export const REMOVE_PROFILE_COMMENT = "REMOVE_PROFILE_COMMENT";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const requestProfile = userId => dispatch => (
  APIUtil.fetchProfile(userId)
    .then(profile => dispatch(receiveProfile(profile)))
);

export const requestPhotos = () => dispatch => (
  APIUtil.fetchPhotos()
    .then(photos => dispatch(receivePhotos(photos)))
);

export const requestPhoto = photoId => dispatch => (
  APIUtil.fetchPhoto(photoId)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const postPhoto = photo => dispatch => (
  APIUtil.postPhoto(photo)
    .then(hashHistory.replace('/feed'))
);

export const createLike = (photoId, component) => dispatch => (
  APIUtil.createLike(photoId)
    .then(like => dispatch(receiveLike(like, component)))
)

export const deleteLike = (photoId, component) => dispatch => (
  APIUtil.deleteLike(photoId)
    .then(like => dispatch(removeLike(like, component)))
)

export const createComment = (comment, component) => dispatch => (
  APIUtil.createComment(comment)
  .then(comment => {
    dispatch(receiveComment(comment, component))
  })
)

export const deleteComment = (commentId, component) => dispatch => (
  APIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment, component)))
)

export const createFollow = id => dispatch => (
  APIUtil.createFollow(id)
    .then(follow => dispatch(receiveFollow(follow)))
)

export const deleteFollow = id => dispatch => (
  APIUtil.deleteFollow(id)
    .then(follow => dispatch(removeFollow(follow)))
)

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const clearPhoto = () => ({
  type: CLEAR_PHOTO
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveLike = (like, component) => {
  const type = component === 'feed' ? RECEIVE_FEED_LIKE : RECEIVE_PROFILE_LIKE;
  return { type, like };
};

export const removeLike = (like, component) => {
  const type = component === 'feed' ? REMOVE_FEED_LIKE : REMOVE_PROFILE_LIKE;
  return { type, like };
};

export const receiveComment = (comment, component) => {
  const type = component === 'feed' ? RECEIVE_FEED_COMMENT : RECEIVE_PROFILE_COMMENT;
  return { type, comment };
};

export const removeComment = (comment, component) => {
  const type = component === 'feed' ? REMOVE_FEED_COMMENT : REMOVE_PROFILE_COMMENT;
  return { type, comment };
};

export const receiveFollow = id => (
  { type: RECEIVE_FOLLOW, id }
);

export const removeFollow = id => (
  { type: REMOVE_FOLLOW, id }
);
