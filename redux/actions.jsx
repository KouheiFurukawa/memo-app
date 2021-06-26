import * as types from './ActionTypes';

const memoAdd = () => ({ type: types.MEMO_ADD });

const memoDelete = () => ({ type: types.MEMO_DELETE });

const changeInput = (key, event) => ({ key, val: event.target.value, type: types.CHANGE_INPUT });

const changeSelected = (event) => ({ val: event, type: types.CHANGE_SELECTED });

const Actions = {
  memoAdd,
  memoDelete,
  changeInput,
  changeSelected,
};

export default Actions;
