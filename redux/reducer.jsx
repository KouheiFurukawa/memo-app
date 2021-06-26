import * as types from './ActionTypes';

const initialState = {
  memo: [
    {
      id: 0,
      title: '課題',
      date: '2021-01-01',
      info: 'テストテスト',
    },
    {
      id: 1,
      title: '課題2',
      date: '2021-02-01',
      info: 'testtest',
    },
  ],
  input: {
    title: '',
    info: '',
    date: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MEMO_DELETE:
      state.memo.push(action.data);
      return state;
    case types.MEMO_ADD:
      return {
        input: {
          title: '',
          info: '',
          date: '',
        },
        memo: [...state.memo, { ...state.input, id: state.memo.length + 1 }],
      };
    case types.CHANGE_INPUT:
      return { ...state, input: { ...state.input, [action.key]: action.val } };
    default:
      return state;
  }
};

export default reducer;
