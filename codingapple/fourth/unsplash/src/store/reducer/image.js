import * as image from './../action'

const { GET_IMAGE, GET_IMAGE_SUCCESS, GET_IMAGE_FAILURE } = image; // image.GET_IMAGE, image.GET_IMAGE_SUCCESS 형식으로도 사용 가능하지만 코드가 길어짐

const initialState = { // 초기 저장소
  isPending: false,
  images: []
}

const imageReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_IMAGE:
      return { ...state, isPending: true };
    case GET_IMAGE_SUCCESS:
      return { ...state, isPending: false, images: [...state.images, ...action.payLoad] };
    case GET_IMAGE_FAILURE:
      return { ...state, isPending: false };
    default: 
      return state;
  }
}