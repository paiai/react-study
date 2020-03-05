export const GET_IMAGE = 'GET_IMAGE'
export const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS'
export const GET_IMAGE_FAILURE = 'GET_IMAGE_FAILURE'

export const imageLoad = () => ({ type: GET_IMAGE });
export const imageLoadSuccess = (image) => ({ type: GET_IMAGE_SUCCESS, payload: image }); // reducer에 인자 보낼 때 payload 사용, 또는 meta: {}
export const imageLoadFail = () => ({ type: GET_IMAGE_FAILURE });

export const imageActions = {
  imageLoad,
  imageLoadSuccess,
  imageLoadFail
};