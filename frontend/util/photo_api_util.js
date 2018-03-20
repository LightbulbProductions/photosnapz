export const fetchProfile = username => {
  return $.ajax({
    method: 'get',
    url: `/api/users/${username}`
  });
};

export const fetchPhotos = component => {
  if (component === 'feed') {
    return $.ajax({
      method: 'get',
      url: '/api/photos'
    });
  } else {
    return $.ajax({
      method: 'get',
      url: '/api/photos?all=true'
    });
  }
};

export const fetchPhoto = photoId => {
  return $.ajax({
    method: 'get',
    url: `/api/photos/${photoId}`
  });
};

export const postPhoto = photo => {
  return $.ajax({
    method: 'post',
    url: `/api/photos`,
    data: { photo }
  });
}

export const createLike = photoId => {
  return $.ajax({
    method: 'post',
    url: `/api/likes`,
    data: { photo_id: photoId }
  });
}

export const deleteLike = photoId => {
  return $.ajax({
    method: 'delete',
    url: `/api/likes/${photoId}`,
  });
}

export const createComment = comment => {
  return $.ajax({
    method: 'post',
    url: `/api/comments`,
    data: { comment }
  });
}

export const deleteComment = commentId => {
  return $.ajax({
    method: 'delete',
    url: `/api/comments/${commentId}`,
  });
}

export const createFollow = id => {
  return $.ajax({
    method: 'post',
    url: `/api/follows`,
    data: { id }
  });
}

export const deleteFollow = id => {
  return $.ajax({
    method: 'delete',
    url: `/api/follows/${id}`,
  });
}
