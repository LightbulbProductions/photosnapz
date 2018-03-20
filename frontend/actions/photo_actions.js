import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

export const requestPhotos = () => dispatch => (
  APIUtil.fetchPhotos(user)
    .then(photos => dispatch(receivePhotos(photos)));
);

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});