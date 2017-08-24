import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _omit(state, action.payload);// statte에서 action.payload에 해당하는 키와 값을 삭제 후 새로운 배열 반환
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = {...state };
      // newState[post.id] = post;
      // return newState;
      return {...state, [action.payload.data.id]: action.payload.data}
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
