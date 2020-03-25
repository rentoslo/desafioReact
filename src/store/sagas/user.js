import { takeLatest, put } from 'redux-saga/effects';

import { typesUsers } from '../ducks/users'

function* addUser(action) {
  const { type, payload } = action
  try {
    yield put({ type: typesUsers.addUserSuccess, payload: {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      password: payload.password,
    }})
  } catch (error) {
    yield put({ type: typesUsers.addUserError, payload: {
      message: error
    }})
  }
}
function* watcherUser() {
  yield takeLatest(typesUsers.addUser, addUser)
}

export default watcherUser;