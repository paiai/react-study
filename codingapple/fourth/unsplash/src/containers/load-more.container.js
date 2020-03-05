import LoadMore from '../components/load-more';
import { imageActinos } from './../store/action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  images: state.imageReducer.images,
  isPending: state.imageReducer.isPending,
});

const mapDispatchToProps = dispatch => ({
  imageLoad: () => dispatch(imageActinos.imageLoad()),
  imageLoadSuccess: (images) => dispatch(imageActinos.imageLoadSuccess(images)),
  imageLoadFail: () => dispatch(imageActinos.imageLoadFail())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore); // picturelist의 props로 전달해줌.