import {
  DATA_REQUEST,
  DATA_SUCCESS,
  GET_DATA,
  UPDATE_DATA,
  DELETE_DATA,
  ADD_DATA,
} from '../actions/actionTypes';

const initialDatas = {
  data: [],
  loading: true,
};

function datas(state = initialDatas, action) {
  switch (action.type) {
    case DATA_REQUEST:
      return Object.assign({}, state, { loading: true });
    case DATA_SUCCESS:
      return Object.assign({}, state, { data: action.payload, loading: false });
    case UPDATE_DATA:
      return Object.assign({}, state, {
        data: state.data.map(item => (item.id === action.payload.id ? action.payload : item)),
      });
    case ADD_DATA:
      return Object.assign({}, state, { data: [...state.data, action.payload] });
    case DELETE_DATA:
      return Object.assign({}, state, {
        data: state.data.filter(item => item.id !== action.payload),
      });
    case GET_DATA:
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
}

export { datas };
