import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProduct() {
    const response = yield axios.get('/api/inventory');
    yield put({ type: 'SET_ALL', payload: response.data });
}

function* addProduct(action) {
    yield axios.post('/api/inventory', action.payload);
    yield put({ type: 'FETCH_ALL' });
}

function* deleteProduct(action) {
    const id = action.payload;
    yield axios.delete(`/api/inventory/${id}`);
    yield put({ type: 'FETCH_ALL' });
}

function* updateProduct(action) {
    const id = action.payload.id;
    yield axios.put(`api/inventory/${id}`, action.payload);
    yield put({ type: 'FETCH_ALL' });
}

function* featureProduct(action) {
    const id = action.payload;
    yield axios.put(`/api/inventory/${id}`);
    yield put({ type: 'FETCH_ALL' });
}

function* inventorySaga() {
    yield takeLatest('FETCH_ALL', fetchProduct);
    yield takeLatest('POST', addProduct);
    yield takeLatest('DELETE', deleteProduct);
    yield takeLatest('UPDATE', updateProduct);
    yield takeLatest('SET_FEATURE', featureProduct);
  }
  
  export default inventorySaga;