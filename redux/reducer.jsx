import * as types from './ActionTypes';

const initialState = {
  memo: [
    {
      id: 0,
      title: '課題',
      date: '2021/1/1',
      info: 'テストテスト',
    },
    {
      id: 1,
      title: '課題2',
      date: '2021/2/1',
      info: 'testtest',
    },
  ],
  input: {
    title: '',
    info: '',
    date: null,
  },
  checked: [],
};

const reducer = (state = initialState, action) => {
  const now = new Date();
  switch (action.type) {
    case types.MEMO_DELETE:
      return {
        ...state,
        checked: [],
        memo: state.memo.filter((x) => state.checked.indexOf(x.id) === -1),
      };
    case types.MEMO_ADD:
      return {
        ...state,
        input: {
          title: '',
          info: '',
          date: null,
        },
        memo: [...state.memo, { ...state.input, id: now.getTime() }],
      };
    case types.CHANGE_INPUT:
      return { ...state, input: { ...state.input, [action.key]: action.val } };
    case types.CHANGE_SELECTED:
      return { ...state, checked: action.val };
    default:
      return state;
  }
};

export default reducer;
