import * as types from './ActionTypes';

const memoAdd = () => ({ type: types.MEMO_ADD });

const memoDelete = () => ({ type: types.MEMO_DELETE });

const changeInput = (key, event) => ({ key, val: event.target.value, type: types.CHANGE_INPUT });

const Actions = {
  memoAdd,
  memoDelete,
  changeInput,
};

export default Actions;
