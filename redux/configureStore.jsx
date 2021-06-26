import { createStore } from 'redux';
import rootReducer from './index';

const configureStore = () => {
  const store = createStore(
    rootReducer(),
  );

  return store;
};

export default configureStore;
