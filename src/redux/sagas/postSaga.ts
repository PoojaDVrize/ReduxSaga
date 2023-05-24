import axios, { AxiosResponse } from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { IPost, sendPostsFailure, sendPostsSuccess } from '../reducers/postSlice';

function* sendPost(): Generator<any, void, AxiosResponse<IPost>> {
    try {
        const postData = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }; 

        const headers = {
            'Content-type': 'application/json; charset=UTF-8',
        };

        const response: AxiosResponse<IPost> = yield axios.post('https://jsonplaceholder.typicode.com/posts', postData, {
            headers
        });
        yield put(sendPostsSuccess(response.data));
    } catch (error) {
        yield put(sendPostsFailure('Invalid url path'));
    }
}

function* postSaga(): Generator {
    yield takeEvery('post/sendPostsRequest', sendPost);
}

export default postSaga;