import {
  takeLatest,
  put,
  call,
  all
} from 'redux-saga/effects';

import UserActionTypes from './user.types'
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils';

import {
  googleSignInSuccess,
  GoogleSignInFailure
} from './user.actions'

//the first one we should handle is google sign in 
//we will listin to google start then trigger acutal sign in from the saga

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument, user)
    const userSnapshot = yield userRef.get()
    yield put ( googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}) )
  } catch (error) {
    yield put (GoogleSignInFailure)
  }
  
}

export function* onGoogleSignInStart() {
  yield takeLatest( UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all ([call(onGoogleSignInStart)])
}