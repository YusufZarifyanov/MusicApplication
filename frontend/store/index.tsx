import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { rootReducer, RootState } from './reducers';

const makeStore = (context: Context) => createStore(rootReducer);

export const wrapper = createWrapper(makeStore, { debug: true });
