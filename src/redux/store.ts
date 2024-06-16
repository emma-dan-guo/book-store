import { combineSlices, configureStore } from '@reduxjs/toolkit';
import {listSlice} from './listSlice';
import {detailSlice} from './detailSlice';

const rootReducer = combineSlices(listSlice, detailSlice)

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
