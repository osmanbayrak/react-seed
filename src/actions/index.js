import axios from 'axios';
import message from 'antd/lib/message';
import {
  UPDATE_DATA,
  GET_DATA,
  DELETE_DATA,
  ADD_DATA,
} from './actionTypes';

import i18n from '../i18n';

export function updateData(id, filter) {
  return dispatch => {
    axios.put(`/api/data/${id}/`, filter).then(res => {
      dispatch({ type: UPDATE_DATA, payload: res.data });
      message.success(i18n.t('UPDATED'));
    });
  };
}

export function deleteData(id) {
  return dispatch => {
    axios.delete(`/api/data/${id}/`).then(() => {
      message.success(i18n.t('notification_rules_successfully_delete'));
      dispatch({ type: DELETE_DATA, payload: id });
    });
  };
}

export function getData(id) {
  return dispatch => {
    axios.get(`/api/data/${id}/`).then(res => {
      dispatch({ type: GET_DATA, payload: res.data });
    });
  };
}

export function addData(data) {
  return dispatch => {
    axios.post('/api/data/', data).then(res => {
      dispatch({ type: ADD_DATA, payload: res.data });
      dispatch(getDeviceList());
      message.success(i18n.t('add_new_register_consumption_success'));
    });
  };
}
