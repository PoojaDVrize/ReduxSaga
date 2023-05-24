import axios , {AxiosResponse} from 'axios';
import { put, takeEvery} from 'redux-saga/effects';
import {fetchUsersFailure, fetchUsersSuccess, User} from '../reducers/userSlice';


// function signature function* getUsers(): Generator<any, void, AxiosResponse<User[]>> states that 
// getUsers is a generator function that does not take any parameters, does not return any value 
// when done, and yields AxiosResponse<User[]> objects during its execution.
function* getUsers(): Generator<any,void,AxiosResponse<User[]>> {
    try {
        const response: AxiosResponse<User[]> = yield axios.get('https://jsonplaceholder.typicode.com/users');
        yield put(fetchUsersSuccess(response.data));
    } catch (error) {
        yield put(fetchUsersFailure('Invalid url path'));
    }
}

function* userSaga(): Generator {
    yield takeEvery('user/fetchUsersRequest', getUsers);
}

export default userSaga;