import {createActions, handleActions} from "redux-actions";

// 액션 생성 함수
export const {showAll, showComplete} = createActions('SHOW_ALL', "SHOW_COMPLETE", {prefix: 'react-actions/filter'});

// 리듀서
const initialState = 'ALL';
const reducer = handleActions({
    SHOW_ALL: (state, action) => 'ALL',
    SHOW_COMPLETE: (state, action) => 'COMPLETE'
}, initialState, {prefix: 'react-actions/filter'})

export default reducer;