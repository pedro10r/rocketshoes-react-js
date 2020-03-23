import { call, put, all, takeLatest } from 'redux-saga/effects'; //Metodo auxiliar do redux-saga para chamar API 

import api from '../../../services/api';

import { addToCartSuccess } from './actions';

function* addToCart({ id }) { // "*" -> Função generator. Um async com mais funções.
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);  